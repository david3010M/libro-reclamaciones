import { useMemo, useState } from 'react';
import { Head, router } from '@inertiajs/react';
import { toast } from 'sonner';
import { User, Mail, Phone, IdCard, Send, LoaderCircle } from 'lucide-react';
import PublicLayout from '@/Layouts/PublicLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { QuestionField } from './QuestionField';

const STEPS = [1, 2, 3];

export default function ComplaintForm({ form, correlatives }) {
    const [step, setStep] = useState(1);
    const [answers, setAnswers] = useState({});
    const [customer, setCustomer] = useState({ nombre: '', email: '', telefono: '', document: '', direccion: '' });
    const [errors, setErrors] = useState({});
    const [code, setCode] = useState('Código');
    const [submitting, setSubmitting] = useState(false);

    const questionsByStep = useMemo(() => {
        const map = { 1: [], 2: [] };
        for (const q of form.questions) {
            if (map[q.stepper]) map[q.stepper].push(q);
        }
        return map;
    }, [form.questions]);

    function setAnswer(questionId, value) {
        setAnswers((prev) => ({ ...prev, [questionId]: value }));
    }

    function onSelectOptionsChange(value) {
        const entry = correlatives[value];
        setCode(entry ? entry[0] : 'Código');
    }

    function validateStep(currentStep) {
        const stepErrors = {};
        for (const q of questionsByStep[currentStep] ?? []) {
            const value = answers[q.id];
            const isEmpty = value === undefined || value === null || value === '' || (Array.isArray(value) && value.length === 0);
            if (q.required && isEmpty) {
                stepErrors[q.id] = 'Este campo es obligatorio.';
            }
            if (q.max_options && Array.isArray(value) && value.length > q.max_options) {
                stepErrors[q.id] = `No puedes seleccionar más de ${q.max_options} opciones.`;
            }
        }
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

    function handleSubmit(e) {
        e.preventDefault();
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

        fetch(route('form.submit'), {
            method: 'POST',
            headers: {
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.content ?? '',
                Accept: 'application/json',
            },
            body: formData,
        })
            .then(async (response) => {
                if (!response.ok) throw new Error('No se pudo enviar el reclamo');
                return response.json();
            })
            .then((data) => {
                toast.success('Reclamo enviado correctamente');
                router.visit(`/reclamo/${data.complaintCode}`);
            })
            .catch((err) => {
                console.error(err);
                toast.error('Ocurrió un error al enviar el formulario');
                setSubmitting(false);
            });
    }

    return (
        <>
            <Head title="Nuevo Reclamo" />
            <div className="mx-auto w-full max-w-2xl">
                <Card>
                    <CardContent className="p-6">
                        <div className="mb-6 flex items-center justify-between">
                            <h2 className="text-2xl font-medium text-foreground">Nuevo Reclamo</h2>
                            <span className="text-xl font-bold text-primary">{code}</span>
                        </div>

                        {/* Stepper */}
                        <div className="mb-8">
                            <div className="flex items-center justify-between">
                                {STEPS.map((num) => (
                                    <div key={num} className="flex flex-col items-center">
                                        <div
                                            className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium ${
                                                step >= num ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                                            }`}
                                        >
                                            {num}
                                        </div>
                                        <span className="mt-2 text-sm text-muted-foreground">Paso {num}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4 h-2 rounded-full bg-muted">
                                <div
                                    className="h-full rounded-full bg-primary transition-all duration-300 ease-in-out"
                                    style={{ width: `${((step - 1) / 2) * 100}%` }}
                                />
                            </div>
                        </div>

                        <form onSubmit={handleSubmit}>
                            {(step === 1 || step === 2) && (
                                <div className="space-y-4">
                                    {questionsByStep[step].map((question) => (
                                        <QuestionField
                                            key={question.id}
                                            question={question}
                                            value={answers[question.id]}
                                            onChange={(v) => setAnswer(question.id, v)}
                                            error={errors[question.id]}
                                            onSelectOptionsChange={onSelectOptionsChange}
                                        />
                                    ))}
                                </div>
                            )}

                            {step === 3 && (
                                <div className="space-y-4">
                                    <p className="mb-3 text-sm text-muted-foreground">
                                        Por favor, revisa la información antes de enviar. Recuerde que debe confirmar el
                                        reclamo mediante su correo electrónico.
                                    </p>

                                    <div>
                                        <Label htmlFor="nombre">
                                            Nombre Completo<span className="text-destructive"> *</span>
                                        </Label>
                                        <Input
                                            id="nombre"
                                            icon={<User />}
                                            placeholder="Juan Perez"
                                            required
                                            value={customer.nombre}
                                            onChange={(e) => setCustomer({ ...customer, nombre: e.target.value })}
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="email">
                                            Correo Electrónico<span className="text-destructive"> *</span>
                                        </Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            icon={<Mail />}
                                            placeholder="example@gmail.com"
                                            required
                                            value={customer.email}
                                            onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="telefono">
                                            Teléfono<span className="text-destructive"> *</span>
                                        </Label>
                                        <Input
                                            id="telefono"
                                            type="tel"
                                            maxLength={9}
                                            icon={<Phone />}
                                            placeholder="9********"
                                            required
                                            value={customer.telefono}
                                            onChange={(e) => setCustomer({ ...customer, telefono: e.target.value })}
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="document">
                                            Documento<span className="text-destructive"> *</span>
                                        </Label>
                                        <Input
                                            id="document"
                                            maxLength={8}
                                            icon={<IdCard />}
                                            placeholder="1*******"
                                            required
                                            value={customer.document}
                                            onChange={(e) => setCustomer({ ...customer, document: e.target.value })}
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="direccion">
                                            Dirección<span className="text-destructive"> *</span>
                                        </Label>
                                        <Input
                                            id="direccion"
                                            icon={<Send />}
                                            placeholder="Calle 123"
                                            required
                                            value={customer.direccion}
                                            onChange={(e) => setCustomer({ ...customer, direccion: e.target.value })}
                                        />
                                    </div>
                                </div>
                            )}

                            <div className="mt-6 flex justify-between">
                                <Button type="button" variant="secondary" onClick={prevStep} disabled={step <= 1}>
                                    Anterior
                                </Button>
                                {step < 3 ? (
                                    <Button type="button" onClick={nextStep}>
                                        Siguiente
                                    </Button>
                                ) : (
                                    <Button type="submit" disabled={submitting}>
                                        {submitting && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                        Enviar Reclamo
                                    </Button>
                                )}
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}

ComplaintForm.layout = (page) => <PublicLayout>{page}</PublicLayout>;
