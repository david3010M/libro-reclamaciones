import { useEffect, useRef, useState } from 'react';
import { Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PickerShell } from '@/components/ui/picker-shell';
import { cn } from '@/lib/utils';

interface TimePickerProps {
    /** Hora en formato 24 h `HH:mm` (o vacío). */
    value: string;
    onChange: (value: string) => void;
    id?: string;
    placeholder?: string;
    /** Salto de minutos en la columna (por defecto 1). */
    minuteStep?: number;
    className?: string;
    'aria-invalid'?: boolean;
}

const pad = (n: number) => String(n).padStart(2, '0');

function Column({
    items,
    selected,
    onPick,
    label,
    large,
}: {
    items: number[];
    selected: number | null;
    onPick: (n: number) => void;
    label: string;
    large: boolean;
}) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const active = ref.current?.querySelector<HTMLElement>('[data-active="true"]');
        if (active && ref.current) ref.current.scrollTop = active.offsetTop - ref.current.clientHeight / 2 + active.clientHeight / 2;
    }, []);

    return (
        <div className={cn('flex flex-col items-center gap-1.5', large && 'flex-1')}>
            <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{label}</span>
            <div
                ref={ref}
                data-vaul-no-drag
                role="listbox"
                aria-label={label}
                className={cn(
                    'relative snap-y snap-mandatory overflow-y-auto overscroll-contain',
                    large
                        ? 'h-64 w-full rounded-xl border bg-card p-1'
                        : 'no-scrollbar h-44 w-[4.5rem] py-[70px] [mask-image:linear-gradient(to_bottom,transparent,black_28%,black_72%,transparent)]',
                )}
            >
                {items.map((n) => (
                    <Button
                        key={n}
                        type="button"
                        role="option"
                        aria-selected={selected === n}
                        data-active={selected === n}
                        variant={selected === n ? 'default' : 'ghost'}
                        className={cn(
                            'tabular w-full snap-center',
                            large ? 'h-12 rounded-xl text-xl' : 'h-9 rounded-lg text-sm',
                            !large && selected !== n && 'font-normal text-muted-foreground',
                        )}
                        onClick={() => onPick(n)}
                    >
                        {pad(n)}
                    </Button>
                ))}
            </div>
        </div>
    );
}

export function TimePicker({ value, onChange, id, placeholder = 'Elige una hora', minuteStep = 1, className, ...props }: TimePickerProps) {
    const [open, setOpen] = useState(false);
    const match = /^(\d{2}):(\d{2})$/.exec(value);
    const hour = match ? Number(match[1]) : null;
    const minute = match ? Number(match[2]) : null;

    const hours = Array.from({ length: 24 }, (_, i) => i);
    const minutes = Array.from({ length: Math.ceil(60 / minuteStep) }, (_, i) => i * minuteStep);

    const set = (h: number, m: number) => onChange(`${pad(h)}:${pad(m)}`);

    return (
        <PickerShell
            open={open}
            onOpenChange={setOpen}
            title="¿A qué hora sucedió?"
            description="Desliza y elige la hora aproximada."
            trigger={
                <Button
                    id={id}
                    type="button"
                    variant="outline"
                    aria-invalid={props['aria-invalid']}
                    className={cn('h-11 w-full justify-start px-3 text-base font-normal sm:h-10 sm:text-sm', !match && 'text-muted-foreground', className)}
                >
                    <Clock />
                    <span className="tabular">{match ? value : placeholder}</span>
                </Button>
            }
        >
            {(large) => (
                <div className={cn('space-y-3', !large && 'p-4')}>
                    <div className={cn('flex items-end', large ? 'gap-4' : 'justify-center gap-2')}>
                        <Column label="Hora" large={large} items={hours} selected={hour} onPick={(h) => set(h, minute ?? 0)} />
                        {large && <span className="pb-[7.25rem] text-2xl font-semibold text-muted-foreground">:</span>}
                        <Column label="Min" large={large} items={minutes} selected={minute} onPick={(m) => set(hour ?? 0, m)} />
                    </div>
                    <div className={cn('flex gap-2', large ? 'grid grid-cols-2' : 'justify-between border-t pt-3')}>
                        <Button
                            type="button"
                            variant="secondary"
                            size={large ? 'lg' : 'sm'}
                            className={cn(large && 'h-12 rounded-xl text-base')}
                            onClick={() => {
                                const now = new Date();
                                set(now.getHours(), now.getMinutes());
                            }}
                        >
                            Ahora
                        </Button>
                        <Button type="button" size={large ? 'lg' : 'sm'} className={cn(large && 'h-12 text-base')} onClick={() => setOpen(false)}>
                            Listo
                        </Button>
                    </div>
                </div>
            )}
        </PickerShell>
    );
}
