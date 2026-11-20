// `@routes` (Ziggy) declara `const Ziggy`: es una variable global, no una propiedad de `window`.
declare const Ziggy: { url?: string } | undefined;

/**
 * URL pública de un archivo (logo, adjuntos en /storage…).
 * Parte de la URL real de la app (Ziggy), así funciona en la raíz del dominio o en una subcarpeta.
 */
export function assetUrl(path: string): string {
    const base = (typeof Ziggy !== 'undefined' ? (Ziggy?.url ?? '') : '').replace(/\/+$/, '');
    return `${base}/${path.replace(/^\/+/, '')}`;
}
