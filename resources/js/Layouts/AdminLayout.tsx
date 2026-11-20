import type { ReactNode } from 'react';
import { Link, router, usePage } from '@inertiajs/react';
import { BookOpen, ChevronsUpDown, CircleHelp, ExternalLink, LogOut, Moon, Settings, Sun } from 'lucide-react';
import { CompanyMark } from '@/components/public/CompanyMark';
import { initials } from '@/components/public/format';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
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
    useSidebar,
} from '@/components/ui/sidebar';
import { useFlashToasts } from '@/hooks/useFlashToasts';
import { useTheme } from '@/hooks/useTheme';

type User = { name?: string; email?: string } | null;

const NAV = [
    {
        label: 'Gestión',
        items: [
            { label: 'Reclamos', route: 'complaint.index', prefix: ['/reclamos'], icon: BookOpen },
            { label: 'Preguntas', route: 'question.index', prefix: ['/preguntas'], icon: CircleHelp },
        ],
    },
    {
        label: 'Sistema',
        items: [{ label: 'Configuración', route: 'config.index', prefix: ['/configuracion'], icon: Settings }],
    },
];

/** El estado abierto/cerrado lo guarda el propio SidebarProvider en una cookie; lo leemos para recordarlo. */
function initialOpen() {
    if (typeof document === 'undefined') return true;
    return !document.cookie.split('; ').includes('sidebar_state=false');
}

function UserMenu({ user }: { user: User }) {
    const { isMobile } = useSidebar();
    const { theme, toggleTheme } = useTheme();
    const name = user?.name || user?.email || 'Administrador';

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <SidebarMenuButton size="lg" className="data-[state=open]:bg-sidebar-accent">
                    <Avatar className="size-8">
                        <AvatarFallback className="bg-primary/10 text-xs font-semibold text-primary">{initials(name)}</AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left leading-tight">
                        <span className="truncate text-sm font-medium">{name}</span>
                        {user?.email && user.email !== name && <span className="truncate text-xs text-muted-foreground">{user.email}</span>}
                    </div>
                    <ChevronsUpDown className="ml-auto size-4 text-muted-foreground" />
                </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="min-w-56 bg-popover before:hidden" side={isMobile ? 'bottom' : 'right'} align="end" sideOffset={8}>
                <DropdownMenuLabel className="font-normal">
                    <span className="block truncate text-sm font-medium text-foreground">{name}</span>
                    {user?.email && <span className="block truncate text-xs text-muted-foreground">{user.email}</span>}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onSelect={toggleTheme}>
                    {theme === 'dark' ? <Sun /> : <Moon />}
                    {theme === 'dark' ? 'Tema claro' : 'Tema oscuro'}
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <a href={route('form.show')} target="_blank" rel="noreferrer">
                        <ExternalLink />
                        Ver formulario público
                    </a>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive" onSelect={() => router.post(route('logout'))}>
                    <LogOut />
                    Cerrar sesión
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default function AdminLayout({ children, title }: { children: ReactNode; title?: string }) {
    useFlashToasts();
    const { url, props } = usePage<{ company: Company | null; auth: { user: User } }>();
    const { company, auth } = props;
    const path = url.split('?')[0];
    const current = NAV.flatMap((g) => g.items).find((i) => i.prefix.some((p) => path.startsWith(p)));

    return (
        <SidebarProvider defaultOpen={initialOpen()} className="bg-muted/50">
            <Sidebar variant="floating" collapsible="icon">
                <SidebarHeader>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton size="lg" asChild tooltip={company?.name ?? 'Inicio'}>
                                <Link href={route('complaint.index')}>
                                    <CompanyMark company={company} className="size-8 text-xs" />
                                    <div className="grid flex-1 text-left leading-tight">
                                        <span className="truncate text-sm font-semibold">{company?.name ?? 'Libro de Reclamaciones'}</span>
                                        <span className="truncate text-xs text-muted-foreground">Libro de reclamaciones</span>
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
                                            <SidebarMenuButton asChild isActive={current?.route === item.route} tooltip={item.label}>
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
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <UserMenu user={auth?.user ?? null} />
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarFooter>
                <SidebarRail />
            </Sidebar>

            <SidebarInset className="min-w-0 bg-transparent">
                <header className="flex h-14 shrink-0 items-center gap-2 px-4 md:px-6">
                    <SidebarTrigger className="-ml-1.5" />
                    <Separator orientation="vertical" className="mx-1 data-[orientation=vertical]:h-4" />
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem className="hidden sm:inline-flex text-muted-foreground">Administración</BreadcrumbItem>
                            <BreadcrumbSeparator className="hidden sm:block" />
                            <BreadcrumbItem>
                                <BreadcrumbPage>{current?.label ?? title}</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </header>
                <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-6 px-4 pb-10 md:px-6">{children}</main>
            </SidebarInset>
        </SidebarProvider>
    );
}
