import { useRef, useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import { Image, LoaderCircle } from 'lucide-react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export default function ConfigIndex({ companyName, companyEmail }) {
    const [logoPreview, setLogoPreview] = useState('/logo.png');
    const fileInputRef = useRef(null);

    const companyForm = useForm({
        name: companyName ?? '',
        email: companyEmail ?? '',
        logo: null,
    });

    const passwordForm = useForm({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    });

    function handleLogoChange(e) {
        const file = e.target.files?.[0];
        companyForm.setData('logo', file ?? null);
        if (file) setLogoPreview(URL.createObjectURL(file));
    }

    function saveConfig(e) {
        e.preventDefault();
        companyForm.post(route('config.store'), { forceFormData: true, preserveScroll: true });
    }

    function changePassword(e) {
        e.preventDefault();
        passwordForm.post(route('config.updatePassword'), {
            preserveScroll: true,
            onSuccess: () => passwordForm.reset(),
        });
    }

    return (
        <AdminLayout title="Configuración">
            <Head title="Configuración" />

            <div className="flex w-full max-w-screen-md flex-col gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Configuración de la Empresa</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={saveConfig} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div className="row-span-3 grid place-items-center sm:row-span-4">
                                <div className="h-32 w-32 overflow-hidden rounded-full bg-muted shadow-lg">
                                    <img src={logoPreview} alt="logo" className="h-full w-full object-cover" />
                                </div>
                            </div>
                            <div className="space-y-2 sm:col-span-1">
                                <Label>Logo de la Empresa</Label>
                                <Button type="button" variant="outline" className="w-full" onClick={() => fileInputRef.current?.click()}>
                                    <Image className="h-4 w-4" />
                                    Cambiar Logo
                                </Button>
                                <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleLogoChange} />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="companyName">Nombre de la Empresa</Label>
                                <Input
                                    id="companyName"
                                    value={companyForm.data.name}
                                    onChange={(e) => companyForm.setData('name', e.target.value)}
                                />
                                {companyForm.errors.name && <p className="text-sm text-destructive">{companyForm.errors.name}</p>}
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="companyEmail">Email de la Empresa</Label>
                                <Input
                                    id="companyEmail"
                                    value={companyForm.data.email}
                                    onChange={(e) => companyForm.setData('email', e.target.value)}
                                />
                            </div>
                            <div className="flex justify-end sm:col-start-2">
                                <Button type="submit" disabled={companyForm.processing}>
                                    {companyForm.processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                    Guardar Cambios
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>

                <Separator />

                <Card className="mx-auto w-full max-w-sm">
                    <CardHeader>
                        <CardTitle>Cambiar Contraseña</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={changePassword} className="flex flex-col gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="currentPassword">Contraseña Actual</Label>
                                <Input
                                    id="currentPassword"
                                    type="password"
                                    value={passwordForm.data.currentPassword}
                                    onChange={(e) => passwordForm.setData('currentPassword', e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="newPassword">Nueva Contraseña</Label>
                                <Input
                                    id="newPassword"
                                    type="password"
                                    value={passwordForm.data.newPassword}
                                    onChange={(e) => passwordForm.setData('newPassword', e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="confirmPassword">Confirmar Nueva Contraseña</Label>
                                <Input
                                    id="confirmPassword"
                                    type="password"
                                    value={passwordForm.data.confirmPassword}
                                    onChange={(e) => passwordForm.setData('confirmPassword', e.target.value)}
                                />
                            </div>
                            <Button type="submit" className="w-full" disabled={passwordForm.processing}>
                                {passwordForm.processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                Cambiar Contraseña
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </AdminLayout>
    );
}
