import { useMemo, useState, type FormEvent, type ReactNode } from 'react';
import { Link, useForm } from '@inertiajs/react';
import { Eye, ListChecks, LoaderCircle, Plus, Trash2, Type } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { MAX_OPTIONS_TYPE, OPTION_TYPES, SECOND_OPTIONS_TYPE, questionErrors, questionSchema } from '@/lib/schemas/question';
import type { QuestionInput } from '@/lib/schemas/question';
import { QuestionField } from '@/Pages/Public/QuestionField';
import type { QuestionData } from '@/Pages/Public/QuestionField';

type TypeQuestion = { id: number; type: string; label: string };
type OptionRow = QuestionInput['options'][number];
type ExistingQuestion = {
    id: number;
    question: string;
    title: string | null;
    description: string | null;
    required: boolean;
    stepper: number;
    text_switch: string | null;
    max_options: number | null;
    type_question_id: number;
    options: { id: number; option: string; second: boolean }[];
};

let tempKey = 0;

function initialData(q?: ExistingQuestion | null): QuestionInput {
    return {
        type_question_id: q?.type_question_id ?? 1,
        question: q?.question ?? '',
        title: q?.title ?? '',
        description: q?.description ?? '',
        required: !!q?.required,
        stepper: q?.stepper ?? 1,
        text_switch: q?.text_switch ?? '',
        max_options: q?.max_options ? String(q.max_options) : '',
        options: (q?.options ?? []).map((o) => ({ key: `db-${o.id}`, id: o.id, option: o.option, second: !!o.second })),
    };
}

function Err({ message }: { message?: string }) {
    if (!message) return null;
    return (
        <p role="alert" className="text-sm text-destructive">
            {message}
        </p>
    );
}

function Section({ icon: Icon, title, description, children }: { icon: typeof Type; title: string; description?: string; children: ReactNode }) {
    return (
        <Card className="gap-0 overflow-hidden py-0">
            <div className="flex items-center gap-2.5 border-b px-5 py-3.5">
                <Icon className="size-4 text-muted-foreground" />
                <div>
                    <h2 className="text-sm font-semibold">{title}</h2>
                    {description && <p className="text-xs text-muted-foreground">{description}</p>}
                </div>
            </div>
            <div className="grid gap-5 p-5">{children}</div>
        </Card>
    );
}

function OptionList({
    rows,
    emptyText,
    errors,
    onAdd,
    onChange,
    onRemove,
    listError,
}: {
    rows: { row: OptionRow; index: number }[];
    emptyText: string;
    errors: Record<string, string>;
    onAdd: () => void;
    onChange: (key: string, value: string) => void;
    onRemove: (key: string) => void;
    listError?: string;
}) {
    return (
        <div className="grid gap-2">
            {rows.length === 0 && <p className="rounded-lg border border-dashed px-3 py-4 text-center text-sm text-muted-foreground">{emptyText}</p>}
            {rows.map(({ row, index }) => {
                const error = errors[`options.${index}.option`];
                return (
                    <div key={row.key} className="grid gap-1">
                        <div className="flex items-center gap-2">
                            <Input
                                value={row.option}
                                aria-label={`Opción ${index + 1}`}
                                aria-invalid={!!error}
                                placeholder="Texto de la opción"
                                onChange={(e) => onChange(row.key, e.target.value)}
                            />
                            <Button type="button" variant="outline" size="icon" aria-label="Quitar opción" onClick={() => onRemove(row.key)}>
                                <Trash2 />
                            </Button>
                        </div>
                        <Err message={error} />
                    </div>
                );
            })}
            <Err message={listError} />
            <Button type="button" variant="outline" size="sm" className="w-fit" onClick={onAdd}>
                <Plus />
                Agregar opción
            </Button>
        </div>
    );
}

