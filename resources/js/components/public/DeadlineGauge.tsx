import { PolarAngleAxis, RadialBar, RadialBarChart } from 'recharts';
import { Check, Clock, X } from 'lucide-react';

interface Props {
    /** Días que quedan para responder (puede ser negativo si venció). */
    remaining: number;
    /** Días totales de plazo. */
    total: number;
    /** `active`: el plazo corre. `done`: ya se respondió. `closed`: rechazado u otro cierre. */
    mode: 'active' | 'done' | 'closed' | 'pending';
}

const COLOR = {
    good: 'oklch(0.696 0.17 162.48)',
    warn: 'oklch(0.769 0.188 70.08)',
    bad: 'oklch(0.637 0.237 25.331)',
    idle: 'oklch(0.708 0.015 255)',
};

/** Medidor circular del plazo de respuesta. Muestra días restantes o el cierre del reclamo. */
export function DeadlineGauge({ remaining, total, mode }: Props) {
    const safeTotal = Math.max(total, 1);
    const used = Math.min(Math.max(safeTotal - remaining, 0), safeTotal);
    const pct = mode === 'active' ? Math.round((used / safeTotal) * 100) : 100;

    let color = COLOR.good;
    if (mode === 'closed' || mode === 'pending') color = COLOR.idle;
    if (mode === 'active') color = remaining >= 20 ? COLOR.good : remaining >= 1 ? COLOR.warn : COLOR.bad;

    return (
        <div className="relative mx-auto size-44" role="img" aria-label={mode === 'active' ? `Quedan ${remaining} días` : 'Plazo cerrado'}>
            <RadialBarChart
                width={176}
                height={176}
                data={[{ value: pct }]}
                innerRadius={66}
                outerRadius={84}
                barSize={16}
                startAngle={90}
                endAngle={-270}
            >
                <PolarAngleAxis type="number" domain={[0, 100]} tick={false} angleAxisId={0} />
                <RadialBar dataKey="value" cornerRadius={8} fill={color} background={{ fill: 'var(--muted)' }} />
            </RadialBarChart>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                {mode === 'active' && (
                    <>
                        <span className="tabular text-4xl font-semibold tracking-tight text-foreground">{Math.max(remaining, 0)}</span>
                        <span className="text-xs text-muted-foreground">{remaining === 1 ? 'día restante' : 'días restantes'}</span>
                    </>
                )}
                {mode === 'done' && (
                    <>
                        <Check className="size-8 text-emerald-500" />
                        <span className="mt-1 text-xs font-medium text-foreground">Respondido</span>
                    </>
                )}
                {mode === 'pending' && (
                    <>
                        <Clock className="size-8 text-muted-foreground" />
                        <span className="mt-1 text-xs font-medium text-foreground">Por verificar</span>
                    </>
                )}
                {mode === 'closed' && (
                    <>
                        <X className="size-8 text-muted-foreground" />
                        <span className="mt-1 text-xs font-medium text-foreground">Cerrado</span>
                    </>
                )}
            </div>
        </div>
    );
}
