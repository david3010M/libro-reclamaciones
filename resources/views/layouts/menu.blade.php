<button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar"
        type="button"
        class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
    <span class="sr-only">Abrir Menú</span>
    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path clip-rule="evenodd" fill-rule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
        </path>
    </svg>
</button>

<aside id="default-sidebar"
       class="fixed top-0 left-0 z-40 w-72 h-screen transition-transform -translate-x-full sm:translate-x-0"
       aria-label="Sidebar">
    <div class="h-full px-3 py-4 overflow-y-auto bg-slate-500 dark:bg-slate-900">
        <a href="/" class="flex justify-center items-center w-full mb-5">
            <img src="logo.png" class="h-6 me-3 sm:h-7" alt="Flowbite Logo"/>
            <span
                class="self-center text-xl dark:text-white text-white font-light p-2 px-4">LIBRO <strong>DE RECLAMACIONES</strong></span>
        </a>

        @php
            $nombreRuta = Route::currentRouteName();
            $nombreRuta = explode('.', $nombreRuta)[0];
        @endphp

        <ul class="space-y-2 font-medium">
            <li>
                <a href="{{ route('answers.index') }}"
                   class="flex items-center p-2 menuItem  @if ($nombreRuta == 'answers' || $nombreRuta == '') itemActive @endif">
                    <x-ri-user-line class="menuIcon w-6 h-6"/>
                    </svg>
                    <span class="flex-1 ms-3 whitespace-nowrap">Personas</span>
                </a>
            </li>
            {{--            <li>--}}
            {{--                <a href="{{ route('categorias.index') }}"--}}
            {{--                   class="flex items-center p-2 menuItem @if ($nombreRuta == 'categorias') itemActive @endif">--}}
            {{--                    <svg class="menuIcon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"--}}
            {{--                         viewBox="0 0 20 20">--}}
            {{--                        <path--}}
            {{--                            d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"/>--}}
            {{--                    </svg>--}}
            {{--                    <span class="flex-1 ms-3 whitespace-nowrap">Categorias</span>--}}
            {{--                </a>--}}
            {{--            </li>--}}
            {{--            <li>--}}
            {{--                <a href="{{ route('marcas.index') }}"--}}
            {{--                   class="flex items-center p-2 menuItem @if ($nombreRuta == 'marcas') itemActive @endif">--}}
            {{--                    <svg class="menuIcon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"--}}
            {{--                         viewBox="0 0 20 18">--}}
            {{--                        <path--}}
            {{--                            d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>--}}
            {{--                    </svg>--}}
            {{--                    <span class="flex-1 ms-3 whitespace-nowrap">Marcas</span>--}}
            {{--                </a>--}}
            {{--            </li>--}}
            {{--            <li>--}}
            {{--                <a href="{{ route('unidades.index') }}"--}}
            {{--                   class="flex items-center p-2 menuItem @if ($nombreRuta == 'unidades') itemActive @endif">--}}
            {{--                    <svg class="menuIcon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"--}}
            {{--                         viewBox="0 0 18 20">--}}
            {{--                        <path--}}
            {{--                            d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/>--}}
            {{--                    </svg>--}}
            {{--                    <span class="flex-1 ms-3 whitespace-nowrap">Unidades</span>--}}
            {{--                </a>--}}
            {{--            </li>--}}
        </ul>
    </div>
</aside>
