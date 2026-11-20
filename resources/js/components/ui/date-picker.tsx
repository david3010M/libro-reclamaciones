import { useState } from 'react';
import { format, parse, subDays } from 'date-fns';
import { es } from 'date-fns/locale';
import { CalendarDays } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { PickerShell } from '@/components/ui/picker-shell';
import { cn } from '@/lib/utils';

interface DatePickerProps {
    /** Fecha en formato `yyyy-MM-dd` (o vacío). */
    value: string;
    onChange: (value: string) => void;
    id?: string;
    placeholder?: string;
    /** Fecha máxima permitida (por defecto, hoy). */
    maxDate?: Date;
    minDate?: Date;
    className?: string;
    'aria-invalid'?: boolean;
}

const ISO = 'yyyy-MM-dd';

export function DatePicker({ value, onChange, id, placeholder = 'Elige una fecha', maxDate = new Date(), minDate, className, ...props }: DatePickerProps) {
    const [open, setOpen] = useState(false);
    const selected = value ? parse(value, ISO, new Date()) : undefined;
    const valid = selected && !Number.isNaN(selected.getTime());

    const pick = (date: Date) => {
        onChange(format(date, ISO));
        setOpen(false);
    };

    return (
        <PickerShell
            open={open}
            onOpenChange={setOpen}
            title="¿Cuándo ocurrió?"
            description="Elige el día en que pasó."
            trigger={
                <Button
                    id={id}
                    type="button"
                    variant="outline"
                    aria-invalid={props['aria-invalid']}
                    className={cn('h-11 w-full justify-start px-3 text-base font-normal sm:h-10 sm:text-sm', !valid && 'text-muted-foreground', className)}
                >
                    <CalendarDays />
                    {valid ? format(selected, "d 'de' MMMM yyyy", { locale: es }) : placeholder}
                </Button>
            }
        >
            {(large) => (
                <div className="space-y-3">
                    {large && (
                        <div className="grid grid-cols-2 gap-2">
                            <Button type="button" variant="secondary" className="h-11 rounded-xl text-base" onClick={() => pick(new Date())}>
                                Hoy
                            </Button>
                            <Button type="button" variant="secondary" className="h-11 rounded-xl text-base" onClick={() => pick(subDays(new Date(), 1))}>
                                Ayer
                            </Button>
                        </div>
                    )}
                    <Calendar
                        mode="single"
                        locale={es}
                        selected={valid ? selected : undefined}
                        defaultMonth={valid ? selected : undefined}
                        disabled={[{ after: maxDate }, ...(minDate ? [{ before: minDate }] : [])]}
                        onSelect={(date) => date && pick(date)}
                        classNames={large ? { root: 'w-full', month: 'flex w-full flex-col gap-3' } : undefined}
                        className={cn(large && 'w-full bg-transparent p-0 text-base [--cell-size:--spacing(12)] [&_[data-slot=button]]:text-base [&_.rdp-caption_label]:text-base')}
                    />
                </div>
            )}
        </PickerShell>
    );
}
