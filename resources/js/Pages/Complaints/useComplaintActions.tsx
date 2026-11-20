import { useState, type ReactNode } from 'react';
import { Link, router } from '@inertiajs/react';
import { Check, Eye, FileDown, LoaderCircle, MessageSquare, TimerReset } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { ConfirmDialog } from '@/components/ConfirmDialog';
import { STATUS } from '@/lib/complaintStatus';
import { cn } from '@/lib/utils';
import { ExtendDialog } from './ExtendDialog';

export type ActionableComplaint = { id: number; token: string; complaintCode: string; status: string; answer?: string | null };

const OPEN = [STATUS.REGISTER, STATUS.IN_PROCESS];

function IconButton({ label, children, ...props }: { label: string; children: ReactNode } & React.ComponentProps<typeof Button>) {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button variant="outline" size="icon-sm" aria-label={label} className="text-muted-foreground hover:text-foreground" {...props}>
                    {children}
                </Button>
            </TooltipTrigger>
            <TooltipContent>{label}</TooltipContent>
        </Tooltip>
    );
}

/**
 * Acciones de un reclamo según su estado, compartidas por la tabla y la página de detalle.
 * `actions(c)` devuelve los botones; `dialogs` debe renderizarse una sola vez en la página.
 */
export function useComplaintActions() {
    const [extending, setExtending] = useState<ActionableComplaint | null>(null);
    const [processing, setProcessing] = useState<ActionableComplaint | null>(null);
    const [recovering, setRecovering] = useState<ActionableComplaint | null>(null);
    const [busy, setBusy] = useState(false);

    function run(url: string, onDone: () => void) {
        setBusy(true);
        router.post(url, {}, {
            preserveScroll: true,
            onFinish: () => {
                setBusy(false);
                onDone();
            },
        });
    }

    /** `view`: incluye "Ver" como primer botón (en la tabla). `labeled`: textos visibles en vez de solo iconos. */
    function actions(c: ActionableComplaint, { view = false, labeled = false }: { view?: boolean; labeled?: boolean } = {}) {
        const open = OPEN.includes(c.status);
        const answered = !!c.answer && c.answer !== 'Pendiente';

        return (
            <div className={cn('flex items-center justify-end gap-1', labeled ? 'flex-wrap' : 'flex-nowrap whitespace-nowrap')} onClick={(e) => e.stopPropagation()}>
                {view && (
                    <IconButton label="Ver detalle" asChild>
                        <Link href={route('complaint.view', c.id)}>
                            <Eye />
                        </Link>
                    </IconButton>
                )}

                {labeled ? (
                    <>
                        <Button variant="outline" asChild>
                            <a href={route('complaint.pdf', { token: c.token })} target="_blank" rel="noreferrer">
                                <FileDown />
                                Hoja PDF
                            </a>
                        </Button>
                        {answered && (
                            <Button variant="outline" asChild>
                                <a href={route('response.pdf', { token: c.token })} target="_blank" rel="noreferrer">
                                    <FileDown />
                                    Respuesta PDF
                                </a>
                            </Button>
                        )}
                        {open && (
                            <Button variant="outline" onClick={() => setExtending(c)}>
                                <TimerReset />
                                Extender plazo
                            </Button>
                        )}
                    </>
                ) : (
                    open && (
                        <IconButton label="Extender plazo" onClick={() => setExtending(c)}>
                            <TimerReset />
                        </IconButton>
                    )
                )}

                {c.status === STATUS.REJECTED && (
                    <Button size={labeled ? 'default' : 'sm'} onClick={() => setRecovering(c)}>
                        <Check />
                        Confirmar
                    </Button>
                )}
                {c.status === STATUS.REGISTER && (
                    <Button size={labeled ? 'default' : 'sm'} onClick={() => setProcessing(c)}>
                        <LoaderCircle />
                        Atender
                    </Button>
                )}
                {c.status === STATUS.IN_PROCESS && (
                    <Button size={labeled ? 'default' : 'sm'} asChild>
                        <Link href={route('complaint.respond', c.id)}>
                            <MessageSquare />
                            Responder
                        </Link>
                    </Button>
                )}
            </div>
        );
    }

    const dialogs = (
        <>
            <ExtendDialog complaint={extending} onOpenChange={(v: boolean) => !v && setExtending(null)} />
            <ConfirmDialog
                open={!!processing}
                onOpenChange={(v: boolean) => !v && setProcessing(null)}
                icon={LoaderCircle}
                title="Atender reclamo"
                description="El reclamo pasará de “Registrado” a “En proceso” y quedará a tu cargo hasta responderlo."
                subject={processing ? `Reclamo ${processing.complaintCode}` : undefined}
                consequences={[
                    'Se avisa al cliente por correo de que su reclamo está siendo atendido.',
                    'El plazo de respuesta sigue corriendo.',
                    'Después podrás enviar la respuesta con el botón “Responder”.',
                ]}
                confirmLabel="Atender"
                onConfirm={() => run(route('complaint.process', processing!.id), () => setProcessing(null))}
                loading={busy}
            />
            <ConfirmDialog
                open={!!recovering}
                onOpenChange={(v: boolean) => !v && setRecovering(null)}
                icon={Check}
                title="Confirmar reclamo rechazado"
                description="Úsalo cuando el cliente no confirmó su reclamo por correo, pero quieres darlo por válido."
                subject={recovering ? `Reclamo ${recovering.complaintCode}` : undefined}
                consequences={[
                    'El reclamo deja de estar rechazado y se marca como confirmado por el cliente.',
                    'Vuelve al estado “Registrado” y se agrega al historial.',
                    'Desde ahí ya puedes atenderlo y responderlo.',
                ]}
                confirmLabel="Confirmar"
                onConfirm={() => run(route('complaint.recover', recovering!.id), () => setRecovering(null))}
                loading={busy}
            />
        </>
    );

    return { actions, dialogs };
}
