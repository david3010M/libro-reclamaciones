// Shim de tipos para sheet.jsx (JS puro, generado por shadcn).
// Ver dialog.d.ts para la explicación del patrón.
import type { ReactNode } from 'react';

type BaseProps = {
    className?: string;
    children?: ReactNode;
    [key: string]: any;
};

export declare function Sheet(props: BaseProps): JSX.Element;
export declare function SheetTrigger(props: BaseProps): JSX.Element;
export declare function SheetClose(props: BaseProps): JSX.Element;
export declare function SheetPortal(props: BaseProps): JSX.Element;
export declare function SheetOverlay(props: BaseProps): JSX.Element;
export declare function SheetContent(
    props: BaseProps & { side?: 'top' | 'right' | 'bottom' | 'left'; showCloseButton?: boolean }
): JSX.Element;
export declare function SheetHeader(props: BaseProps): JSX.Element;
export declare function SheetFooter(props: BaseProps): JSX.Element;
export declare function SheetTitle(props: BaseProps): JSX.Element;
export declare function SheetDescription(props: BaseProps): JSX.Element;
