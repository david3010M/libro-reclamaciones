import { toast } from 'sonner';

const now = () => new Date().toLocaleString();

export const successToast = (body: string, description: string = now()) =>
    toast.success(body, { description, action: { label: 'Listo', onClick: () => toast.dismiss() } });

export const errorToast = (body: string = 'Error', description: string = now()) =>
    toast.error(body, { description, action: { label: 'Cerrar', onClick: () => toast.dismiss() } });

export const warningToast = (body: string, description: string = now()) =>
    toast.warning(body, { description, action: { label: 'Entendido', onClick: () => toast.dismiss() } });

export const infoToast = (body: string, description: string = now()) =>
    toast.info(body, { description, action: { label: 'Ok', onClick: () => toast.dismiss() } });

export const loadingToast = (body: string = 'Cargando...') => toast.loading(body);

export const dismissToast = (toastId?: string | number) => (toastId ? toast.dismiss(toastId) : toast.dismiss());
