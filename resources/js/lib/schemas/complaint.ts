import { z } from 'zod';
import type { QuestionData } from '@/Pages/Public/QuestionField';

/** Mismos límites que `SubmitComplaintRequest` en el backend. */
export const EVIDENCE_MAX_MB = 20;
export const EVIDENCE_TYPES = ['image/png', 'image/jpeg', 'video/mp4'];

export const customerSchema = z.object({
    nombre: z.string().trim().min(3, 'Ingresa tu nombre completo.').max(255, 'Máximo 255 caracteres.'),
    email: z.string().trim().min(1, 'Ingresa tu correo electrónico.').email('Ingresa un correo válido.').max(255, 'Máximo 255 caracteres.'),
    telefono: z.string().regex(/^9\d{8}$/, 'Debe tener 9 dígitos y empezar con 9.'),
    document: z.string().regex(/^\d{8}$/, 'El documento debe tener 8 dígitos.'),
    direccion: z.string().trim().min(5, 'La dirección es demasiado corta.').max(255, 'Máximo 255 caracteres.'),
});

export const searchSchema = z.object({
    code: z
        .string()
        .trim()
        .min(3, 'Ingresa el código de tu reclamo.')
        .max(50, 'El código es demasiado largo.')
        .regex(/^[A-Za-z0-9-]+$/, 'Usa solo letras, números y guiones.'),
});

export type CustomerInput = z.infer<typeof customerSchema>;

export const evidenceFileSchema = z
    .instanceof(File)
    .refine((f) => EVIDENCE_TYPES.includes(f.type), 'Solo se permite PNG, JPG o MP4.')
    .refine((f) => f.size <= EVIDENCE_MAX_MB * 1024 * 1024, `El archivo no puede pesar más de ${EVIDENCE_MAX_MB} MB.`);

const timeRegex = /^([01]\d|2[0-3]):[0-5]\d$/;
const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

function todayIso() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

/** Construye el esquema de una pregunta según su tipo, obligatoriedad y máximo de opciones. */
export function buildAnswerSchema(q: QuestionData): z.ZodType {
    const type = q.type_question?.type;
    const optionValues = q.options.map((o) => o.option);
    const required = 'Este campo es obligatorio.';
    const oneOf = (values: string[]) => z.string().refine((v) => values.includes(v), 'Selecciona una opción válida.');

    let schema: z.ZodType;
    switch (type) {
        case 'select_options':
        case 'select':
        case 'radio':
            schema = q.required ? z.string().min(1, required).pipe(oneOf(optionValues)) : z.string().optional();
            break;
        case 'yes_no':
            schema = q.required ? z.string().min(1, 'Responde Sí o No.') : z.string().optional();
            break;
        case 'checkbox': {
            let arr = z.array(z.string());
            if (q.required) arr = arr.min(1, 'Elige al menos una opción.');
            if (q.max_options) arr = arr.max(q.max_options, `Puedes elegir como máximo ${q.max_options}.`);
            schema = arr.refine(
                (vals) => vals.every((v) => optionValues.includes(v) || (v.startsWith('Otro: ') && v.length > 6)),
                'Hay una opción que no es válida.',
            );
            break;
        }
        case 'date':
            schema = z
                .string()
                .min(q.required ? 1 : 0, required)
                .refine((v) => v === '' || dateRegex.test(v), 'Ingresa una fecha válida.')
                .refine((v) => v === '' || v <= todayIso(), 'La fecha no puede ser futura.');
            break;
        case 'time':
            schema = z
                .string()
                .min(q.required ? 1 : 0, required)
                .refine((v) => v === '' || timeRegex.test(v), 'Ingresa una hora válida.');
            break;
        case 'textarea':
            schema = q.required
                ? z.string().trim().min(10, 'Describe lo sucedido con al menos 10 caracteres.').max(2000, 'Máximo 2000 caracteres.')
                : z.string().max(2000, 'Máximo 2000 caracteres.').optional();
            break;
        case 'text':
            schema = q.required
                ? z.string().trim().min(1, required).max(255, 'Máximo 255 caracteres.')
                : z.string().max(255, 'Máximo 255 caracteres.').optional();
            break;
        case 'file':
            schema = evidenceFileSchema.nullish();
            break;
        default:
            schema = z.any();
    }
    return schema;
}

/** Valida las respuestas de un conjunto de preguntas. Devuelve errores por id de pregunta. */
export function validateQuestions(
    questions: QuestionData[],
    answers: Record<number, unknown>,
): Record<number, string> {
    const errors: Record<number, string> = {};
    for (const q of questions) {
        const type = q.type_question?.type;
        const empty = type === 'checkbox' ? [] : type === 'file' ? null : '';
        const result = buildAnswerSchema(q).safeParse(answers[q.id] ?? empty);
        if (!result.success) errors[q.id] = result.error.issues[0].message;
    }
    return errors;
}

/** Valida al titular. Devuelve errores por campo. */
export function validateCustomer(customer: unknown): Record<string, string> {
    const result = customerSchema.safeParse(customer);
    if (result.success) return {};
    const errors: Record<string, string> = {};
    for (const issue of result.error.issues) {
        const key = String(issue.path[0]);
        if (!errors[key]) errors[key] = issue.message;
    }
    return errors;
}
