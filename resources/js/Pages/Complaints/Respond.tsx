import { useState } from 'react';
import type { FormEvent } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { ArrowLeft, LoaderCircle, MessageSquare, Send } from 'lucide-react';
import AdminLayout from '@/Layouts/AdminLayout';
import { PageHeader } from '@/components/admin/PageHeader';
import { ComplaintSheet } from '@/components/ComplaintSheet';
import type { SheetAnswer } from '@/components/ComplaintSheet';
import { ConfirmDialog } from '@/components/ConfirmDialog';
import { FileDropzone } from '@/components/public/FileDropzone';
import { StatusBadge } from '@/components/public/StatusBadge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { formatDate } from '@/components/public/format';
import { errorToast } from '@/lib/toast';

type ComplaintData = {
    id: number;
    complaintCode: string;
    status: string;
    created_at: string;
    customer: { name: string; email: string } | null;
    answers: SheetAnswer[];
};

const MAX_MB = 10;
const validateAttachment = (file: File) => (file.size > MAX_MB * 1024 * 1024 ? `“${file.name}” pesa más de ${MAX_MB} MB.` : null);

export default function ComplaintRespond({ complaint }: { complaint: ComplaintData }) {
    const form = useForm<{ answer: string; attachments: File[] }>({ answer: '', attachments: [] });
    const [confirming, setConfirming] = useState(false);
    const canSend = form.data.answer.trim().length > 0;
    const email = complaint.customer?.email;

    function ask(e: FormEvent) {
        e.preventDefault();
        if (canSend) setConfirming(true);
    }

    function send() {
        form.post(route('complaint.response', complaint.id), {
            forceFormData: true,
            onFinish: () => setConfirming(false),
        });
    }

    return (
        <AdminLayout title={`Responder ${complaint.complaintCode}`}>
            <Head title={`Responder ${complaint.complaintCode}`} />

            <div className="flex flex-col gap-4">
                <Button asChild variant="ghost" size="sm" className="-ml-2 w-fit">
                    <Link href={route('complaint.view', complaint.id)}>
                        <ArrowLeft />
                        Volver al reclamo
                    </Link>
                </Button>

                <PageHeader
                    icon={MessageSquare}
                    title={`Responder reclamo ${complaint.complaintCode}`}
                    description={`${complaint.customer?.name ?? 'Cliente'} · registrado el ${formatDate(complaint.created_at, true)}`}
                >
                    <StatusBadge status={complaint.status} />
                </PageHeader>
            </div>

            <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_400px]">
                <ComplaintSheet answers={complaint.answers} />

                <Card className="gap-0 overflow-hidden py-0 lg:sticky lg:top-6">
                    <div className="border-b px-5 py-3.5">
                        <h2 className="text-sm font-semibold">Tu respuesta</h2>
                        <p className="text-xs text-muted-foreground">Se envía al cliente por correo y queda en su hoja de reclamación.</p>
                    </div>

                    <form onSubmit={ask} className="grid gap-5 p-5">
                        <div className="grid gap-2">
                            <Label htmlFor="answer">Respuesta</Label>
                            <Textarea
                                id="answer"
                                rows={9}
                                placeholder="Escribe la respuesta para el cliente"
                                value={form.data.answer}
                                aria-invalid={!!form.errors.answer}
                                onChange={(e) => form.setData('answer', e.target.value)}
                            />
                            {form.errors.answer && <p role="alert" className="text-sm text-destructive">{form.errors.answer}</p>}
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="attachments">Archivos adjuntos</Label>
                            <FileDropzone
                                id="attachments"
                                multiple
                                accept=""
                                hint={`Cualquier formato · máx. ${MAX_MB} MB cada uno`}
                                validate={validateAttachment}
                                files={form.data.attachments}
                                onChange={(files) => form.setData('attachments', files)}
                                onError={errorToast}
                            />
                        </div>

                        <Button type="submit" size="lg" disabled={!canSend || form.processing}>
                            {form.processing ? <LoaderCircle className="animate-spin" /> : <Send />}
                            Enviar respuesta
                        </Button>
                    </form>
                </Card>
            </div>

            <ConfirmDialog
                open={confirming}
                onOpenChange={setConfirming}
                icon={Send}
                title="Enviar respuesta"
                description="Revisa el texto antes de enviarlo: no se puede editar después."
                subject={`Reclamo ${complaint.complaintCode}`}
                consequences={[
                    email ? `Se envía la respuesta a ${email} por correo.` : 'Se envía la respuesta al cliente por correo.',
                    form.data.attachments.length > 0
                        ? `Se adjuntan ${form.data.attachments.length} ${form.data.attachments.length === 1 ? 'archivo' : 'archivos'}.`
                        : 'No se adjunta ningún archivo.',
                    'El reclamo pasa a “Atendido” y luego a “Archivado”.',
                    'El plazo de respuesta deja de correr.',
                ]}
                confirmLabel="Enviar respuesta"
                onConfirm={send}
                loading={form.processing}
            />
        </AdminLayout>
    );
}
