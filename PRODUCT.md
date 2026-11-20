# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
- **Cliente que reclama:** entra casi siempre desde el celular, muchas veces molesto, y quiere sentir que lo escuchan y que su reclamo quedó registrado.
- **Cliente que consulta:** busca su reclamo por código y quiere ver de un vistazo en qué etapa está y cuál fue la respuesta.
- **Evidencia legal:** el cliente y la empresa necesitan un documento formal (hoja de reclamación y copia de la respuesta) con código único.
- (Administradores de cada empresa usan un panel aparte; no es parte de este alcance.)

## Product Purpose
Libro de Reclamaciones virtual: cada empresa registra, atiende y responde reclamos y quejas de sus clientes, con confirmación por correo, seguimiento por avances y respuesta con adjuntos. Éxito: el cliente completa el reclamo sin fricción, lo confirma por correo y puede seguirlo hasta recibir respuesta.

## Positioning
Sistema multiempresa: la misma plataforma sirve a varias empresas, cada una con su propia identidad (nombre, logo, correos y sedes). Mr. Paleta es la empresa de ejemplo; ninguna decisión visual puede depender de que sea una heladería.

## Operating Context
- Stack: Laravel 10 + Inertia + React + Vite + Tailwind v4 + componentes shadcn en `resources/js/components/ui`.
- Formulario de 3 pasos (preguntas dinámicas por paso, datos del cliente, confirmación). Código de reclamo según la sede.
- Confirmación del reclamo por correo con plazo de 48 horas. Estados: registrado, en proceso, archivado, rechazado.
- La marca de cada empresa viene de la tabla `companies` (nombre, logo, correo, sitio web).

## Capabilities and Constraints
- Los componentes existen duplicados en `.jsx` y `.tsx`; el usuario decidió **migrar las páginas públicas a `.tsx`**.
- El navegador integrado de Claude no carga el servidor de Vite en caliente; para verlo se usa `npm run build`.
- Pendiente de definir: color de acento por empresa (hoy solo hay logo, sin color).

## Brand Commitments
- Fondo base `muted` de shadcn; sobre él van las tarjetas.
- Botones: el `Button` de shadcn con sus variantes por defecto, sin estilos propios sobre él.
- Más componentes, gráficos y Tailwind: la vista debe verse presentable y con contexto de marca, no genérica.

## Evidence on Hand
- Logo de la empresa en `public/logo.png`. No hay testimonios, métricas ni cifras reales: no inventarlas.

## Product Principles
1. El cliente debe saber siempre en qué punto está y qué sigue.
2. Es un documento formal: serio y claro, pero humano, no frío.
3. La marca de la empresa lidera; la plataforma se mantiene discreta.
4. Móvil primero: el reclamo se escribe con el pulgar.
5. Nada de inventar datos: lo que no existe se muestra como pendiente.

## Accessibility & Inclusion
Contraste suficiente, formularios con etiquetas y errores asociados, uso móvil, español.
