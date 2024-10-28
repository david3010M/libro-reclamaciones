<header
    class="bg-white dark:bg-gray-900 w-full z-20 min-h-16 max-h-16 h-16 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
    <div class="container h-full mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" class="flex items-center">
            <svg class="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                 stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 16v-4"/>
                <path d="M12 8h.01"/>
            </svg>
            <span class="ml-2 text-xl font-bold text-gray-800">Mi Empresa</span>
        </a>
        <nav class="md:flex space-x-4 items-center">
            <a href="{{ route('complaint.index') }}"
               class="px-3 py-2 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                Buscar Reclamo
            </a>
            <a href="{{ route('form.show') }}"
               class="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Nuevo Reclamo
            </a>
        </nav>
    </div>
</header>
