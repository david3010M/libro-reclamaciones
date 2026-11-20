import { useMemo, useRef, useState, type FormEvent, type ReactNode } from 'react';
import { Head, usePage, useForm } from '@inertiajs/react';
import { Check, Copy, ExternalLink, ImageUp, LoaderCircle, Settings, X } from 'lucide-react';
import AdminLayout from '@/Layouts/AdminLayout';
import { PageHeader } from '@/components/admin/PageHeader';
import { PasswordInput } from '@/components/auth/PasswordInput';
import { FieldError } from '@/components/auth/AuthCard';
import { initials } from '@/components/public/format';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { assetUrl } from '@/lib/url';

function Field({ id, label, hint, error, children }: { id: string; label: string; hint?: string; error?: string; children: ReactNode }) {
    return (
        <div className="grid gap-2">
            <Label htmlFor={id}>{label}</Label>
            {children}
            {hint && !error && <p className="text-xs text-muted-foreground">{hint}</p>}
            <FieldError id={`${id}-error`} message={error} />
        </div>
    );
}

/** Sección con el título a la izquierda y el contenido a la derecha (se apila en móvil). */
function Section({ title, description, children }: { title: string; description: string; children: ReactNode }) {
    return (
        <section className="grid gap-4 py-8 first:pt-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
            <div className="space-y-1">
                <h2 className="text-base font-semibold text-foreground">{title}</h2>
                <p className="text-sm text-muted-foreground">{description}</p>
            </div>
            <div className="max-w-2xl">{children}</div>
        </section>
    );
}

function CopyLink({ label, url }: { label: string; url: string }) {
    const [copied, setCopied] = useState(false);

    async function copy() {
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 1600);
        } catch {
            /* sin permiso de portapapeles: el enlace sigue visible para copiarlo a mano */
        }
    }

    return (
        <div className="flex flex-col gap-2 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0 space-y-0.5">
                <p className="text-sm font-medium text-foreground">{label}</p>
                <p className="truncate text-sm text-muted-foreground">{url}</p>
            </div>
            <div className="flex shrink-0 gap-2">
                <Button type="button" variant="outline" size="sm" onClick={copy}>
                    {copied ? <Check /> : <Copy />}
                    {copied ? 'Copiado' : 'Copiar'}
                </Button>
                <Button type="button" variant="outline" size="sm" asChild>
                    <a href={url} target="_blank" rel="noreferrer" aria-label={`Abrir ${label}`}>
                        <ExternalLink />
                        Abrir
                    </a>
                </Button>
            </div>
        </div>
    );
}

const RULES = [
    { id: 'len', label: '8 caracteres o más', test: (v: string) => v.length >= 8 },
    { id: 'case', label: 'Mayúsculas y minúsculas', test: (v: string) => /[a-z]/.test(v) && /[A-Z]/.test(v) },
    { id: 'num', label: 'Al menos un número', test: (v: string) => /\d/.test(v) },
];

function PasswordRules({ value }: { value: string }) {
    return (
        <ul className="grid gap-1.5 sm:grid-cols-3" aria-label="Requisitos de la contraseña">
            {RULES.map((r) => {
                const ok = r.test(value);
                return (
                    <li key={r.id} className={cn('flex items-center gap-1.5 text-xs', ok ? 'text-primary' : 'text-muted-foreground')}>
                        {ok ? <Check className="size-3.5" /> : <X className="size-3.5 opacity-50" />}
                        {r.label}
                    </li>
                );
            })}
        </ul>
    );
}

