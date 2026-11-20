import { useState, type FormEvent } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import PublicLayout from '@/Layouts/PublicLayout';
import { AuthCard, FieldError } from '@/components/auth/AuthCard';
import { PasswordInput } from '@/components/auth/PasswordInput';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { loginSchema, zodErrors } from '@/lib/schemas/auth';

export default function Login() {
    const { data, setData, post, processing } = useForm({ email: '', password: '' });
    const [errors, setErrors] = useState<Record<string, string>>({});

    function submit(e: FormEvent) {
        e.preventDefault();
        const result = loginSchema.safeParse(data);
        if (!result.success) return setErrors(zodErrors(result.error));
        setErrors({});
        post(route('login'));
    }

    return (
        <>
            <Head title="Iniciar sesión" />
            <AuthCard title="Bienvenido" description="Ingresa para administrar los reclamos.">
                <form onSubmit={submit} noValidate className="grid gap-5">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Correo</Label>
                        <Input
                            id="email"
                            type="email"
                            autoComplete="username"
                            autoFocus
                            placeholder="tu@empresa.com"
                            aria-invalid={!!errors.email}
                            className="h-11 text-base sm:h-10 sm:text-sm"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                        />
                        <FieldError id="email-error" message={errors.email} />
                    </div>
                    <div className="grid gap-2">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="password">Contraseña</Label>
                            <Link href={route('password.request')} className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline">
                                ¿La olvidaste?
                            </Link>
                        </div>
                        <PasswordInput
                            id="password"
                            autoComplete="current-password"
                            aria-invalid={!!errors.password}
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                        />
                        <FieldError id="password-error" message={errors.password} />
                    </div>
                    <Button type="submit" size="lg" className="h-11 w-full text-base sm:h-10 sm:text-sm" disabled={processing}>
                        {processing && <LoaderCircle className="animate-spin" />}
                        Iniciar sesión
                    </Button>
                </form>
            </AuthCard>
        </>
    );
}

Login.layout = (page: React.ReactNode) => <PublicLayout centered>{page}</PublicLayout>;
