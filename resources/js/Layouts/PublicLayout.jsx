import { Link, usePage } from '@inertiajs/react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useFlashToasts } from '@/hooks/useFlashToasts';

export default function PublicLayout({ children }) {
    useFlashToasts();
    const { company } = usePage().props;

    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <header className="w-full border-b border-border bg-card">
                <div className="container mx-auto flex h-16 items-center justify-between px-4 py-4">
                    <Link href="/" className="flex items-center">
                        <img
                            src="/logo.png"
                            className="h-9 w-9 rounded-full object-cover shadow-sm ring-1 ring-border"
                            alt="Logo"
                        />
                        <span className="ml-2 text-lg font-semibold text-foreground">{company?.name}</span>
                    </Link>
                    <nav className="flex items-center space-x-2">
                        <Link href={route('complaint.search')} className="secondaryButton">
                            Buscar Reclamo
                        </Link>
                        <Link href={route('form.show')} className="primaryButton">
                            Nuevo Reclamo
                        </Link>
                        <ThemeToggle />
                    </nav>
                </div>
            </header>

            <div className="flex flex-1 items-center justify-center p-4">
                <div className="w-full">{children}</div>
            </div>
        </div>
    );
}
