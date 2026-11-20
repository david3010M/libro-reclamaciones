import type { ReactNode } from 'react';
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useIsMobile } from '@/hooks/use-mobile';

interface PickerShellProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    trigger: ReactNode;
    title: string;
    description?: string;
    /** Recibe `large` = true en móvil (hoja inferior) para dibujar controles grandes. */
    children: (large: boolean) => ReactNode;
}

/** Popover en escritorio; hoja inferior grande en móvil. */
export function PickerShell({ open, onOpenChange, trigger, title, description, children }: PickerShellProps) {
    const isMobile = useIsMobile();

    if (isMobile) {
        return (
            <Drawer open={open} onOpenChange={onOpenChange}>
                <DrawerTrigger asChild>{trigger}</DrawerTrigger>
                <DrawerContent className="pb-[max(1rem,env(safe-area-inset-bottom))]">
                    <DrawerHeader className="pb-2">
                        <DrawerTitle className="text-lg font-semibold tracking-tight">{title}</DrawerTitle>
                        {description && <DrawerDescription>{description}</DrawerDescription>}
                    </DrawerHeader>
                    <div className="px-4 pb-2">{children(true)}</div>
                </DrawerContent>
            </Drawer>
        );
    }

    return (
        <Popover open={open} onOpenChange={onOpenChange}>
            <PopoverTrigger asChild>{trigger}</PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                {children(false)}
            </PopoverContent>
        </Popover>
    );
}
