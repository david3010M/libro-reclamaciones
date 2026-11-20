import { useEffect, useRef, useState } from 'react';
import { Head, router } from '@inertiajs/react';
import { Check, Eye, FileSpreadsheet, Inbox, LoaderCircle, MessageSquare, MoreHorizontal, Search, TimerReset, X } from 'lucide-react';
import AdminLayout from '@/Layouts/AdminLayout';
import { PageHeader } from '@/components/admin/PageHeader';
import { IconInput } from '@/components/public/IconInput';
import { StatusBadge } from '@/components/public/StatusBadge';
import { formatDate } from '@/components/public/format';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Pagination } from '@/components/Pagination';
import { ConfirmDialog } from '@/components/ConfirmDialog';
import { STATUS } from '@/lib/complaintStatus';
import { ComplaintFullDetail } from './ComplaintDetail';
import { ResponseDialog } from './ResponseDialog';
import { ExtendDialog } from './ExtendDialog';
import { ReportDialog } from './ReportDialog';

const label = (s: string) => s.charAt(0) + s.slice(1).toLowerCase();

/** Texto de plazo bajo la fecha: solo cuenta mientras el reclamo sigue abierto. */
function deadline(status: string, days: number) {
    if (status !== STATUS.REGISTER && status !== STATUS.IN_PROCESS) return null;
    if (days < 1) return { text: 'Plazo vencido', className: 'text-destructive' };
    if (days < 20) return { text: `${days} ${days === 1 ? 'día restante' : 'días restantes'}`, className: 'text-amber-600 dark:text-amber-400' };
    return { text: `${days} días restantes`, className: 'text-muted-foreground' };
}

