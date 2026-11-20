import type { MouseEvent } from 'react';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { cn } from '@/lib/utils';

export type PageMeta = { current_page: number; last_page: number; per_page: number; total: number; from: number | null; to: number | null };

function pageList(current: number, last: number): (number | '…')[] {
    if (last <= 7) return Array.from({ length: last }, (_, i) => i + 1);
    const pages = new Set([1, last, current - 1, current, current + 1]);
    const sorted = [...pages].filter((p) => p >= 1 && p <= last).sort((a, b) => a - b);
    const out: (number | '…')[] = [];
    sorted.forEach((p, i) => {
        if (i > 0 && p - sorted[i - 1] > 1) out.push('…');
        out.push(p);
    });
    return out;
}

/** Pie de tabla: "Mostrando X–Y de Z" y la paginación de shadcn con Anterior / Siguiente. */
export function TablePagination({ meta, onPageChange }: { meta: PageMeta; onPageChange: (page: number) => void }) {
    if (meta.total === 0) return null;

    const go = (page: number, disabled = false) => (e: MouseEvent) => {
        e.preventDefault();
        if (!disabled) onPageChange(page);
    };
    const atStart = meta.current_page <= 1;
    const atEnd = meta.current_page >= meta.last_page;

    return (
        <div className="flex flex-col items-center justify-between gap-2 border-t px-5 py-3 sm:flex-row">
            <p className="text-xs text-muted-foreground">
                Mostrando {meta.from}–{meta.to} de {meta.total}
            </p>
            {meta.last_page > 1 && (
                <Pagination className="mx-0 w-auto">
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious
                                href="#"
                                aria-disabled={atStart}
                                className={cn(atStart && 'pointer-events-none opacity-50')}
                                onClick={go(meta.current_page - 1, atStart)}
                            />
                        </PaginationItem>
                        {pageList(meta.current_page, meta.last_page).map((p, i) =>
                            p === '…' ? (
                                <PaginationItem key={`gap-${i}`} className="hidden sm:block">
                                    <PaginationEllipsis />
                                </PaginationItem>
                            ) : (
                                <PaginationItem key={p} className="hidden sm:block">
                                    <PaginationLink href="#" isActive={p === meta.current_page} className="tabular-nums" onClick={go(p)}>
                                        {p}
                                    </PaginationLink>
                                </PaginationItem>
                            ),
                        )}
                        <PaginationItem>
                            <PaginationNext
                                href="#"
                                aria-disabled={atEnd}
                                className={cn(atEnd && 'pointer-events-none opacity-50')}
                                onClick={go(meta.current_page + 1, atEnd)}
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            )}
        </div>
    );
}
