export const STATUS = {
    REGISTER_TO_VERIFY: 'EN VERIFICACIÓN',
    REGISTER: 'REGISTRADO',
    REJECTED: 'RECHAZADO',
    IN_PROCESS: 'EN PROCESO',
    ATTENDED: 'ATENDIDO',
    ARCHIVED: 'ARCHIVADO',
};

/** Variante del badge de estado del reclamo (columna "Estado") */
export function statusBadgeVariant(status) {
    switch (status) {
        case STATUS.REGISTER_TO_VERIFY:
            return 'blue';
        case STATUS.REGISTER:
            return 'orange';
        case STATUS.ATTENDED:
            return 'success';
        case STATUS.IN_PROCESS:
            return 'purple';
        case STATUS.ARCHIVED:
            return 'muted';
        case STATUS.REJECTED:
            return 'destructive';
        default:
            return 'muted';
    }
}

/** Variante del badge de plazo (columna "Fecha"), según días restantes para responder */
export function daysBadgeVariant(status, timeToAnswer) {
    const active = status === STATUS.REGISTER || status === STATUS.IN_PROCESS;
    if (active && timeToAnswer >= 20) return 'success';
    if (active && timeToAnswer >= 1) return 'warning';
    if (active) return 'destructive';
    return 'muted';
}

/** Clases Tailwind del badge de estado (claro / oscuro). Badge de shadcn solo trae variantes base. */
export function statusClassName(status) {
    switch (status) {
        case STATUS.REGISTER_TO_VERIFY:
            return 'bg-sky-100 text-sky-800 dark:bg-sky-500/15 dark:text-sky-300';
        case STATUS.REGISTER:
            return 'bg-amber-100 text-amber-900 dark:bg-amber-500/15 dark:text-amber-300';
        case STATUS.IN_PROCESS:
            return 'bg-violet-100 text-violet-800 dark:bg-violet-500/15 dark:text-violet-300';
        case STATUS.ATTENDED:
        case STATUS.ARCHIVED:
            return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-500/15 dark:text-emerald-300';
        case STATUS.REJECTED:
            return 'bg-red-100 text-red-800 dark:bg-red-500/15 dark:text-red-300';
        default:
            return 'bg-muted text-muted-foreground';
    }
}
