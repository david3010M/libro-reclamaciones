import type { ComponentType, ReactNode } from 'react';
import { LoaderCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

type Props = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title: string;
    /** Explicación corta de lo que se está pidiendo confirmar. */
    description?: ReactNode;
    /** Sobre qué se actúa (p. ej. el código del reclamo). */
    subject?: ReactNode;
    /** Qué ocurrirá al confirmar, una línea por consecuencia. */
    consequences?: ReactNode[];
    /** Aviso adicional, p. ej. que la acción no se puede deshacer. */
    note?: ReactNode;
    icon?: ComponentType<{ className?: string }>;
    confirmLabel: string;
    destructive?: boolean;
    onConfirm: () => void;
    loading?: boolean;
};

/** Modal de confirmación: dice qué se va a hacer, a qué y qué pasará después. */
export function ConfirmDialog({ open, onOpenChange, title, description, subject, consequences, note, icon: Icon, confirmLabel, destructive, onConfirm, loading }: Props) {
    return (
        <Dialog open={open} onOpenChange={(v) => !loading && onOpenChange(v)}>
            <DialogContent showCloseButton={false} className="sm:max-w-md">
                <DialogHeader className="gap-3">
                    {Icon && (
                        <span className={cn('flex size-10 items-center justify-center rounded-full', destructive ? 'bg-destructive/10 text-destructive' : 'bg-muted text-foreground')}>
                            <Icon className="size-5" />
                        </span>
                    )}
                    <DialogTitle className="text-base">{title}</DialogTitle>
                    {description && <DialogDescription>{description}</DialogDescription>}
                </DialogHeader>

                {subject && <div className="rounded-xl bg-muted px-3 py-2 text-sm font-medium text-foreground">{subject}</div>}

                {consequences && consequences.length > 0 && (
                    <div className="grid gap-2">
                        <p className="text-xs font-medium text-muted-foreground">Al confirmar</p>
                        <ul className="grid gap-1.5 text-sm text-foreground">
                            {consequences.map((c, i) => (
                                <li key={i} className="flex gap-2">
                                    <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground" />
                                    <span>{c}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {note && <p className="text-xs text-muted-foreground">{note}</p>}

                <DialogFooter>
                    <Button variant="outline" onClick={() => onOpenChange(false)} disabled={loading}>
                        Cancelar
                    </Button>
                    <Button variant={destructive ? 'destructive' : 'default'} onClick={onConfirm} disabled={loading}>
                        {loading && <LoaderCircle className="animate-spin" />}
                        {confirmLabel}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
