import { useState } from 'react';
import type { ReactNode } from 'react';
import { Head, Link } from '@inertiajs/react';
import {
    ArrowLeft,
    BadgeCheck,
    CalendarDays,
    Check,
    CircleDot,
    Clock,
    Copy,
    FileDown,
    Globe,
    Hourglass,
    Mail,
    MessageSquareText,
    Paperclip,
    Phone,
    ShieldAlert,
    UserRound,
} from 'lucide-react';
import { errorToast, successToast } from '@/lib/toast';
import PublicLayout from '@/Layouts/PublicLayout';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ComplaintSheet } from '@/components/ComplaintSheet';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { CompanyMark } from '@/components/public/CompanyMark';
import { DeadlineGauge } from '@/components/public/DeadlineGauge';
import { StatusBadge } from '@/components/public/StatusBadge';
import { formatDate, initials, maskEmail, maskPhone } from '@/components/public/format';
import { STATUS } from '@/lib/complaintStatus';
import { cn } from '@/lib/utils';

interface Advance {
    status: string;
    date: string;
}
interface Answer {
    id: number;
    answer: string;
    question?: { id: number; title?: string; question?: string; type_question_id?: number };
}
interface Attachment {
    id: number;
    route: string;
}
interface ComplaintData {
    id: number;
    complaintCode: string;
    token: string;
    answer: string | null;
    status: string;
    days: number;
    timeToAnswer: number;
    created_at: string;
    customer?: { name: string; document: string; phone: string; email: string };
    advances: Advance[];
    answers: Answer[];
    attachments: Attachment[];
}

const STAGES = [
    { label: 'Registrado', hint: 'Confirmado por correo' },
    { label: 'En proceso', hint: 'La empresa lo revisa' },
    { label: 'Respondido', hint: 'Respuesta enviada' },
];

function stageIndex(status: string): number {
    switch (status) {
        case STATUS.IN_PROCESS:
            return 1;
        case STATUS.ATTENDED:
        case STATUS.ARCHIVED:
            return 2;
        case STATUS.REGISTER:
            return 0;
        default:
            return -1;
    }
}

function fileName(route: string): string {
    return route.split('/').pop() ?? route;
}

function Stat({ icon: Icon, label, children }: { icon: typeof Clock; label: string; children: ReactNode }) {
    return (
        <div className="flex items-start gap-3 px-5 py-4">
            <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="size-4" />
            </span>
            <div className="min-w-0">
                <p className="text-xs text-muted-foreground">{label}</p>
                <div className="mt-0.5 text-sm font-medium text-foreground">{children}</div>
            </div>
        </div>
    );
}

