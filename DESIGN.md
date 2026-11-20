# Design — Libro de Reclamaciones (vista pública)

Sistema multiempresa. La empresa lidera (logo, nombre, correo, web vienen de `companies`); la plataforma queda discreta.
Alcance: `Layouts/PublicLayout.tsx`, `Pages/Public/*.tsx` y `components/public/*`. Todo en TSX.

## Idea central
Una **hoja de reclamación** de papel, hecha pantalla: cabecera de color de marca, **perforación** con muescas, y debajo los datos del documento. Todo vive sobre un fondo `muted`; las tarjetas blancas se despegan de él.

## Fondo y capas
| Capa | Token | Valor (claro) | Uso |
|---|---|---|---|
| Fondo de página | `--muted` | `oklch(0.952 0.011 272)` | `bg-muted` en el layout; en oscuro `bg-background` |
| Tarjeta | `--card` | `oklch(1 0 0)` | `Card` de shadcn, con `ring-1` y sombra suave por defecto |
| Cabecera / pie | `--card` | blanco | `border-b` / `border-t`, sin blur ni cristal |
| Acento | `--primary` | `oklch(0.457 0.24 277)` (índigo) | banda de marca, paso activo, botón principal |

El `--muted` vive en el segundo bloque `:root` de `resources/css/app.css` (el primero queda sobrescrito). Cambiarlo solo allí.

## Tipografía
Inter Variable (ya cargada desde `app.jsx`). Sin fuente decorativa: es un documento formal.
- Código del reclamo: `text-3xl`/`sm:text-4xl`, `font-semibold`, `tracking-tight`, cifras tabulares (`.tabular`).
- Títulos de tarjeta: `CardTitle` de shadcn. Etiquetas de datos: `text-xs text-muted-foreground` sobre el valor `text-sm text-foreground`.
- Medida de lectura: respuestas y descripciones dentro de columnas de ~65ch; `text-balance` en titulares, `text-pretty` en párrafos.

## Anchos
- Contenedor: `max-w-6xl`, gutters `px-4 sm:px-6`.
- Reclamo: columna principal fluida + aside fijo de `340px` (`lg:grid-cols-[minmax(0,1fr)_340px]`), aside `sticky top-24`.
- Formulario: aside de marca `340px` + tarjeta del formulario fluida. En móvil el aside se reemplaza por una barra compacta de avance.
- Búsqueda: tarjeta principal + panel "¿Cómo funciona?" de `380px`.

## Componentes y reglas
- **Botones**: solo el `Button` de shadcn con sus variantes (`default`, `outline`, `ghost`, `link`, `secondary`) y tamaños (`sm`, `lg`, `icon-sm`). Nada de clases `primaryButton`/`secondaryButton`. Enlaces como `Button asChild`.
- **Estados** (`StatusBadge`): `Badge secondary` + `statusClassName()` en `lib/complaintStatus.js` (ámbar registrado, violeta en proceso, esmeralda respondido, rojo rechazado, celeste en verificación).
- **Plazo** (`DeadlineGauge`, recharts `RadialBarChart`): verde ≥ 20 días, ámbar 1–19, rojo vencido; gris al cerrarse.
- **Seguimiento**: `Progress` + 3 etapas (Registrado → En proceso → Respondido) + línea de tiempo de avances.
- **Formulario**: pasos con `Progress`; preguntas con selección como *tiles* (`RadioGroup`/`Checkbox` dentro de un `label` con borde que se tiñe al marcarse); campos con icono vía `IconInput` (el `Input` base no trae icono).
- **Datos del titular**: teléfono y correo parcialmente ocultos (`maskPhone`, `maskEmail`).

## Decisiones (Disparador → Decisión → Razón)
1. *Cliente molesto en el celular* → barra de avance arriba y opciones como tiles grandes → se completa con el pulgar y se sabe cuánto falta.
2. *Documento con valor formal* → perforación, código grande con botón de copiar, descargas explícitas → se siente un registro oficial, no una página genérica.
3. *Muchas empresas* → logo y nombre desde `companies`, iniciales como respaldo → la marca de cada una lidera sin tocar el código.
4. *Respuesta aún no llega* → estado vacío con explicación y sin botón activo → el cliente entiende qué pasa y qué sigue.
5. *Plazo legal* → medidor circular con color semáforo → se lee el tiempo restante de un vistazo.

## Prohibido en esta vista
Botones con estilos propios, tarjetas anidadas, texto con degradado, cristal/blur decorativo, `border-left` de color, sombras duras, emojis como iconos (iconos: lucide, trazo único).

## Pendiente
- Color de acento por empresa: hoy el acento es único (índigo). Si se quiere marca por empresa, añadir `color` a `companies` y mapearlo a `--primary`.
- El tema oscuro usa los tokens existentes; revisar el contraste de `statusClassName` en oscuro.
