import { useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { Head, Link, router, usePage } from '@inertiajs/react';
import { errorToast, successToast } from '@/lib/toast';
import {
    ArrowLeft,
    ArrowRight,
    Check,
    ClipboardList,
    IdCard,
    LoaderCircle,
    Mail,
    MailCheck,
    MapPin,
    Phone,
    Send,
    ShieldCheck,
    Timer,
    User,
} from 'lucide-react';
import PublicLayout from '@/Layouts/PublicLayout';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogMedia,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { IconInput } from '@/components/public/IconInput';
import { validateCustomer, validateQuestions } from '@/lib/schemas/complaint';
import type { CustomerInput } from '@/lib/schemas/complaint';
import { cn } from '@/lib/utils';
import { QuestionField } from './QuestionField';
import type { QuestionData } from './QuestionField';

const STEPS = [
    { title: 'Lo ocurrido', description: 'Cuéntanos qué pasó, dónde y cuándo.', icon: ClipboardList },
    { title: 'Motivo y solución', description: 'Indica el motivo y si hubo una solución previa.', icon: ShieldCheck },
    { title: 'Tus datos', description: 'Para contactarte y confirmar el reclamo.', icon: User },
];

const CONFIRM_STEPS = [
    { icon: Send, title: 'Te enviamos un correo', text: 'A la dirección que registres abajo.' },
    { icon: MailCheck, title: 'Haces clic en “Confirmar reclamo”', text: 'Es el botón del correo y la forma de confirmar que el reclamo es tuyo.' },
    { icon: Timer, title: 'Tienes 48 horas', text: 'Pasado ese plazo, el reclamo se rechaza solo.' },
];

interface FormProps {
    form: { id: number; questions: QuestionData[] };
    correlatives: Record<string, string[]>;
}

type AnswerValue = string | string[] | File | null | undefined;

function pad(n: number) {
    return String(n).padStart(2, '0');
}

/** Fecha y hora del momento en que se abre el formulario. */
function initialAnswers(questions: QuestionData[]): Record<number, AnswerValue> {
    const now = new Date();
    const answers: Record<number, AnswerValue> = {};
    for (const q of questions) {
        const type = q.type_question?.type;
        if (type === 'date') answers[q.id] = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
        if (type === 'time') answers[q.id] = `${pad(now.getHours())}:${pad(now.getMinutes())}`;
    }
    return answers;
}

function CustomerField({
    id,
    label,
    icon,
    error,
    ...props
}: { id: string; label: string; icon: ReactNode; error?: string } & React.ComponentProps<'input'>) {
    return (
        <div className="flex flex-col gap-1.5">
            <Label htmlFor={id} className="text-[0.9375rem] font-semibold tracking-tight sm:text-sm sm:font-medium">
                {label}
                <span className="text-destructive"> *</span>
            </Label>
            <IconInput id={id} icon={icon} aria-invalid={!!error} className="h-11 text-base sm:h-10 sm:text-sm" {...props} />
            {error && (
                <p role="alert" className="text-sm text-destructive">
                    {error}
                </p>
            )}
        </div>
    );
}

export default function ComplaintForm({ form, correlatives }: FormProps) {
    const { company } = usePage<{ company: Company | null }>().props;
    const [step, setStep] = useState(1);
    const [answers, setAnswers] = useState<Record<number, AnswerValue>>(() => initialAnswers(form.questions));
    const [customer, setCustomer] = useState<CustomerInput>({ nombre: '', email: '', telefono: '', document: '', direccion: '' });
    const [errors, setErrors] = useState<Record<number, string>>({});
    const [customerErrors, setCustomerErrors] = useState<Record<string, string>>({});
    const [code, setCode] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [confirmOpen, setConfirmOpen] = useState(false);

    const questionsByStep = useMemo(() => {
        const map: Record<number, QuestionData[]> = { 1: [], 2: [] };
        for (const q of form.questions) {
            if (map[q.stepper]) map[q.stepper].push(q);
        }
        return map;
    }, [form.questions]);

    const meta = STEPS[step - 1];

    function setAnswer(questionId: number, value: AnswerValue) {
        setAnswers((prev) => ({ ...prev, [questionId]: value }));
        setErrors((prev) => {
            if (!prev[questionId]) return prev;
            const { [questionId]: _removed, ...rest } = prev;
            return rest;
        });
    }

    function setCustomerField(key: keyof CustomerInput, value: string) {
        setCustomer((prev) => ({ ...prev, [key]: value }));
        setCustomerErrors((prev) => {
            if (!prev[key]) return prev;
            const { [key]: _removed, ...rest } = prev;
            return rest;
        });
    }

    function onSelectOptionsChange(value: string) {
        const entry = correlatives[value];
        setCode(entry ? entry[0] : '');
    }

    function validateStep(currentStep: number) {
        const stepErrors = validateQuestions(questionsByStep[currentStep] ?? [], answers);
        setErrors(stepErrors);
        return Object.keys(stepErrors).length === 0;
    }

    function nextStep() {
        if (!validateStep(step)) return;
        setStep((s) => Math.min(s + 1, 3));
    }

    function prevStep() {
        setStep((s) => Math.max(s - 1, 1));
    }

    /** Valida el titular y abre el diálogo de confirmación. */
    function requestSubmit() {
        const found = validateCustomer(customer);
        setCustomerErrors(found);
        if (Object.keys(found).length > 0) return;
        setConfirmOpen(true);
    }

    async function submit() {
        setSubmitting(true);

        const formData = new FormData();
        Object.entries(customer).forEach(([key, val]) => formData.append(`customer[${key}]`, val));

        Object.entries(answers).forEach(([questionId, value]) => {
            if (value instanceof File) {
                formData.append('file', value);
                return;
            }
            if (Array.isArray(value)) {
                value.forEach((v) => formData.append(`answers[${questionId}][]`, v));
            } else if (value !== undefined && value !== null && value !== '') {
                formData.append(`answers[${questionId}][]`, value);
            }
        });

        try {
            const response = await fetch(route('form.submit'), {
                method: 'POST',
                headers: {
                    'X-CSRF-TOKEN': document.querySelector<HTMLMetaElement>('meta[name="csrf-token"]')?.content ?? '',
                    Accept: 'application/json',
                },
                body: formData,
            });

            if (response.status === 422) {
                handleServerErrors((await response.json()).errors ?? {});
                return;
            }
            if (!response.ok) throw new Error('No se pudo enviar el reclamo');

            const data = await response.json();
            successToast('Reclamo enviado correctamente');
            router.visit(`/reclamo/${data.token}`);
        } catch (err) {
            console.error(err);
            errorToast('Ocurrió un error al enviar el formulario');
            setConfirmOpen(false);
            setSubmitting(false);
        }
    }

    /** Lleva cada error del servidor a su campo y al paso donde está. */
    function handleServerErrors(serverErrors: Record<string, string[]>) {
        const questionErrors: Record<number, string> = {};
        const fieldErrors: Record<string, string> = {};
        let firstStep = 3;

        for (const [key, messages] of Object.entries(serverErrors)) {
            const message = messages[0];
            const q = /^answers\.(\d+)/.exec(key);
            const c = /^customer\.(\w+)/.exec(key);
            if (q) {
                const id = Number(q[1]);
                questionErrors[id] = message;
                const stepOf = form.questions.find((item) => item.id === id)?.stepper ?? 1;
                firstStep = Math.min(firstStep, stepOf);
            } else if (c) {
                fieldErrors[c[1]] = message;
            } else if (key === 'file') {
                const fileQuestion = form.questions.find((item) => item.type_question?.type === 'file');
                if (fileQuestion) {
                    questionErrors[fileQuestion.id] = message;
                    firstStep = Math.min(firstStep, fileQuestion.stepper);
                }
            }
        }

        setErrors(questionErrors);
        setCustomerErrors(fieldErrors);
        setStep(Object.keys(questionErrors).length > 0 ? firstStep : 3);
        setConfirmOpen(false);
        setSubmitting(false);
        errorToast('Revisa los campos marcados', Object.values(serverErrors)[0]?.[0]);
    }

    const stepper = (
        <ol>
            {STEPS.map((s, i) => {
                const num = i + 1;
                const done = step > num;
                const active = step === num;
                return (
                    <li key={s.title} aria-current={active ? 'step' : undefined} className="relative flex gap-3.5 pb-7 last:pb-0">
                        {i < STEPS.length - 1 && (
                            <span
                                aria-hidden
                                className={cn(
                                    'absolute bottom-1 left-4 top-10 w-px -translate-x-1/2 transition-colors duration-300',
                                    done ? 'bg-primary' : 'bg-border',
                                )}
                            />
                        )}
                        <span
                            className={cn(
                                'tabular relative flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold ring-1 transition-colors duration-300',
                                active && 'bg-primary text-primary-foreground ring-primary',
                                done && 'bg-primary/10 text-primary ring-primary/30',
                                !active && !done && 'bg-muted text-muted-foreground ring-border',
                            )}
                        >
                            {done ? <Check className="size-4" /> : num}
                        </span>
                        <div className="min-w-0 pt-1">
                            <p className={cn('text-sm font-medium leading-6 transition-colors', active || done ? 'text-foreground' : 'text-muted-foreground')}>
                                {s.title}
                            </p>
                            {active && <p className="text-xs leading-snug text-muted-foreground">{s.description}</p>}
                        </div>
                    </li>
                );
            })}
        </ol>
    );

    const questionField = (question: QuestionData, linear = false) => (
        <QuestionField
            key={question.id}
            question={question}
            value={answers[question.id]}
            onChange={(v) => setAnswer(question.id, v)}
            error={errors[question.id]}
            onSelectOptionsChange={onSelectOptionsChange}
            onFileError={(message) => setErrors((prev) => ({ ...prev, [question.id]: message }))}
            linear={linear}
        />
    );

    const step1 = questionsByStep[1];
    const compact = step1.filter((q) => !['textarea', 'file'].includes(q.type_question?.type ?? ''));
    const wide = step1.filter((q) => ['textarea', 'file'].includes(q.type_question?.type ?? ''));

    return (
        <>
            <Head title="Nuevo Reclamo" />
            <div className="grid gap-4 lg:h-full lg:min-h-0 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-10 lg:grid-rows-1">
                {/* Móvil: encabezado simple sobre el fondo, sin bloque de color */}
                <div className="space-y-3 px-1 lg:hidden">
                    <div className="flex items-center justify-between gap-3">
                        <h1 className="text-2xl font-semibold tracking-tight text-foreground">Nuevo reclamo</h1>
                        <span className="tabular text-sm font-medium text-muted-foreground">
                            {pad(step)} <span className="text-muted-foreground/50">/ {pad(STEPS.length)}</span>
                        </span>
                    </div>
                    <div className="flex gap-1.5" role="progressbar" aria-valuemin={1} aria-valuemax={STEPS.length} aria-valuenow={step} aria-label="Avance del formulario">
                        {STEPS.map((s, i) => (
                            <span key={s.title} className={cn('h-1 flex-1 rounded-full transition-colors duration-300', i < step ? 'bg-primary' : 'bg-foreground/10')} />
                        ))}
                    </div>
                </div>

                {/* Escritorio: texto y pasos sobre el mismo fondo, sin tarjeta */}
                <aside className="hidden min-h-0 flex-col px-2 pt-2 lg:flex">
                    <h1 className="text-3xl font-semibold leading-tight tracking-tight text-foreground">Nuevo reclamo</h1>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        Te toma unos minutos y queda registrado con un código único.
                    </p>

                    <dl className="mt-7 flex items-baseline justify-between border-y border-border py-3">
                        <dt className="text-sm text-muted-foreground">Tu código</dt>
                        <dd className="tabular text-lg font-semibold text-foreground">{code || '—'}</dd>
                    </dl>
                    {!code && <p className="mt-2 text-xs text-muted-foreground">Se asigna al elegir dónde ocurrió.</p>}

                    <div className="mt-8">{stepper}</div>

                    <p className="mt-auto pb-1 text-sm text-muted-foreground">
                        ¿Ya tienes un código?{' '}
                        <Link href={route('complaint.search')} className="font-medium text-foreground underline underline-offset-4">
                            Consulta tu reclamo
                        </Link>
                    </p>
                </aside>

                <Card className="relative min-h-0 gap-0 py-0 shadow-sm lg:h-full">
                    <CardHeader className="border-b py-4">
                        <CardTitle className="text-xl font-semibold tracking-tight">{meta.title}</CardTitle>
                        <CardDescription>{meta.description}</CardDescription>
                    </CardHeader>

                    <form
                        noValidate
                        className="flex min-h-0 flex-1 flex-col"
                        onSubmit={(e) => {
                            e.preventDefault();
                            if (step < 3) nextStep();
                            else requestSubmit();
                        }}
                    >
                        <CardContent className="flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto py-6">
                            {step === 1 && (
                                <>
                                    {compact.map((q) => questionField(q))}
                                    {wide.map((q) => questionField(q))}
                                </>
                            )}

                            {step === 2 && questionsByStep[2].map((q) => questionField(q, true))}

                            {step === 3 && (
                                <>
                                    <section
                                        aria-labelledby="confirm-title"
                                        className="rounded-2xl border border-primary/20 bg-primary/5 p-3 sm:p-4"
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                                <MailCheck className="size-5" />
                                            </span>
                                            <div>
                                                <h2 id="confirm-title" className="text-lg font-semibold leading-tight text-foreground">
                                                    Confirma tu reclamo por correo
                                                </h2>
                                                <p className="text-sm text-muted-foreground text-pretty">
                                                    Tu reclamo solo queda registrado si lo confirmas desde tu correo.
                                                </p>
                                            </div>
                                        </div>
                                        <ol className="mt-3 grid gap-2 sm:grid-cols-3">
                                            {CONFIRM_STEPS.map((item, i) => (
                                                <li key={item.title} className="flex gap-3 rounded-xl bg-card p-3 ring-1 ring-border">
                                                    <span className="tabular flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                                                        {i + 1}
                                                    </span>
                                                    <span className="min-w-0">
                                                        <span className="block text-sm font-semibold text-foreground">{item.title}</span>
                                                        <span className="block text-xs text-muted-foreground">{item.text}</span>
                                                    </span>
                                                </li>
                                            ))}
                                        </ol>
                                    </section>

                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <CustomerField
                                            id="nombre"
                                            label="Nombre completo"
                                            icon={<User />}
                                            placeholder="JUAN PÉREZ"
                                            autoComplete="name"
                                            maxLength={255}
                                            value={customer.nombre}
                                            error={customerErrors.nombre}
                                            onChange={(e) => setCustomerField('nombre', e.target.value.toUpperCase())}
                                        />
                                        <CustomerField
                                            id="email"
                                            label="Correo electrónico"
                                            type="email"
                                            icon={<Mail />}
                                            placeholder="correo@ejemplo.com"
                                            autoComplete="email"
                                            maxLength={255}
                                            value={customer.email}
                                            error={customerErrors.email}
                                            onChange={(e) => setCustomerField('email', e.target.value)}
                                        />
                                        <CustomerField
                                            id="telefono"
                                            label="Teléfono"
                                            type="tel"
                                            maxLength={9}
                                            icon={<Phone />}
                                            placeholder="9XXXXXXXX"
                                            autoComplete="tel"
                                            inputMode="numeric"
                                            value={customer.telefono}
                                            error={customerErrors.telefono}
                                            onChange={(e) => setCustomerField('telefono', e.target.value.replace(/\D/g, ''))}
                                        />
                                        <CustomerField
                                            id="document"
                                            label="Documento de identidad"
                                            maxLength={8}
                                            icon={<IdCard />}
                                            placeholder="8 dígitos"
                                            inputMode="numeric"
                                            value={customer.document}
                                            error={customerErrors.document}
                                            onChange={(e) => setCustomerField('document', e.target.value.replace(/\D/g, ''))}
                                        />
                                        <div className="sm:col-span-2">
                                            <CustomerField
                                                id="direccion"
                                                label="Dirección"
                                                icon={<MapPin />}
                                                placeholder="CALLE Y NÚMERO"
                                                autoComplete="street-address"
                                                maxLength={255}
                                                value={customer.direccion}
                                                error={customerErrors.direccion}
                                                onChange={(e) => setCustomerField('direccion', e.target.value.toUpperCase())}
                                            />
                                        </div>
                                    </div>
                                </>
                            )}
                        </CardContent>

                        <CardFooter className="justify-between border-t bg-card py-3 max-sm:sticky max-sm:bottom-0 max-sm:rounded-b-xl sm:py-4">
                            <Button type="button" variant="outline" className="max-sm:h-11 max-sm:text-base" onClick={prevStep} disabled={step <= 1}>
                                <ArrowLeft />
                                Anterior
                            </Button>
                            {step < 3 ? (
                                <Button type="submit" className="max-sm:h-11 max-sm:text-base">
                                    Siguiente
                                    <ArrowRight />
                                </Button>
                            ) : (
                                <Button type="submit" disabled={submitting} className="max-sm:h-11 max-sm:text-base">
                                    <Send />
                                    Enviar reclamo
                                </Button>
                            )}
                        </CardFooter>
                    </form>
                </Card>
            </div>

            <AlertDialog open={confirmOpen} onOpenChange={(open) => !submitting && setConfirmOpen(open)}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogMedia className="bg-primary/10 text-primary">
                            <MailCheck />
                        </AlertDialogMedia>
                        <AlertDialogTitle>¿Enviar tu reclamo?</AlertDialogTitle>
                        <AlertDialogDescription asChild>
                            <div className="space-y-3 text-left">
                                <p>
                                    Te enviaremos un correo a <strong className="text-foreground">{customer.email}</strong>.
                                </p>
                                <p className="rounded-lg bg-muted p-3 text-foreground">
                                    <strong>Debes responderlo en 48 horas</strong> para confirmar tu reclamo. Si no lo haces, se rechazará
                                    automáticamente.
                                </p>
                                <p>Revisa que tu correo esté bien escrito: no podrás cambiarlo después de enviar.</p>
                            </div>
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel disabled={submitting}>Revisar datos</AlertDialogCancel>
                        <AlertDialogAction
                            disabled={submitting}
                            onClick={(e) => {
                                e.preventDefault();
                                submit();
                            }}
                        >
                            {submitting ? <LoaderCircle className="animate-spin" /> : <Send />}
                            {submitting ? 'Enviando…' : 'Sí, enviar reclamo'}
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
}

ComplaintForm.layout = (page: ReactNode) => <PublicLayout fit>{page}</PublicLayout>;
