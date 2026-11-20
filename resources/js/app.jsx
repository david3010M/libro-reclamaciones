import '../css/app.css';
import '@fontsource-variable/inter';
import '@fontsource-variable/nunito-sans';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const appName = 'Libro de Reclamaciones';

const queryClient = new QueryClient();

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: (name) =>
        resolvePageComponent(
            [`./Pages/${name}.tsx`, `./Pages/${name}.jsx`],
            import.meta.glob(['./Pages/**/*.tsx', './Pages/**/*.jsx']),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(
            <QueryClientProvider client={queryClient}>
                <TooltipProvider>
                    <App {...props} />
                </TooltipProvider>
                <Toaster />
            </QueryClientProvider>
        );
    },
    progress: {
        color: 'hsl(240 5.9% 10%)',
    },
});
