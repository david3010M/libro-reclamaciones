import { LoaderCircle } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

/**
 * Modal de confirmación genérico (icono + mensaje + botones aceptar/cancelar).
 */
export function ConfirmDialog({ open, onOpenChange, icon: Icon, message, confirmLabel, onConfirm, loading }) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-md text-center">
                {Icon && <Icon className="mx-auto mb-2 h-12 w-12 text-muted-foreground" />}
                <h3 className="mb-2 text-sm text-muted-foreground">{message}</h3>
                <div className="flex w-full justify-center gap-2">
                    <Button onClick={onConfirm} disabled={loading}>
                        {loading && <LoaderCircle className="h-4 w-4 animate-spin" />}
                        {confirmLabel}
                    </Button>
                    <Button variant="secondary" onClick={() => onOpenChange(false)}>
                        Cancelar
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
