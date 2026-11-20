import axios from 'axios';

/** Cliente HTTP del panel. Misma origen: axios envía solo la cookie de sesión y el XSRF-TOKEN de Laravel. */
export const api = axios.create({
    headers: { 'X-Requested-With': 'XMLHttpRequest', Accept: 'application/json' },
});