export default function ComplaintsIndex({ complaints, counts, search, status, sedes, statuses }: any) {
    const [term, setTerm] = useState<string>(search ?? '');
    const [viewing, setViewing] = useState<string | null>(null);
    const [responding, setResponding] = useState<any>(null);
    const [extending, setExtending] = useState<any>(null);
    const [processing, setProcessing] = useState<any>(null);
    const [recovering, setRecovering] = useState<any>(null);
    const [busy, setBusy] = useState(false);
    const [reportOpen, setReportOpen] = useState(false);

    const go = (params: Record<string, string>) =>
        router.get(route('complaint.index'), params, { preserveState: true, preserveScroll: true, replace: true });

    // Búsqueda en vivo con una pequeña espera para no pedir en cada tecla.
    const first = useRef(true);
    useEffect(() => {
        if (first.current) {
            first.current = false;
            return;
        }
        const t = setTimeout(() => go({ search: term, status }), 350);
        return () => clearTimeout(t);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [term]);

    function run(url: string, onDone: () => void) {
        setBusy(true);
        router.post(url, {}, {
            preserveScroll: true,
            onFinish: () => {
                setBusy(false);
                onDone();
            },
        });
    }

    return (
        <AdminLayout title="Reclamos">
            <Head title="Reclamos" />

            <PageHeader title="Reclamos" description="Revisa, atiende y responde los reclamos recibidos.">
                <Button variant="outline" onClick={() => setReportOpen(true)}>
                    <FileSpreadsheet />
                    Generar reporte
                </Button>
            </PageHeader>

            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                <div className="-mx-4 overflow-x-auto px-4 md:mx-0 md:px-0">
                    <Tabs value={status} onValueChange={(v) => go({ search: term, status: v })}>
                        <TabsList>
                            {statuses.map((s: string) => (
                                <TabsTrigger key={s} value={s} className="gap-2">
                                    {label(s)}
                                    <span className="text-xs tabular-nums text-muted-foreground">{counts?.[s] ?? 0}</span>
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </Tabs>
                </div>
                <div className="flex items-center gap-2 lg:w-72">
                    <div className="relative flex-1">
                        <IconInput
                            icon={<Search />}
                            type="search"
                            placeholder="Buscar por código o nombre"
                            aria-label="Buscar reclamos"
                            value={term}
                            onChange={(e) => setTerm(e.target.value)}
                            className="bg-card"
                        />
                    </div>
                    {term && (
                        <Button variant="ghost" size="icon" aria-label="Limpiar búsqueda" onClick={() => setTerm('')}>
                            <X />
                        </Button>
                    )}
                </div>
            </div>

            <Card className="gap-0 overflow-hidden py-0">
                <Table>
                    <TableHeader>
                        <TableRow className="hover:bg-transparent">
                            <TableHead className="pl-5">Código</TableHead>
                            <TableHead>Cliente</TableHead>
                            <TableHead className="hidden md:table-cell">Fecha</TableHead>
                            <TableHead>Estado</TableHead>
                            <TableHead className="w-px pr-5 text-right">
                                <span className="sr-only">Acciones</span>
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {complaints.data.map((c: any) => {
                            const current = c.advances[0]?.status;
                            const due = deadline(current, c.timeToAnswer);
                            return (
                                <TableRow key={c.id} className="cursor-pointer" onClick={() => setViewing(c.complaintCode)}>
                                    <TableCell className="pl-5 font-medium tabular-nums text-foreground">{c.complaintCode}</TableCell>
                                    <TableCell>
                                        <div className="max-w-56 truncate">{c.customer.name}</div>
                                        <div className="text-xs text-muted-foreground md:hidden">{formatDate(c.created_at)}</div>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        <div>{formatDate(c.created_at)}</div>
                                        {due && <div className={`text-xs ${due.className}`}>{due.text}</div>}
                                    </TableCell>
                                    <TableCell>
                                        <StatusBadge status={current} />
                                    </TableCell>
                                    <TableCell className="pr-5" onClick={(e) => e.stopPropagation()}>
                                        <div className="flex items-center justify-end gap-1">
                                            {current === STATUS.REJECTED && (
                                                <Button size="sm" onClick={() => setRecovering(c)}>
                                                    <Check />
                                                    Confirmar
                                                </Button>
                                            )}
                                            {current === STATUS.REGISTER && (
                                                <Button size="sm" onClick={() => setProcessing(c)}>
                                                    <LoaderCircle />
                                                    Atender
                                                </Button>
                                            )}
                                            {current === STATUS.IN_PROCESS && (
                                                <Button size="sm" onClick={() => setResponding(c)}>
                                                    <MessageSquare />
                                                    Responder
                                                </Button>
                                            )}
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" size="icon-sm" aria-label="Más acciones">
                                                        <MoreHorizontal />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end" className="min-w-44 bg-popover before:hidden">
                                                    <DropdownMenuItem onSelect={() => setViewing(c.complaintCode)}>
                                                        <Eye />
                                                        Ver detalle
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem
                                                        disabled={![STATUS.REGISTER, STATUS.IN_PROCESS].includes(current)}
                                                        onSelect={() => setExtending(c)}
                                                    >
                                                        <TimerReset />
                                                        Extender plazo
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                        {complaints.data.length === 0 && (
                            <TableRow className="hover:bg-transparent">
                                <TableCell colSpan={5} className="py-16">
                                    <div className="flex flex-col items-center gap-2 text-center text-muted-foreground">
                                        <Inbox className="size-8" strokeWidth={1.5} />
                                        <p className="text-sm">{search ? `Sin resultados para “${search}”.` : `No hay reclamos ${label(status).toLowerCase()}.`}</p>
                                    </div>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
                {complaints.total > 0 && (
                    <div className="flex flex-col items-center justify-between gap-2 border-t px-5 py-3 sm:flex-row">
                        <p className="text-xs text-muted-foreground">
                            Mostrando {complaints.from}–{complaints.to} de {complaints.total}
                        </p>
                        <Pagination meta={complaints} className="sm:justify-end" />
                    </div>
                )}
            </Card>

            <Dialog open={!!viewing} onOpenChange={(v) => !v && setViewing(null)}>
                <DialogContent className="max-w-4xl">
                    <DialogHeader>
                        <DialogTitle>Detalles del reclamo</DialogTitle>
                    </DialogHeader>
                    {viewing && <ComplaintFullDetail complaintCode={viewing} />}
                </DialogContent>
            </Dialog>

            <ResponseDialog complaint={responding} onOpenChange={(v: boolean) => !v && setResponding(null)} />
            <ExtendDialog complaint={extending} onOpenChange={(v: boolean) => !v && setExtending(null)} />

            <ConfirmDialog
                open={!!processing}
                onOpenChange={(v: boolean) => !v && setProcessing(null)}
                icon={LoaderCircle}
                message="¿Estás seguro de atender este reclamo?"
                confirmLabel="Atender"
                onConfirm={() => run(route('complaint.process', processing.id), () => setProcessing(null))}
                loading={busy}
            />
            <ConfirmDialog
                open={!!recovering}
                onOpenChange={(v: boolean) => !v && setRecovering(null)}
                icon={Check}
                message="¿Estás seguro de confirmar este reclamo rechazado?"
                confirmLabel="Confirmar"
                onConfirm={() => run(route('complaint.recover', recovering.id), () => setRecovering(null))}
                loading={busy}
            />

            <ReportDialog open={reportOpen} onOpenChange={setReportOpen} sedes={sedes} />
        </AdminLayout>
    );
}
