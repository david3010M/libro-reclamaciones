import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export type SheetAnswer = {
    id?: number;
    answer: string;
    question?: { id?: number; title?: string; question?: string; type_question_id?: number };
};

const IMAGE_TYPE = 5;

type Props = {
    answers: SheetAnswer[];
    title?: string;
    description?: string;
    className?: string;
};

/**
 * Hoja de reclamación como tabla etiqueta / valor. Es la única forma de mostrar
 * lo que llenó el cliente: panel, página de respuesta y vista pública la usan.
 */
export function ComplaintSheet({ answers, title = 'Hoja de reclamación', description = 'Lo que el cliente registró en el formulario.', className }: Props) {
    const images = answers.filter((a) => a.question?.type_question_id === IMAGE_TYPE);
    const details = answers.filter((a) => a.question?.type_question_id !== IMAGE_TYPE);

    return (
        <Card className={cn('gap-0 overflow-hidden py-0', className)}>
            <div className="border-b px-5 py-3.5">
                <h2 className="text-sm font-semibold">{title}</h2>
                {description && <p className="text-xs text-muted-foreground">{description}</p>}
            </div>

            {details.length === 0 && images.length === 0 && <p className="px-5 py-6 text-sm text-muted-foreground">Sin respuestas registradas.</p>}

            <dl className="divide-y">
                {details.map((a, i) => (
                    <Row key={a.id ?? i} label={a.question?.title ?? a.question?.question}>
                        <span className="whitespace-pre-line break-words">{a.answer}</span>
                    </Row>
                ))}
                {images.length > 0 && (
                    <Row label="Evidencia adjunta">
                        <span className="flex flex-wrap gap-3">
                            {images.map((a, i) => (
                                <a key={a.id ?? i} href={`/storage/${a.answer}`} target="_blank" rel="noreferrer">
                                    <img src={`/storage/${a.answer}`} alt="Evidencia adjunta" className="h-28 w-40 rounded-lg object-cover ring-1 ring-border" />
                                </a>
                            ))}
                        </span>
                    </Row>
                )}
            </dl>
        </Card>
    );
}

function Row({ label, children }: { label: React.ReactNode; children: React.ReactNode }) {
    return (
        <div className="grid sm:grid-cols-[13rem_minmax(0,1fr)]">
            <dt className="bg-muted/50 px-5 pb-0 pt-3 text-sm text-muted-foreground sm:pb-3">{label}</dt>
            <dd className="min-w-0 px-5 py-3 text-sm text-foreground">{children}</dd>
        </div>
    );
}
