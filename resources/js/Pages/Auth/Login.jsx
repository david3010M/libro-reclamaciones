import { Head, useForm } from '@inertiajs/react';
import { Mail, Lock, LoaderCircle } from 'lucide-react';
import PublicLayout from '@/Layouts/PublicLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
    });

    function submit(e) {
        e.preventDefault();
        post(route('login'));
    }

    return (
        <>
            <Head title="Iniciar Sesión" />
            <div className="mx-auto w-full max-w-md">
                <Card>
                    <CardHeader className="text-center">
                        <CardTitle>Iniciar Sesión</CardTitle>
                        <CardDescription>Ingresa tus credenciales para continuar</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={submit} className="grid gap-4">
                            <div>
                                <Label htmlFor="email">Correo</Label>
                                <Input
                                    id="email"
                                    icon={<Mail />}
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    autoFocus
                                    required
                                />
                                {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email}</p>}
                            </div>
                            <div>
                                <Label htmlFor="password">Contraseña</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    icon={<Lock />}
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    required
                                />
                                {errors.password && <p className="mt-1 text-sm text-destructive">{errors.password}</p>}
                            </div>
                            <Button type="submit" className="w-full" disabled={processing}>
                                {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                Iniciar Sesión
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}

Login.layout = (page) => <PublicLayout>{page}</PublicLayout>;
