import { Link } from '@inertiajs/react';
import { cn } from '@/lib/utils';

/**
 * Paginador genérico para los meta-links que devuelve el paginator de Laravel
 * (complaints->links() equivalente): { links: [{url, label, active}, ...] }
 */
export function Pagination({ meta }) {
    if (!meta?.links || meta.links.length <= 3) return null;

    return (
        <nav className="flex flex-wrap items-center justify-center gap-1 pt-2">
            {meta.links.map((link, i) => (
                <Link
                    key={i}
                    href={link.url || '#'}
                    preserveScroll
                    dangerouslySetInnerHTML={{ __html: link.label }}
                    className={cn(
                        'flex h-8 min-w-8 items-center justify-center rounded-md px-2 text-sm transition-colors',
                        link.active
                            ? 'bg-primary text-primary-foreground'
                            : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground',
                        !link.url && 'pointer-events-none opacity-40'
                    )}
                />
            ))}
        </nav>
    );
}
