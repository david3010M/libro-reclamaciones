import { useState } from 'react';
import type { FormEvent, ReactNode } from 'react';
import { Head, router, usePage } from '@inertiajs/react';
import { ArrowRight, BadgeCheck, FileText, MailCheck, Search, SearchX, Timer } from 'lucide-react';
import PublicLayout from '@/Layouts/PublicLayout';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CompanyMark } from '@/components/public/CompanyMark';
import { IconInput } from '@/components/public/IconInput';
import { searchSchema } from '@/lib/schemas/complaint';

const PROCESS = [
    { icon: FileText, title: 'Registras tu reclamo', text: 'Lo describes en tres pasos y recibes un código único.' },
    { icon: MailCheck, title: 'Lo confirmas por correo', text: 'Tienes 48 horas para confirmarlo desde tu bandeja.' },
    { icon: Timer, title: 'La empresa lo atiende', text: 'Corre el plazo de respuesta y puedes ver cada avance.' },
    { icon: BadgeCheck, title: 'Recibes la respuesta', text: 'Queda en tu hoja de reclamación, con adjuntos si los hay.' },
];

export default function ComplaintSearch() {
    const { flash, company } = usePage<{ flash?: PageFlash; company: Company | null }>().props;
    const [code, setCode] = useState('');
    const [error, setError] = useState('');
    const notFound = flash?.error_code === 404;

    function submit(e: FormEvent) {
        e.preventDefault();
        const result = searchSchema.safeParse({ code });
        if (!result.success) {
            setError(result.error.issues[0].message);
            return;
        }
        setError('');
        router.visit(route('complaint.lookup', { code: result.data.code }));
    }

    return (
        <>
            <Head title="Buscar Reclamo" />
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_380px]">
                <div className="space-y-4">
                    {notFound && (
                        <Alert variant="destructive">
                            <SearchX />
                            <AlertTitle>No encontramos ese reclamo</AlertTitle>
                            <AlertDescription>
                                {flash?.message} {flash?.complaintCode}
                            </AlertDescription>
                        </Alert>
                    )}

                    <Card className="overflow-hidden pt-0">
                        <div className="bg-primary px-6 py-8 text-primary-foreground sm:px-8 sm:py-10">
                            <div className="flex items-center gap-3">
                                <CompanyMark company={company} className="size-12 ring-primary-foreground/30" />
                                <div className="leading-tight">
                                    <p className="text-sm opacity-80">{company?.name}</p>
                                    <p className="text-sm font-medium">Libro de Reclamaciones</p>
                                </div>
                            </div>
                            <h1 className="mt-6 max-w-lg text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                                Sigue tu reclamo paso a paso
                            </h1>
                            <p className="mt-2 max-w-md text-pretty opacity-85">
                                Escribe el código de tu hoja de reclamación para ver su estado, el plazo que queda y la
                                respuesta de la empresa.
                            </p>
                        </div>

                        <div className="perforation text-border">
                            <span className="perforation-notch -left-3" />
                            <span className="perforation-notch -right-3" />
                        </div>

                        <CardContent className="pt-2">
                            <form onSubmit={submit} className="flex flex-col gap-3 sm:flex-row">
                                <div className="flex-1">
                                    <IconInput
                                        icon={<Search />}
                                        placeholder="Código del reclamo"
                                        aria-label="Código del reclamo"
                                        value={code}
                                        onChange={(e) => {
                                            setCode(e.target.value);
                                            setError('');
                                        }}
                                        aria-invalid={!!error}
                                        maxLength={50}
                                        className="h-10"
                                    />
                                    {error && (
                                        <p role="alert" className="mt-1.5 text-sm text-destructive">
                                            {error}
                                        </p>
                                    )}
                                </div>
                                <Button type="submit" size="lg" >
                                    Consultar
                                    <ArrowRight />
                                </Button>
                            </form>
                            <p className="mt-3 text-sm text-muted-foreground">
                                Lo encuentras en el correo de confirmación que te enviamos al registrar el reclamo.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <Card className="h-fit">
                    <CardHeader>
                        <CardTitle>¿Cómo funciona?</CardTitle>
                        <CardDescription>Del registro a la respuesta, esto es lo que pasa con tu reclamo.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ol>
                            {PROCESS.map((step, i) => (
                                <li key={step.title}>
                                    <div className="flex gap-3">
                                        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                            <step.icon className="size-4" />
                                        </span>
                                        <div>
                                            <p className="text-sm font-medium text-foreground">{step.title}</p>
                                            <p className="text-sm text-muted-foreground">{step.text}</p>
                                        </div>
                                    </div>
                                    {i < PROCESS.length - 1 && (
                                        <Separator orientation="vertical" className="my-1 ml-[1.125rem] h-4" />
                                    )}
                                </li>
                            ))}
                        </ol>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}

ComplaintSearch.layout = (page: ReactNode) => <PublicLayout>{page}</PublicLayout>;
