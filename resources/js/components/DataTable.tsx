import type { ReactNode } from 'react';
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { TablePagination, type PageMeta } from '@/components/TablePagination';
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

export type { PageMeta };

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

            {meta && <TablePagination meta={meta} onPageChange={onPageChange} />}
        </Card>
    );
}
