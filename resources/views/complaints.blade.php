@extends('layouts.plantilla')

@section('content')
    <div class="h-[calc(100vh-16rem )] bg-gray-100 w-full md:p-4 flex items-center justify-center">
        <div class="w-full max-w-2xl">
            @if (session('message') && session('error_code') === 404)
                <div id="alert-border-4"
                     class="flex items-center p-4 mb-4 text-yellow-800 border-t-4 border-yellow-300 bg-yellow-50 dark:text-yellow-300 dark:bg-gray-800 dark:border-yellow-800"
                     role="alert">
                    <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                         fill="currentColor" viewBox="0 0 20 20">
                        <path
                            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                    </svg>
                    <div class="ms-3 text-sm font-medium">
                        {{ session('message') }}
                        {{ session('complaintCode') }}
                    </div>
                    <button type="button"
                            class="ms-auto -mx-1.5 -my-1.5 bg-yellow-50 text-yellow-500 rounded-lg focus:ring-2 focus:ring-yellow-400 p-1.5 hover:bg-yellow-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-yellow-300 dark:hover:bg-gray-700"
                            data-dismiss-target="#alert-border-4" aria-label="Close">
                        <span class="sr-only">Dismiss</span>
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                    </button>
                </div>
            @endif
            <div class="bg-white shadow-md rounded-lg">
                <div class="p-6 text-center">
                    <h1 class="text-2xl font-bold">Seguimiento de Reclamo</h1>
                    <p class="text-gray-500">Conoce el estado de tu reclamo:</p>
                </div>
                <div class="p-2 sm:p-6 flex justify-center">
                    <form class="flex items-center max-w-lg w-full"
                          x-data="{ complaintCode: '' }"
                          @submit.prevent="if (complaintCode) window.location.href = '{{ url('/reclamo') }}/' + complaintCode">
                        <label for="complaintCode" class="sr-only">Buscar</label>
                        <div class="relative w-full">
                            <input type="text" id="complaintCode" x-model="complaintCode"
                                   placeholder="Ingrese el código del reclamo"
                                   class="text-xs bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-2.5 p-2.5"
                                   required>
                        </div>
                        <button type="submit"
                                class="text-nowrap text-xs p-2.5 px-3 ms-2 sm:text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                            Buscar Reclamo
                        </button>
                    </form>


                </div>
            </div>
        </div>
    </div>
@endsection
