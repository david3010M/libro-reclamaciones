import { useEffect, useState } from 'react';
import { useForm } from '@inertiajs/react';
import { Type, ListChecks, Plus, Trash2, LoaderCircle } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const OPTIONS_TYPES = [2, 3, 4, 10]; // select, radio, checkbox, select_options
const SECOND_OPTIONS_TYPE = 10; // select_options
const MAX_OPTIONS_TYPE = 4; // checkbox

const emptyForm = {
    question: '',
    title: '',
    description: '',
    required: false,
    stepper: '1',
    text_switch: '',
    max_options: '',
    type_question_id: '1',
    options: [],
};

let tempKey = 0;

export function QuestionDialog({ open, onOpenChange, question, typeQuestions }) {
    const isEdit = !!question;
    const form = useForm(emptyForm);
    const [options, setOptions] = useState([]);

    useEffect(() => {
        if (!open) return;
        if (question) {
            form.setData({
                question: question.question ?? '',
                title: question.title ?? '',
                description: question.description ?? '',
                required: !!question.required,
                stepper: String(question.stepper ?? '1'),
                text_switch: question.text_switch ?? '',
                max_options: question.max_options ?? '',
                type_question_id: String(question.type_question_id ?? '1'),
                options: [],
            });
            setOptions((question.options ?? []).map((o) => ({ key: `db-${o.id}`, id: o.id, option: o.option, second: !!o.second })));
        } else {
            form.reset();
            form.setData(emptyForm);
            setOptions([]);
        }
        form.clearErrors();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open, question?.id]);

    const typeId = Number(form.data.type_question_id);
    const showOptions = OPTIONS_TYPES.includes(typeId);
    const showSecondOptions = typeId === SECOND_OPTIONS_TYPE;
    const showMaxOptions = typeId === MAX_OPTIONS_TYPE;

    function addOption(second) {
        setOptions((prev) => [...prev, { key: `new-${tempKey++}`, option: '', second }]);
    }

    function updateOption(key, value) {
        setOptions((prev) => prev.map((o) => (o.key === key ? { ...o, option: value } : o)));
    }

    function removeOption(key) {
        setOptions((prev) => prev.filter((o) => o.key !== key));
    }

    function submit(e) {
        e.preventDefault();
        const payload = {
            ...form.data,
            options: options.map(({ id, option, second }) => (id ? { id, option, second } : { option, second })),
        };

        const onSuccess = () => onOpenChange(false);

        if (isEdit) {
            form.transform(() => payload).post(route('question.update', question.id), { onSuccess });
        } else {
            form.transform(() => payload).post(route('question.store'), { onSuccess });
        }
    }

    const primaryOptions = options.filter((o) => !o.second);
    const secondaryOptions = options.filter((o) => o.second);

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className={showOptions ? 'max-w-4xl' : 'max-w-xl'}>
                <DialogHeader>
                    <DialogTitle>{isEdit ? 'Editar Pregunta' : 'Nueva Pregunta'}</DialogTitle>
                </DialogHeader>

                <form onSubmit={submit} className="flex flex-col gap-6 md:flex-row md:justify-between">
                    <div className="w-full space-y-4">
                        <div className="flex items-center gap-2 text-foreground">
                            <Type className="h-5 w-5 text-muted-foreground" />
                            <h2 className="text-lg font-medium">Información Básica</h2>
                        </div>

                        <div>
                            <Label htmlFor="type_question_id">Tipo de Pregunta</Label>
                            <Select
                                disabled={isEdit}
                                value={form.data.type_question_id}
                                onValueChange={(v) => form.setData('type_question_id', v)}
                            >
                                <SelectTrigger id="type_question_id">
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
                        </div>

                        <div>
                            <Label htmlFor="question">Pregunta</Label>
                            <Input id="question" value={form.data.question} onChange={(e) => form.setData('question', e.target.value)} />
                            {form.errors.question && <p className="mt-1 text-sm text-destructive">{form.errors.question}</p>}
                        </div>

                        <div>
                            <Label htmlFor="title">Palabra Clave</Label>
                            <Input id="title" value={form.data.title} onChange={(e) => form.setData('title', e.target.value)} />
                            {form.errors.title && <p className="mt-1 text-sm text-destructive">{form.errors.title}</p>}
                        </div>

                        <div>
                            <Label htmlFor="description">Descripción</Label>
                            <Textarea id="description" value={form.data.description} onChange={(e) => form.setData('description', e.target.value)} />
                        </div>

                        <label className="inline-flex cursor-pointer items-center gap-3">
                            <Switch checked={form.data.required} onCheckedChange={(v) => form.setData('required', v)} />
                            <span className="text-xs font-medium text-foreground">Pregunta Obligatoria</span>
                        </label>

                        {showSecondOptions && (
                            <div>
                                <Label htmlFor="text_switch">Pregunta Alternativa</Label>
                                <Input id="text_switch" value={form.data.text_switch} onChange={(e) => form.setData('text_switch', e.target.value)} />
                            </div>
                        )}

                        <div className="flex justify-between gap-4">
                            {showMaxOptions && (
                                <div className="w-full">
                                    <Label htmlFor="max_options">Máx. Opciones</Label>
                                    <Input
                                        id="max_options"
                                        type="number"
                                        value={form.data.max_options}
                                        onChange={(e) => form.setData('max_options', e.target.value)}
                                    />
                                </div>
                            )}
                            <div className="w-full">
                                <Label htmlFor="stepper">Número de Paso</Label>
                                <Select value={form.data.stepper} onValueChange={(v) => form.setData('stepper', v)}>
                                    <SelectTrigger id="stepper">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="1">Paso 1</SelectItem>
                                        <SelectItem value="2">Paso 2</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>

                    {showOptions && (
                        <div className="flex w-full flex-col gap-4">
                            <div>
                                <div className="mb-2 flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-foreground">
                                        <ListChecks className="h-5 w-5 text-muted-foreground" />
                                        <h2 className="text-lg font-medium">Opciones</h2>
                                    </div>
                                    <Button type="button" variant="outline" size="sm" onClick={() => addOption(false)}>
                                        <Plus className="h-3 w-3" />
                                        Opción
                                    </Button>
                                </div>
                                <div className="grid grid-cols-1 gap-2">
                                    {primaryOptions.map((option) => (
                                        <div key={option.key} className="flex items-center gap-2">
                                            <Input value={option.option} onChange={(e) => updateOption(option.key, e.target.value)} />
                                            <Button type="button" variant="outline" size="icon" onClick={() => removeOption(option.key)}>
                                                <Trash2 className="h-3.5 w-3.5" />
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {showSecondOptions && (
                                <div>
                                    <div className="mb-2 mt-2 flex items-center justify-between border-t border-border pt-4">
                                        <div className="flex items-center gap-2 text-foreground">
                                            <ListChecks className="h-5 w-5 text-muted-foreground" />
                                            <h2 className="text-lg font-medium">Opciones Alternativas</h2>
                                        </div>
                                        <Button type="button" variant="outline" size="sm" onClick={() => addOption(true)}>
                                            <Plus className="h-3 w-3" />
                                            Opción
                                        </Button>
                                    </div>
                                    <div className="grid grid-cols-1 gap-2">
                                        {secondaryOptions.map((option) => (
                                            <div key={option.key} className="flex items-center gap-2">
                                                <Input value={option.option} onChange={(e) => updateOption(option.key, e.target.value)} />
                                                <Button type="button" variant="outline" size="icon" onClick={() => removeOption(option.key)}>
                                                    <Trash2 className="h-3.5 w-3.5" />
                                                </Button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </form>

                <div className="mt-2 flex justify-end gap-2">
                    <Button type="button" variant="secondary" onClick={() => onOpenChange(false)}>
                        Cancelar
                    </Button>
                    <Button onClick={submit} disabled={form.processing}>
                        {form.processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                        Guardar Cambios
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
