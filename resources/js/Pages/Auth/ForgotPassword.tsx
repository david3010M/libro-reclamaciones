import { useState, type FormEvent } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { ArrowLeft, LoaderCircle, MailCheck } from 'lucide-react';
import PublicLayout from '@/Layouts/PublicLayout';
import { AuthCard, FieldError } from '@/components/auth/AuthCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { forgotSchema, zodErrors } from '@/lib/schemas/auth';

export default function ForgotPassword() {
    const { data, setData, post, processing, errors: serverErrors } = useForm({ email: '' });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [sent, setSent] = useState(false);

    function submit(e: FormEvent) {
        e.preventDefault();
        const result = forgotSchema.safeParse(data);
        if (!result.success) return setErrors(zodErrors(result.error));
        setErrors({});
        post(route('password.email'), { preserveScroll: true, onSuccess: () => setSent(true) });
    }

    const back = (
        <Link href={route('login.show')} className="inline-flex items-center gap-1.5 underline-offset-4 hover:text-foreground hover:underline">
            <ArrowLeft className="size-4" />
            Volver a iniciar sesión
        </Link>
    );

    return (
        <>
            <Head title="Recuperar contraseña" />
            <AuthCard
                title={sent ? 'Revisa tu correo' : 'Recupera tu acceso'}
                description={sent ? 'Si el correo está registrado, te enviamos un enlace. Vence en 60 minutos.' : 'Te enviaremos un enlace para crear una contraseña nueva.'}
                footer={back}
            >
                {sent ? (
                    <div className="grid justify-items-center gap-4">
                        <MailCheck className="size-10 text-primary" strokeWidth={1.5} />
                        <p className="text-center text-sm text-muted-foreground">
                            Enviado a <span className="font-medium text-foreground">{data.email}</span>. Revisa también la carpeta de spam.
                        </p>
                        <Button variant="outline" className="w-full" onClick={() => setSent(false)}>
                            Usar otro correo
                        </Button>
                    </div>
                ) : (
                    <form onSubmit={submit} noValidate className="grid gap-5">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Correo</Label>
                            <Input
                                id="email"
                                type="email"
                                autoComplete="username"
                                autoFocus
                                placeholder="tu@empresa.com"
                                aria-invalid={!!(errors.email || serverErrors.email)}
                                className="h-11 text-base sm:h-10 sm:text-sm"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                            />
                            <FieldError id="email-error" message={errors.email || serverErrors.email} />
                        </div>
                        <Button type="submit" size="lg" className="h-11 w-full text-base sm:h-10 sm:text-sm" disabled={processing}>
                            {processing && <LoaderCircle className="animate-spin" />}
                            Enviar enlace
                        </Button>
                    </form>
                )}
            </AuthCard>
        </>
    );
}

ForgotPassword.layout = (page: React.ReactNode) => <PublicLayout centered>{page}</PublicLayout>;
