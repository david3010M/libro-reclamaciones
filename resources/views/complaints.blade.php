@extends('layouts.plantilla')

@php($step = $step ?? 1)

@section('content')
    <div class="min-h-screen bg-gray-100 w-full p-4 flex items-center justify-center">
        <div class="w-full max-w-2xl">
            <div class="bg-white shadow-md rounded-lg">
                <div class="p-6 text-center">
                    <h1 class="text-2xl font-bold">Seguimiento de Reclamo</h1>
                    <p class="text-gray-500">Conoce el estado de tu reclamo:</p>
                </div>
                <div class="p-2 sm:p-6 flex justify-center">
                    <form class="flex items-center max-w-lg w-full" method="POST"
                          action="{{ route('complaint.search') }}">
                        @csrf
                        <label for="simple-search" class="sr-only">Search</label>
                        <div class="relative w-full">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <x-ri-search-line class="w-4 h-4 text-gray-500 dark:text-gray-400"/>
                            </div>
                            <input type="text" id="simple-search"
                                   class="text-xs bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="xsl4afq4"
                                   name="complaintCode"
                                   required/>
                        </div>
                        <button type="submit"
                                class="text-nowrap text-xs p-2.5 px-3 ms-2 sm:text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Buscar Reclamo
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
