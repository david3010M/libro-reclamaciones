import { useState } from 'react';
import { Head, router } from '@inertiajs/react';
import { Search, FileSpreadsheet, MessageSquare, LoaderCircle, ListChecks, X } from 'lucide-react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Pagination } from '@/components/Pagination';
import { ConfirmDialog } from '@/components/ConfirmDialog';
import { STATUS, statusBadgeVariant, daysBadgeVariant } from '@/lib/complaintStatus';
import { ComplaintFullDetail } from './ComplaintDetail';
import { ResponseDialog } from './ResponseDialog';
import { ExtendDialog } from './ExtendDialog';
import { ReportDialog } from './ReportDialog';

export default function ComplaintsIndex({ complaints, search, status, sedes, statuses }) {
    const [searchTerm, setSearchTerm] = useState(search ?? '');
    const [viewing, setViewing] = useState(null); // complaintCode
    const [responding, setResponding] = useState(null); // complaint row
    const [extending, setExtending] = useState(null); // complaint row
    const [processing, setProcessing] = useState(null); // complaint row
    const [reportOpen, setReportOpen] = useState(false);
    const [processLoading, setProcessLoading] = useState(false);

    function submitFilters(e) {
        e?.preventDefault();
        router.get(route('complaint.index'), { search: searchTerm, status }, { preserveState: true, replace: true });
    }

    function changeStatus(value) {
        router.get(route('complaint.index'), { search: searchTerm, status: value }, { preserveState: true, replace: true });
    }

    function clearSearch() {
        setSearchTerm('');
        router.get(route('complaint.index'), { status }, { preserveState: true, replace: true });
    }

    function confirmProcess() {
        setProcessLoading(true);
        router.post(route('complaint.process', processing.id), {}, {
            onFinish: () => {
                setProcessLoading(false);
                setProcessing(null);
            },
        });
    }

    return (
        <AdminLayout title="Gestión de Reclamos">
            <Head title="Reclamos" />

            <div className="flex flex-col gap-4">
                <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-center">
                    <h1 className="text-2xl font-semibold text-foreground">Gestión de Reclamos</h1>
                    <Button onClick={() => setReportOpen(true)}>
                        <FileSpreadsheet className="h-4 w-4" />
                        Generar Reporte
                    </Button>
                </div>

                <form onSubmit={submitFilters} className="flex flex-col gap-2 sm:flex-row sm:items-center">
                    <Input
                        icon={<Search />}
                        placeholder="Buscar reclamo..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="sm:w-64"
                    />
                    <Select value={status} onValueChange={changeStatus}>
                        <SelectTrigger className="sm:w-48">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {statuses.map((s) => (
                                <SelectItem key={s} value={s}>
                                    {s}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <Button type="submit" variant="secondary" size="icon">
                        <Search className="h-4 w-4" />
                    </Button>
                    {search && (
                        <Badge variant="muted" className="cursor-pointer" onClick={clearSearch}>
                            {search}
                            <X className="h-3 w-3" />
                        </Badge>
                    )}
                </form>

                <div className="flex flex-wrap justify-end gap-2">
                    <Badge variant="destructive">Vencido</Badge>
                    <Badge variant="success">Dentro del Plazo</Badge>
                    <Badge variant="warning">Próximo a Vencer</Badge>
                </div>

                <div className="card overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="text-center">Código</TableHead>
                                <TableHead className="text-center">Nombre</TableHead>
                                <TableHead className="text-center">Fecha</TableHead>
                                <TableHead className="text-center">Estado</TableHead>
                                <TableHead className="text-center">Acciones</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {complaints.data.map((complaint) => {
                                const currentStatus = complaint.advances[0]?.status;
                                return (
                                    <TableRow key={complaint.id}>
                                        <TableCell className="text-center font-medium text-foreground">
                                            {complaint.complaintCode}
                                        </TableCell>
                                        <TableCell className="text-center">{complaint.customer.name}</TableCell>
                                        <TableCell className="text-center">
                                            <Badge variant={daysBadgeVariant(currentStatus, complaint.timeToAnswer)}>
                                                {new Date(complaint.created_at).toLocaleDateString('es-PE')}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-center">
                                            <Badge variant={statusBadgeVariant(currentStatus)}>{currentStatus}</Badge>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex flex-wrap justify-center gap-1.5">
                                                <Button
                                                    size="sm"
                                                    variant="secondary"
                                                    disabled={currentStatus !== STATUS.IN_PROCESS}
                                                    onClick={() => setResponding(complaint)}
                                                >
                                                    <MessageSquare className="h-3 w-3" />
                                                    Responder
                                                </Button>
                                                <Button
                                                    size="sm"
                                                    variant="secondary"
                                                    disabled={currentStatus !== STATUS.REGISTER}
                                                    onClick={() => setProcessing(complaint)}
                                                >
                                                    <LoaderCircle className="h-3 w-3" />
                                                    En Proceso
                                                </Button>
                                                <Button
                                                    size="sm"
                                                    variant="secondary"
                                                    disabled={![STATUS.REGISTER, STATUS.IN_PROCESS].includes(currentStatus)}
                                                    onClick={() => setExtending(complaint)}
                                                >
                                                    <LoaderCircle className="h-3 w-3" />
                                                    Extender
                                                </Button>
                                                <Button size="sm" onClick={() => setViewing(complaint.complaintCode)}>
                                                    <ListChecks className="h-3 w-3" />
                                                    Ver
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                            {complaints.data.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={5} className="py-8 text-center text-muted-foreground">
                                        No se encontraron reclamos.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>

                <Pagination meta={complaints} />
            </div>

            {/* Ver detalle */}
            <Dialog open={!!viewing} onOpenChange={(v) => !v && setViewing(null)}>
                <DialogContent className="max-w-4xl">
                    <DialogHeader>
                        <DialogTitle>Detalles del Reclamo</DialogTitle>
                    </DialogHeader>
                    {viewing && <ComplaintFullDetail complaintCode={viewing} />}
                </DialogContent>
            </Dialog>

            <ResponseDialog complaint={responding} onOpenChange={(v) => !v && setResponding(null)} />
            <ExtendDialog complaint={extending} onOpenChange={(v) => !v && setExtending(null)} />

            <ConfirmDialog
                open={!!processing}
                onOpenChange={(v) => !v && setProcessing(null)}
                icon={LoaderCircle}
                message="¿Estás seguro de atender este reclamo?"
                confirmLabel="Atender"
                onConfirm={confirmProcess}
                loading={processLoading}
            />

            <ReportDialog open={reportOpen} onOpenChange={setReportOpen} sedes={sedes} />
        </AdminLayout>
    );
}
