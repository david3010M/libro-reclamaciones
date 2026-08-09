import { useState } from 'react';
import { User, Mail, Phone, IdCard, Send, CalendarDays, Clock } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Checkbox } from '@/components/ui/checkbox';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

/** Muestra el error de un campo, si existe */
function FieldError({ message }) {
    if (!message) return null;
    return <p className="text-sm text-destructive">{message}</p>;
}

/** Grupo de checkboxes de una pregunta, con soporte para una opción "Otro" con texto libre. */
function CheckboxOptionsField({ question, value, onChange }) {
    const selected = Array.isArray(value) ? value : [];
    const otherValue = selected.find((v) => v.startsWith('Otro: '));
    const [otherChecked, setOtherChecked] = useState(otherValue !== undefined);

    const toggle = (optionValue) => {
        const next = selected.includes(optionValue)
            ? selected.filter((v) => v !== optionValue)
            : [...selected, optionValue];
        onChange(next);
    };

    const setOther = (text) => {
        const withoutOther = selected.filter((v) => !v.startsWith('Otro: '));
        onChange(text.trim() === '' ? withoutOther : [...withoutOther, `Otro: ${text}`]);
    };

    return (
        <div className="flex flex-col gap-2">
            {question.options.map((option) => (
                <div key={option.id} className="flex items-center gap-2">
                    <Checkbox
                        id={`option_${option.id}`}
                        checked={selected.includes(option.option)}
                        onCheckedChange={() => toggle(option.option)}
                    />
                    <label htmlFor={`option_${option.id}`} className="text-sm font-medium text-foreground">
                        {option.option}
                    </label>
                </div>
            ))}
            <div className="flex items-center gap-2">
                <Checkbox
                    id={`option_other_${question.id}`}
                    checked={otherChecked}
                    onCheckedChange={(checked) => {
                        setOtherChecked(checked === true);
                        if (!checked) setOther('');
                    }}
                />
                <label htmlFor={`option_other_${question.id}`} className="text-sm font-medium text-foreground">
                    Otro
                </label>
            </div>
            {otherChecked && (
                <Input
                    placeholder="Especifica otro"
                    defaultValue={otherValue ? otherValue.replace('Otro: ', '') : ''}
                    onChange={(e) => setOther(e.target.value)}
                    className="mt-1"
                />
            )}
        </div>
    );
}

/**
 * Renderiza un campo dinámico según el tipo de pregunta del formulario de reclamo.
 * `value` / `onChange` manejan el valor específico de esta pregunta (string | string[] | File).
 */
