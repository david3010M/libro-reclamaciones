@php use App\Models\Advance; @endphp
@extends('layouts.plantillaAdmin')

@section('title', 'Reclamos')

@section('content')

    <div class="flex flex-col gap-3 w-full">
        <div class="flex justify-between">
            <h1 class="text-2xl font-semibold text-black dark:text-white">Gestión de Reclamos</h1>
        </div>
        <div class="relative overflow-x-auto py-2">
            <div class="flex justify-between items-center">
                <form class="flex justify-between items-center max-w-sm p-2" method="GET"
                    action="{{ route('complaint.index') }}">
                    <label for="search" class="sr-only">Buscar</label>
                    <div class="relative w-full">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <x-ri-book-read-line class="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        </div>
                        <input type="text" id="search" name="search"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
                            placeholder="Buscar reclamo..." required />
                    </div>
                    <button type="submit"
                        class="p-2.5 ms-2 text-sm font-medium text-white bg-gray-800 rounded-lg border border-gray-700 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                        <x-ri-search-2-line class="w-4 h-4" />
                        <span class="sr-only">Buscar</span>
                    </button>
                    @if ($search)
                        <div class="flex justify-center items-end h-full">
                            <span id="badge-dismiss-dark"
                                class="inline-flex items-center mx-2 px-2 py-1 text-xs font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                                {{ $search }}
                                <button type="button" onclick="window.location.href='{{ route('complaint.index') }}'"
                                    class="inline-flex items-center p-1 ms-2 text-sm text-gray-400 bg-transparent rounded-sm hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-gray-300"
                                    data-dismiss-target="#badge-dismiss-dark" aria-label="Remove">
                                    <svg class="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span class="sr-only">Remove badge</span>
                                </button>
                            </span>
                        </div>
                    @endif
                </form>
                <button type="button" data-modal-target="report-modal" data-modal-toggle="report-modal"
                    class="text-white h-7 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg px-3 py-1.5 text-xs text-center flex items-center dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">

                    <x-iconpark-excel-o class="w-4 h-4 text-white me-2" />
                    Generar Reporte
                </button>
            </div>
            <table class="w-full text-sm text-left rtl:text-right dark:text-gray-400">
                <thead class="border-b text-gray-500">
                    <tr>
                        @php
                            $titulos = ['Código', 'Nombre', 'Fecha', 'Estado', 'Acciones'];
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
                                class="px-4 py-2 text-nowrap font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ $complaint->complaintCode }}
                            </th>
                            <td class="px-4 py-2 text-center text-nowrap">
                                {{ $complaint->customer->name }}
                            </td>
                            <td class="px-4 py-2 text-center text-nowrap">
                                {{ $complaint->created_at->format('d/m/Y') }}
                            </td>
                            <td class="px-4 py-2 text-center text-nowrap">
                                <div class="flex justify-center">
                                    <span
                                        class="
                            @if ($complaint->advances[0]->status == Advance::REGISTER_TO_VERIFY_STATUS) blueBadge
                            @elseif ($complaint->advances[0]->status == Advance::REGISTER_STATUS) yellowBadge
                            @elseif ($complaint->advances[0]->status == Advance::ATTENDED_STATUS) greenBadge
                            @elseif ($complaint->advances[0]->status == Advance::IN_PROCESS_STATUS) greenBadge
                            @elseif ($complaint->advances[0]->status == Advance::ARCHIVED_STATUS) grayBadge
                            @elseif ($complaint->advances[0]->status == Advance::REJECTED_STATUS) redBadge
                            @else
                                grayBadge @endif
                            ">
                                        {{ $complaint->advances[0]->status }}
                                    </span>
                                </div>
                            </td>
                            <td class="px-4 py-2 gap-1 text-right text-nowrap flex justify-around">
                                <button type="button" data-modal-target="response-modal" data-modal-toggle="response-modal"
                                    {{ $complaint->advances[0]->status == Advance::IN_PROCESS_STATUS ? '' : 'disabled' }}
                                    onclick="setResponseUpdate('{{ $complaint->id }}', '{{ $complaint->answer }}', '{{ $complaint->complaintCode }}')"
                                    class="{{ $complaint->advances[0]->status == Advance::IN_PROCESS_STATUS ? 'bg-gray-800 hover:bg-gray-900' : 'bg-gray-400' }} text-white focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg px-3 py-1.5 text-xs text-center flex items-center dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                                    <x-ri-question-answer-line class="w-3 h-3 text-white me-2" />
                                    Responder
                                </button>
                                {{--                                <button type="button" data-modal-target="archive-modal" data-modal-toggle="archive-modal" --}}
                                {{--                                {{ $complaint->advances[0]->status == Advance::ARCHIVED_STATUS ? 'disabled' : '' }} --}}
                                {{--                                    class="{{ $complaint->advances[0]->status == Advance::ARCHIVED_STATUS ? 'bg-gray-400' : 'bg-gray-800 hover:bg-gray-900' }} text-white focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg px-3 py-1.5 text-xs text-center flex items-center dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" --}}
                                {{--                                    onclick="setArchive('{{ $complaint->id }}')"> --}}
                                {{--                                    <x-ri-archive-line class="w-3 h-3 text-white me-2" /> --}}
                                {{--                                    Archivar --}}
                                {{--                                </button> --}}
                                <button type="button" data-modal-target="process-modal" data-modal-toggle="process-modal"
                                    onclick="setInProcess('{{ $complaint->id }}')"
                                    class="text-white {{ $complaint->advances[0]->status == Advance::REGISTER_STATUS ? 'bg-gray-800 hover:bg-gray-900' : 'bg-gray-400' }} focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg px-3 py-1.5 text-xs text-center flex items-center dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                                    <x-ri-loader-2-fill class="w-3 h-3 text-white me-2" />
                                    En Proceso
                                </button>
                                <button type="button" data-modal-target="see-modal" data-modal-toggle="see-modal"
                                    onclick="setSeeResponse('{{ $complaint->complaintCode }}')"
                                    class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg px-3 py-1.5 text-xs text-center flex items-center dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                                    <x-ri-list-check-2 class="w-3 h-3 text-white me-2" />
                                    Ver
                                </button>


                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>

        <!-- See modal -->
        <div id="see-modal" tabindex="-1" aria-hidden="true" data-modal-target="see-modal"
            class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative w-full max-w-7xl max-h-full h-full">
                <!-- Modal content -->
                <div class="relative h-full bg-white rounded-lg shadow dark:bg-gray-700">


                    <!-- Modal header -->
                    <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 class="text-xl font-medium text-gray-900 dark:text-white">
                            Detalles del Reclamo
                        </h3>
                        <button type="button"
                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-hide="see-modal">
                            <x-ri-close-fill class="w-3 h-3" aria-hidden="true" />
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>

                    <!-- Modal body -->
                    <div class="p-4 md:p-5 h-[calc(100%-5rem)] bg-gray-100 overflow-x-auto" id="complaintModalContent">

                    </div>


                </div>
            </div>
        </div>

        <!-- Response modal -->
        <div id="response-modal" tabindex="-1" aria-hidden="true" data-modal-target="response-modal"
            class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative p-4 w-full max-w-screen-md max-h-full">
                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">

                    <!-- Modal header -->
                    <div class="flex items-center justify-between p-4 md:p-3 border-b rounded-t dark:border-gray-600">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                            Responder Reclamo
                        </h3>
                        <button type="button"
                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-toggle="response-modal">
                            <x-ri-close-fill class="w-3 h-3" aria-hidden="true" />
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>


                    <!-- Modal body -->
                    <form class="p-4 md:p-5" method="POST" id="responseUpdate" action=""
                        enctype="multipart/form-data">
                        @csrf
                        <div class="grid gap-4 mb-4 grid-cols-1">
                            <div id="complaintModalContentResponse">
                            </div>

                            <div class="flex flex-col gap-1">
                                <div class="col-span-2">
                                    <label for="description"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Respuesta de
                                        Reclamo</label>
                                    <textarea id="answer" name="answer" rows="4"
                                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Responder reclamo"></textarea>
                                </div>

                                <div>
                                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        for="attachments">Agregar
                                        Archivos</label>
                                    <input
                                        class="block w-full mb-5 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                        id="attachments" type="file" name="attachments[]" multiple>
                                </div>
                            </div>
                        </div>
                        <div class="w-full flex justify-end">
                            <button type="submit" id="buttonResponseComplaint" disabled
                                onclick="setLoadingResponseComplaint()"
                                class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg px-3 py-1.5 text-xs text-center flex items-center dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                                Responder
                            </button>
                        </div>
                    </form>

                    <script>
                        document.getElementById('answer').addEventListener('input', function() {
                            const button = document.getElementById('buttonResponseComplaint');
                            const value = this.value.trim().toLowerCase();
                            button.disabled = (value === 'Pendiente');
                        });
                    </script>



                </div>
            </div>
        </div>

        {{-- Archive Modal --}}
        <div id="archive-modal" tabindex="-1" data-modal-target="archive-modal"
            class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative p-4 w-full max-w-md max-h-full">
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button type="button"
                        class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="archive-modal">
                        <x-ri-close-fill class="w-3 h-3" aria-hidden="true" />
                        <span class="sr-only">Close modal</span>
                    </button>
                    <div class="p-4 md:p-5 text-center">
                        <x-ri-archive-line class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                            aria-hidden="true" />
                        <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            ¿Estás seguro de archivar este reclamo?
                        </h3>
                        <div class="flex w-full gap-2 justify-center">
                            <form method="POST" action="">
                                @csrf
                                <button data-modal-hide="archive-modal" type="submit"
                                    class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg px-3 py-1.5 text-xs text-center flex items-center dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                                    Archivar
                                </button>
                            </form>
                            <button data-modal-hide="archive-modal" type="button"
                                class="px-3 py-1.5 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {{-- Process Modal --}}
        <div id="process-modal" tabindex="-1" data-modal-target="process-modal"
            class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative p-4 w-full max-w-md max-h-full">
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button type="button"
                        class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="process-modal">
                        <x-ri-close-fill class="w-3 h-3" aria-hidden="true" />
                        <span class="sr-only">Close modal</span>
                    </button>
                    <div class="p-4 md:p-5 text-center">
                        <x-ri-loader-2-fill class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                            aria-hidden="true" />
                        <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            ¿Estás seguro de atender este reclamo?
                        </h3>
                        <div class="flex w-full gap-2 justify-center">
                            <form method="POST" action="">
                                @csrf
                                <button data-modal-hide="process-modal" type="submit"
                                    class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg px-3 py-1.5 text-xs text-center flex items-center dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                                    Atender
                                </button>
                            </form>
                            <button data-modal-hide="process-modal" type="button"
                                class="px-3 py-1.5 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {{-- Report Modal --}}
        <div id="report-modal" tabindex="-1" data-modal-target="report-modal"
            class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative p-4 w-full max-w-lg max-h-full">
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button type="button"
                        class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="report-modal">
                        <x-ri-close-fill class="w-3 h-3" aria-hidden="true" />
                        <span class="sr-only">Close modal</span>
                    </button>
                    <div class="p-4 md:p-5 text-center">
                        <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Reporte de Reclamos
                        </h3>
                        <div class="flex w-full gap-2 justify-center">
                            <div class="w-full flex flex-col gap-2">
                                @csrf

                                @foreach ($sedes as $sede)
                                    <div class="flex items-center justify-start gap-2">
                                        <input type="checkbox" name="sedes[]" value="{{ $sede->id }}"
                                            class="form-checkbox h-5 w-5 text-gray-600 border border-gray-300 rounded-lg focus:ring-gray-500 focus:border-gray-500 dark:focus:ring-gray-500 dark:focus:border-gray-500">
                                        <label for="sedes" class="text-sm text-gray-900 dark:text-white">
                                            {{ $sede->name }}
                                        </label>
                                    </div>
                                @endforeach

                                {{-- start_date --}}
                                <div class="flex gap-1 items-center">
                                    <label for="start_date"
                                        class="block mb-2 w-2/5 text-start text-sm font-medium text-gray-900 dark:text-white">Fecha
                                        de
                                        Inicio</label>
                                    <input id="start_date" name="start_date" type="date"
                                        class="block p-2.5 w-3/5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required />
                                </div>

                                {{-- end_date --}}
                                <div class="flex gap-1 items-center">
                                    <label for="end_date"
                                        class="block mb-2 w-2/5 text-start text-sm font-medium text-gray-900 dark:text-white">Fecha
                                        de
                                        Fin</label>
                                    <input id="end_date" name="end_date" type="date"
                                        class="block p-2.5 w-3/5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required />
                                </div>


                                <div class="flex justify-end">
                                    <button data-modal-hide="report-modal" onclick="generateReport();"
                                        class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg px-3 py-1.5 text-xs text-center flex items-center dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                                        <x-iconpark-excel-o class="w-4 h-4 text-white me-2" />
                                        Generar
                                    </button>

                                    <button data-modal-hide="report-modal" type="button"
                                        class="px-3 py-1.5 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                        Cancelar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
                                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor" viewBox="0 0 20 20">
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

    <script>
        const PROJECT_BASE = "{{ config('app.project_base') }}";
    </script>

    <script>
        function setLoadingResponseComplaint() {
            const button = document.getElementById('buttonResponseComplaint');
            button.innerHTML = '<x-ri-loader-3-line class="inline w-4 h-4 me-3 text-white animate-spin"/> Enviando';
        }

        function setResponseUpdate(id, currentAnswer, complaintCode) {
            const complaintModal = document.getElementById("complaintModalContentResponse");
            complaintModal.innerHTML = `
            <div class="w-full h-full flex items-center justify-center">
                <x-ri-loader-3-line class="inline w-10 h-10 me-3 text-slate-500 animate-spin"/>
            </div>
            `;

            fetch(`/${PROJECT_BASE}/public/findComplaint/${complaintCode}`)
                .then(response => response.json())
                .then(data => {
                    const content = `
            <div class="h-full">
                <div class="max-w-4xl mx-auto bg-white rounded-lg shadow">
                    <div class="p-4">
                        <div class="flex gap-2 mb-4">
                            <h3 class="font-semibold">Hoja de Reclamo</h3>
                            <p class="text-blue-600 font-bold">${data.complaintCode || 'N/A'}</p>
                        </div>
                        <div class="space-y-2">
                            <div class="flex justify-between text-xs">
                                <span class="font-semibold">
                                    ${data.customer.name}
                                </span>
                                <span>
                                    ${data.customer.document}
                                </span>
                                <span>
                                    ${data.customer.phone}
                                </span>
                            </div>
                        </div>
                        ${data.answers.map(answer => `
                                                                                                            <div>
                                                                                                                <label class="text-xs text-gray-500">
                                                                                                                    ${answer.question.title}
                                                                                                                </label>
                                                                                                                <p class="text-black text-xs">
                                                                                                                    ${answer.question.type_question_id === 5
                                                                                                                        ? `<a href="/${PROJECT_BASE}/storage/app/public/${answer.answer}" target="_blank">
                                               <img src="/${PROJECT_BASE}/storage/app/public/${answer.answer}" alt="imagen" class="max-h-52 rounded-lg shadow">
                                           </a>`
                                                                                                                        : answer.answer
                                                                                                                    }
                                                                                                                </p>
                                                                                                            </div>
                                                                                                        `).join('')}

                    </div>
                    </div>
                    </div>
                    </div>
                `;
                    complaintModal.innerHTML = content;
                })
                .catch(error => {
                    console.error("Error al cargar los datos:", error);
                    document.getElementById("complaintModalContentResponse").innerHTML =
                        '<p>Error al cargar los datos.</p>';
                });

            const form = document.getElementById('responseUpdate');
            document.getElementById('responseUpdate').action =
                `/${PROJECT_BASE}/public/complaint/${id}/response`;
            form.querySelector('#answer').value = currentAnswer;

        }

        function setSeeResponse(complaintCode) {
            const complaintModal = document.getElementById("complaintModalContent");
            complaintModal.innerHTML = `
            <div class="w-full h-full flex items-center justify-center">
                <x-ri-loader-3-line class="inline w-10 h-10 me-3 text-slate-500 animate-spin"/>
            </div>
            `;

            const baseUrl = window.location.origin;

            fetch(`/${PROJECT_BASE}/public/findComplaint/${complaintCode}`)
                .then(response => response.json())
                .then(data => {
                    const content = `
            <div class="h-full p-4">
                <div class="max-w-4xl mx-auto bg-white rounded-lg shadow">
                    <div class="p-4">
                    <div class="space-y-6">
                    <div class="bg-white p-4 rounded-lg shadow">
                        <h2 class="text-xl font-semibold mb-2">Reclamo</h2>
                        <div class="flex justify-between items-center">
                            <span class="text-blue-600 font-bold text-lg">${data.complaintCode || 'N/A'}</span>
                            <span class="text-gray-600">${data.advances[0]?.date}</span>
                        </div>
                    </div>
                    <div class="bg-white p-4 rounded-lg shadow">
                        <h3 class="font-semibold mb-2">Avances</h3>
                        <div class="flex items-center space-x-2 mb-2">
                            <x-ri-time-line class="text-gray-400 w-5 h-5" />
                            <span class="text-sm text-gray-600">Última actualización ${timeAgo(data.advances[0]?.date)}
                            </span>
                        </div>
                        <div class="space-y-2">
                            ${data.advances.map(advance => `
                                                                                                                                <div class="flex items-center space-x-2">
                                                                                                                                    <x-ri-checkbox-circle-line class="text-green-500 w-6 h-6" />
                                                                                                                                    <div>
                                                                                                                                        <div class="font-semibold">${advance.status}</div>
                                                                                                                                        <div class="text-sm text-gray-600">${advance.date}</div>
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            `).join('')}
                        </div>
                    </div>
                    <div class="bg-white p-4 rounded-lg shadow">
                        <h3 class="font-semibold mb-2">Respuesta</h3>
                        <p class="text-gray-700 mb-2">${data.answer}</p>
                    </div>
                    <div class="bg-white p-4 rounded-lg shadow">
                        <h3 class="font-semibold mb-4">Hoja de Reclamo</h3>
                        <div class="space-y-2">
                            <div class="flex justify-between">
                                <span class="font-semibold">
                                    ${data.customer.name}
                                </span>
                                <span>
                                    ${data.customer.document}
                                </span>
                                <span>
                                    ${data.customer.phone}
                                </span>
                            </div>
                            <div>
                                <label class="text-sm text-gray-600">Asignado a:</label>
                            </div>
                        </div>

                        ${data.answers.map(answer => `
                                                                                                            <div>
                                                                                                                <label class="text-sm text-gray-500">
                                                                                                                    ${answer.question.title}
                                                                                                                </label>
                                                                                                                    ${answer.question.type_question_id === 5
                                                                                                                        ? `<a href="/${PROJECT_BASE}/storage/app/public/${answer.answer}" target="_blank">
                                               <img src="/${PROJECT_BASE}/storage/app/public/${answer.answer}" alt="imagen" class="max-h-52 rounded-lg shadow">
                                           </a>`
                                                                                                                        : answer.answer
                                                                                                                    }
                                                                                                                </p>
                                                                                                            </div>
                                                                                                        `).join('')}

                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                `;
                    complaintModal.innerHTML = content;
                })
                .catch(error => {
                    console.error("Error al cargar los datos:", error);
                    document.getElementById("complaintModalContent").innerHTML =
                        '<p>Error al cargar los datos.</p>';
                });
        }

        function setArchive(id) {
            document.getElementById('archive-modal').querySelector('form').action =
                `/${PROJECT_BASE}/public/complaint/${id}/archive`;
        }

        function setInProcess(id) {
            document.getElementById('process-modal').querySelector('form').action =
                `/${PROJECT_BASE}/public/complaint/${id}/process`;
        }

        function generateReport() {

            const from = document.getElementById('start_date').value;
            const to = document.getElementById('end_date').value;
            const sedes = Array.from(document.querySelectorAll('input[name="sedes[]"]:checked')).map(e => e.value);

            // Crear los parámetros de consulta
            const queryParams = new URLSearchParams({
                from,
                to
            });
            sedes.forEach(sede => queryParams.append('sedes[]', sede));

            // Hacer la solicitud
            fetch(`/${PROJECT_BASE}/public/reporteReclamos?${queryParams.toString()}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then(response => {
                    if (!response.ok) throw new Error('Error al generar el reporte');
                    return response.blob(); // Convertir la respuesta a un archivo binario (Blob)
                })
                .then(blob => {
                    const url = window.URL.createObjectURL(blob); // Crear una URL temporal para el archivo
                    const a = document.createElement('a'); // Crear un enlace
                    a.href = url;
                    a.download = 'reporte_reclamos.pdf'; // Cambiar el nombre del archivo según corresponda
                    document.body.appendChild(a);
                    a.click(); // Simular un clic para descargar el archivo
                    a.remove(); // Eliminar el enlace del DOM
                    window.URL.revokeObjectURL(url); // Limpiar la URL temporal
                })
                .catch(error => console.error('Error:', error));

        }

        function timeAgo(date) {
            const seconds = Math.floor((new Date() - new Date(date)) / 1000);
            let interval = Math.floor(seconds / 31536000);

            if (interval > 1) return interval + " años";
            interval = Math.floor(seconds / 2592000);
            if (interval > 1) return interval + " meses";
            interval = Math.floor(seconds / 86400);
            if (interval > 1) return interval + " días";
            interval = Math.floor(seconds / 3600);
            if (interval > 1) return interval + " horas";
            interval = Math.floor(seconds / 60);
            if (interval > 1) return interval + " minutos";

            return "hace unos segundos";
        }
    </script>

@endsection
