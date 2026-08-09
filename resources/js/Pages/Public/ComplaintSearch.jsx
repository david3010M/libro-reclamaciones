import { useState } from 'react';
import { Head, router, usePage } from '@inertiajs/react';
import { TriangleAlert, Search } from 'lucide-react';
import PublicLayout from '@/Layouts/PublicLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function ComplaintSearch() {
    const { flash } = usePage().props;
    const [code, setCode] = useState('');
    const notFound = flash?.error_code === 404;

    function submit(e) {
        e.preventDefault();
        if (code) router.visit(`/reclamo/${code}`);
    }

    return (
        <>
            <Head title="Buscar Reclamo" />
            <div className="mx-auto w-full max-w-2xl">
                {notFound && (
                    <div className="mb-4 flex items-center gap-3 rounded-lg border-t-4 border-amber-300 bg-amber-50 p-4 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                        <TriangleAlert className="h-5 w-5 flex-shrink-0" />
                        <p className="text-sm font-medium">
                            {flash.message} {flash.complaintCode}
                        </p>
                    </div>
                )}

                <Card>
                    <CardContent className="p-6 text-center">
                        <h1 className="text-2xl font-bold text-foreground">Seguimiento de Reclamo</h1>
                        <p className="mt-1 text-muted-foreground">Conoce el estado de tu reclamo:</p>

                        <form onSubmit={submit} className="mt-6 flex items-center justify-center gap-2">
                            <Input
                                placeholder="Ingrese el código del reclamo"
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                                className="max-w-sm"
                                required
                            />
                            <Button type="submit">
                                <Search className="h-4 w-4" />
                                Buscar Reclamo
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}

ComplaintSearch.layout = (page) => <PublicLayout>{page}</PublicLayout>;
