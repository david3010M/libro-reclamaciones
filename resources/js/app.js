import './bootstrap';
import 'flowbite';
import $ from 'jquery';
import Alpine from 'alpinejs';
import { createIcons, icons } from 'lucide';

window.Alpine = Alpine;
Alpine.start();

window.$ = $;
window.jQuery = $;

// Asigna createIcons e icons al objeto window para uso global
window.createIcons = createIcons;
window.icons = icons;

// Inicializa los íconos Lucide al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    createIcons({ icons });
});
