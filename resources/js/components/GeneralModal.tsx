import type { ReactNode } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';

export interface GeneralModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title?: ReactNode;
    description?: ReactNode;
    children?: ReactNode;
    footer?: ReactNode;
    className?: string;
    showCloseButton?: boolean;
}

/**
 * Modal genérico reutilizable (título + descripción opcional + contenido + footer).
 *
 * Uso:
 * <GeneralModal open={open} onOpenChange={setOpen} title="Nueva Pregunta">
 *   ...contenido...
 * </GeneralModal>
 */
export function GeneralModal({
    open,
    onOpenChange,
    title,
    description,
    children,
    footer,
    className,
    showCloseButton = true,
}: GeneralModalProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className={className} showCloseButton={showCloseButton}>
                {(title || description) && (
                    <DialogHeader>
                        {title && <DialogTitle>{title}</DialogTitle>}
                        {description && <DialogDescription>{description}</DialogDescription>}
                    </DialogHeader>
                )}

                {children}

                {footer && <DialogFooter>{footer}</DialogFooter>}
            </DialogContent>
        </Dialog>
    );
}
