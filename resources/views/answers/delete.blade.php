@extends('layouts.plantilla')

@section('title', 'Productos')

@section('content')
    <div class="flex flex-col gap-6 w-full">
        <div class="flex justify-between">
            <h1 class="flex items-center gap-1 text-2xl font-semibold text-gray-800 dark:text-white">
                <p>Eliminar el Producto</p>
                <p class="bg-slate-200 text-slate-600 py-0.5 px-2 rounded-lg">{{ $producto->descripcion }}</p>
            </h1>
        </div>
        <div class="relative overflow-x-auto p-5 flex justify-center">

            <div class="flex justify-center w-full max-w-screen-md shadow-md sm:rounded-lg p-3">
                <form class="w-full flex flex-col gap-5" action="{{ route('answers.destroy', $producto->id) }}"
                      method="POST">
                    @csrf
                    <div class="relative bg-white rounded-lg dark:bg-gray-700">
                        <form action="{{ route('answers.destroy', $producto->id) }}" method="POST">
                            <div class="p-4 md:p-5 text-center">
                                {{-- Icono --}}
                                <svg class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                </svg>

                                {{-- Mensaje --}}
                                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">¿Está seguro de
                                    eliminar el elemento?</h3>

                                {{-- Botones --}}
                                <button type="submit"
                                        class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                                    Eliminar
                                </button>
                                <a href="{{ route('answers.index') }}"
                                   class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-slate-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">No,
                                    Cancelar</a>
                            </div>
                        </form>
                    </div>
                </form>

            </div>


        </div>

        @if (request('error'))
            <div id="toast"
                 class="fixed flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow right-5 bottom-5 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800 transition-transform transform opacity-100 duration-[3000] ease-in-out"
                 role="alert">
                <div
                    class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                         viewBox="0 0 20 20">
                        <path
                            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z"/>
                    </svg>
                    <span class="sr-only">Warning icon</span>
                </div>
                <div class="ps-4 text-sm font-normal">{{ request('error') }}</div>
            </div>
        @endif
    </div>
@endsection
