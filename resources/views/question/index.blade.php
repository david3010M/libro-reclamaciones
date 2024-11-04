@php use App\Models\Advance; @endphp
@extends('layouts.plantillaAdmin')

@section('title', 'Preguntas')

@section('content')

    <div class="flex flex-col gap-3 w-full">
        <div class="flex justify-between">
            <h1 class="text-2xl font-semibold text-black dark:text-white">Gestión de Preguntas</h1>
        </div>
        <div class="relative py-2">
            <div class="flex w-full justify-between items-center">
                <form class="flex justify-between items-center max-w-sm p-2" method="GET"
                    action="{{ route('question.index') }}">
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

                <button type="button" onclick="openModalCreate()"
                    class="text-white flex gap-2 h-fit bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg px-3 py-1.5 text-xs text-center flex items-center dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                    <x-ri-add-circle-line class="w-4 h-4" />
                    Nueva Pregunta
                </button>
            </div>
            <div class="overflow-x-auto">
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
                                    <button type="button" onclick="openModal({{ $question->id }})"
                                        class="bg-gray-800 hover:bg-gray-900 text-white focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg px-3 py-1.5 text-xs text-center flex items-center dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                                        onclick="openModal('{{ $question->id }}')">
                                        <x-heroicon-s-pencil class="w-3 h-3 text-white me-2" />
                                        Editar
                                    </button>
                                    <button type="button" data-modal-target="delete-modal" data-modal-toggle="delete-modal"
                                        onclick="setDeleteQuestion('{{ $question->id }}')"
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

        </div>

        <!-- Modal (oculto por defecto) -->
        <div id="detailsModal"
            class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50 hidden overflow-auto">
            <div id="detailsModalContainer" class="bg-white rounded-lg w-full max-w-4xl mx-4">
                <!-- Contenido del modal aquí -->
                <div class="flex justify-between items-center border-b p-3">
                    <h2 class="text-xl font-semibold">Detalles de Pregunta</h2>
                    <button type="button" onclick="closeModal()"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                        <x-ri-close-fill class="w-3 h-3" aria-hidden="true" />
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <div id="loadingEditForm" class="hidden h-52 grid place-content-center">
                    <div role="status">
                        <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                            viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor" />
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill" />
                        </svg>
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
                <form id="editPreguntaForm" class="hidden p-4">
                    @csrf
                    <input type="hidden" id="questionId">

                    <!-- Campo de Pregunta -->
                    <div id="parentPreguntas" class="flex flex-col md:flex-row gap-6 justify-between">
                        <div class="space-y-4 w-full mt-3">
                            <!-- Campo de Tipo de Pregunta -->
                            <div>
                                <label for="edit-type_question_id" class="block text-sm font-medium text-gray-700">Tipo de
                                    Pregunta</label>
                                <select id="edit-type_question_id" onchange="changeTypeQuestion()"
                                    class="mt-1 p-2 text-sm block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                                    <option value="1">Texto</option>
                                    <option value="2">Selección</option>
                                    <option value="3">Varias opciones</option>
                                    <option value="4">Casillas de verificación</option>
                                    {{-- <option value="5">Archivo</option> --}}
                                    <option value="6">Fecha</option>
                                    <option value="7">Hora</option>
                                    <option value="8">Sí o no</option>
                                    <option value="9">Área de texto</option>
                                    <option value="10">Selección con opciones</option>
                                </select>
                            </div>

                            <div>
                                <label for="edit-question"
                                    class="block text-sm font-medium text-gray-700">Pregunta</label>
                                <input type="text" id="edit-question"
                                    class="mt-1 p-2 text-sm block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                            </div>

                            <!-- Campo de Titulo -->
                            <div>
                                <label for="edit-title" class="block text-sm font-medium text-gray-700">Palabra
                                    Clave</label>
                                <input type="text" id="edit-title"
                                    class="mt-1 p-2 text-sm block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                            </div>

                            <!-- Campo de Descripción -->
                            <div>
                                <label for="edit-description"
                                    class="block text-sm font-medium text-gray-700">Descripción</label>
                                <textarea id="edit-description"
                                    class="mt-1 p-2 text-sm block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
                            </div>

                            <!-- Campos Booleanos con Switches -->
                            <div class="grid grid-cols-2 md:grid-cols-3 gap-2">
                                <label class="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" class="sr-only peer" id="edit-required"
                                        name="required">
                                    <div
                                        class="relative w-10 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-4 after:h-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                    </div>
                                    <span
                                        class="ms-3 text-xs font-medium text-gray-900 dark:text-gray-300">Requerido</span>
                                </label>
                                {{-- <label class="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" class="sr-only peer" id="edit-with_other"
                                        name="required">
                                    <div
                                        class="relative w-10 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-4 after:h-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                    </div>
                                    <span class="ms-3 text-xs font-medium text-gray-900 dark:text-gray-300">Otros
                                        Campos</span>
                                </label> --}}
                            </div>

                            <!-- Campo de Texto Switch -->
                            <div id="edit-text_switch-div" class="hidden">
                                <label for="edit-text_switch" class="block text-sm font-medium text-gray-700">Texto
                                    Switch</label>
                                <input type="text" id="edit-text_switch"
                                    class="mt-1 p-2 text-sm block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                            </div>

                            <!-- Campo de Máx. Opciones -->
                            <div class="flex justify-between gap-4">
                                <div id="edit-max_options-div" class="hidden w-full">
                                    <label for="edit-max_options" class="block text-sm font-medium text-gray-700">Máx.
                                        Opciones</label>
                                    <input type="number" id="edit-max_options"
                                        class="mt-1 p-2 text-sm block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                                </div>

                                <div class="w-full">
                                    <label for="edit-stepper" class="block text-sm font-medium text-gray-700">
                                        Numero de Paso
                                    </label>
                                    <select id="edit-stepper"
                                        class="mt-1 p-2 text-sm block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                                        <option value="1">Paso 1</option>
                                        <option value="2">Paso 2</option>
                                        <option value="3">Paso 3</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div id="options-part" class="w-full shadow-md rounded-md bg-gray-100 px-4 py-2">
                            {{-- Opciones --}}
                            <div class="flex w-full justify-between items-end mb-1">
                                <p class="block text-sm font-medium text-gray-700">Opciones</p>
                                <button type="button" onclick="newOption()"
                                    class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg px-3 py-1.5 text-xs text-center flex items-center dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                                    Agregar Opción
                                </button>
                            </div>
                            <div class="grid grid-cols-1 gap-4" id="options-container">
                                {{-- <div>
                                    <p class="block text-sm font-medium text-gray-700">Opciones</p>
                                    <div class="grid grid-cols-6 gap-2 place-items-center">
                                        <input type="text" id="edit-option"
                                            class="mt-1 col-span-3 p-2 text-sm block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                                        <label class="inline-flex items-center cursor-pointer col-span-2">
                                            <input type="checkbox" value="" class="sr-only peer"
                                                id="edit-option-second" name="required">
                                            <div
                                                class="relative w-10 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-4 after:h-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                            </div>
                                            <span
                                                class="ms-3 text-xs font-medium text-gray-900 dark:text-gray-300">Segunda</span>
                                        </label>
                                        <button type="button" onclick="closeModal()"
                                            class="p-1 h-fit w-fit text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                            <x-ri-delete-bin-6-line class="w-4 h-4" />
                                            <span class="sr-only">Eliminar</span>
                                        </button>
                                    </div>
                                </div> --}}
                            </div>
                        </div>
                    </div>

                    <div class="flex justify-end gap-2 mt-6">
                        <button type="button" onclick="closeModal()"
                            class="px-3 py-1.5 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                            Cancelar
                        </button>
                        <button type="button" onclick="saveChanges()"
                            class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg px-3 py-1.5 text-xs text-center flex items-center dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                            Guardar Cambios
                        </button>
                    </div>
                </form>
            </div>
        </div>

        {{-- Delete Modal --}}
        <div id="delete-modal" tabindex="-1" data-modal-target="delete-modal"
            class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative p-4 w-full max-w-md max-h-full">
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button type="button"
                        class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="delete-modal">
                        <x-ri-close-fill class="w-3 h-3" aria-hidden="true" />
                        <span class="sr-only">Close modal</span>
                    </button>
                    <div class="p-4 md:p-5 text-center">
                        <x-ri-delete-bin-7-line class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                            aria-hidden="true" />
                        <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            ¿Está seguro de eliminar esta pregunta?
                        </h3>
                        <div class="flex w-full gap-2 justify-center">
                            <button data-modal-hide="delete-modal" type="button" onclick="deleteQuestion()"
                                class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg px-3 py-1.5 text-xs text-center flex items-center dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                                Eliminar
                            </button>
                            <button data-modal-hide="delete-modal" type="button"
                                class="px-3 py-1.5 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        {{ $questions->links() }}

        <div id="toast"
            class="hidden fixed flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow right-5 bottom-5 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800 transition-transform transform opacity-100 duration-[3000] ease-in-out"
            role="alert">
            <div id="successToast"
                class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                <x-ri-checkbox-circle-fill class="w-5 h-5" />
            </div>
            <div id = "errorToast"
                class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
                <x-ri-error-warning-fill class="w-5 h-5" />
            </div>
            <div id = "warningToast"
                class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
                <x-bxs-error class="w-5 h-5" />
            </div>
            <div class="ps-4 text-sm font-normal" id="textToast"></div>
        </div>
    </div>

    <script>
        let pregunta;
        let typeModal = 'CREATE';
        let questionForDelete = null;
        let csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

        function changeTypeQuestion() {
            const typeQuestionId = document.getElementById('edit-type_question_id').value;
            const optionsPart = document.getElementById('options-part');
            const detailsModalContainer = document.getElementById('detailsModalContainer');
            if (typeQuestionId === '2' || typeQuestionId === '3' || typeQuestionId === '4' || typeQuestionId === '9' ||
                typeQuestionId === '10') {
                optionsPart.style.display = 'block';
                detailsModalContainer.classList.add('max-w-4xl');
                detailsModalContainer.classList.remove('max-w-xl');
            } else {
                optionsPart.style.display = 'none';
                detailsModalContainer.classList.add('max-w-xl');
                detailsModalContainer.classList.remove('max-w-4xl');
            }

            if (typeQuestionId === '10') {
                document.getElementById('edit-text_switch-div').classList.remove('hidden');
            } else {
                document.getElementById('edit-text_switch-div').classList.add('hidden');
            }

            if (data.type_question_id === '4') {
                document.getElementById('edit-max_options-div').classList.remove('hidden');
            } else {
                document.getElementById('edit-max_options-div').classList.add('hidden');
            }
        }

        function cleanModal() {
            document.getElementById('edit-question').value = '';
            document.getElementById('edit-title').value = '';
            document.getElementById('edit-description').value = '';
            document.getElementById('edit-required').checked = false;
            document.getElementById('edit-stepper').value = '1';
            // document.getElementById('edit-with_other').checked = false;
            document.getElementById('edit-text_switch').value = '';
            document.getElementById('edit-max_options').value = '';
            document.getElementById('edit-type_question_id').value = '1';
            document.getElementById('options-container').innerHTML = '';
            document.getElementById('edit-type_question_id').disabled = false;
        }

        function openModalCreate(questionId) {
            typeModal = 'CREATE';
            cleanModal();
            pregunta = {};
            pregunta.options = [];
            document.getElementById('detailsModal').classList.remove('hidden');
            document.getElementById('loadingEditForm').classList.add('hidden');
            document.getElementById('editPreguntaForm').classList.remove('hidden');
            document.getElementById('options-part').style.display = 'none';
            document.getElementById('detailsModalContainer').classList.add('max-w-xl');
            document.getElementById('detailsModalContainer').classList.remove('max-w-4xl');
        }

        function openModal(questionId) {
            typeModal = 'UPDATE';
            document.getElementById('detailsModal').classList.remove('hidden');
            document.getElementById('loadingEditForm').classList.remove('hidden');
            document.getElementById('editPreguntaForm').classList.add('hidden');
            document.getElementById('edit-type_question_id').disabled = true;

            fetch(`/libro-reclamaciones/public/question/${questionId}`)
                .then(response => response.json())
                .then(data => {
                    pregunta = data; // Guardar los datos de la pregunta
                    document.getElementById('questionId').value = data.id;
                    document.getElementById('edit-question').value = data.question;
                    document.getElementById('edit-title').value = data.title;
                    document.getElementById('edit-description').value = data.description;
                    document.getElementById('edit-required').checked = data.required;
                    document.getElementById('edit-stepper').value = data.stepper;
                    // document.getElementById('edit-with_other').checked = data.with_other;
                    document.getElementById('edit-text_switch').value = data.text_switch;
                    document.getElementById('edit-max_options').value = data.max_options;
                    document.getElementById('edit-type_question_id').value = data.type_question_id;

                    if (data.type_question_id === 4) {
                        document.getElementById('edit-max_options-div').classList.remove('hidden');
                    } else {
                        document.getElementById('edit-max_options-div').classList.add('hidden');
                    }

                    if (data.type_question_id === 10) {
                        document.getElementById('edit-text_switch-div').classList.remove('hidden');
                    } else {
                        document.getElementById('edit-text_switch-div').classList.add('hidden');
                    }

                    const optionsPart = document.getElementById('options-part');
                    const detailsModalContainer = document.getElementById('detailsModalContainer');
                    if (data.options && data.options.length) {
                        detailsModalContainer.classList.add('max-w-4xl');
                        detailsModalContainer.classList.remove('max-w-xl');
                        optionsPart.style.display = 'block';
                        renderOptions(data.options);
                    } else {
                        optionsPart.style.display = 'none';
                        detailsModalContainer.classList.add('max-w-xl');
                        detailsModalContainer.classList.remove('max-w-4xl');
                    }
                })
                .then(() => {
                    document.getElementById('loadingEditForm').classList.add('hidden');
                    document.getElementById('editPreguntaForm').classList.remove('hidden');
                })
                .catch(error => console.error('Error al cargar los datos de la pregunta:', error));
        }

        function closeModalOnClickOutside(event) {
            const modalContainer = document.getElementById('detailsModal');
            if (event.target === modalContainer) {
                closeModal();
            }
        }

        function closeModal() {
            document.getElementById('detailsModal').classList.add('hidden');
        }

        function saveChanges() {
            const questionId = document.getElementById('questionId').value;
            const questionData = {
                '_token': csrfToken,
                question: document.getElementById('edit-question').value,
                title: document.getElementById('edit-title').value,
                description: document.getElementById('edit-description').value,
                required: document.getElementById('edit-required').checked,
                stepper: document.getElementById('edit-stepper').value,
                // with_other: document.getElementById('edit-with_other').checked,
                text_switch: document.getElementById('edit-text_switch').value,
                max_options: document.getElementById('edit-max_options').value,
                type_question_id: document.getElementById('edit-type_question_id').value,
                options: pregunta.options // Asegúrate de incluir las opciones aquí
            };
            if (typeModal === 'CREATE') {
                createQuestion(questionData);
            } else {
                updateQuestion(questionId, questionData);
            }
        }

        function showToast(type, message) {
            const toast = document.getElementById('toast');
            const textToast = document.getElementById('textToast');
            const successToast = document.getElementById('successToast');
            const errorToast = document.getElementById('errorToast');
            const warningToast = document.getElementById('warningToast');

            textToast.textContent = message;
            if (type === 'success') {
                successToast.style.display = 'flex';
                errorToast.style.display = 'none';
                warningToast.style.display = 'none';
            } else if (type === 'error') {
                successToast.style.display = 'none';
                errorToast.style.display = 'flex';
                warningToast.style.display = 'none';
            } else if (type === 'warning') {
                successToast.style.display = 'none';
                errorToast.style.display = 'none';
                warningToast.style.display = 'flex';
            }
            toast.classList.remove('hidden');
            setTimeout(() => {
                toast.classList.add('hidden');
            }, 3000);
        }

        function createQuestion(questionData) {
            console.log("entro");
            fetch('/libro-reclamaciones/public/question', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': csrfToken,
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(questionData)
                })
                .then(response => {
                    console.log(response);
                    closeModal();
                    response.json().then(data => {
                        showToast(data.action, data.message);
                    });
                    window.location.reload();
                })
                .catch(error => console.error('Error al crear la pregunta:', error));
        }

        function updateQuestion(questionId, questionData) {
            fetch(`/libro-reclamaciones/public/question/${questionId}`, {
                    method: 'POST', // Asegúrate de que sea el método correcto
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': csrfToken, // Aquí envías el token CSRF
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(questionData)
                })
                .then(response => {
                    closeModal();
                    response.json().then(data => {
                        showToast(data.action, data.message);
                    });
                    window.location.reload();
                })
                .catch(error => console.error('Error al guardar cambios:', error));
        }

        // Función para renderizar las opciones
        function renderOptions(options) {
            const optionsContainer = document.getElementById('options-container');
            const typeQuestionId = document.getElementById('edit-type_question_id').value;
            console.log(typeQuestionId);
            optionsContainer.innerHTML = ''; // Limpiar opciones previas

            options.forEach(option => {
                const optionElement = document.createElement('div');
                optionElement.className = 'grid grid-cols-6 gap-2 place-items-center';

                optionElement.innerHTML = `
                <input type="text" value="${option.option}" 
                       class="mt-1 ${typeQuestionId !== '10' ? 'col-span-5': 'col-span-3' } p-2 text-sm block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" 
                       onchange="updateOption(${option.id}, this.value)">

                <label class="inline-flex items-center cursor-pointer col-span-2 ${typeQuestionId !== '10' ? 'hidden': '' }">
                    <input type="checkbox" ${option.second ? 'checked' : ''} class="sr-only peer"
                           onchange="toggleSecond(${option.id}, this.checked)">
                    <div class="relative w-10 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-4 after:h-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span class="ms-3 text-xs font-medium text-gray-900">Segunda</span>
                </label>

                <button type="button" onclick="deleteOption(${option.id})" class="p-1 h-fit w-fit text-xs font-medium text-gray-900 bg-white rounded-md border hover:bg-gray-100 hover:text-blue-700">
                    <span class="sr-only">Eliminar</span>🗑️
                </button>
            `;

                optionsContainer.appendChild(optionElement);
            });
        }

        function newOption() {
            const newOption = {
                id: Date.now(), // ID único para la opción
                option: '-', // Valor inicial del campo de texto
                second: false // Valor inicial del checkbox
            };

            pregunta.options.push(newOption); // Agrega la nueva opción
            renderOptions(pregunta.options); // Renderiza de nuevo las opciones
        }

        function updateOption(id, newValue) {
            const option = pregunta.options.find(opt => opt.id === id);
            if (option) {
                option.option = newValue; // Actualiza el valor de la opción
            }
        }

        function toggleSecond(id, checked) {
            const option = pregunta.options.find(opt => opt.id === id);
            if (option) {
                option.second = checked; // Actualiza el valor del checkbox
            }
        }

        function deleteOption(id) {
            pregunta.options = pregunta.options.filter(opt => opt.id !== id); // Elimina la opción
            renderOptions(pregunta.options); // Renderiza de nuevo las opciones
        }

        function setDeleteQuestion(id) {
            questionForDelete = id;
        }

        function deleteQuestion() {
            if (!questionForDelete) {
                return alert('No se ha seleccionado ninguna pregunta para eliminar');
            }
            fetch(`/libro-reclamaciones/public/question/${questionForDelete}`, {
                    method: 'DELETE',
                    headers: {
                        'X-CSRF-TOKEN': csrfToken
                    }
                })
                .then(response => {
                    closeModal();
                    response.json().then(data => {
                        showToast(data.action, data.message);
                    });
                    window.location.reload();
                })
                .catch(error => console.error('Error al eliminar la pregunta:', error));
        }
    </script>


@endsection
