import { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { DatePicker } from '@/components/ui/date-picker';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { TimePicker } from '@/components/ui/time-picker';
import { FileDropzone } from '@/components/public/FileDropzone';
import { cn } from '@/lib/utils';

export interface QuestionOption {
    id: number;
    option: string;
    second?: boolean | number;
}

export interface QuestionData {
    id: number;
    question: string;
    required?: boolean;
    stepper: number;
    text_switch?: string | null;
    max_options?: number | null;
    options: QuestionOption[];
    type_question?: { id: number; type: string; label?: string } | null;
}

type Value = string | string[] | File | null | undefined;

interface FieldProps {
    question: QuestionData;
    value: Value;
    onChange: (value: Value) => void;
    error?: string;
    onSelectOptionsChange?: (value: string) => void;
    /** Opciones en una sola columna (lista) en vez de cuadrícula. */
    linear?: boolean;
    /** Marca el campo con error de archivo sin pasar por el esquema de la pregunta. */
    onFileError?: (message: string) => void;
}

const TILE =
    'flex cursor-pointer items-center gap-3 rounded-lg border border-border bg-card px-3 py-2 text-sm transition-colors hover:bg-muted/60 has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-primary/5 has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-50 has-[:disabled]:hover:bg-card';

function FieldError({ message }: { message?: string }) {
    if (!message) return null;
    return (
        <p role="alert" className="text-sm text-destructive">
            {message}
        </p>
    );
}

/** En listas lineales, separa "Título: detalle" en dos líneas; el detalle completo queda en el tooltip. */
function OptionText({ option, split }: { option: string; split: boolean }) {
    const [head, ...rest] = option.split(': ');
    if (!split || rest.length === 0) return <span className="font-medium text-foreground">{option}</span>;
    return (
        <span className="min-w-0 flex-1">
            <span className="block font-medium text-foreground">{head}</span>
            <span className="block text-xs text-muted-foreground">{rest.join(': ')}</span>
        </span>
    );
}

/** Opciones con casilla. `max` = 1 se comporta como selección única (volver a pulsar la quita). */
function CheckTiles({
    idPrefix,
    options,
    selected,
    max,
    onChange,
    columns,
    withOther,
}: {
    idPrefix: string;
    options: string[];
    selected: string[];
    max?: number | null;
    onChange: (next: string[]) => void;
    columns: 1 | 2;
    withOther?: boolean;
}) {
    const otherValue = selected.find((v) => v.startsWith('Otro: '));
    const [otherChecked, setOtherChecked] = useState(otherValue !== undefined);
    const limit = max ?? Infinity;
    const full = selected.length >= limit;

    const toggle = (value: string) => {
        if (selected.includes(value)) return onChange(selected.filter((v) => v !== value));
        if (limit === 1) return onChange([value]);
        if (!full) onChange([...selected, value]);
    };

    const setOther = (text: string) => {
        const rest = selected.filter((v) => !v.startsWith('Otro: '));
        onChange(text.trim() === '' ? rest : [...rest, `Otro: ${text}`]);
    };

    return (
        <div className={cn('grid', columns === 2 ? 'gap-2 sm:grid-cols-2' : 'grid-cols-[minmax(0,1fr)] gap-1.5')}>
            {options.map((option, i) => {
                const checked = selected.includes(option);
                return (
                    <label key={option} htmlFor={`${idPrefix}_${i}`} className={cn(TILE, columns === 1 && 'py-2.5')}>
                        <Checkbox
                            id={`${idPrefix}_${i}`}
                            checked={checked}
                            disabled={!checked && full && limit > 1}
                            onCheckedChange={() => toggle(option)}
                        />
                        <OptionText option={option} split={columns === 1} />
                    </label>
                );
            })}
            {withOther && (
                <>
                    <label htmlFor={`${idPrefix}_other`} className={cn(TILE, columns === 1 && 'py-1')}>
                        <Checkbox
                            id={`${idPrefix}_other`}
                            checked={otherChecked}
                            disabled={!otherChecked && full && limit > 1}
                            onCheckedChange={(checked) => {
                                if (checked && limit === 1) onChange([]);
                                setOtherChecked(checked === true);
                                if (!checked) setOther('');
                            }}
                        />
                        <span className="font-medium text-foreground">Otro</span>
                    </label>
                    {otherChecked && (
                        <Input
                            placeholder="Cuéntanos cuál"
                            aria-label="Otro motivo"
                            maxLength={200}
                            defaultValue={otherValue ? otherValue.replace('Otro: ', '') : ''}
                            onChange={(e) => setOther(e.target.value)}
                            className={cn('h-9', columns === 2 && 'sm:col-span-2')}
                        />
                    )}
                </>
            )}
        </div>
    );
}

/**
 * Renderiza un campo dinámico según el tipo de pregunta del formulario de reclamo.
 * `value` / `onChange` manejan el valor de esta pregunta (string | string[] | File).
 */
export function QuestionField(props: FieldProps) {
    const { question, value, onChange, error, onSelectOptionsChange, linear, onFileError } = props;
    const type = question.type_question?.type;
    const primaryOptions = question.options.filter((o) => !o.second);
    const secondaryOptions = question.options.filter((o) => o.second);
    const [showSecondary, setShowSecondary] = useState(false);
    const text = typeof value === 'string' ? value : '';
    const inputId = `question_${question.id}`;

    const label = (
        <Label htmlFor={inputId} className="text-[0.9375rem] font-semibold leading-snug tracking-tight sm:text-sm sm:font-medium">
            {question.question}
            {question.required ? <span className="text-destructive"> *</span> : null}
        </Label>
    );

    const single = (options: string[], prefix: string, columns: 1 | 2) => (
        <CheckTiles
            idPrefix={prefix}
            options={options}
            selected={text ? [text] : []}
            max={1}
            columns={columns}
            onChange={(next) => onChange(next[0] ?? '')}
        />
    );

    const wrap = (children: React.ReactNode, className?: string) => (
        <div className={cn('flex min-w-0 flex-col gap-1.5', className)}>
            {label}
            {children}
            <FieldError message={error} />
        </div>
    );

    switch (type) {
        case 'select_options': {
            const list = showSecondary ? secondaryOptions : primaryOptions;
            return wrap(
                <>
                    <Select
                        value={text}
                        onValueChange={(v) => {
                            onChange(v);
                            onSelectOptionsChange?.(v);
                        }}
                    >
                        <SelectTrigger id={inputId} aria-invalid={!!error} className="h-11 w-full text-base sm:h-10 sm:text-sm">
                            <SelectValue placeholder="Selecciona una opción" />
                        </SelectTrigger>
                        <SelectContent>
                            {list.map((option) => (
                                <SelectItem key={option.id} value={option.option}>
                                    {option.option}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    {question.text_switch && (
                        <label className="inline-flex w-fit cursor-pointer items-center gap-2.5">
                            <Switch
                                checked={showSecondary}
                                onCheckedChange={(checked) => {
                                    setShowSecondary(checked);
                                    onChange('');
                                    onSelectOptionsChange?.('');
                                }}
                            />
                            <span className="text-sm text-muted-foreground">{question.text_switch}</span>
                        </label>
                    )}
                </>,
            );
        }

        case 'text':
            return wrap(<Input id={inputId} className="h-11 text-base sm:h-10 sm:text-sm" aria-invalid={!!error} maxLength={255} value={text} onChange={(e) => onChange(e.target.value)} />);

        case 'textarea':
            return wrap(
                <Textarea
                    id={inputId}
                    aria-invalid={!!error}
                    maxLength={2000}
                    value={text}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder="Qué pasó, con quién hablaste, qué esperabas…"
                    className="min-h-32 resize-none text-base sm:text-sm"
                />,
            );

        case 'select':
            return wrap(
                <Select value={text} onValueChange={onChange}>
                    <SelectTrigger id={inputId} aria-invalid={!!error} className="h-11 w-full text-base sm:h-10 sm:text-sm">
                        <SelectValue placeholder="Selecciona una opción" />
                    </SelectTrigger>
                    <SelectContent>
                        {question.options.map((option) => (
                            <SelectItem key={option.id} value={option.option}>
                                {option.option}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>,
            );

        case 'radio':
            return wrap(single(question.options.map((o) => o.option), `q${question.id}`, 2));

        case 'yes_no':
            return wrap(single(['Sí', 'No'], `q${question.id}`, 2));

        case 'checkbox': {
            const selected = Array.isArray(value) ? value : [];
            return wrap(
                <>
                    {question.max_options ? (
                        <p className="text-xs text-muted-foreground tabular">
                            {selected.length} de {question.max_options} elegidas
                        </p>
                    ) : null}
                    <CheckTiles
                        idPrefix={`q${question.id}`}
                        options={question.options.map((o) => o.option)}
                        selected={selected}
                        max={question.max_options}
                        columns={linear ? 1 : 2}
                        withOther
                        onChange={onChange}
                    />
                </>,
            );
        }

        case 'date':
            return wrap(<DatePicker id={inputId} value={text} onChange={onChange} aria-invalid={!!error} />);

        case 'time':
            return wrap(<TimePicker id={inputId} value={text} onChange={onChange} aria-invalid={!!error} />);

        case 'file':
            return wrap(
                <FileDropzone
                    id={inputId}
                    file={value instanceof File ? value : null}
                    onChange={onChange}
                    onError={onFileError}
                    error={error}
                />,
            );

        default:
            return null;
    }
}
