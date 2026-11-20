export function parseDate(value?: string | null): Date | null {
    if (!value) return null;
    const d = new Date(value.replace(' ', 'T'));
    return Number.isNaN(d.getTime()) ? null : d;
}

export function formatDate(value?: string | null, withTime = false): string {
    const d = parseDate(value);
    if (!d) return '—';
    return new Intl.DateTimeFormat('es-PE', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        ...(withTime ? { hour: '2-digit', minute: '2-digit' } : {}),
    }).format(d);
}

export function maskPhone(phone?: string | null): string {
    if (!phone || phone.length < 2) return phone ?? '—';
    return `${phone[0]}*******${phone[phone.length - 1]}`;
}

export function maskEmail(email?: string | null): string {
    if (!email) return '—';
    const [user, domain] = email.split('@');
    if (!domain) return email;
    return `${user.slice(0, 2)}${'*'.repeat(Math.max(user.length - 2, 2))}@${domain}`;
}

export function initials(name?: string | null): string {
    if (!name) return '?';
    return name
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((w) => w[0]?.toUpperCase())
        .join('');
}
