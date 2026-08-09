import { useEffect } from 'react';
import { useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ComplaintCompactDetail } from './ComplaintDetail';

export function ResponseDialog({ complaint, onOpenChange }) {
    const form = useForm({ answer: '', attachments: [] });
    const open = !!complaint;

    useEffect(() => {
        if (complaint) form.setData('answer', complaint.answer && complaint.answer !== 'Pendiente' ? complaint.answer : '');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [complaint?.id]);

    function submit(e) {
        e.preventDefault();
        form.post(route('complaint.response', complaint.id), {
            forceFormData: true,
            onSuccess: () => onOpenChange(false),
        });
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-2xl">
                <DialogHeader>
                    <DialogTitle>Responder Reclamo</DialogTitle>
                </DialogHeader>

                {complaint && <ComplaintCompactDetail complaintCode={complaint.complaintCode} />}

                <form onSubmit={submit} className="flex flex-col gap-4">
                    <div>
                        <Label htmlFor="answer">Respuesta de Reclamo</Label>
                        <Textarea
                            id="answer"
                            rows={4}
                            placeholder="Responder reclamo"
                            value={form.data.answer}
                            onChange={(e) => form.setData('answer', e.target.value)}
                        />
                    </div>

                    <div>
                        <Label htmlFor="attachments">Agregar Archivos</Label>
                        <input
                            id="attachments"
                            type="file"
                            multiple
                            onChange={(e) => form.setData('attachments', Array.from(e.target.files ?? []))}
                            className="block w-full cursor-pointer rounded-lg border border-input bg-background text-xs text-foreground file:mr-3 file:border-0 file:bg-secondary file:px-3 file:py-2 file:text-secondary-foreground"
                        />
                    </div>

                    <div className="flex justify-end">
                        <Button type="submit" disabled={form.processing || !form.data.answer.trim()}>
                            {form.processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                            Responder
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}
