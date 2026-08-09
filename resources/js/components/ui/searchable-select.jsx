import ReactSelect from 'react-select';
import { cn } from '@/lib/utils';

/**
 * Select con búsqueda estilo shadcn, construido sobre react-select en modo "unstyled"
 * para que tome los tokens de color del design system (--background, --border, etc).
 */
export function SearchableSelect({ className, classNamePrefix = 'rs', ...props }) {
    return (
        <ReactSelect
            unstyled
            className={cn('text-sm', className)}
            classNamePrefix={classNamePrefix}
            noOptionsMessage={() => 'Sin resultados'}
            loadingMessage={() => 'Cargando...'}
            classNames={{
                control: ({ isFocused }) =>
                    cn(
                        'flex h-9 w-full items-center rounded-md border border-input bg-background px-2 shadow-sm transition-colors',
                        isFocused && 'ring-1 ring-ring border-ring'
                    ),
                placeholder: () => 'text-muted-foreground',
                input: () => 'text-foreground',
                singleValue: () => 'text-foreground',
                menu: () => 'mt-1 rounded-md border border-border bg-card text-card-foreground shadow-md overflow-hidden z-50',
                menuList: () => 'p-1 max-h-64 overflow-auto',
                option: ({ isFocused, isSelected }) =>
                    cn(
                        'cursor-pointer rounded-sm px-2 py-1.5 text-sm',
                        isSelected && 'bg-primary text-primary-foreground',
                        !isSelected && isFocused && 'bg-accent text-accent-foreground'
                    ),
                indicatorSeparator: () => 'hidden',
                dropdownIndicator: () => 'text-muted-foreground px-1',
                clearIndicator: () => 'text-muted-foreground px-1 cursor-pointer hover:text-foreground',
                multiValue: () => 'bg-secondary rounded px-1.5 py-0.5 mr-1 flex items-center gap-1',
                multiValueLabel: () => 'text-secondary-foreground text-xs',
                multiValueRemove: () => 'text-muted-foreground hover:text-destructive cursor-pointer',
            }}
            {...props}
        />
    );
}
