import { useState } from 'react';
import { Link, usePage, router } from '@inertiajs/react';
import { BookOpen, CircleHelp, Settings, Menu, LogOut, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useFlashToasts } from '@/hooks/useFlashToasts';

const NAV = [
    { key: 'complaint', label: 'Reclamos', href: 'complaint.index', icon: BookOpen },
    { key: 'question', label: 'Preguntas', href: 'question.index', icon: CircleHelp },
    { key: 'config', label: 'Configuración', href: 'config.index', icon: Settings },
];

export default function AdminLayout({ children, title }) {
    useFlashToasts();
    const { url, props } = usePage();
    const company = props.company;
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const currentGroup = url.split('/').filter(Boolean)[0] ?? '';

    const isActive = (key) => {
        if (key === 'complaint') return currentGroup === 'reclamos' || currentGroup === '';
        if (key === 'question') return currentGroup === 'preguntas';
        if (key === 'config') return currentGroup === 'configuracion';
        return false;
    };

    return (
        <div className="flex h-screen w-screen overflow-hidden bg-muted/40">
            {/* Sidebar */}
            <aside
                className={cn(
                    'fixed inset-y-0 left-0 z-40 w-64 border-e border-border bg-card transition-transform lg:static lg:translate-x-0',
                    sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                )}
            >
                <div className="flex h-full flex-col px-3 py-4">
                    <Link href="/reclamos" className="flex flex-col items-center gap-2 py-2 text-center">
                        <img
                            src="/logo.png"
                            className="h-14 w-14 rounded-full object-cover shadow-sm ring-1 ring-border"
                            alt="Logo"
                        />
                        <span className="text-sm font-medium leading-tight text-foreground">
                            LIBRO DE <strong className="font-semibold">RECLAMACIONES</strong>
                        </span>
                    </Link>

                    <div className="my-4 border-t border-border" />

                    <ul className="space-y-1 font-medium">
                        {NAV.map(({ key, label, href, icon: Icon }) => (
                            <li key={key}>
                                <Link
                                    href={route(href)}
                                    className={cn('menuItem', isActive(key) && 'itemActive')}
                                    onClick={() => setSidebarOpen(false)}
                                >
                                    <Icon className="menuIcon" />
                                    <span className="flex-1 whitespace-nowrap">{label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>

            {sidebarOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black/50 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Main column */}
            <div className="flex min-w-0 flex-1 flex-col">
                <header className="flex w-full items-center justify-between border-b border-border bg-card p-4">
                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setSidebarOpen((v) => !v)}>
                            {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </Button>
                        <h1 className="text-lg font-semibold text-foreground">{title ?? 'Panel de Administración'}</h1>
                    </div>
                    <div className="flex items-center gap-2">
                        <ThemeToggle />
                        <button
                            type="button"
                            onClick={() => router.post(route('logout'))}
                            className="btn-outline"
                        >
                            <LogOut className="h-4 w-4" />
                            Cerrar Sesión
                        </button>
                    </div>
                </header>

                <main className="flex-1 overflow-y-auto p-4 lg:p-6">{children}</main>
            </div>
        </div>
    );
}
