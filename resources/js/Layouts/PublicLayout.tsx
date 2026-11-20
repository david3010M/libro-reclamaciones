import type { ReactNode } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { Globe, Mail, Plus, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ThemeToggle } from '@/components/ThemeToggle';
import { CompanyMark } from '@/components/public/CompanyMark';
import { useFlashToasts } from '@/hooks/useFlashToasts';
import { cn } from '@/lib/utils';

/** `fit`: en escritorio la página ocupa exactamente la pantalla (sin scroll de página). */
export default function PublicLayout({ children, fit = false, centered = false }: { children: ReactNode; fit?: boolean; centered?: boolean }) {
    useFlashToasts();
    const { company } = usePage<{ company: Company | null }>().props;
    const mainEmail = company?.email?.split(',')[0].trim();

    return (
        <div className={cn('public-surface flex min-h-screen w-full flex-col bg-muted dark:bg-background', fit && 'lg:h-dvh lg:min-h-0 lg:overflow-hidden')}>
            <header className="sticky top-0 z-30 bg-muted dark:bg-background">
                <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
                    <Link href="/" className="flex min-w-0 items-center gap-3">
                        <CompanyMark company={company} />
                        <span className="flex min-w-0 flex-col leading-tight">
                            <span className="truncate text-sm font-semibold text-foreground">{company?.name}</span>
                            <span className="truncate text-xs text-muted-foreground">Libro de Reclamaciones</span>
                        </span>
                    </Link>

                    <nav className="flex items-center gap-1.5">
                        <Button asChild variant="ghost">
                            <Link href={route('complaint.search')}>
                                <Search />
                                <span className="hidden sm:inline">Buscar reclamo</span>
                                <span className="sr-only sm:hidden">Buscar reclamo</span>
                            </Link>
                        </Button>
                        <Button asChild>
                            <Link href={route('form.show')}>
                                <Plus />
                                <span className="hidden sm:inline">Nuevo reclamo</span>
                                <span className="sm:hidden">Nuevo</span>
                            </Link>
                        </Button>
                        <ThemeToggle />
                    </nav>
                </div>
            </header>

            <main className={cn('mx-auto w-full max-w-6xl flex-1 px-4 py-6 sm:px-6 sm:py-10', fit && 'lg:min-h-0 lg:py-5', centered && 'flex flex-col justify-center')}>{children}</main>

            <footer>
                <div className={cn('mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-6 sm:px-6 md:flex-row md:items-center md:justify-between', fit && 'lg:py-2.5')}>
                    <p className="text-xs text-muted-foreground">
                        <span className="font-medium text-foreground">{company?.name}</span> · Cada reclamo se registra con un código único y queda en un historial verificable.
                    </p>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                        {mainEmail && (
                            <Button asChild variant="link" size="sm" className="dark:text-foreground">
                                <a href={`mailto:${mainEmail}`}>
                                    <Mail />
                                    {mainEmail}
                                </a>
                            </Button>
                        )}
                        {mainEmail && company?.website && <Separator orientation="vertical" className="h-4" />}
                        {company?.website && (
                            <Button asChild variant="link" size="sm" className="dark:text-foreground">
                                <a href={company.website} target="_blank" rel="noreferrer">
                                    <Globe />
                                    {company.website.replace(/^https?:\/\//, '')}
                                </a>
                            </Button>
                        )}
                    </div>
                </div>
            </footer>
        </div>
    );
}
