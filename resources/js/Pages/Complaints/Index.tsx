import { useEffect, useRef, useState } from 'react';
import { Head, router } from '@inertiajs/react';
import { keepPreviousData, useQuery, useQueryClient } from '@tanstack/react-query';
import { BookOpen, FileSpreadsheet, Inbox, Search, X } from 'lucide-react';
import AdminLayout from '@/Layouts/AdminLayout';
import { PageHeader } from '@/components/admin/PageHeader';
import { IconInput } from '@/components/public/IconInput';
import { StatusBadge } from '@/components/public/StatusBadge';
import { formatDate, parseDate } from '@/components/public/format';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DataTable, type Column, type PageMeta } from '@/components/DataTable';
import { api } from '@/lib/axios';
import { STATUS } from '@/lib/complaintStatus';
import { ReportDialog } from './ReportDialog';
import { useComplaintActions } from './useComplaintActions';

const ALL = 'TODOS';
const ALL_SEDES = 'all';

const label = (s: string) => s.charAt(0) + s.slice(1).toLowerCase();

const formatTime = (value: string) => {
    const d = parseDate(value);
    return d ? new Intl.DateTimeFormat('es-PE', { hour: '2-digit', minute: '2-digit' }).format(d) : '';
};

/** Texto de plazo: solo cuenta mientras el reclamo sigue abierto. */
function deadline(status: string, days: number) {
    if (status !== STATUS.REGISTER && status !== STATUS.IN_PROCESS) return null;
    if (days < 1) return { text: 'Plazo vencido', className: 'text-destructive' };
    if (days < 20) return { text: `${days} ${days === 1 ? 'día restante' : 'días restantes'}`, className: 'text-amber-600 dark:text-amber-400' };
    return { text: `${days} días restantes`, className: 'text-muted-foreground' };
}

/** Filtros del listado: viven fuera del componente para que al volver desde el detalle todo siga como estaba. */
const saved = { status: null as string | null, term: '', sede: ALL_SEDES, page: 1 };

type Complaint = {
    id: number;
    token: string;
    complaintCode: string;
    status: string;
    timeToAnswer: number;
    created_at: string;
    answer: string;
    customer: { name: string; email: string; document: string; phone: string } | null;
    sede: { id: number; name: string } | null;
};

type ListResponse = { data: Complaint[]; meta: PageMeta; counts: Record<string, number> };

function useDebounced<T>(value: T, ms = 350) {
    const [v, setV] = useState(value);
    useEffect(() => {
        const t = setTimeout(() => setV(value), ms);
        return () => clearTimeout(t);
    }, [value, ms]);
    return v;
}

