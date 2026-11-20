/// <reference types="vite/client" />

declare function route(name?: string, params?: unknown, absolute?: boolean): string;

interface Company {
    id: number;
    name: string;
    email: string | null;
    logo: string | null;
    website: string | null;
}

interface PageFlash {
    success?: string;
    error?: string;
    message?: string;
    error_code?: number;
    complaintCode?: string;
}
