/**
 * URL pública de un archivo (logo, adjuntos en /storage…).
 * Parte de la URL real de la app (Ziggy), así funciona en la raíz del dominio o en una subcarpeta.
 */
export function assetUrl(path: string): string {
    const base = ((window as unknown as { Ziggy?: { url?: string } }).Ziggy?.url ?? '').replace(/\/+$/, '');
    return `${base}/${path.replace(/^\/+/, '')}`;
}
