import { Head, Link } from '@inertiajs/react';
import { ArrowLeft, Pencil } from 'lucide-react';
import AdminLayout from '@/Layouts/AdminLayout';
import { PageHeader } from '@/components/admin/PageHeader';
import { Button } from '@/components/ui/button';
import { QuestionForm } from './QuestionForm';

export default function QuestionEdit({ question, typeQuestions }: { question: any; typeQuestions: any[] }) {
    return (
        <AdminLayout title="Editar pregunta">
            <Head title="Editar pregunta" />
            <div className="flex flex-col gap-4">
                <Button asChild variant="ghost" size="sm" className="-ml-2 w-fit">
                    <Link href={route('question.index')}>
                        <ArrowLeft />
                        Volver a preguntas
                    </Link>
                </Button>
                <PageHeader icon={Pencil} title="Editar pregunta" description={question.question} />
            </div>
            <QuestionForm key={question.id} question={question} typeQuestions={typeQuestions} />
        </AdminLayout>
    );
}