export default function ComplaintsIndex({ sedes, statuses, defaultStatus }: { sedes: { id: number; name: string }[]; statuses: string[]; defaultStatus: string }) {
    const queryClient = useQueryClient();
    const [status, setStatus] = useState<string>(saved.status ?? defaultStatus);
    const [term, setTerm] = useState(saved.term);
    const [sede, setSede] = useState(saved.sede);
    const [page, setPage] = useState(saved.page);
    const search = useDebounced(term.trim());
    const [reportOpen, setReportOpen] = useState(false);
    const { actions, dialogs } = useComplaintActions();

    useEffect(() => {
        Object.assign(saved, { status, term, sede, page });
    }, [status, term, sede, page]);

    // Cualquier filtro nuevo vuelve a la primera página.
    const firstRun = useRef(true);
    useEffect(() => {
        if (firstRun.current) {
            firstRun.current = false;
            return;
        }
        setPage(1);
    }, [status, search, sede]);

    const { data, isLoading, isFetching, isError, refetch } = useQuery({
        queryKey: ['complaints', { status, search, sede, page }],
        queryFn: async () => {
            const params: Record<string, string | number> = { status, page };
            if (search) params.search = search;
            if (sede !== ALL_SEDES) params.sede_id = sede;
            return (await api.get<ListResponse>(route('complaint.list'), { params })).data;
        },
        placeholderData: keepPreviousData,
    });

    // Las acciones (atender, responder, extender…) se envían con Inertia; al terminar bien se refresca la lista.
    useEffect(() => router.on('success', () => queryClient.invalidateQueries({ queryKey: ['complaints'] })), [queryClient]);

    const counts = data?.counts ?? {};
    const total = Object.values(counts).reduce((a, b) => a + Number(b), 0);
    const filtered = !!term || sede !== ALL_SEDES;

    const columns: Column<Complaint>[] = [
        {
            id: 'code',
            header: 'Código',
            cell: (c) => <span className="font-medium tabular-nums text-foreground">{c.complaintCode}</span>,
        },
        {
            id: 'customer',
            header: 'Cliente',
            cell: (c) => (
                <div className="max-w-60">
                    <div className="truncate font-medium text-foreground">{c.customer?.name}</div>
                    <div className="truncate text-xs text-muted-foreground">{c.customer?.email}</div>
                </div>
            ),
        },
        {
            id: 'sede',
            header: 'Sede',
            className: 'hidden xl:table-cell',
            cell: (c) => <span className="line-clamp-2 max-w-40 whitespace-normal text-muted-foreground">{c.sede?.name ?? '—'}</span>,
        },
        {
            id: 'date',
            header: 'Registrado',
            className: 'hidden md:table-cell',
            cell: (c) => (
                <>
                    <div>{formatDate(c.created_at)}</div>
                    <div className="text-xs text-muted-foreground">{formatTime(c.created_at)}</div>
                </>
            ),
        },
        {
            id: 'deadline',
            header: 'Plazo',
            className: 'hidden lg:table-cell',
            cell: (c) => {
                const due = deadline(c.status, c.timeToAnswer);
                return due ? <span className={`text-sm ${due.className}`}>{due.text}</span> : <span className="text-muted-foreground">—</span>;
            },
        },
        {
            id: 'status',
            header: 'Estado',
            cell: (c) => <StatusBadge status={c.status} />,
        },
        {
            id: 'actions',
            header: 'Acciones',
            srOnly: true,
            className: 'w-px',
            cell: (c) => actions(c, { view: true }),
        },
    ];

    return (
        <AdminLayout title="Reclamos">
            <Head title="Reclamos" />

            <PageHeader icon={BookOpen} title="Reclamos" description="Revisa, atiende y responde los reclamos recibidos.">
                <Button variant="outline" onClick={() => setReportOpen(true)}>
                    <FileSpreadsheet />
                    Generar reporte
                </Button>
            </PageHeader>

            <div className="flex flex-col gap-3">
                <div className="-mx-4 overflow-x-auto px-4 md:mx-0 md:px-0">
                    <Tabs value={status} onValueChange={setStatus}>
                        <TabsList>
                            {[ALL, ...statuses].map((s) => (
                                <TabsTrigger key={s} value={s} className="gap-2">
                                    {s === ALL ? 'Todos' : label(s)}
                                    <span className="text-xs tabular-nums text-muted-foreground">{s === ALL ? total : (counts[s] ?? 0)}</span>
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </Tabs>
                </div>

                <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                    <div className="relative sm:w-80">
                        <IconInput
                            icon={<Search />}
                            type="search"
                            placeholder="Código, nombre, DNI o correo"
                            aria-label="Buscar reclamos"
                            value={term}
                            onChange={(e) => setTerm(e.target.value)}
                            className="bg-card"
                        />
                    </div>
                    <Select value={sede} onValueChange={setSede}>
                        <SelectTrigger className="bg-card sm:w-56" aria-label="Filtrar por sede">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value={ALL_SEDES}>Todas las sedes</SelectItem>
                            {sedes.map((s) => (
                                <SelectItem key={s.id} value={String(s.id)}>
                                    {s.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    {filtered && (
                        <Button
                            variant="ghost"
                            onClick={() => {
                                setTerm('');
                                setSede(ALL_SEDES);
                            }}
                        >
                            <X />
                            Limpiar
                        </Button>
                    )}
                </div>
            </div>

            {isError ? (
                <div className="flex flex-col items-center gap-3 rounded-xl border bg-card py-16 text-center">
                    <p className="text-sm text-muted-foreground">No se pudieron cargar los reclamos.</p>
                    <Button variant="outline" size="sm" onClick={() => refetch()}>
                        Reintentar
                    </Button>
                </div>
            ) : (
                <DataTable
                    columns={columns}
                    rows={data?.data ?? []}
                    rowKey={(c) => c.id}
                    meta={data?.meta}
                    loading={isLoading}
                    fetching={isFetching}
                    onPageChange={setPage}
                    onRowClick={(c) => router.visit(route('complaint.view', c.id))}
                    empty={
                        <div className="flex flex-col items-center gap-2 text-center text-muted-foreground">
                            <Inbox className="size-8" strokeWidth={1.5} />
                            <p className="text-sm">
                                {search ? `Sin resultados para “${search}”.` : status === ALL ? 'Aún no hay reclamos.' : `No hay reclamos ${label(status).toLowerCase()}.`}
                            </p>
                        </div>
                    }
                />
            )}

            {dialogs}
            <ReportDialog open={reportOpen} onOpenChange={setReportOpen} sedes={sedes} />
        </AdminLayout>
    );
}
