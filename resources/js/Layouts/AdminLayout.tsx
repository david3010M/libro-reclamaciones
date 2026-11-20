import type { CSSProperties, ReactNode } from 'react';
import { Link, router, usePage } from '@inertiajs/react';
import { BookOpen, CircleHelp, ExternalLink, LogOut, Moon, Settings, Sun } from 'lucide-react';
import { CompanyMark } from '@/components/public/CompanyMark';
import { initials } from '@/components/public/format';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarInset,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
    SidebarRail,
    SidebarTrigger,
} from '@/components/ui/sidebar';
import { useFlashToasts } from '@/hooks/useFlashToasts';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';

type User = { name?: string; email?: string } | null;

/** Ruta (sin dominio) de una página del menú; incluye la subcarpeta si la app no vive en la raíz. */
const pathOf = (name: string) => new URL(route(name)).pathname.replace(/\/+$/, '');

const NAV = [
    {
        label: 'Gestión',
        items: [
            { label: 'Reclamos', route: 'complaint.index', icon: BookOpen },
            { label: 'Preguntas', route: 'question.index', icon: CircleHelp },
        ],
    },
    {
        label: 'Sistema',
        items: [{ label: 'Configuración', route: 'config.index', icon: Settings }],
    },
];

/** El estado abierto/cerrado lo guarda el propio SidebarProvider en una cookie; lo leemos para recordarlo. */
function initialOpen() {
    if (typeof document === 'undefined') return true;
    return !document.cookie.split('; ').includes('sidebar_state=false');
}

const SECONDARY = 'bg-sidebar-accent text-sidebar-accent-foreground hover:bg-sidebar-accent/70 hover:text-sidebar-accent-foreground';

/** Acciones de la cuenta (antes en un menú desplegable) y, debajo, quién tiene la sesión abierta. */
function AccountBlock({ user }: { user: User }) {
    const { theme, toggleTheme } = useTheme();
    const name = user?.name || user?.email || 'Administrador';

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton className={SECONDARY} tooltip={theme === 'dark' ? 'Tema claro' : 'Tema oscuro'} onClick={toggleTheme}>
                    {theme === 'dark' ? <Sun /> : <Moon />}
                    <span>{theme === 'dark' ? 'Tema claro' : 'Tema oscuro'}</span>
                </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
                <SidebarMenuButton asChild className={SECONDARY} tooltip="Ver formulario público">
                    <a href={route('form.show')} target="_blank" rel="noreferrer">
                        <ExternalLink />
                        <span>Ver formulario público</span>
                    </a>
                </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
                <SidebarMenuButton className={cn(SECONDARY, 'hover:bg-destructive hover:text-white dark:hover:bg-sidebar-accent/70 dark:hover:text-destructive')} tooltip="Cerrar sesión" onClick={() => router.post(route('logout'))}>
                    <LogOut />
                    <span>Cerrar sesión</span>
                </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem className="mt-1">
                <div className="flex items-center gap-3 rounded-xl p-2 group-data-[collapsible=icon]:p-0" title={user?.email ?? name}>
                    <Avatar className="size-8">
                        <AvatarFallback className="bg-sidebar-primary/20 text-xs font-semibold text-sidebar-primary">{initials(name)}</AvatarFallback>
                    </Avatar>
                    <div className="grid min-w-0 flex-1 text-left leading-tight group-data-[collapsible=icon]:hidden">
                        <span className="truncate text-sm font-medium">{name}</span>
                        {user?.email && user.email !== name && <span className="truncate text-xs text-sidebar-foreground/70">{user.email}</span>}
                    </div>
                </div>
            </SidebarMenuItem>
        </SidebarMenu>
    );
}

export default function AdminLayout({ children, title }: { children: ReactNode; title?: string }) {
    useFlashToasts();
    const { url, props } = usePage<{ company: Company | null; auth: { user: User } }>();
    const { company, auth } = props;
    const path = url.split('?')[0];
    const current = NAV.flatMap((g) => g.items).find((i) => path === pathOf(i.route) || path.startsWith(`${pathOf(i.route)}/`));

    return (
        <SidebarProvider defaultOpen={initialOpen()} className="bg-muted" style={{ '--sidebar-width': '19rem' } as CSSProperties}>
            <Sidebar variant="floating" collapsible="icon">
                <SidebarHeader>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton size="lg" asChild tooltip={company?.name ?? 'Inicio'} className="h-14">
                                <Link href={route('complaint.index')}>
                                    <CompanyMark company={company} className="size-10 text-sm ring-2 ring-sidebar-foreground/30" />
                                    <div className="grid flex-1 text-left leading-tight">
                                        <span className="truncate text-sm font-semibold">{company?.name ?? 'Libro de Reclamaciones'}</span>
                                        <span className="truncate text-xs text-sidebar-foreground/70">Libro de reclamaciones</span>
                                    </div>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarHeader>

                <SidebarContent>
                    {NAV.map((group) => (
                        <SidebarGroup key={group.label}>
                            <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    {group.items.map((item) => (
                                        <SidebarMenuItem key={item.route}>
                                            <SidebarMenuButton asChild isActive={current?.route === item.route} tooltip={item.label} className="data-[active=true]:bg-sidebar-primary/15 data-[active=true]:font-medium data-[active=true]:text-sidebar-primary">
                                                <Link href={route(item.route)}>
                                                    <item.icon />
                                                    <span>{item.label}</span>
                                                </Link>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    ))}
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                    ))}
                </SidebarContent>

                <SidebarFooter>
                    <AccountBlock user={auth?.user ?? null} />
                </SidebarFooter>
                <SidebarRail />
            </Sidebar>

            <SidebarInset className="min-w-0 bg-transparent">
                <header className="flex h-14 shrink-0 items-center gap-2 px-4 md:px-6">
                    <SidebarTrigger className="-ml-1.5" />
                    <Separator orientation="vertical" className="mx-1 h-4! self-center!" />
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem className="hidden sm:inline-flex text-muted-foreground">Administración</BreadcrumbItem>
                            <BreadcrumbSeparator className="hidden sm:block" />
                            {current && title && title !== current.label ? (
                                <>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink asChild>
                                            <Link href={route(current.route)}>{current.label}</Link>
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbPage>{title}</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </>
                            ) : (
                                <BreadcrumbItem>
                                    <BreadcrumbPage>{current?.label ?? title}</BreadcrumbPage>
                                </BreadcrumbItem>
                            )}
                        </BreadcrumbList>
                    </Breadcrumb>
                </header>
                <main className="mx-auto flex w-full max-w-screen-2xl flex-1 flex-col gap-6 px-4 pb-10 md:px-6">{children}</main>
            </SidebarInset>
        </SidebarProvider>
    );
}
