import { useState } from 'react';
import { toast } from 'sonner';
import { FileSpreadsheet } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

export function ReportDialog({ open, onOpenChange, sedes }) {
    const [selectedSedes, setSelectedSedes] = useState([]);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [isPdf, setIsPdf] = useState(false);
    const [generating, setGenerating] = useState(false);

    const allSelected = selectedSedes.length === sedes.length;

    function toggleAll(checked) {
        setSelectedSedes(checked ? sedes.map((s) => s.id) : []);
    }

    function toggleSede(id) {
        setSelectedSedes((prev) => (prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]));
    }

    function generate() {
        setGenerating(true);
        const params = new URLSearchParams({ from: startDate, to: endDate });
        selectedSedes.forEach((id) => params.append('sedes[]', id));
        const path = isPdf ? 'reporteReclamosZip' : 'reporteReclamos';

        fetch(`/${path}?${params.toString()}`, {
            headers: { Accept: 'application/json' },
        })
            .then(async (response) => {
                if (!response.ok) {
                    const data = await response.json().catch(() => ({}));
                    throw new Error(data.message || 'Error al generar el reporte');
                }
                return response.blob();
            })
            .then((blob) => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = isPdf ? 'reporte-reclamos.zip' : 'reporte-reclamos.xlsx';
                document.body.appendChild(a);
                a.click();
                a.remove();
                window.URL.revokeObjectURL(url);
                onOpenChange(false);
            })
            .catch((err) => toast.error(err.message || 'Error al generar el reporte'))
            .finally(() => setGenerating(false));
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Reporte de Reclamos</DialogTitle>
                </DialogHeader>

                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                        <Checkbox checked={allSelected} onCheckedChange={toggleAll} id="select_all" />
                        <Label htmlFor="select_all" className="mb-0">Seleccionar Todos</Label>
                    </div>

                    <div className="flex max-h-40 flex-col gap-2 overflow-y-auto pl-1">
                        {sedes.map((sede) => (
                            <div key={sede.id} className="flex items-center gap-2">
                                <Checkbox
                                    checked={selectedSedes.includes(sede.id)}
                                    onCheckedChange={() => toggleSede(sede.id)}
                                    id={`sede_${sede.id}`}
                                />
                                <Label htmlFor={`sede_${sede.id}`} className="mb-0">{sede.name}</Label>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center gap-2">
                        <Label htmlFor="start_date" className="mb-0 w-2/5">
                            Fecha de Inicio<span className="text-destructive"> *</span>
                        </Label>
                        <Input id="start_date" type="date" className="w-3/5" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
                    </div>

                    <div className="flex items-center gap-2">
                        <Label htmlFor="end_date" className="mb-0 w-2/5">
                            Fecha de Fin<span className="text-destructive"> *</span>
                        </Label>
                        <Input id="end_date" type="date" className="w-3/5" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
                    </div>

                    <div className="flex items-center gap-2">
                        <Label className="mb-0">Formato del Reporte</Label>
                        <Switch checked={isPdf} onCheckedChange={setIsPdf} />
                        <span className="text-sm text-muted-foreground">{isPdf ? 'PDF' : 'Excel'}</span>
                    </div>
                </div>

                <DialogFooter>
                    <Button variant="secondary" onClick={() => onOpenChange(false)}>
                        Cancelar
                    </Button>
                    <Button onClick={generate} disabled={!startDate || !endDate || generating}>
                        <FileSpreadsheet className="h-4 w-4" />
                        Generar
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
