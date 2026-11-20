import { z } from 'zod';

/** Ids de `type_questions` que necesitan opciones, opciones alternativas o máximo de selección. */
export const OPTION_TYPES = [2, 3, 4, 10]; // select, radio, checkbox, select_options
export const SECOND_OPTIONS_TYPE = 10; // select_options
export const MAX_OPTIONS_TYPE = 4; // checkbox

const optionSchema = z.object({
    key: z.string(),
    id: z.number().optional(),
    option: z.string().trim().min(1, 'Escribe la opción o elimínala.').max(255, 'Máximo 255 caracteres.'),
    second: z.boolean(),
});

export const questionSchema = z
    .object({
        type_question_id: z.number().int().positive('Elige un tipo de pregunta.'),
        question: z.string().trim().min(3, 'Escribe la pregunta (mínimo 3 caracteres).').max(255, 'Máximo 255 caracteres.'),
        title: z.string().trim().min(2, 'Escribe una palabra clave.').max(100, 'Máximo 100 caracteres.'),
        description: z.string().max(500, 'Máximo 500 caracteres.'),
        required: z.boolean(),
        stepper: z.number().int().min(1).max(2),
        text_switch: z.string().trim().max(255, 'Máximo 255 caracteres.'),
        max_options: z.string(),
        options: z.array(optionSchema),
    })
    .superRefine((d, ctx) => {
        if (!OPTION_TYPES.includes(d.type_question_id)) return;
        const primary = d.options.filter((o) => !o.second).length;
        const second = d.options.filter((o) => o.second).length;

        if (primary === 0) ctx.addIssue({ code: 'custom', path: ['options'], message: 'Agrega al menos una opción.' });

        if (d.type_question_id === SECOND_OPTIONS_TYPE) {
            if (second === 0) ctx.addIssue({ code: 'custom', path: ['second_options'], message: 'Agrega al menos una opción alternativa.' });
            if (d.text_switch === '') ctx.addIssue({ code: 'custom', path: ['text_switch'], message: 'Escribe el texto que activa las opciones alternativas.' });
        }

        if (d.type_question_id === MAX_OPTIONS_TYPE && d.max_options.trim() !== '') {
            const n = Number(d.max_options);
            if (!Number.isInteger(n) || n < 1) ctx.addIssue({ code: 'custom', path: ['max_options'], message: 'Debe ser un número entero mayor a 0.' });
            else if (primary > 0 && n > primary) ctx.addIssue({ code: 'custom', path: ['max_options'], message: `No puede superar las ${primary} opciones.` });
        }
    });

export type QuestionInput = z.infer<typeof questionSchema>;

/** Errores de zod como { 'options.2.option': mensaje }, con la misma forma que los de Laravel. */
export function questionErrors(error: z.ZodError): Record<string, string> {
    const out: Record<string, string> = {};
    for (const issue of error.issues) {
        const key = issue.path.join('.');
        if (key && !out[key]) out[key] = issue.message;
    }
    return out;
}
