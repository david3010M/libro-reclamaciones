@extends('layouts.plantillaAdmin')

@section('title', 'Personas')

@section('content')

    <div class="flex flex-col gap-6 w-full">
        <div class="flex justify-between">
            <h1 class="text-2xl font-semibold text-gray-800 dark:text-white">Personas</h1>
{{--            <a class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-slate-700 rounded-lg hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"--}}
{{--                href="{{ route('answers.create') }}">--}}
{{--                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mr-2">--}}
{{--                    <path fill-rule="evenodd"--}}
{{--                        d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"--}}
{{--                        clip-rule="evenodd" />--}}
{{--                </svg>--}}
{{--                Agregar Producto--}}
{{--            </a>--}}
        </div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-slate-800 uppercase bg-slate-200 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        @php
                            $titulos = ['Documento', 'Nombre', 'Correo', 'Teléfono', 'Dirección', 'Acciones'];
                        @endphp
                        @foreach ($titulos as $titulo)
                            <th scope="col" class="px-6 py-3 text-center text-nowrap">
                                {{ $titulo }}
                            </th>
                        @endforeach
                    </tr>
                </thead>
                <tbody>
                    @foreach ($customers as $customer)
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row"
                                class="px-6 py-4 text-nowrap font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ $customer->document }}
                            </th>
                            <td class="px-6 py-4 text-center text-nowrap">
                                {{ $customer->name }}
                            </td>
                            <td class="px-6 py-4 text-center text-nowrap">
                                {{ $customer->email }}
                            </td>
                            <td class="px-6 py-4 text-center text-nowrap">
                                {{ $customer->phone }}
                            </td>
                            <td class="px-6 py-4 text-right text-nowrap">
                                {{ $customer->address }}
                            </td>
                            <td class="px-6 py-4 gap-2 text-right text-nowrap flex justify-around">
                                <a href="{{ route('answers.show', $customer->id) }}"
                                    class="font-medium text-gray-400 dark:text-gray-400 hover:text-blue-600 hover:underline">Ver</a>
                                <a href="{{ route('answers.edit', $customer->id) }}"
                                    class="font-medium text-zinc-400 dark:text-zinc-400 hover:text-amber-600 hover:underline">Editar</a>
                                <a href="{{ route('answers.delete', $customer->id) }}"
                                    class="font-medium text-slate-400 dark:text-slate-400 hover:text-red-600 hover:underline">Eliminar</a>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>

        {{ $customers->links() }}

        @if (session('message'))
            <div id="toast"
                class="fixed flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow right-5 bottom-5 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800 transition-transform transform opacity-100 duration-[3000] ease-in-out"
                role="alert">
                @switch(session('action'))
                    @case('success')
                        <div
                            class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                viewBox="0 0 20 20">
                                <path
                                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            <span class="sr-only">Check icon</span>
                        @break

                        @case('deleted')
                            <div
                                class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
                                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                    viewBox="0 0 20 20">
                                    <path
                                        d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
                                </svg>
                                <span class="sr-only">Error icon</span>
                            @break

                            @case('error')
                                <div
                                    class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
                                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                        viewBox="0 0 20 20">
                                        <path
                                            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
                                    </svg>
                                    <span class="sr-only">Warning icon</span>
                                @break

                                @default
                            @endswitch
                        </div>
                        <div class="ps-4 text-sm font-normal">{{ session('message') }}</div>
                    </div>
        @endif
    </div>

@endsection
