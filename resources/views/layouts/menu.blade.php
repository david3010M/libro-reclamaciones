<button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar"
        type="button"
        class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
    <span class="sr-only">Abrir Menú</span>
    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path clip-rule="evenodd" fill-rule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
        </path>
    </svg>
</button>

<aside id="default-sidebar"
       class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full lg:translate-x-0"
       aria-label="Sidebar">
    <div class="h-full px-3 py-4 overflow-y-auto bg-white dark:bg-slate-900">
        <a href="/" class="flex flex-col items-center justify-center text-center w-full mb-5">
            <img src="logo.png" class="h-6 me-3 sm:h-7" alt="Flowbite Logo"/>
            <span
                class="self-center text-md dark:text-white text-gray-800 font-light p-2 px-4">LIBRO DE <strong>RECLAMACIONES</strong></span>
        </a>

        @php
            $nombreRuta = Route::currentRouteName();
            $nombreRuta = explode('.', $nombreRuta)[0];
        @endphp

        <ul class="space-y-2 font-medium">
            <li>
                <a href="{{ route('complaint.index') }}"
                   class="menuItem  @if ($nombreRuta == 'complaint' || $nombreRuta == '') itemActive @endif">
                    <x-ri-book-read-fill class="menuIcon"/>
                    <span class="flex-1 ms-3 whitespace-nowrap">Reclamos</span>
                </a>
            </li>
            <li>
                <a href="{{ route('question.index') }}"
                   class="menuItem  @if ($nombreRuta == 'question' || $nombreRuta == '') itemActive @endif">
                    <x-ri-question-fill class="menuIcon"/>
                    <span class="flex-1 ms-3 whitespace-nowrap">Preguntas</span>
                </a>
            </li>
        </ul>
    </div>
</aside>
