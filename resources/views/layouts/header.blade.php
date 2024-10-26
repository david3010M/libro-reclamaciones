<header class="fixed top-0 min-h-20 max-h-20 h-full bg-white w-full shadow-md">
    <div class="container h-full mx-auto px-4 py-4 flex justify-between items-center">
        <div class="flex items-center">
            <svg class="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                 stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 16v-4"/>
                <path d="M12 8h.01"/>
            </svg>
            <span class="ml-2 text-xl font-bold text-gray-800">Mi Empresa</span>
        </div>
        <nav class="md:flex space-x-4 items-center">
            <a href="#" class="text-gray-600 hover:text-gray-800">Inicio</a>
            <a href="#" class="text-gray-600 hover:text-gray-800">Servicios</a>
            <a href="#" class="text-gray-600 hover:text-gray-800">Contacto</a>
            <a href="reclamo"
               class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300
               font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700
               dark:focus:ring-blue-800">Nuevo
                Reclamo</a>
        </nav>
        <button class="md:hidden" @click="isMenuOpen = !isMenuOpen" aria-label="Abrir menú">
            <x-ri-menu-fill class="h-6 w-6 text-gray-600"/>
        </button>
    </div>
    <nav x-show="isMenuOpen" class="md:hidden bg-white px-4 py-2 flex flex-col space-y-2">
        <a href="#" class="text-gray-600 hover:text-gray-800">Inicio</a>
        <a href="#" class="text-gray-600 hover:text-gray-800">Servicios</a>
        <a href="#" class="text-gray-600 hover:text-gray-800">Contacto</a>
        <a href="#" class="text-primary font-semibold">Libro de Reclamaciones</a>
    </nav>
</header>
