import type { ReactNode } from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import { ArrowLeft, CircleAlert, FileDown, FileText, Mail, Paperclip } from 'lucide-react';
import AdminLayout from '@/Layouts/AdminLayout';
import { PageHeader } from '@/components/admin/PageHeader';
import { StatusBadge } from '@/components/public/StatusBadge';
import { formatDate } from '@/components/public/format';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ComplaintSheet } from '@/components/ComplaintSheet';
import { STATUS } from '@/lib/complaintStatus';
import { cn } from '@/lib/utils';
import { useComplaintActions } from './useComplaintActions';

type Answer = { id: number; answer: string; question?: { id: number; title?: string; question?: string; type_question_id?: number } };

type ComplaintData = {
    id: number;
    token: string;
    number: string;
    complaintCode: string;
    status: string;
    days: number;
    timeToAnswer: number;
    answer: string | null;
    verified: boolean;
    rejected: boolean;
    created_at: string;
    customer: { name: string; document: string; email: string; phone: string; address: string } | null;
    sede: { name: string; fullName: string | null; address: string | null; correlative: string | null } | null;
    answers: Answer[];
    advances: { id?: number; status: string; date: string }[];
    attachments: { id: number; route: string }[];
    mails: { id: number; type: string; recipient: string; subject: string | null; status: 'sent' | 'failed'; attachments: number; error: string | null; created_at: string }[];
};

const MAIL_TYPE: Record<string, string> = {
    verify: 'Verificación del correo',
    confirm: 'Reclamo registrado',
    new_company: 'Aviso a la empresa',
    process: 'Reclamo en proceso',
    extend: 'Plazo ampliado',
    response: 'Respuesta al cliente',
    reject: 'Reclamo rechazado',
};

type Mode = 'active' | 'done' | 'closed';

const fileName = (route: string) => route.split('/').pop() ?? route;
const yesNo = (v: boolean) => (v ? 'Sí' : 'No');

function SectionTitle({ title, description }: { title: string; description?: string }) {
    return (
        <div className="border-b px-5 py-3.5">
            <h2 className="text-sm font-semibold">{title}</h2>
            {description && <p className="text-xs text-muted-foreground">{description}</p>}
        </div>
    );
}

/** Fila etiqueta / valor de las tablas laterales. */
function Row({ label, children }: { label: string; children: ReactNode }) {
    return (
        <div className="grid grid-cols-[6.5rem_minmax(0,1fr)] gap-3 px-5 py-3 text-sm">
            <dt className="text-muted-foreground">{label}</dt>
            <dd className="min-w-0 text-foreground">{children}</dd>
        </div>
    );
}

function Fact({ label, children }: { label: string; children: ReactNode }) {
    return (
        <div className="min-w-0 px-5 py-4">
            <dt className="mb-1.5 text-xs text-muted-foreground">{label}</dt>
            <dd className="grid gap-0.5">{children}</dd>
        </div>
    );
}

/** El plazo en una línea y una barra fina: lo que importa es el número de días. */
function Deadline({ mode, remaining, total }: { mode: Mode; remaining: number; total: number }) {
    if (mode !== 'active') {
        return <p className="text-sm font-medium">{mode === 'done' ? 'Respondido' : 'Sin plazo activo'}</p>;
    }
    const safe = Math.max(total, 1);
    const pct = Math.min(Math.max(((safe - remaining) / safe) * 100, 0), 100);
    const late = remaining < 1;
    return (
        <>
            <p className={cn('text-sm font-medium tabular-nums', late && 'text-destructive')}>
                {late ? 'Plazo vencido' : `${remaining} ${remaining === 1 ? 'día restante' : 'días restantes'}`}
            </p>
            <div className="my-1 h-1 w-full overflow-hidden rounded-full bg-muted">
                <div className={cn('h-full rounded-full', late ? 'bg-destructive' : remaining < 5 ? 'bg-amber-500' : 'bg-primary')} style={{ width: `${pct}%` }} />
            </div>
            <p className="text-xs text-muted-foreground">de {total} días</p>
        </>
    );
}

