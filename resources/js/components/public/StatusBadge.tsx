import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { statusClassName } from '@/lib/complaintStatus';

export function StatusBadge({ status, className }: { status?: string; className?: string }) {
    return (
        <Badge variant="secondary" className={cn('h-6 px-2.5 text-xs font-semibold', statusClassName(status), className)}>
            {status ?? 'SIN ESTADO'}
        </Badge>
    );
}