export default function AnswerShow({ complaint, company }: { complaint: ComplaintData; company: Company | null }) {
    const [copied, setCopied] = useState(false);
    const current = complaint.advances?.[0]?.status ?? complaint.status;
    const stage = stageIndex(current);
    const isRejected = current === STATUS.REJECTED;
    const isVerifying = current === STATUS.REGISTER_TO_VERIFY;
    const isDone = stage === 2;
    const isPending = !complaint.answer || complaint.answer === 'Pendiente';
    const mode = isDone ? 'done' : isRejected ? 'closed' : isVerifying ? 'pending' : 'active';
    const progress = isVerifying ? 8 : isRejected ? 0 : [34, 67, 100][stage] ?? 0;

    const kind = complaint.answers?.find((a) => /queja o reclamo/i.test(a.question?.question ?? ''))?.answer;
    const place = complaint.answers?.[0]?.answer;
    const customer = complaint.customer;

    async function copyCode() {
        try {
            await navigator.clipboard.writeText(complaint.complaintCode);
            setCopied(true);
            successToast('Código copiado');
            setTimeout(() => setCopied(false), 1800);
        } catch {
            errorToast('No se pudo copiar el código');
        }
    }

    return (
        <>
            <Head title={`Reclamo ${complaint.complaintCode}`} />
            <div className="space-y-6">
                <Button asChild variant="ghost" size="sm" className="-ml-2">
                    <Link href={route('complaint.search')}>
                        <ArrowLeft />
                        Buscar otro reclamo
                    </Link>
                </Button>

                {/* Hoja de reclamación: cabecera de marca + perforación + datos clave */}
                <Card className="overflow-hidden pt-0">
                    <div className="flex flex-col gap-6 bg-primary px-6 py-7 text-primary-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
                        <div className="flex items-center gap-4">
                            <CompanyMark company={company} className="size-14 ring-primary-foreground/30" />
                            <div className="leading-tight">
                                <p className="text-sm opacity-80">{company?.name}</p>
                                <p className="text-sm font-medium">Hoja de reclamación</p>
                            </div>
                        </div>
                        <div className="sm:text-right">
                            <p className="text-xs uppercase tracking-wider opacity-75">Código</p>
                            <div className="flex items-center gap-2 sm:justify-end">
                                <span className="tabular text-3xl font-semibold tracking-tight sm:text-4xl">
                                    {complaint.complaintCode}
                                </span>
                                <Button
                                    type="button"
                                    variant="secondary"
                                    size="icon-sm"
                                    onClick={copyCode}
                                    aria-label="Copiar código"
                                >
                                    {copied ? <Check /> : <Copy />}
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="perforation text-border">
                        <span className="perforation-notch -left-3" />
                        <span className="perforation-notch -right-3" />
                    </div>

                    <div className="grid divide-y divide-border sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
                        <Stat icon={CircleDot} label="Estado">
                            <StatusBadge status={current} />
                        </Stat>
                        <Stat icon={CalendarDays} label="Registrado el">
                            {formatDate(complaint.created_at)}
                        </Stat>
                        <Stat icon={BadgeCheck} label="Tipo">
                            {kind ?? '—'}
                        </Stat>
                        <Stat icon={Globe} label="Lugar">
                            <span className="line-clamp-2">{place ?? '—'}</span>
                        </Stat>
                    </div>
                </Card>

                {isRejected && (
                    <Alert variant="destructive">
                        <ShieldAlert />
                        <AlertTitle>Este reclamo fue rechazado</AlertTitle>
                        <AlertDescription>
                            No se confirmó dentro del plazo o fue descartado. Si aún necesitas ayuda, registra uno nuevo.
                        </AlertDescription>
                    </Alert>
                )}
                {isVerifying && (
                    <Alert>
                        <Mail />
                        <AlertTitle>Falta confirmar tu reclamo</AlertTitle>
                        <AlertDescription>
                            Te enviamos un correo con el enlace de confirmación. Tienes 48 horas para hacerlo.
                        </AlertDescription>
                    </Alert>
                )}

                <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
                    <div className="space-y-6">
                        {/* Seguimiento */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Seguimiento</CardTitle>
                                <CardDescription>
                                    Última actualización: {formatDate(complaint.advances?.[0]?.date, true)}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div>
                                    <Progress value={progress} className="h-2" aria-label="Avance del reclamo" />
                                    <ol className="mt-4 grid grid-cols-3 gap-2">
                                        {STAGES.map((s, i) => {
                                            const reached = i <= stage;
                                            return (
                                                <li key={s.label} className="flex flex-col gap-1">
                                                    <span
                                                        className={cn(
                                                            'flex size-7 items-center justify-center rounded-full text-xs font-semibold',
                                                            reached
                                                                ? 'bg-primary text-primary-foreground'
                                                                : 'bg-muted text-muted-foreground',
                                                        )}
                                                    >
                                                        {reached && i < stage ? <Check className="size-3.5" /> : i + 1}
                                                    </span>
                                                    <span className={cn('text-sm font-medium', reached ? 'text-foreground' : 'text-muted-foreground')}>
                                                        {s.label}
                                                    </span>
                                                    <span className="hidden text-xs text-muted-foreground sm:block">{s.hint}</span>
                                                </li>
                                            );
                                        })}
                                    </ol>
                                </div>

                                <Separator />

                                <ol className="space-y-0">
                                    {complaint.advances?.map((advance, i) => (
                                        <li key={`${advance.status}-${advance.date}`} className="flex gap-3">
                                            <div className="flex flex-col items-center">
                                                <span
                                                    className={cn(
                                                        'flex size-6 items-center justify-center rounded-full',
                                                        i === 0
                                                            ? 'bg-primary text-primary-foreground'
                                                            : 'bg-muted text-muted-foreground',
                                                    )}
                                                >
                                                    <Check className="size-3.5" />
                                                </span>
                                                {i < complaint.advances.length - 1 && <span className="my-1 w-px flex-1 bg-border" />}
                                            </div>
                                            <div className="pb-5">
                                                <StatusBadge status={advance.status} />
                                                <p className="mt-1 text-xs text-muted-foreground">
                                                    {formatDate(advance.date, true)}
                                                </p>
                                            </div>
                                        </li>
                                    ))}
                                </ol>
                            </CardContent>
                        </Card>

                        {/* Respuesta */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Respuesta de {company?.name ?? 'la empresa'}</CardTitle>
                                <CardDescription>
                                    {isPending ? 'Aún no hay respuesta registrada.' : 'Esta es la respuesta oficial a tu reclamo.'}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {isPending ? (
                                    <div className="flex flex-col items-center gap-2 rounded-xl border border-dashed border-border bg-muted/50 px-6 py-8 text-center">
                                        <span className="flex size-10 items-center justify-center rounded-full bg-card text-muted-foreground ring-1 ring-border">
                                            <Hourglass className="size-5" />
                                        </span>
                                        <p className="text-sm font-medium text-foreground">Estamos revisando tu reclamo</p>
                                        <p className="max-w-sm text-sm text-muted-foreground">
                                            Cuando la empresa responda, verás el mensaje y los archivos aquí y recibirás un correo.
                                        </p>
                                    </div>
                                ) : (
                                    <>
                                        <div className="flex gap-3 rounded-xl bg-muted p-4">
                                            <MessageSquareText className="mt-0.5 size-5 shrink-0 text-primary" />
                                            <p className="whitespace-pre-line text-sm leading-relaxed text-foreground">
                                                {complaint.answer}
                                            </p>
                                        </div>

                                        {complaint.attachments?.length > 0 && (
                                            <div>
                                                <p className="mb-2 flex items-center gap-1.5 text-sm font-medium text-foreground">
                                                    <Paperclip className="size-4" />
                                                    Archivos adjuntos
                                                </p>
                                                <ul className="grid gap-2 sm:grid-cols-2">
                                                    {complaint.attachments.map((attachment) => {
                                                        const name = fileName(attachment.route);
                                                        return (
                                                            <li key={attachment.id}>
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
                                )}
                            </CardContent>
                        </Card>

                        {/* Detalle */}
                        <ComplaintSheet
                            answers={complaint.answers ?? []}
                            title="Lo que registraste"
                            description="Copia fiel de las respuestas de tu hoja de reclamación."
                        />
                    </div>

                    <aside className="space-y-6 lg:sticky lg:top-24">
                        <Card>
                            <CardHeader>
                                <CardTitle>Plazo de respuesta</CardTitle>
                                <CardDescription>
                                    {mode === 'active'
                                        ? `La empresa tiene ${complaint.days} días para responder.`
                                        : mode === 'done'
                                          ? 'La empresa respondió dentro del proceso.'
                                          : mode === 'pending'
                                            ? 'El plazo empieza a correr cuando confirmes tu correo.'
                                            : 'Este reclamo ya no tiene un plazo activo.'}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <DeadlineGauge remaining={complaint.timeToAnswer} total={complaint.days} mode={mode} />
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Titular del reclamo</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                                        {initials(customer?.name)}
                                    </span>
                                    <div className="min-w-0">
                                        <p className="truncate text-sm font-medium text-foreground">{customer?.name}</p>
                                        <p className="tabular text-xs text-muted-foreground">Doc. {customer?.document}</p>
                                    </div>
                                </div>
                                <Separator />
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li className="flex items-center gap-2">
                                        <Mail className="size-4" />
                                        {maskEmail(customer?.email)}
                                    </li>
                                    <li className="tabular flex items-center gap-2">
                                        <Phone className="size-4" />
                                        {maskPhone(customer?.phone)}
                                    </li>
                                </ul>
                                <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                    <UserRound className="size-3.5" />
                                    Datos parcialmente ocultos por privacidad.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Documentos</CardTitle>
                                <CardDescription>Guárdalos como constancia.</CardDescription>
                            </CardHeader>
                            <CardContent className="flex flex-col gap-2">
                                <Button onClick={() => window.open(route('complaint.pdf', { token: complaint.token }), '_blank')}>
                                    <FileDown />
                                    Hoja de reclamación
                                </Button>
                                <Button
                                    variant="outline"
                                    disabled={isPending}
                                    onClick={() => window.open(route('response.pdf', { token: complaint.token }), '_blank')}
                                >
                                    <FileDown />
                                    Copia de la respuesta
                                </Button>
                                {isPending && (
                                    <Badge variant="secondary" className="mt-1 w-fit">
                                        Disponible al recibir respuesta
                                    </Badge>
                                )}
                            </CardContent>
                        </Card>
                    </aside>
                </div>
            </div>
        </>
    );
}

AnswerShow.layout = (page: ReactNode) => <PublicLayout>{page}</PublicLayout>;
