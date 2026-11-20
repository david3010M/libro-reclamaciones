import type { ComponentType, ReactNode } from 'react';

type Props = { title: string; description?: string; icon?: ComponentType<{ className?: string }>; children?: ReactNode };

/** Cabecera de página del panel: icono, título, descripción corta y acciones a la derecha. */
export function PageHeader({ title, description, icon: Icon, children }: Props) {
    return (
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex items-center gap-3">
                {Icon && (
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-card text-foreground ring-1 ring-border">
                        <Icon className="size-5" />
                    </span>
                )}
                <div className="space-y-1">
                    <h1 className="text-2xl font-semibold tracking-tight text-foreground">{title}</h1>
                    {description && <p className="text-sm text-muted-foreground">{description}</p>}
                </div>
            </div>
            {children && <div className="flex flex-wrap items-center gap-2">{children}</div>}
        </div>
    );
}