export default function ConfigIndex({ companyName, companyEmail, companyWebsite }: { companyName?: string; companyEmail?: string; companyWebsite?: string }) {
    const { company, auth } = usePage<{ company: Company | null; auth: { user: { name: string; email: string } | null } }>().props;
    const [preview, setPreview] = useState<string | undefined>(company?.logo ? `${assetUrl(company.logo)}?v=${Date.parse((company as any).updated_at) || 1}` : undefined);
    const fileRef = useRef<HTMLInputElement>(null);
    const origin = typeof window !== 'undefined' ? window.location.origin : '';

    const companyForm = useForm<{ name: string; email: string; website: string; logo: File | null }>({
        name: companyName ?? '',
        email: companyEmail ?? '',
        website: companyWebsite ?? '',
        logo: null,
    });
    const passwordForm = useForm({ currentPassword: '', newPassword: '', confirmPassword: '' });

    const mismatch = passwordForm.data.confirmPassword !== '' && passwordForm.data.confirmPassword !== passwordForm.data.newPassword;
    const rulesOk = useMemo(() => RULES.every((r) => r.test(passwordForm.data.newPassword)), [passwordForm.data.newPassword]);
    const canChangePassword = !!passwordForm.data.currentPassword && rulesOk && !!passwordForm.data.confirmPassword && !mismatch;

    function onLogo(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0] ?? null;
        companyForm.setData('logo', file);
        if (file) setPreview(URL.createObjectURL(file));
    }

    function saveCompany(e: FormEvent) {
        e.preventDefault();
        companyForm.post(route('config.store'), { forceFormData: true, preserveScroll: true });
    }

    function savePassword(e: FormEvent) {
        e.preventDefault();
        passwordForm.post(route('config.updatePassword'), { preserveScroll: true, onSuccess: () => passwordForm.reset() });
    }

    const brand = companyForm.data.name || 'Tu empresa';

    return (
        <AdminLayout title="Configuración">
            <Head title="Configuración" />

            <PageHeader icon={Settings} title="Configuración" description="Datos de la empresa, enlaces públicos y seguridad de tu cuenta." />

            <div className="mt-6 divide-y divide-border border-t border-border">
                {/* Empresa */}
                <Section title="Empresa" description="Se muestra en el formulario público, en el panel y en los correos que reciben tus clientes.">
                    <Card className="gap-0 py-0">
                        <form onSubmit={saveCompany}>
                            <CardContent className="grid gap-6 p-5">
                                <div className="flex items-center gap-4">
                                    <Avatar className="size-20 rounded-xl ring-1 ring-border *:rounded-xl">
                                        <AvatarImage src={preview} alt="Logo" className="object-contain" />
                                        <AvatarFallback className="bg-primary text-xl font-semibold text-primary-foreground">{initials(brand)}</AvatarFallback>
                                    </Avatar>
                                    <div className="grid gap-1.5">
                                        <div className="flex flex-wrap items-center gap-2">
                                            <Button type="button" variant="outline" size="sm" onClick={() => fileRef.current?.click()}>
                                                <ImageUp />
                                                {preview ? 'Cambiar logo' : 'Subir logo'}
                                            </Button>
                                            {companyForm.data.logo && <span className="max-w-40 truncate text-xs text-muted-foreground">{companyForm.data.logo.name}</span>}
                                        </div>
                                        <p className="text-xs text-muted-foreground">PNG, JPG o SVG, hasta 4 MB. Mejor con fondo transparente.</p>
                                        <FieldError id="logo-error" message={companyForm.errors.logo} />
                                    </div>
                                    <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={onLogo} />
                                </div>

                                <div className="grid gap-5 sm:grid-cols-2">
                                    <Field id="companyName" label="Nombre" error={companyForm.errors.name}>
                                        <Input id="companyName" value={companyForm.data.name} onChange={(e) => companyForm.setData('name', e.target.value)} />
                                    </Field>
                                    <Field id="companyEmail" label="Correo de contacto" hint="Puedes poner varios separados por coma; todos reciben los avisos." error={companyForm.errors.email}>
                                        <Input id="companyEmail" type="text" inputMode="email" autoComplete="off" value={companyForm.data.email} onChange={(e) => companyForm.setData('email', e.target.value)} />
                                    </Field>
                                    <div className="sm:col-span-2">
                                        <Field id="companyWebsite" label="Sitio web" hint="Opcional. Incluye https://" error={companyForm.errors.website}>
                                            <Input
                                                id="companyWebsite"
                                                type="url"
                                                placeholder="https://"
                                                value={companyForm.data.website}
                                                onChange={(e) => companyForm.setData('website', e.target.value)}
                                            />
                                        </Field>
                                    </div>
                                </div>

                                {/* Cómo se ve la marca en la cabecera de los correos */}
                                <div className="grid gap-2">
                                    <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">Así aparece en los correos</p>
                                    <div className="flex items-center gap-3 rounded-lg border border-dashed border-border bg-muted/30 px-4 py-4">
                                        {preview ? (
                                            <img src={preview} alt="" className="h-10 w-auto max-w-28 object-contain" />
                                        ) : null}
                                        <span className="text-base font-semibold tracking-tight text-foreground">{brand}</span>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="justify-end border-t border-border bg-muted/30 px-5 py-3">
                                <Button type="submit" disabled={companyForm.processing || !companyForm.isDirty}>
                                    {companyForm.processing && <LoaderCircle className="animate-spin" />}
                                    Guardar cambios
                                </Button>
                            </CardFooter>
                        </form>
                    </Card>
                </Section>

                {/* Enlaces */}
                <Section title="Enlaces públicos" description="Compártelos con tus clientes o ponlos en tu sitio web.">
                    <Card className="gap-0 divide-y divide-border py-0">
                        <CopyLink label="Formulario de reclamos" url={`${origin}${route('form.show', undefined, false)}`} />
                        <CopyLink label="Consultar un reclamo" url={`${origin}${route('complaint.search', undefined, false)}`} />
                    </Card>
                </Section>

                {/* Seguridad */}
                <Section title="Contraseña" description={auth?.user ? `Cuenta: ${auth.user.email}` : 'Cambia la contraseña de tu cuenta.'}>
                    <Card className="gap-0 py-0">
                        <form onSubmit={savePassword}>
                            <CardContent className="grid gap-5 p-5">
                                <Field id="currentPassword" label="Contraseña actual" error={passwordForm.errors.currentPassword}>
                                    <PasswordInput
                                        id="currentPassword"
                                        autoComplete="current-password"
                                        value={passwordForm.data.currentPassword}
                                        onChange={(e) => passwordForm.setData('currentPassword', e.target.value)}
                                    />
                                </Field>
                                <div className="grid gap-5 sm:grid-cols-2">
                                    <Field id="newPassword" label="Nueva contraseña" error={passwordForm.errors.newPassword}>
                                        <PasswordInput
                                            id="newPassword"
                                            autoComplete="new-password"
                                            value={passwordForm.data.newPassword}
                                            onChange={(e) => passwordForm.setData('newPassword', e.target.value)}
                                        />
                                    </Field>
                                    <Field
                                        id="confirmPassword"
                                        label="Repite la nueva contraseña"
                                        error={passwordForm.errors.confirmPassword ?? (mismatch ? 'Las contraseñas no coinciden.' : undefined)}
                                    >
                                        <PasswordInput
                                            id="confirmPassword"
                                            autoComplete="new-password"
                                            value={passwordForm.data.confirmPassword}
                                            onChange={(e) => passwordForm.setData('confirmPassword', e.target.value)}
                                        />
                                    </Field>
                                </div>
                                <PasswordRules value={passwordForm.data.newPassword} />
                            </CardContent>
                            <CardFooter className="justify-end border-t border-border bg-muted/30 px-5 py-3">
                                <Button type="submit" disabled={passwordForm.processing || !canChangePassword}>
                                    {passwordForm.processing && <LoaderCircle className="animate-spin" />}
                                    Cambiar contraseña
                                </Button>
                            </CardFooter>
                        </form>
                    </Card>
                </Section>
            </div>
        </AdminLayout>
    );
}
