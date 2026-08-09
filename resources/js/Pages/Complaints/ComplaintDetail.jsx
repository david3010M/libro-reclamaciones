import { useQuery } from '@tanstack/react-query';
import { LoaderCircle, CircleCheck, Clock } from 'lucide-react';

function timeAgo(date) {
    const seconds = Math.floor((new Date() - new Date(date)) / 1000);
    let interval = Math.floor(seconds / 31536000);
    if (interval > 1) return `${interval} años`;
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) return `${interval} meses`;
    interval = Math.floor(seconds / 86400);
    if (interval > 1) return `${interval} días`;
    interval = Math.floor(seconds / 3600);
    if (interval > 1) return `${interval} horas`;
    interval = Math.floor(seconds / 60);
    if (interval > 1) return `${interval} minutos`;
    return 'hace unos segundos';
}

function AnswerValue({ answer }) {
    if (answer.question?.type_question_id === 5) {
        return (
            <a href={`/storage/${answer.answer}`} target="_blank" rel="noreferrer">
                <img src={`/storage/${answer.answer}`} alt="imagen" className="max-h-52 rounded-lg shadow" />
            </a>
        );
    }
    return <p className="whitespace-pre-line text-xs text-foreground">{answer.answer}</p>;
}

export function useComplaintDetail(complaintCode, enabled) {
    return useQuery({
        queryKey: ['complaint', complaintCode],
        queryFn: async () => {
            const res = await fetch(`/findComplaint/${complaintCode}`);
            if (!res.ok) throw new Error('No se pudo cargar el reclamo');
            return res.json();
        },
        enabled: !!complaintCode && enabled,
    });
}

function Loading() {
    return (
        <div className="flex h-full w-full items-center justify-center py-10">
            <LoaderCircle className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
    );
}

/** Contenido del modal "Ver" — resumen completo del reclamo con avances y respuesta. */
export function ComplaintFullDetail({ complaintCode }) {
    const { data, isLoading, isError } = useComplaintDetail(complaintCode, true);

    if (isLoading) return <Loading />;
    if (isError || !data) return <p className="p-4 text-sm text-destructive">Error al cargar los datos.</p>;

    return (
        <div className="space-y-4 p-1">
            <div className="card p-4">
                <h2 className="mb-2 text-lg font-semibold text-foreground">Reclamo</h2>
                <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">{data.complaintCode ?? 'N/A'}</span>
                    <span className="text-sm text-muted-foreground">{data.advances?.[0]?.date}</span>
                </div>
            </div>

            <div className="card p-4">
                <h3 className="mb-2 font-semibold text-foreground">Avances</h3>
                <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    Última actualización {timeAgo(data.advances?.[0]?.date)}
                </div>
                <div className="space-y-2">
                    {data.advances?.map((advance, i) => (
                        <div key={i} className="flex items-center gap-2">
                            <CircleCheck className="h-5 w-5 text-emerald-500" />
                            <div>
                                <div className="text-sm font-semibold text-foreground">{advance.status}</div>
                                <div className="text-xs text-muted-foreground">{advance.date}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="card p-4">
                <h3 className="mb-2 font-semibold text-foreground">Respuesta</h3>
                <p className="text-sm text-muted-foreground">{data.answer ?? 'Pendiente'}</p>
            </div>

            <div className="card space-y-3 p-4">
                <h3 className="font-semibold text-foreground">Hoja de Reclamo</h3>
                <div className="flex flex-wrap justify-between gap-2 text-sm">
                    <span className="font-semibold text-foreground">{data.customer?.name}</span>
                    <span className="text-muted-foreground">{data.customer?.document}</span>
                    <span className="text-muted-foreground">{data.customer?.phone}</span>
                </div>
                <div className="space-y-2">
                    {data.answers?.map((answer) => (
                        <div key={answer.id}>
                            <label className="text-xs text-muted-foreground">{answer.question?.title}</label>
                            <AnswerValue answer={answer} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

/** Contenido reducido para el modal "Responder" — solo datos del cliente y respuestas. */
export function ComplaintCompactDetail({ complaintCode }) {
    const { data, isLoading, isError } = useComplaintDetail(complaintCode, true);

    if (isLoading) return <Loading />;
    if (isError || !data) return <p className="p-2 text-sm text-destructive">Error al cargar los datos.</p>;

    return (
        <div className="card space-y-3 p-4">
            <div className="flex items-center gap-2">
                <h3 className="font-semibold text-foreground">Hoja de Reclamo</h3>
                <p className="font-bold text-primary">{data.complaintCode ?? 'N/A'}</p>
            </div>
            <div className="flex flex-wrap justify-between gap-2 text-xs">
                <span className="font-semibold text-foreground">{data.customer?.name}</span>
                <span className="text-muted-foreground">{data.customer?.document}</span>
                <span className="text-muted-foreground">{data.customer?.phone}</span>
            </div>
            <div className="space-y-2">
                {data.answers?.map((answer) => (
                    <div key={answer.id}>
                        <label className="text-xs text-muted-foreground">{answer.question?.title}</label>
                        <AnswerValue answer={answer} />
                    </div>
                ))}
            </div>
        </div>
    );
}
