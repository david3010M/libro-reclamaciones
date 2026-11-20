import { z } from 'zod';

const email = z.string().trim().min(1, 'Ingresa tu correo.').email('Escribe un correo válido.');

export const loginSchema = z.object({
    email,
    password: z.string().min(1, 'Ingresa tu contraseña.'),
});

export const forgotSchema = z.object({ email });

export const resetSchema = z
    .object({
        email,
        password: z.string().min(8, 'Usa al menos 8 caracteres.'),
        password_confirmation: z.string(),
    })
    .refine((d) => d.password === d.password_confirmation, { path: ['password_confirmation'], message: 'Las contraseñas no coinciden.' });

/** Convierte los issues de zod en { campo: mensaje }. */
export function zodErrors(error: z.ZodError): Record<string, string> {
    const out: Record<string, string> = {};
    for (const issue of error.issues) {
        const key = String(issue.path[0] ?? '');
        if (key && !out[key]) out[key] = issue.message;
    }
    return out;
}
