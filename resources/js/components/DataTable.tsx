import type { ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { cn } from '@/lib/utils';

export type Column<T> = {
    id: string;
    header: ReactNode;
    cell: (row: T) => ReactNode;
    /** Clases de la celda y del encabezado (p. ej. `hidden lg:table-cell`). */
    className?: string;
    /** Sin texto visible en el encabezado (columna de acciones). */
    srOnly?: boolean;
};

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

type Props<T> = {
    columns: Column<T>[];
    rows: T[];
    rowKey: (row: T) => string | number;
    meta?: PageMeta;
    loading?: boolean;
    /** Hay una recarga en curso con datos anteriores a la vista. */
    fetching?: boolean;
    onPageChange: (page: number) => void;
    onRowClick?: (row: T) => void;
    empty: ReactNode;
};

/** Tabla con paginación del lado del servidor. No sabe nada de reclamos: recibe columnas, filas y la meta de página. */
export function DataTable<T>({ columns, rows, rowKey, meta, loading, fetching, onPageChange, onRowClick, empty }: Props<T>) {
    const showSkeleton = loading && rows.length === 0;

    return (
        <Card className="gap-0 overflow-hidden py-0">
            <div className={cn('transition-opacity', fetching && !showSkeleton && 'opacity-60')}>
                <Table>
                    <TableHeader>
                        <TableRow className="hover:bg-transparent">
                            {columns.map((c, i) => (
                                <TableHead key={c.id} className={cn(i === 0 && 'pl-5', i === columns.length - 1 && 'pr-5', c.className)}>
                                    {c.srOnly ? <span className="sr-only">{c.header}</span> : c.header}
                                </TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {showSkeleton &&
                            Array.from({ length: 6 }).map((_, r) => (
                                <TableRow key={r} className="hover:bg-transparent">
                                    {columns.map((c, i) => (
                                        <TableCell key={c.id} className={cn(i === 0 && 'pl-5', i === columns.length - 1 && 'pr-5', c.className)}>
                                            {!c.srOnly && <Skeleton className="h-4 w-full max-w-28" />}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))}

                        {!showSkeleton &&
                            rows.map((row) => (
                                <TableRow key={rowKey(row)} className={cn(onRowClick && 'cursor-pointer')} onClick={() => onRowClick?.(row)}>
                                    {columns.map((c, i) => (
                                        <TableCell key={c.id} className={cn(i === 0 && 'pl-5', i === columns.length - 1 && 'pr-5', c.className)}>
                                            {c.cell(row)}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))}

                        {!showSkeleton && rows.length === 0 && (
                            <TableRow className="hover:bg-transparent">
                                <TableCell colSpan={columns.length} className="py-16">
                                    {empty}
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            {meta && meta.total > 0 && (
                <div className="flex flex-col items-center justify-between gap-2 border-t px-5 py-3 sm:flex-row">
                    <p className="text-xs text-muted-foreground">
                        Mostrando {meta.from}–{meta.to} de {meta.total}
                    </p>
                    {meta.last_page > 1 && (
                        <nav aria-label="Paginación" className="flex items-center gap-1">
                            <Button variant="ghost" size="icon-sm" aria-label="Página anterior" disabled={meta.current_page <= 1} onClick={() => onPageChange(meta.current_page - 1)}>
                                <ChevronLeft />
                            </Button>
                            {pageList(meta.current_page, meta.last_page).map((p, i) =>
                                p === '…' ? (
                                    <span key={`gap-${i}`} className="px-1 text-sm text-muted-foreground">
                                        …
                                    </span>
                                ) : (
                                    <Button
                                        key={p}
                                        variant={p === meta.current_page ? 'default' : 'ghost'}
                                        size="icon-sm"
                                        aria-current={p === meta.current_page ? 'page' : undefined}
                                        className="tabular-nums"
                                        onClick={() => onPageChange(p)}
                                    >
                                        {p}
                                    </Button>
                                ),
                            )}
                            <Button
                                variant="ghost"
                                size="icon-sm"
                                aria-label="Página siguiente"
                                disabled={meta.current_page >= meta.last_page}
                                onClick={() => onPageChange(meta.current_page + 1)}
                            >
                                <ChevronRight />
                            </Button>
                        </nav>
                    )}
                </div>
            )}
        </Card>
    );
}
