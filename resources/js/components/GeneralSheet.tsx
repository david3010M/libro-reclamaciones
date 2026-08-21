import type { ReactNode } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from '@/components/ui/sheet';

export type SheetSide = 'top' | 'right' | 'bottom' | 'left';

export interface GeneralSheetProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title?: ReactNode;
    description?: ReactNode;
    children?: ReactNode;
    footer?: ReactNode;
    side?: SheetSide;
    className?: string;
    showCloseButton?: boolean;
}

/**
 * Panel lateral genérico reutilizable (título + descripción opcional + contenido + footer).
 *
 * Uso:
 * <GeneralSheet open={open} onOpenChange={setOpen} title="Nueva Pregunta" side="right">
 *   ...contenido...
 * </GeneralSheet>
 */
export function GeneralSheet({
    open,
    onOpenChange,
    title,
    description,
    children,
    footer,
    side = 'right',
    className,
    showCloseButton = true,
}: GeneralSheetProps) {
    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent side={side} className={className} showCloseButton={showCloseButton}>
                {(title || description) && (
                    <SheetHeader>
                        {title && <SheetTitle>{title}</SheetTitle>}
                        {description && <SheetDescription>{description}</SheetDescription>}
                    </SheetHeader>
                )}

                <div className="flex-1 overflow-y-auto px-6">{children}</div>

                {footer && <SheetFooter>{footer}</SheetFooter>}
            </SheetContent>
        </Sheet>
    );
}
