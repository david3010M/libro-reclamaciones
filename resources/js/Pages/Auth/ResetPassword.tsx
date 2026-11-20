import { useState, type FormEvent } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import PublicLayout from '@/Layouts/PublicLayout';
import { AuthCard, FieldError } from '@/components/auth/AuthCard';
import { PasswordInput } from '@/components/auth/PasswordInput';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { resetSchema, zodErrors } from '@/lib/schemas/auth';

type Field = 'email' | 'password' | 'password_confirmation';

export default function ResetPassword({ token, email }: { token: string; email: string }) {
    const { data, setData, post, processing, errors: serverErrors } = useForm({ token, email, password: '', password_confirmation: '' });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const error = (k: Field) => errors[k] || serverErrors[k];

    function submit(e: FormEvent) {
        e.preventDefault();
        const result = resetSchema.safeParse(data);
        if (!result.success) return setErrors(zodErrors(result.error));
        setErrors({});
        post(route('password.update'));
    }

    return (
        <>
            <Head title="Nueva contraseña" />
            <AuthCard
                title="Crea tu nueva contraseña"
                description="Elige una contraseña de al menos 8 caracteres."
                footer={
                    <Link href={route('password.request')} className="underline-offset-4 hover:text-foreground hover:underline">
                        Solicitar un enlace nuevo
                    </Link>
                }
            >
                <form onSubmit={submit} noValidate className="grid gap-5">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Correo</Label>
                        <Input
                            id="email"
                            type="email"
                            autoComplete="username"
                            readOnly={!!email}
                            aria-invalid={!!error('email')}
                            className="h-11 text-base sm:h-10 sm:text-sm"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                        />
                        <FieldError id="email-error" message={error('email')} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">Nueva contraseña</Label>
                        <PasswordInput
                            id="password"
                            autoComplete="new-password"
                            autoFocus
                            aria-invalid={!!error('password')}
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                        />
                        <FieldError id="password-error" message={error('password')} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password_confirmation">Repite la contraseña</Label>
                        <PasswordInput
                            id="password_confirmation"
                            autoComplete="new-password"
                            aria-invalid={!!error('password_confirmation')}
                            value={data.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                        />
                        <FieldError id="password_confirmation-error" message={error('password_confirmation')} />
                    </div>
                    <Button type="submit" size="lg" className="h-11 w-full text-base sm:h-10 sm:text-sm" disabled={processing}>
                        {processing && <LoaderCircle className="animate-spin" />}
                        Guardar contraseña
                    </Button>
                </form>
            </AuthCard>
        </>
    );
}

ResetPassword.layout = (page: React.ReactNode) => <PublicLayout centered>{page}</PublicLayout>;
