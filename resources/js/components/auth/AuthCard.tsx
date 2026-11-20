import { useState, type ReactNode } from 'react';
import { usePage } from '@inertiajs/react';
import { Card, CardContent } from '@/components/ui/card';
import { CompanyMark } from '@/components/public/CompanyMark';

/** Fotos de Unsplash (licencia Unsplash) con temática de atención al cliente y reclamos; se elige una al azar por visita. */
const PHOTOS = [
    '1553775282-20af80779df7',
    '1758873272222-ccd8c4296864',
    '1560264280-88b68371db39',
    '1626863905121-3b0c0ed7b94c',
    '1556745753-b2904692b3cd',
    '1521791136064-7986c2920216',
    '1631540700496-af53025473e8',
    '1631540702177-d2b28aa09fb0',
    '1471107340929-a87cd0f5b5f3',
    '1612367980327-7454a7276aa7',
].map((id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1000&q=70`);

/** Contenedor común de login / recuperar / restablecer: formulario a la izquierda, foto a la derecha. */
export function AuthCard({ title, description, children, footer }: { title: string; description: string; children: ReactNode; footer?: ReactNode }) {
    const { company } = usePage<{ company: Company | null }>().props;
    const [photo] = useState(() => PHOTOS[Math.floor(Math.random() * PHOTOS.length)]);

    return (
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-4 py-2 sm:py-6">
            <Card className="overflow-hidden p-0">
                <CardContent className="grid p-0 md:grid-cols-2">
                    <div className="flex flex-col justify-center gap-6 p-6 md:p-10">
                        <div className="flex flex-col items-center gap-3 text-center">
                            <CompanyMark company={company} className="size-12 text-base" />
                            <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
                            <p className="text-balance text-muted-foreground">{description}</p>
                        </div>
                        {children}
                    </div>
                    <div className="relative hidden bg-muted md:block">
                        <img src={photo} alt="" className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.3] dark:grayscale" />
                    </div>
                </CardContent>
            </Card>
            {footer && <p className="text-center text-sm text-muted-foreground">{footer}</p>}
        </div>
    );
}

export function FieldError({ id, message }: { id: string; message?: string }) {
    if (!message) return null;
    return (
        <p id={id} role="alert" className="text-sm text-destructive">
            {message}
        </p>
    );
}
