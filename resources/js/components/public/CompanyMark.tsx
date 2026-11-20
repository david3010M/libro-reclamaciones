import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { assetUrl } from '@/lib/url';
import { initials } from './format';

interface Props {
    company?: Company | null;
    className?: string;
}

/** Logo de la empresa con iniciales de respaldo. La empresa lidera: viene de la tabla companies. */
export function CompanyMark({ company, className }: Props) {
    return (
        <Avatar className={cn('size-10 ring-1 ring-border', className)}>
            <AvatarImage src={company?.logo ? assetUrl(company.logo) : undefined} alt={company?.name ?? 'Logo'} />
            <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                {initials(company?.name)}
            </AvatarFallback>
        </Avatar>
    );
}
