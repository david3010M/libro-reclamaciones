import { Head } from '@inertiajs/react';
import { Clock, CircleCheck, CloudDownload } from 'lucide-react';
import PublicLayout from '@/Layouts/PublicLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

function timeAgo(date) {
    const seconds = Math.floor((new Date() - new Date(date)) / 1000);
    let interval = Math.floor(seconds / 31536000);
    if (interval > 1) return `hace ${interval} años`;
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) return `hace ${interval} meses`;
    interval = Math.floor(seconds / 86400);
    if (interval > 1) return `hace ${interval} días`;
    interval = Math.floor(seconds / 3600);
    if (interval > 1) return `hace ${interval} horas`;
    interval = Math.floor(seconds / 60);
    if (interval > 1) return `hace ${interval} minutos`;
    return 'hace unos segundos';
}

function maskPhone(phone) {
    if (!phone || phone.length < 2) return phone;
    return `${phone[0]}*******${phone[phone.length - 1]}`;
}

export default function AnswerShow({ complaint }) {
    const isPending = complaint.answer === 'Pendiente' || !complaint.answer;

    return (
        <>
            <Head title="Reclamo" />
            <div className="mx-auto w-full max-w-3xl">
                <Card>
                    <div className="border-b border-border p-4">
                        <h2 className="text-2xl font-bold text-foreground">Consulta de Reclamo</h2>
                    </div>
                    <CardContent className="space-y-6">
                        <div className="card p-4">
                            <h2 className="mb-2 text-xl font-semibold text-foreground">Hoja de Reclamo N°</h2>
                            <div className="flex items-center justify-between">
                                <span className="text-lg font-bold text-primary">{complaint.complaintCode ?? 'N/A'}</span>
                                <span className="text-muted-foreground">{complaint.answers?.[0]?.answer}</span>
                            </div>
                        </div>

                        <div className="card p-4">
                            <h3 className="mb-2 font-semibold text-foreground">Avances</h3>
                            <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                                <Clock className="h-5 w-5 text-muted-foreground" />
                                Última actualización {timeAgo(complaint.advances?.[0]?.date)}
                            </div>
                            <div className="space-y-2">
                                {complaint.advances?.map((advance, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <CircleCheck className="h-6 w-6 text-emerald-500" />
                                        <div>
                                            <div className="font-semibold text-foreground">{advance.status}</div>
                                            <div className="text-sm text-muted-foreground">{advance.date}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="card p-4">
                            <h3 className="mb-2 font-semibold text-foreground">Respuesta</h3>
                            <p className="mb-2 text-muted-foreground">{complaint.answer ?? 'Pendiente'}</p>
                            <div className="flex justify-end">
                                <Button
                                    variant={isPending ? 'secondary' : 'default'}
                                    disabled={isPending}
                                    onClick={() => window.open(route('response.pdf', { id: complaint.id }), '_blank')}
                                >
                                    <CloudDownload className="h-4 w-4" />
                                    Descargar Copia
                                </Button>
                            </div>
                        </div>

                        <div className="card space-y-2 p-4">
                            <h3 className="mb-4 font-semibold text-foreground">Hoja de Reclamo</h3>
                            <div className="flex flex-wrap justify-between gap-2">
                                <span className="font-semibold text-foreground">{complaint.customer?.name}</span>
                                <span className="text-muted-foreground">{complaint.customer?.document}</span>
                                <span className="text-muted-foreground">{maskPhone(complaint.customer?.phone)}</span>
                            </div>
                            <label className="block text-sm text-muted-foreground">Asignado a:</label>

                            {complaint.answers?.map((answer) => (
                                <div key={answer.id}>
                                    <label className="text-sm text-muted-foreground">{answer.question?.title}</label>
                                    <p className="text-foreground">
                                        {answer.question?.type_question_id === 5 ? (
                                            <a href={`/storage/${answer.answer}`} target="_blank" rel="noreferrer">
                                                <img src={`/storage/${answer.answer}`} alt="imagen" className="max-h-52 rounded-lg shadow" />
                                            </a>
                                        ) : (
                                            answer.answer?.split('\n').map((line, i) => (
                                                <span key={i}>
                                                    {line}
                                                    <br />
                                                </span>
                                            ))
                                        )}
                                    </p>
                                </div>
                            ))}

                            <div className="flex justify-end">
                                <Button onClick={() => window.open(route('complaint.pdf', { id: complaint.id }), '_blank')}>
                                    <CloudDownload className="h-4 w-4" />
                                    Descargar hoja de reclamación
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}

AnswerShow.layout = (page) => <PublicLayout>{page}</PublicLayout>;
