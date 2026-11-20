import { useRef, useState } from 'react';
import type { DragEvent, KeyboardEvent } from 'react';
import { FileVideo, ImagePlus, UploadCloud, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { EVIDENCE_MAX_MB, evidenceFileSchema } from '@/lib/schemas/complaint';
import { cn } from '@/lib/utils';

interface Props {
    id: string;
    file: File | null;
    onChange: (file: File | null) => void;
    onError?: (message: string) => void;
    error?: string;
}

function size(bytes: number) {
    return bytes > 1024 * 1024 ? `${(bytes / 1024 / 1024).toFixed(1)} MB` : `${Math.max(1, Math.round(bytes / 1024))} KB`;
}

/** Zona de carga: clic en cualquier parte, teclado, o arrastrar y soltar. Valida con zod. */
export function FileDropzone({ id, file, onChange, onError, error }: Props) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [dragging, setDragging] = useState(false);

    function accept(candidate: File | undefined) {
        if (!candidate) return;
        const result = evidenceFileSchema.safeParse(candidate);
        if (!result.success) {
            onError?.(result.error.issues[0].message);
            return;
        }
        onChange(candidate);
    }

    function onDrop(e: DragEvent) {
        e.preventDefault();
        setDragging(false);
        accept(e.dataTransfer.files?.[0]);
    }

    function onKey(e: KeyboardEvent) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            inputRef.current?.click();
        }
    }

    const isVideo = file?.type.startsWith('video/');
    const Icon = file ? (isVideo ? FileVideo : ImagePlus) : UploadCloud;

    return (
        <>
            <input
                ref={inputRef}
                id={id}
                type="file"
                accept=".png,.jpg,.jpeg,.mp4"
                className="sr-only"
                tabIndex={-1}
                onChange={(e) => {
                    accept(e.target.files?.[0]);
                    e.target.value = '';
                }}
            />
            <div
                role="button"
                tabIndex={0}
                aria-label="Adjuntar evidencia"
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
                        {file ? file.name : dragging ? 'Suelta el archivo aquí' : 'Arrastra un archivo o haz clic'}
                    </span>
                    <span className="block text-xs text-muted-foreground">
                        {file ? size(file.size) : `PNG, JPG o MP4 · máx. ${EVIDENCE_MAX_MB} MB`}
                    </span>
                </span>
                {file && (
                    <Button
                        type="button"
                        variant="ghost"
                        size="icon-sm"
                        aria-label="Quitar archivo"
                        onClick={(e) => {
                            e.stopPropagation();
                            onChange(null);
                        }}
                    >
                        <X />
                    </Button>
                )}
            </div>
        </>
    );
}