/** Formulario de crear/editar pregunta, con vista previa de cómo la verá el cliente. */
export function QuestionForm({ question, typeQuestions }: { question?: ExistingQuestion | null; typeQuestions: TypeQuestion[] }) {
    const isEdit = !!question;
    const form = useForm<QuestionInput>(initialData(question));
    const [clientErrors, setClientErrors] = useState<Record<string, string>>({});
    const { data, setData } = form;

    const errors: Record<string, string> = { ...(form.errors as Record<string, string>), ...clientErrors };
    const typeId = data.type_question_id;
    const showOptions = OPTION_TYPES.includes(typeId);
    const showSecond = typeId === SECOND_OPTIONS_TYPE;
    const showMax = typeId === MAX_OPTIONS_TYPE;
    const typeInfo = typeQuestions.find((t) => t.id === typeId);

    const indexed = data.options.map((row, index) => ({ row, index }));
    const primary = indexed.filter((o) => !o.row.second);
    const secondary = indexed.filter((o) => o.row.second);

    function touch(field: string) {
        if (clientErrors[field]) setClientErrors(({ [field]: _, ...rest }) => rest);
        if ((form.errors as Record<string, string>)[field]) form.clearErrors(field as keyof QuestionInput);
    }

    function set(field: keyof QuestionInput, value: any) {
        setData(field as any, value);
        touch(field);
    }

    function setOptions(next: OptionRow[]) {
        setData('options', next);
        setClientErrors((prev) => Object.fromEntries(Object.entries(prev).filter(([k]) => !k.startsWith('options') && k !== 'second_options')));
        form.clearErrors();
    }

    const addOption = (second: boolean) => setOptions([...data.options, { key: `new-${tempKey++}`, option: '', second }]);
    const editOption = (key: string, value: string) => setOptions(data.options.map((o) => (o.key === key ? { ...o, option: value } : o)));
    const removeOption = (key: string) => setOptions(data.options.filter((o) => o.key !== key));

    function changeType(value: string) {
        const next = Number(value);
        setData((d) => ({
            ...d,
            type_question_id: next,
            options: OPTION_TYPES.includes(next) ? d.options.filter((o) => next === SECOND_OPTIONS_TYPE || !o.second) : [],
            max_options: next === MAX_OPTIONS_TYPE ? d.max_options : '',
            text_switch: next === SECOND_OPTIONS_TYPE ? d.text_switch : '',
        }));
        setClientErrors({});
        form.clearErrors();
    }

    function submit(e: FormEvent) {
        e.preventDefault();
        const result = questionSchema.safeParse(data);
        if (!result.success) {
            const found = questionErrors(result.error);
            setClientErrors(found);
            document.getElementById(Object.keys(found)[0]?.split('.')[0])?.focus();
            return;
        }
        setClientErrors({});

        const payload = {
            ...data,
            max_options: data.max_options.trim() === '' ? null : Number(data.max_options),
            options: data.options.map(({ id, option, second }) => (id ? { id, option: option.trim(), second } : { option: option.trim(), second })),
        };
        const url = isEdit ? route('question.update', question!.id) : route('question.store');
        form.transform(() => payload);
        form.post(url);
    }

    return (
        <form onSubmit={submit} noValidate className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
            <div className="flex flex-col gap-6">
                <Section icon={Type} title="Información básica" description="Lo que el cliente ve y cómo se guarda su respuesta.">
                    <div className="grid gap-2">
                        <Label htmlFor="type_question_id">Tipo de pregunta</Label>
                        <Select disabled={isEdit} value={String(typeId)} onValueChange={changeType}>
                            <SelectTrigger id="type_question_id" aria-invalid={!!errors.type_question_id} className="w-full">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                {typeQuestions.map((t) => (
                                    <SelectItem key={t.id} value={String(t.id)}>
                                        {t.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        {isEdit && <p className="text-xs text-muted-foreground">El tipo no se puede cambiar una vez creada la pregunta.</p>}
                        <Err message={errors.type_question_id} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="question">Pregunta</Label>
                        <Input id="question" value={data.question} aria-invalid={!!errors.question} placeholder="¿Qué quieres preguntar?" onChange={(e) => set('question', e.target.value)} />
                        <Err message={errors.question} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="title">Palabra clave</Label>
                        <Input id="title" value={data.title} aria-invalid={!!errors.title} placeholder="Ej. sede, motivo, fecha" onChange={(e) => set('title', e.target.value)} />
                        <p className="text-xs text-muted-foreground">Nombre corto con el que identificas la pregunta en el panel y los reportes.</p>
                        <Err message={errors.title} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="description">Descripción (opcional)</Label>
                        <Textarea id="description" rows={3} value={data.description} aria-invalid={!!errors.description} onChange={(e) => set('description', e.target.value)} />
                        <Err message={errors.description} />
                    </div>

                    <div className={showMax ? 'grid gap-5 sm:grid-cols-2' : 'grid gap-5'}>
                        <div className="grid gap-2">
                            <Label htmlFor="stepper">Paso del formulario</Label>
                            <Select value={String(data.stepper)} onValueChange={(v) => set('stepper', Number(v))}>
                                <SelectTrigger id="stepper" className="w-full">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="1">Paso 1</SelectItem>
                                    <SelectItem value="2">Paso 2</SelectItem>
                                </SelectContent>
                            </Select>
                            <Err message={errors.stepper} />
                        </div>
                        {showMax && (
                            <div className="grid gap-2">
                                <Label htmlFor="max_options">Máximo de opciones</Label>
                                <Input
                                    id="max_options"
                                    type="number"
                                    min={1}
                                    value={data.max_options}
                                    aria-invalid={!!errors.max_options}
                                    placeholder="Sin límite"
                                    onChange={(e) => set('max_options', e.target.value)}
                                />
                                <Err message={errors.max_options} />
                            </div>
                        )}
                    </div>

                    {showSecond && (
                        <div className="grid gap-2">
                            <Label htmlFor="text_switch">Texto del interruptor de opciones alternativas</Label>
                            <Input
                                id="text_switch"
                                value={data.text_switch}
                                aria-invalid={!!errors.text_switch}
                                placeholder="Ej. ¿Fue en una tienda virtual?"
                                onChange={(e) => set('text_switch', e.target.value)}
                            />
                            <Err message={errors.text_switch} />
                        </div>
                    )}

                    <label className="flex cursor-pointer items-center gap-3">
                        <Switch checked={data.required} onCheckedChange={(v) => set('required', v)} />
                        <span className="text-sm font-medium">Pregunta obligatoria</span>
                    </label>
                </Section>

                {showOptions && (
                    <Section icon={ListChecks} title="Opciones" description="Lo que el cliente puede elegir.">
                        <OptionList
                            rows={primary}
                            emptyText="Aún no hay opciones."
                            errors={errors}
                            onAdd={() => addOption(false)}
                            onChange={editOption}
                            onRemove={removeOption}
                            listError={errors.options}
                        />
                        {showSecond && (
                            <div className="grid gap-3 border-t pt-5">
                                <div>
                                    <h3 className="text-sm font-semibold">Opciones alternativas</h3>
                                    <p className="text-xs text-muted-foreground">Se muestran cuando el cliente activa el interruptor.</p>
                                </div>
                                <OptionList
                                    rows={secondary}
                                    emptyText="Aún no hay opciones alternativas."
                                    errors={errors}
                                    onAdd={() => addOption(true)}
                                    onChange={editOption}
                                    onRemove={removeOption}
                                    listError={errors.second_options}
                                />
                            </div>
                        )}
                    </Section>
                )}

                <div className="flex justify-end gap-2">
                    <Button type="button" variant="outline" asChild>
                        <Link href={route('question.index')}>Cancelar</Link>
                    </Button>
                    <Button type="submit" disabled={form.processing}>
                        {form.processing && <LoaderCircle className="animate-spin" />}
                        {isEdit ? 'Guardar cambios' : 'Crear pregunta'}
                    </Button>
                </div>
            </div>

            <QuestionPreview data={data} typeInfo={typeInfo} />
        </form>
    );
}

function QuestionPreview({ data, typeInfo }: { data: QuestionInput; typeInfo?: TypeQuestion }) {
    const [value, setValue] = useState<string | string[] | File | null | undefined>('');

    const previewQuestion = useMemo<QuestionData>(
        () => ({
            id: 0,
            question: data.question.trim() || 'Aquí aparecerá tu pregunta',
            required: data.required,
            stepper: data.stepper,
            text_switch: data.text_switch.trim() || null,
            max_options: data.max_options.trim() === '' ? null : Number(data.max_options) || null,
            options: data.options.filter((o) => o.option.trim() !== '').map((o, i) => ({ id: i + 1, option: o.option.trim(), second: o.second })),
            type_question: typeInfo ? { id: typeInfo.id, type: typeInfo.type, label: typeInfo.label } : null,
        }),
        [data.question, data.required, data.stepper, data.text_switch, data.max_options, data.options, typeInfo],
    );

    return (
        <Card className="gap-0 overflow-hidden py-0 lg:sticky lg:top-6">
            <div className="flex items-center justify-between gap-2 border-b px-5 py-3.5">
                <div className="flex items-center gap-2.5">
                    <Eye className="size-4 text-muted-foreground" />
                    <div>
                        <h2 className="text-sm font-semibold">Vista previa</h2>
                        <p className="text-xs text-muted-foreground">Así la verá el cliente.</p>
                    </div>
                </div>
                <span className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground">Paso {data.stepper}</span>
            </div>
            <div className="p-5">
                {/* key: al cambiar de tipo se reinicia el campo para no arrastrar un valor de otro tipo */}
                <QuestionField key={`${typeInfo?.id}-${data.options.length}`} question={previewQuestion} value={value} onChange={setValue} />
            </div>
        </Card>
    );
}
