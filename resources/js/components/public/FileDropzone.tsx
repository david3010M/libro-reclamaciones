import { useRef, useState } from 'react';
import type { DragEvent, KeyboardEvent } from 'react';
import { FileText, FileVideo, ImagePlus, UploadCloud, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { EVIDENCE_MAX_MB, evidenceFileSchema } from '@/lib/schemas/complaint';
import { cn } from '@/lib/utils';

interface Props {
    id: string;
    /** Archivos elegidos. En modo simple, 0 o 1. */
    files: File[];
    onChange: (files: File[]) => void;
    onError?: (message: string) => void;
    error?: string;
    /** Permite varios archivos; la lista se muestra debajo de la zona de carga. */
    multiple?: boolean;
    /** Atributo `accept` del input. Por defecto, la evidencia del formulario. */
    accept?: string;
    /** Texto de ayuda bajo "Arrastra un archivo o haz clic". */
    hint?: string;
    /** Devuelve un mensaje si el archivo no es válido. Por defecto, la validación de evidencia. */
    validate?: (file: File) => string | null;
}

function size(bytes: number) {
    return bytes > 1024 * 1024 ? `${(bytes / 1024 / 1024).toFixed(1)} MB` : `${Math.max(1, Math.round(bytes / 1024))} KB`;
}

function validateEvidence(file: File) {
    const result = evidenceFileSchema.safeParse(file);
    return result.success ? null : result.error.issues[0].message;
}

function iconFor(file: File) {
    if (file.type.startsWith('video/')) return FileVideo;
    if (file.type.startsWith('image/')) return ImagePlus;
    return FileText;
}

/**
 * Zona de carga única para el formulario del cliente y la respuesta del panel:
 * clic en cualquier parte, teclado, o arrastrar y soltar.
 */
export function FileDropzone({
    id,
    files,
    onChange,
    onError,
    error,
    multiple = false,
    accept = '.png,.jpg,.jpeg,.mp4',
    hint = `PNG, JPG o MP4 · máx. ${EVIDENCE_MAX_MB} MB`,
    validate = validateEvidence,
}: Props) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [dragging, setDragging] = useState(false);

    function accepts(candidates: FileList | File[] | null | undefined) {
        const list = Array.from(candidates ?? []);
        if (list.length === 0) return;
        const valid: File[] = [];
        for (const file of list) {
            const problem = validate(file);
            if (problem) {
                onError?.(problem);
                continue;
            }
            valid.push(file);
        }
        if (valid.length === 0) return;
        onChange(multiple ? [...files, ...valid] : [valid[0]]);
    }

    function onDrop(e: DragEvent) {
        e.preventDefault();
        setDragging(false);
        accepts(e.dataTransfer.files);
    }

    function onKey(e: KeyboardEvent) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            inputRef.current?.click();
        }
    }

    const remove = (index: number) => onChange(files.filter((_, i) => i !== index));

    const single = !multiple ? files[0] : undefined;
    const Icon = single ? iconFor(single) : UploadCloud;

    return (
        <div className="grid gap-2">
            <input
                ref={inputRef}
                id={id}
                type="file"
                accept={accept}
                multiple={multiple}
                className="sr-only"
                tabIndex={-1}
                onChange={(e) => {
                    accepts(e.target.files);
                    e.target.value = '';
                }}
            />
            <div
                role="button"
                tabIndex={0}
                aria-label={multiple ? 'Adjuntar archivos' : 'Adjuntar evidencia'}
                aria-invalid={!!error}
                onClick={() => inputRef.current?.click()}
                onKeyDown={onKey}
                onDragOver={(e) => {
                    e.preventDefault();
                    setDragging(true);
                }}
                onDragLeave={() => setDragging(false)}
                onDrop={onDrop}
                className={cn(
                    'flex min-h-10 w-full cursor-pointer items-center gap-3 rounded-xl border border-dashed bg-card px-3 py-2 text-left outline-none transition-colors',
                    'hover:border-primary/60 hover:bg-primary/5 focus-visible:ring-3 focus-visible:ring-ring/50',
                    dragging ? 'border-primary bg-primary/10' : 'border-border',
                    error && 'border-destructive',
                )}
            >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                    <Icon className="size-5" />
                </span>
                <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-medium text-foreground">
                        {single ? single.name : dragging ? 'Suelta aquí' : multiple ? 'Arrastra archivos o haz clic' : 'Arrastra un archivo o haz clic'}
                    </span>
                    <span className="block text-xs text-muted-foreground">{single ? size(single.size) : hint}</span>
                </span>
                {single && (
                    <Button
                        type="button"
                        variant="ghost"
                        size="icon-sm"
                        aria-label="Quitar archivo"
                        onClick={(e) => {
                            e.stopPropagation();
                            onChange([]);
                        }}
                    >
                        <X />
                    </Button>
                )}
            </div>

            {multiple && files.length > 0 && (
                <ul className="divide-y rounded-xl border bg-card">
                    {files.map((file, i) => {
                        const FileIcon = iconFor(file);
                        return (
                            <li key={`${file.name}-${i}`} className="flex items-center gap-3 px-3 py-2">
                                <FileIcon className="size-4 shrink-0 text-muted-foreground" />
                                <span className="min-w-0 flex-1 truncate text-sm">{file.name}</span>
                                <span className="shrink-0 text-xs tabular-nums text-muted-foreground">{size(file.size)}</span>
                                <Button type="button" variant="ghost" size="icon-sm" aria-label={`Quitar ${file.name}`} onClick={() => remove(i)}>
                                    <X />
                                </Button>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
}
