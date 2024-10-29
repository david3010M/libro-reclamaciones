@extends('layouts.plantillaAdmin')

@section('title', 'Reclamos')

@section('content')

    <div class="flex flex-col gap-6 w-full">
        <div class="flex justify-between">
            <h1 class="text-2xl font-semibold text-gray-800 dark:text-white">Gestión de Reclamos</h1>
        </div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-slate-800 uppercase bg-slate-200 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        @php
                            $titulos = ['Código', 'Nombre','Fecha', 'Estado',  'Acciones'];
                        @endphp
                        @foreach ($titulos as $titulo)
                            <th scope="col" class="px-6 py-3 text-center text-nowrap">
                                {{ $titulo }}
                            </th>
                        @endforeach
                    </tr>
                </thead>
                <tbody>
                    @foreach ($complaints as $complaint)
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row"
                                class="px-6 py-4 text-nowrap font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ $complaint->complaintCode }}
                            </th>
                            <td class="px-6 py-4 text-center text-nowrap">
                                {{ $complaint->customer->name }}
                            </td>
                            <td class="px-6 py-4 text-center text-nowrap">
                                {{ $complaint->created_at->format('d/m/Y') }}
                            </td>
                            <td class="px-6 py-4 text-center text-nowrap
                            @if ($complaint->advances[0]->status == 'Pendiente')
                                text-yellow-500
                            @elseif ($complaint->advances[0]->status == 'Atendido')
                                text-green-500
                            @else
                                text-red-500
                            @endif
                            ">
                                {{ $complaint->advances[0]->status }}
                            </td>
                            <td class="px-6 py-4 gap-2 text-right text-nowrap flex justify-around">
                                <a href="{{ route('complaint.show', $complaint->complaintCode) }}"
                                    class="font-medium text-gray-400 dark:text-gray-400 hover:text-blue-600 hover:underline">Ver</a>
                                <a href="{{ route('complaint.edit', $complaint->complaintCode) }}"
                                    class="font-medium text-zinc-400 dark:text-zinc-400 hover:text-amber-600 hover:underline">Editar</a>
                                <a href="{{ route('complaint.destroy', $complaint->complaintCode) }}"
                                    class="font-medium text-slate-400 dark:text-slate-400 hover:text-red-600 hover:underline">Eliminar</a>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>

        {{ $complaints->links() }}

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
