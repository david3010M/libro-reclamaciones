import { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import { CircleHelp, CirclePlus, ExternalLink, MessageCircleQuestion, Pencil, Trash2 } from 'lucide-react';
import AdminLayout from '@/Layouts/AdminLayout';
import { PageHeader } from '@/components/admin/PageHeader';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { TablePagination } from '@/components/TablePagination';
import { ConfirmDialog } from '@/components/ConfirmDialog';

function IconAction({ label, onClick, href, destructive, children }: { label: string; onClick?: () => void; href?: string; destructive?: boolean; children: React.ReactNode }) {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon-sm"
                    aria-label={label}
                    onClick={onClick}
                    asChild={!!href}
                    className={destructive ? 'text-muted-foreground hover:text-destructive' : 'text-muted-foreground'}
                >
                    {href ? <Link href={href}>{children}</Link> : children}
                </Button>
            </TooltipTrigger>
            <TooltipContent>{label}</TooltipContent>
        </Tooltip>
    );
}

export default function QuestionsIndex({ questions }: any) {
    const [deleting, setDeleting] = useState<any>(null);
    const [deleteLoading, setDeleteLoading] = useState(false);

    function confirmDelete() {
        setDeleteLoading(true);
        router.delete(route('question.destroy', deleting.id), {
            preserveScroll: true,
            onFinish: () => {
                setDeleteLoading(false);
                setDeleting(null);
            },
        });
    }

    return (
        <AdminLayout title="Preguntas">
            <Head title="Preguntas" />

            <PageHeader icon={CircleHelp} title="Preguntas" description="Los campos que el cliente completa en el formulario público.">
                <Button variant="outline" asChild>
                    <a href={route('form.show')} target="_blank" rel="noreferrer">
                        <ExternalLink />
                        Ver formulario
                    </a>
                </Button>
                <Button asChild>
                    <Link href={route('question.create')}>
                        <CirclePlus />
                        Nueva pregunta
                    </Link>
                </Button>
            </PageHeader>

            <Card className="gap-0 overflow-hidden py-0">
                <Table>
                    <TableHeader>
                        <TableRow className="hover:bg-transparent">
                            <TableHead className="pl-5">Pregunta</TableHead>
                            <TableHead>Tipo</TableHead>
                            <TableHead className="w-px pr-5 text-right">
                                <span className="sr-only">Acciones</span>
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {questions.data.map((q: any) => (
                            <TableRow key={q.id}>
                                <TableCell className="max-w-md whitespace-normal pl-5 font-medium text-foreground">{q.question}</TableCell>
                                <TableCell>
                                    <Badge variant="outline">{q.type_question?.label}</Badge>
                                </TableCell>
                                <TableCell className="pr-5">
                                    <div className="flex items-center justify-end gap-0.5">
                                        <IconAction label="Editar" href={route('question.edit', q.id)}>
                                            <Pencil />
                                        </IconAction>
                                        <IconAction label="Eliminar" destructive onClick={() => setDeleting(q)}>
                                            <Trash2 />
                                        </IconAction>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                        {questions.data.length === 0 && (
                            <TableRow className="hover:bg-transparent">
                                <TableCell colSpan={3} className="py-16">
                                    <div className="flex flex-col items-center gap-2 text-center text-muted-foreground">
                                        <MessageCircleQuestion className="size-8" strokeWidth={1.5} />
                                        <p className="text-sm">Aún no hay preguntas. Crea la primera.</p>
                                    </div>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
                <TablePagination meta={questions} onPageChange={(page) => router.get(route('question.index'), { page }, { preserveScroll: true, preserveState: true })} />
            </Card>

            <ConfirmDialog
                open={!!deleting}
                onOpenChange={(v: boolean) => !v && setDeleting(null)}
                icon={Trash2}
                destructive
                title="Eliminar pregunta"
                description="La pregunta dejará de aparecer en el formulario público."
                subject={deleting?.title ?? deleting?.question}
                consequences={['Se elimina de forma definitiva.', 'Si ya tiene respuestas de clientes, no se podrá eliminar.']}
                note="Esta acción no se puede deshacer."
                confirmLabel="Eliminar"
                onConfirm={confirmDelete}
                loading={deleteLoading}
            />
        </AdminLayout>
    );
}
