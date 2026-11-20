import * as React from 'react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface Props extends React.ComponentProps<'input'> {
    icon: React.ReactNode;
}

/** Input de shadcn con un icono a la izquierda (el Input base no lo trae). */
export function IconInput({ icon, className, ...props }: Props) {
    return (
        <div className="relative">
            <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-muted-foreground [&_svg]:size-4">
                {icon}
            </span>
            <Input className={cn('pl-9', className)} {...props} />
        </div>
    );
}
