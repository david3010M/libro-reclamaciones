import { Head, Link } from '@inertiajs/react';
import { ArrowLeft, CirclePlus } from 'lucide-react';
import AdminLayout from '@/Layouts/AdminLayout';
import { PageHeader } from '@/components/admin/PageHeader';
import { Button } from '@/components/ui/button';
import { QuestionForm } from './QuestionForm';

export default function QuestionCreate({ typeQuestions }: { typeQuestions: any[] }) {
    return (
        <AdminLayout title="Nueva pregunta">
            <Head title="Nueva pregunta" />
            <div className="flex flex-col gap-4">
                <Button asChild variant="ghost" size="sm" className="-ml-2 w-fit">
                    <Link href={route('question.index')}>
                        <ArrowLeft />
                        Volver a preguntas
                    </Link>
                </Button>
                <PageHeader icon={CirclePlus} title="Nueva pregunta" description="Se agrega al formulario público que completa el cliente." />
            </div>
            <QuestionForm typeQuestions={typeQuestions} />
        </AdminLayout>
    );
}