export function QuestionField({ question, value, onChange, error, onSelectOptionsChange }) {
    const type = question.typeQuestion?.type;
    const primaryOptions = question.options.filter((o) => !o.second);
    const secondaryOptions = question.options.filter((o) => o.second);
    const [showSecondary, setShowSecondary] = useState(false);

    const label = type !== 'file' ? (
        <Label htmlFor={`question_${question.id}`}>
            {question.question}
            {question.required ? <span className="text-destructive"> *</span> : null}
        </Label>
    ) : null;

    switch (type) {
        case 'select_options':
            return (
                <div className="flex flex-col gap-2">
                    {label}
                    <Select
                        disabled={showSecondary}
                        value={showSecondary ? '' : value ?? ''}
                        onValueChange={(v) => {
                            onChange(v);
                            onSelectOptionsChange?.(v);
                        }}
                    >
                        <SelectTrigger id={`question_${question.id}`}>
                            <SelectValue placeholder="Selecciona una opción" />
                        </SelectTrigger>
                        <SelectContent>
                            {primaryOptions.map((option) => (
                                <SelectItem key={option.id} value={option.option}>
                                    {option.option}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    <label className="my-1 inline-flex cursor-pointer items-center gap-3">
                        <Switch
                            checked={showSecondary}
                            onCheckedChange={(checked) => {
                                setShowSecondary(checked);
                                onChange('');
                            }}
                        />
                        <span className="text-sm font-medium text-foreground">{question.text_switch}</span>
                    </label>

                    {showSecondary && (
                        <div className="flex flex-col gap-1.5">
                            {secondaryOptions.map((option) => (
                                <label key={option.id} className="flex items-center gap-2 text-sm">
                                    <input
                                        type="radio"
                                        className="form-checkbox"
                                        name={`question_${question.id}_second`}
                                        value={option.option}
                                        checked={value === option.option}
                                        onChange={() => {
                                            onChange(option.option);
                                            onSelectOptionsChange?.(option.option);
                                        }}
                                        required={showSecondary}
                                    />
                                    {option.option}
                                </label>
                            ))}
                        </div>
                    )}
                    <FieldError message={error} />
                </div>
            );

        case 'text':
            return (
                <div className="flex flex-col gap-1.5">
                    {label}
                    <Input id={`question_${question.id}`} value={value ?? ''} onChange={(e) => onChange(e.target.value)} />
                    <FieldError message={error} />
                </div>
            );

        case 'textarea':
            return (
                <div className="flex flex-col gap-1.5">
                    {label}
                    <Textarea
                        id={`question_${question.id}`}
                        rows={4}
                        value={value ?? ''}
                        onChange={(e) => onChange(e.target.value)}
                    />
                    <FieldError message={error} />
                </div>
            );

        case 'select':
            return (
                <div className="flex flex-col gap-1.5">
                    {label}
                    <Select value={value ?? ''} onValueChange={onChange}>
                        <SelectTrigger id={`question_${question.id}`}>
                            <SelectValue placeholder="Selecciona una opción" />
                        </SelectTrigger>
                        <SelectContent>
                            {question.options.map((option) => (
                                <SelectItem key={option.id} value={option.option}>
                                    {option.option}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <FieldError message={error} />
                </div>
            );

        case 'radio':
            return (
                <div className="flex flex-col gap-1.5">
                    {label}
                    <div className="flex flex-col gap-1.5">
                        {question.options.map((option) => (
                            <label key={option.id} className="inline-flex items-center gap-2 text-sm">
                                <input
                                    type="radio"
                                    className="form-checkbox"
                                    name={`question_${question.id}`}
                                    value={option.option}
                                    checked={value === option.option}
                                    onChange={() => onChange(option.option)}
                                />
                                {option.option}
                            </label>
                        ))}
                    </div>
                    <FieldError message={error} />
                </div>
            );

        case 'checkbox':
            return (
                <div className="flex flex-col gap-1.5">
                    {label}
                    <CheckboxOptionsField question={question} value={value} onChange={onChange} />
                    <FieldError message={error} />
                </div>
            );

        case 'date':
            return (
                <div className="flex flex-col gap-1.5">
                    {label}
                    <Input
                        type="date"
                        icon={<CalendarDays />}
                        className="max-w-sm"
                        value={value ?? ''}
                        onChange={(e) => onChange(e.target.value)}
                    />
                    <FieldError message={error} />
                </div>
            );

        case 'time':
            return (
                <div className="flex flex-col gap-1.5">
                    {label}
                    <Input
                        type="time"
                        icon={<Clock />}
                        className="w-fit"
                        value={value ?? ''}
                        onChange={(e) => onChange(e.target.value)}
                    />
                    <FieldError message={error} />
                </div>
            );

        case 'yes_no':
            return (
                <div className="flex flex-col gap-1.5">
                    {label}
                    <div className="flex gap-4">
                        {['Sí', 'No'].map((opt) => (
                            <label key={opt} className="inline-flex items-center gap-2 text-sm">
                                <input
                                    type="radio"
                                    className="form-checkbox"
                                    name={`question_${question.id}`}
                                    value={opt}
                                    checked={value === opt}
                                    onChange={() => onChange(opt)}
                                />
                                {opt}
                            </label>
                        ))}
                    </div>
                    <FieldError message={error} />
                </div>
            );

        case 'file':
            return (
                <div className="flex flex-col gap-1.5">
                    <Label htmlFor={`file_input_${question.id}`}>
                        {question.question}
                    </Label>
                    <FieldError message={error} />
                    <input
                        type="file"
                        id={`file_input_${question.id}`}
                        accept=".png,.jpg,.jpeg,.mp4"
                        onChange={(e) => onChange(e.target.files?.[0] ?? null)}
                        className="block w-full cursor-pointer rounded-lg border border-input bg-background text-sm text-foreground file:mr-3 file:border-0 file:bg-secondary file:px-3 file:py-2 file:text-secondary-foreground"
                    />
                </div>
            );

        default:
            return null;
    }
}

export const CUSTOMER_ICONS = { User, Mail, Phone, IdCard, Send };
