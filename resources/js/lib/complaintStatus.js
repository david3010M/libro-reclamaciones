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
