import { useEffect } from 'react';
import { usePage } from '@inertiajs/react';
import { toast } from 'sonner';

/**
 * Escucha los mensajes flash compartidos por Laravel (session('success')/session('error'))
 * y los muestra como toast. Colocar una vez por layout.
 */
export function useFlashToasts() {
    const { flash } = usePage().props;

    useEffect(() => {
        if (flash?.success) toast.success(flash.success);
        if (flash?.error) toast.error(flash.error);
    }, [flash]);
}
