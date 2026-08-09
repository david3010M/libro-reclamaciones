import { useState } from 'react';
import { Head, router, Link } from '@inertiajs/react';
import { Link as LinkIcon, CirclePlus, Pencil, Trash2, LoaderCircle } from 'lucide-react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Button } from '@/components/ui/button';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Pagination } from '@/components/Pagination';
import { ConfirmDialog } from '@/components/ConfirmDialog';
import { QuestionDialog } from './QuestionDialog';

export default function QuestionsIndex({ questions, typeQuestions }) {
    const [dialogQuestion, setDialogQuestion] = useState(undefined); // undefined = closed, null = create, object = edit
    const [deleting, setDeleting] = useState(null);
    const [deleteLoading, setDeleteLoading] = useState(false);

    function confirmDelete() {
        setDeleteLoading(true);
        router.delete(route('question.destroy', deleting.id), {
            onFinish: () => {
                setDeleteLoading(false);
                setDeleting(null);
            },
        });
    }

    return (
        <AdminLayout title="Gestión de Preguntas">
            <Head title="Preguntas" />

            <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold text-foreground">Gestión de Preguntas</h1>
                </div>

                <div className="flex justify-end gap-2">
                    <a href={route('form.show')} target="_blank" rel="noreferrer" className="secondaryButton">
                        <LinkIcon className="h-4 w-4" />
                        Ver Formulario
                    </a>
                    <Button onClick={() => setDialogQuestion(null)}>
                        <CirclePlus className="h-4 w-4" />
                        Nueva Pregunta
                    </Button>
                </div>

                <div className="card overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Pregunta</TableHead>
                                <TableHead className="text-center">Tipo de Pregunta</TableHead>
                                <TableHead className="text-center">Acciones</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {questions.data.map((question) => (
                                <TableRow key={question.id}>
                                    <TableCell className="font-medium text-foreground">{question.question}</TableCell>
                                    <TableCell className="text-center">{question.typeQuestion?.label}</TableCell>
                                    <TableCell>
                                        <div className="flex justify-center gap-1.5">
                                            <Button size="sm" onClick={() => setDialogQuestion(question)}>
                                                <Pencil className="h-3 w-3" />
                                                Editar
                                            </Button>
                                            <Button size="sm" variant="destructive" onClick={() => setDeleting(question)}>
                                                <Trash2 className="h-3 w-3" />
                                                Eliminar
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                            {questions.data.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={3} className="py-8 text-center text-muted-foreground">
                                        No hay preguntas registradas.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>

                <Pagination meta={questions} />
            </div>

            <QuestionDialog
                open={dialogQuestion !== undefined}
                onOpenChange={(v) => !v && setDialogQuestion(undefined)}
                question={dialogQuestion}
                typeQuestions={typeQuestions}
            />

            <ConfirmDialog
                open={!!deleting}
                onOpenChange={(v) => !v && setDeleting(null)}
                icon={Trash2}
                message="¿Está seguro de eliminar esta pregunta?"
                confirmLabel="Eliminar"
                onConfirm={confirmDelete}
                loading={deleteLoading}
            />
        </AdminLayout>
    );
}
