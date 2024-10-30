@php use App\Models\Advance; @endphp
@extends('layouts.plantillaAdmin')

@section('title', 'Preguntas')

@section('content')

    <div class="flex flex-col gap-3 w-full">
        <div class="flex justify-between">
            <h1 class="text-2xl font-semibold text-black dark:text-white">Gestión de Preguntas</h1>
        </div>
        <div class="relative overflow-x-auto py-2">
            <form class="flex justify-between items-center max-w-sm p-2" method="GET" action="{{ route('question.index') }}">
                <label for="search" class="sr-only">Buscar</label>
                <div class="relative w-full">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <x-ri-book-read-line class="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    </div>
                    <input type="text" id="search" name="search"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
                        placeholder="Buscar pregunta..." required />
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
                            <button type="button" onclick="window.location.href='{{ route('question.index') }}'"
                                class="inline-flex items-center p-1 ms-2 text-sm text-gray-400 bg-transparent rounded-sm hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-gray-300"
                                data-dismiss-target="#badge-dismiss-dark" aria-label="Remove">
                                <svg class="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span class="sr-only">Remove badge</span>
                            </button>
                        </span>
                    </div>
                @endif
            </form>
            <table class="w-full text-sm text-left rtl:text-right dark:text-gray-400">
                <thead class="border-b text-gray-500">
                    <tr>
                        @php
                            $titulos = ['Pregunta', 'Tipo de Pregunta', 'Acciones'];
                        @endphp
                        @foreach ($titulos as $titulo)
                            <th scope="col" class="px-6 py-3 text-center text-nowrap">
                                {{ $titulo }}
                            </th>
                        @endforeach
                    </tr>
                </thead>
                <tbody>
                    @foreach ($questions as $question)
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row"
                                class="px-4 py-2 text-nowrap font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ $question->question }}
                            </th>
                            <td class="px-4 py-2 text-center text-nowrap">
                                {{ $question->typeQuestion->label }}
                            </td>
                            <td class="px-4 py-2 gap-1 text-right text-nowrap flex justify-around">
                                <button type="button" data-modal-target="see-modal" data-modal-toggle="see-modal"
                                    onclick="setSeeResponse('{{ $question->id }}')"
                                    class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg px-3 py-1.5 text-xs text-center flex items-center dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                                    <x-ri-list-check-2 class="w-3 h-3 text-white me-2" />
                                    Ver
                                </button>
                                <button type="button" data-modal-target="archive-modal" data-modal-toggle="archive-modal"
                                    class="bg-gray-800 hover:bg-gray-900 text-white focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg px-3 py-1.5 text-xs text-center flex items-center dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                                    onclick="setArchive('{{ $question->id }}')">
                                    <x-heroicon-s-pencil class="w-3 h-3 text-white me-2" />
                                    Editar
                                </button>
                                <button type="button" data-modal-target="see-modal" data-modal-toggle="see-modal"
                                    onclick="setSeeResponse('{{ $question->id }}')"
                                    class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg px-3 py-1.5 text-xs text-center flex items-center dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                                    <x-ri-delete-bin-7-line class="w-3 h-3 text-white me-2" />
                                    Eliminar
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
                            Detalles del Pregunta
                        </h3>
                        <button type="button"
                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-hide="see-modal">
                            <x-ri-close-fill class="w-3 h-3" aria-hidden="true" />
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>

                    <!-- Modal body -->
                    <div class="p-4 md:p-5 h-[calc(100%-5rem)]">
                        <iframe id="seeResponse" class="w-full h-full max-h-full overflow-scroll" src=""
                            frameborder="0">

                        </iframe>
                    </div>


                </div>
            </div>
        </div>

        <!-- Response modal -->
        <div id="response-modal" tabindex="-1" aria-hidden="true" data-modal-target="response-modal"
            class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative p-4 w-full max-w-md max-h-full">
                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">

                    <!-- Modal header -->
                    <div class="flex items-center justify-between p-4 md:p-3 border-b rounded-t dark:border-gray-600">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                            Responder Pregunta
                        </h3>
                        <button type="button"
                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-toggle="response-modal">
                            <x-ri-close-fill class="w-3 h-3" aria-hidden="true" />
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>


                    <!-- Modal body -->
                    <form class="p-4 md:p-5" method="POST" id="responseUpdate" action="">
                        @csrf
                        <div class="grid gap-4 mb-4 grid-cols-2">
                            <div class="col-span-2">
                                <label for="description"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Respuesta de
                                    Pregunta</label>
                                <textarea id="answer" name="answer" rows="4"
                                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Responder pregunta"></textarea>
                            </div>
                        </div>
                        <button type="submit"
                            class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg px-3 py-1.5 text-xs text-center flex items-center dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                            Responder
                        </button>
                    </form>


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
                            ¿Estás seguro de archivar este pregunta?
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


        {{ $questions->links() }}
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
        function setResponseUpdate(id, currentAnswer) {
            const baseUrl = window.location.origin;
            const form = document.getElementById('responseUpdate');
            document.getElementById('responseUpdate').action =
                `${baseUrl}/libro-reclamaciones/public/question/${id}/response`;
            form.querySelector('#answer').value = currentAnswer;

        }

        function setSeeResponse(id) {
            const baseUrl = window.location.origin;
            document.getElementById('seeResponse').src = `${baseUrl}/libro-reclamaciones/public/pregunta/${id}`;
        }

        function setArchive(id) {
            const baseUrl = window.location.origin;
            document.getElementById('archive-modal').querySelector('form').action =
                `${baseUrl}/libro-reclamaciones/public/question/${id}/archive`;
        }
    </script>

@endsection
