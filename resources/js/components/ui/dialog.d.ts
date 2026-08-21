// Shim de tipos para dialog.jsx (JS puro, generado por shadcn).
// Se coloca junto al .jsx con el mismo nombre base: TypeScript lo usa para tipar
// a los consumidores .tsx sin necesidad de convertir el .jsx en sí. Los props no
// tienen defaults en el archivo fuente, así que aquí se declaran explícitamente
// opcionales en vez de dejar que TS los infiera como obligatorios.
import type { ReactNode } from 'react';

type BaseProps = {
    className?: string;
    children?: ReactNode;
    [key: string]: any;
};

export declare function Dialog(props: BaseProps): JSX.Element;
export declare function DialogTrigger(props: BaseProps): JSX.Element;
export declare function DialogPortal(props: BaseProps): JSX.Element;
export declare function DialogClose(props: BaseProps): JSX.Element;
export declare function DialogOverlay(props: BaseProps): JSX.Element;
export declare function DialogContent(props: BaseProps & { showCloseButton?: boolean }): JSX.Element;
export declare function DialogHeader(props: BaseProps): JSX.Element;
export declare function DialogFooter(props: BaseProps & { showCloseButton?: boolean }): JSX.Element;
export declare function DialogTitle(props: BaseProps): JSX.Element;
export declare function DialogDescription(props: BaseProps): JSX.Element;
