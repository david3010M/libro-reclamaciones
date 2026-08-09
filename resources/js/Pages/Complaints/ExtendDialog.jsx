import { useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export function ExtendDialog({ complaint, onOpenChange }) {
    const form = useForm({ daysToExtend: '' });
    const open = !!complaint;

    function submit(e) {
        e.preventDefault();
        form.post(route('complaint.extend', complaint.id), {
            onSuccess: () => {
                onOpenChange(false);
                form.reset();
            },
        });
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-md text-center">
                <DialogHeader>
                    <DialogTitle>Extender tiempo de respuesta</DialogTitle>
                </DialogHeader>
                <form onSubmit={submit} className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                        <Label htmlFor="daysToExtend" className="mb-0 w-2/5 text-start">
                            Días a Extender<span className="text-destructive"> *</span>
                        </Label>
                        <Input
                            id="daysToExtend"
                            type="number"
                            min={1}
                            className="w-3/5"
                            required
                            value={form.data.daysToExtend}
                            onChange={(e) => form.setData('daysToExtend', e.target.value)}
                        />
                    </div>
                    <div className="flex justify-end gap-2">
                        <Button type="submit" disabled={form.processing}>
                            {form.processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                            Extender
                        </Button>
                        <Button type="button" variant="secondary" onClick={() => onOpenChange(false)}>
                            Cancelar
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}