export default function ComplaintShow({ complaint }: { complaint: ComplaintData }) {
    const { company } = usePage<{ company: Company | null }>().props;
    const { actions, dialogs } = useComplaintActions();

    const current = complaint.status;
    const answered = !!complaint.answer && complaint.answer !== 'Pendiente';
    const closed = current === STATUS.REJECTED || current === STATUS.REGISTER_TO_VERIFY;
    const mode: Mode = current === STATUS.ARCHIVED || current === STATUS.ATTENDED ? 'done' : closed ? 'closed' : 'active';
    const customer = complaint.customer;

    return (
        <AdminLayout title={`Reclamo ${complaint.complaintCode}`}>
            <Head title={`Reclamo ${complaint.complaintCode}`} />

            <div className="flex flex-col gap-4">
                <Button asChild variant="ghost" size="sm" className="-ml-2 w-fit">
                    <Link href={route('complaint.index')}>
                        <ArrowLeft />
                        Volver a reclamos
                    </Link>
                </Button>

                <PageHeader icon={FileText} title={`Reclamo ${complaint.complaintCode}`} description={`Registrado el ${formatDate(complaint.created_at, true)}`}>
                    <StatusBadge status={current} className="mr-1" />
                    {actions(complaint, { labeled: true })}
                </PageHeader>
            </div>

            {/* Lo primero que se necesita para decidir: plazo, quién y dónde. */}
            <Card className="gap-0 overflow-hidden py-0">
                <dl className="grid divide-y sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
                    <Fact label="Plazo de respuesta">
                        <Deadline mode={mode} remaining={complaint.timeToAnswer} total={complaint.days} />
                    </Fact>
                    <Fact label="Cliente">
                        <p className="truncate text-sm font-medium">{customer?.name ?? '—'}</p>
                        <p className="text-xs tabular-nums text-muted-foreground">Doc. {customer?.document ?? '—'}</p>
                    </Fact>
                    <Fact label="Sede">
                        <p className="truncate text-sm font-medium">{complaint.sede?.name ?? '—'}</p>
                        <p className="truncate text-xs text-muted-foreground">{complaint.sede?.address ?? complaint.sede?.fullName ?? ' '}</p>
                    </Fact>
                    <Fact label="Registrado">
                        <p className="text-sm font-medium tabular-nums">{formatDate(complaint.created_at, true)}</p>
                        <p className="text-xs text-muted-foreground">{complaint.verified ? 'Confirmado por el cliente' : 'Sin confirmar por el cliente'}</p>
                    </Fact>
                </dl>
            </Card>

            <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
                <div className="flex flex-col gap-6">
                    <ComplaintSheet answers={complaint.answers} />

                    <Card className="gap-0 overflow-hidden py-0">
                        <SectionTitle title="Respuesta" description={answered ? 'Enviada al cliente por correo.' : 'Aún no se ha respondido este reclamo.'} />
                        <div className="grid gap-4 p-5">
                            {answered ? (
                                <>
                                    <p className="whitespace-pre-line rounded-lg bg-muted p-4 text-sm leading-relaxed text-foreground">{complaint.answer}</p>
                                    {complaint.attachments.length > 0 && (
                                        <div>
                                            <p className="mb-2 flex items-center gap-1.5 text-sm font-medium">
                                                <Paperclip className="size-4" />
                                                Archivos adjuntos
                                            </p>
                                            <ul className="grid gap-2 sm:grid-cols-2">
                                                {complaint.attachments.map((f) => {
                                                    const name = fileName(f.route);
                                                    return (
                                                        <li key={f.id}>
                                                            <Button asChild variant="outline" className="w-full justify-start">
                                                                <a href={`/storage/${name}`} target="_blank" rel="noreferrer" download>
                                                                    <FileDown />
                                                                    <span className="truncate">{name.replace(/^\d+_/, '')}</span>
                                                                </a>
                                                            </Button>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <p className="text-sm text-muted-foreground">
                                    {current === STATUS.IN_PROCESS ? 'Usa “Responder” para enviar la respuesta al cliente.' : 'La respuesta estará disponible cuando se atienda el reclamo.'}
                                </p>
                            )}
                        </div>
                    </Card>
                </div>

                <aside className="flex flex-col gap-6">
                    <Card className="gap-0 overflow-hidden py-0">
                        <SectionTitle title="Contacto del cliente" />
                        <dl className="divide-y">
                            <Row label="Correo">
                                <a href={`mailto:${customer?.email}`} className="break-all hover:underline">
                                    {customer?.email}
                                </a>
                            </Row>
                            <Row label="Teléfono">
                                <a href={`tel:${customer?.phone}`} className="tabular-nums hover:underline">
                                    {customer?.phone}
                                </a>
                            </Row>
                            <Row label="Dirección">{customer?.address || '—'}</Row>
                        </dl>
                    </Card>

                    <Card className="gap-0 overflow-hidden py-0">
                        <SectionTitle title="Registro" />
                        <dl className="divide-y">
                            <Row label="Código">{complaint.complaintCode}</Row>
                            <Row label="Número">{complaint.number}</Row>
                            <Row label="Empresa">{company?.name ?? '—'}</Row>
                            <Row label="Confirmado">{yesNo(complaint.verified)}</Row>
                            <Row label="Rechazado">{yesNo(complaint.rejected)}</Row>
                        </dl>
                    </Card>

                    <Card className="gap-0 overflow-hidden py-0">
                        <SectionTitle title="Historial" description="Del más reciente al más antiguo." />
                        <ol className="divide-y">
                            {complaint.advances.map((adv, i) => (
                                <li key={`${adv.status}-${adv.date}`} className="flex items-center justify-between gap-3 px-5 py-3">
                                    <StatusBadge status={adv.status} />
                                    <span className={cn('text-xs tabular-nums', i === 0 ? 'text-foreground' : 'text-muted-foreground')}>{formatDate(adv.date, true)}</span>
                                </li>
                            ))}
                            {complaint.advances.length === 0 && <li className="px-5 py-4 text-sm text-muted-foreground">Sin movimientos todavía.</li>}
                        </ol>
                    </Card>

                    <Card className="gap-0 overflow-hidden py-0">
                        <SectionTitle title="Correos enviados" description="Constancia de lo que se envió por este reclamo." />
                        <ol className="divide-y">
                            {(complaint.mails ?? []).map((m) => (
                                <li key={m.id} className="grid gap-0.5 px-5 py-3 text-sm">
                                    <div className="flex items-center justify-between gap-3">
                                        <span className="flex items-center gap-1.5 font-medium">
                                            {m.status === 'sent' ? <Mail className="size-3.5 text-muted-foreground" /> : <CircleAlert className="size-3.5 text-destructive" />}
                                            {MAIL_TYPE[m.type] ?? m.type}
                                        </span>
                                        <span className="text-xs text-muted-foreground tabular-nums">{formatDate(m.created_at, true)}</span>
                                    </div>
                                    <p className="truncate text-xs text-muted-foreground">
                                        {m.recipient}
                                        {m.attachments > 0 && ` · ${m.attachments} ${m.attachments === 1 ? 'adjunto' : 'adjuntos'}`}
                                    </p>
                                    {m.status === 'failed' && <p className="text-xs text-destructive">No se pudo enviar{m.error ? `: ${m.error}` : '.'}</p>}
                                </li>
                            ))}
                            {(complaint.mails ?? []).length === 0 && <li className="px-5 py-4 text-sm text-muted-foreground">Aún no se registran correos.</li>}
                        </ol>
                    </Card>
                </aside>
            </div>

            {dialogs}
        </AdminLayout>
    );
}
