import { useRef, useState, type FormEvent, type ReactNode } from 'react';
import { Head, usePage, useForm } from '@inertiajs/react';
import { ImageUp, LoaderCircle, Settings } from 'lucide-react';
import AdminLayout from '@/Layouts/AdminLayout';
import { PageHeader } from '@/components/admin/PageHeader';
import { PasswordInput } from '@/components/auth/PasswordInput';
import { FieldError } from '@/components/auth/AuthCard';
import { initials } from '@/components/public/format';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: ReactNode }) {
    return (
        <div className="grid gap-2">
            <Label htmlFor={id}>{label}</Label>
            {children}
            <FieldError id={`${id}-error`} message={error} />
        </div>
    );
}

export default function ConfigIndex({ companyName, companyEmail }: { companyName?: string; companyEmail?: string }) {
    const { company } = usePage<{ company: Company | null }>().props;
    const [preview, setPreview] = useState<string | undefined>(company?.logo ? `/${company.logo}` : undefined);
    const fileRef = useRef<HTMLInputElement>(null);

    const companyForm = useForm<{ name: string; email: string; logo: File | null }>({
        name: companyName ?? '',
        email: companyEmail ?? '',
        logo: null,
    });
    const passwordForm = useForm({ currentPassword: '', newPassword: '', confirmPassword: '' });

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

    return (
        <AdminLayout title="Configuración">
            <Head title="Configuración" />

            <PageHeader icon={Settings} title="Configuración" description="Datos de la empresa y seguridad de tu cuenta." />

            <div className="grid max-w-3xl gap-6">
                <Card>
                    <form onSubmit={saveCompany} className="grid gap-6">
                        <CardHeader>
                            <CardTitle>Empresa</CardTitle>
                            <CardDescription>Se muestra en el formulario público y en el panel.</CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-5">
                            <div className="flex items-center gap-4">
                                <Avatar className="size-16 ring-1 ring-border">
                                    <AvatarImage src={preview} alt="Logo" />
                                    <AvatarFallback className="bg-primary text-lg font-semibold text-primary-foreground">
                                        {initials(companyForm.data.name)}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="grid gap-1">
                                    <Button type="button" variant="outline" size="sm" onClick={() => fileRef.current?.click()}>
                                        <ImageUp />
                                        Cambiar logo
                                    </Button>
                                    <p className="text-xs text-muted-foreground">PNG o JPG, cuadrado si es posible.</p>
                                </div>
                                <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={onLogo} />
                            </div>
                            <div className="grid gap-5 sm:grid-cols-2">
                                <Field id="companyName" label="Nombre" error={companyForm.errors.name}>
                                    <Input id="companyName" value={companyForm.data.name} onChange={(e) => companyForm.setData('name', e.target.value)} />
                                </Field>
                                <Field id="companyEmail" label="Correo de contacto" error={companyForm.errors.email}>
                                    <Input id="companyEmail" type="email" value={companyForm.data.email} onChange={(e) => companyForm.setData('email', e.target.value)} />
                                </Field>
                            </div>
                        </CardContent>
                        <CardFooter className="justify-end">
                            <Button type="submit" disabled={companyForm.processing || !companyForm.isDirty}>
                                {companyForm.processing && <LoaderCircle className="animate-spin" />}
                                Guardar cambios
                            </Button>
                        </CardFooter>
                    </form>
                </Card>

                <Card>
                    <form onSubmit={savePassword} className="grid gap-6">
                        <CardHeader>
                            <CardTitle>Contraseña</CardTitle>
                            <CardDescription>Usa al menos 8 caracteres.</CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-5 sm:max-w-sm">
                            <Field id="currentPassword" label="Contraseña actual" error={passwordForm.errors.currentPassword}>
                                <PasswordInput
                                    id="currentPassword"
                                    autoComplete="current-password"
                                    value={passwordForm.data.currentPassword}
                                    onChange={(e) => passwordForm.setData('currentPassword', e.target.value)}
                                />
                            </Field>
                            <Field id="newPassword" label="Nueva contraseña" error={passwordForm.errors.newPassword}>
                                <PasswordInput
                                    id="newPassword"
                                    autoComplete="new-password"
                                    value={passwordForm.data.newPassword}
                                    onChange={(e) => passwordForm.setData('newPassword', e.target.value)}
                                />
                            </Field>
                            <Field id="confirmPassword" label="Repite la nueva contraseña" error={passwordForm.errors.confirmPassword}>
                                <PasswordInput
                                    id="confirmPassword"
                                    autoComplete="new-password"
                                    value={passwordForm.data.confirmPassword}
                                    onChange={(e) => passwordForm.setData('confirmPassword', e.target.value)}
                                />
                            </Field>
                        </CardContent>
                        <CardFooter className="justify-end">
                            <Button type="submit" disabled={passwordForm.processing || !passwordForm.data.newPassword}>
                                {passwordForm.processing && <LoaderCircle className="animate-spin" />}
                                Cambiar contraseña
                            </Button>
                        </CardFooter>
                    </form>
                </Card>
            </div>
        </AdminLayout>
    );
}
