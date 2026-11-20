import { useEffect } from 'react';
import { usePage } from '@inertiajs/react';
import { errorToast, successToast } from '@/lib/toast';

/**
 * Escucha los mensajes flash compartidos por Laravel (session('success')/session('error'))
 * y los muestra como toast. Colocar una vez por layout.
 */
export function useFlashToasts() {
    const { flash } = usePage().props;

    useEffect(() => {
        if (flash?.success) successToast(flash.success);
        if (flash?.error) errorToast(flash.error);
    }, [flash]);
}
