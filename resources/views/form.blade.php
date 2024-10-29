@extends('layouts.plantilla')

@section('content')
    <div class="h-full bg-gray-100 w-full p-4 sm:px-0 flex items-center justify-center">
        <div class="w-full max-w-2xl">
            <div class="bg-white shadow-md rounded-lg p-6" x-data="formWizard()">
                <h1 class="text-2xl font-bold text-center mb-4">Formulario de Reclamos</h1>

                <!-- Stepper Visual -->
                <div class="mb-8">
                    <div class="flex justify-between items-center">
                        <template x-for="(num, index) in [1, 2, 3]" :key="index">
                            <div class="flex flex-col items-center">
                                <div class="w-10 h-10 rounded-full flex items-center justify-center"
                                     :class="step >= num ? 'bg-blue-600 text-white' : 'bg-gray-300'">
                                    <span x-text="num"></span>
                                </div>
                                <span class="text-sm mt-2" x-text="'Paso ' + num"></span>
                            </div>
                        </template>
                    </div>
                    <div class="mt-4 h-2 bg-gray-200 rounded-full">
                        <div class="h-full bg-blue-600 rounded-full transition-all duration-300 ease-in-out"
                             :style="{ width: ((step - 1) / 2) * 100 + '%' }"></div>
                    </div>
                </div>

                <!-- Formulario con pasos -->
                <form id="dynamicForm" x-data="{ answers:{}, showOptions: false }"
                      @submit.prevent="submitForm">
                    @csrf

                    <!-- Step 1: Preguntas Dinámicas de Quejas -->
                    <div x-show="step === 1" class="space-y-4">
                        @foreach ($form->questions as $question)
                            @if($question->stepper === 1)
                                <div class="mb-4 flex flex-col gap-1">
                                    @if ($question->typeQuestion->type !== 'file')
                                        <label for="question_{{ $question->id }}" class="block text-md font-medium">
                                            {{ $question->question }}
                                            @if($question->required)
                                                <span class="text-red-500">*</span>
                                            @endif
                                        </label>
                                    @endif

                                    {{-- Select Options --}}
                                    @if($question->typeQuestion->type === 'select_options')
                                        <div x-data="{ show: false }" class="flex flex-col">
                                            <select name="answers[{{ $question->id }}]"
                                                    x-model="answers[{{ $question->id }}]"
                                                    :disabled="show"
                                                    :value="show ? '' : answers[{{ $question->id }}]"
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            >
                                                <option value="">Selecciona una opción</option>
                                                @foreach ($question->options as $option)
                                                    @if($option->second != true)
                                                        <option
                                                            value="{{ $option->option }}">{{ $option->option }}</option>
                                                    @endif
                                                @endforeach
                                            </select>

                                            <label for="question_{{ $question->id }}"
                                                   class="inline-flex items-center my-1 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    class="sr-only peer"
                                                    @change="show = !show; delete answers[{{ $question->id }}]"
                                                    :id="'question_' + {{ $question->id }}">
                                                <div
                                                    class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                                <span
                                                    class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">{{ $question->text_switch }}</span>
                                            </label>

                                            <div x-show="show" class="mt-2">
                                                @foreach ($question->options as $option)
                                                    @if($option->second == true)
                                                        <label class="flex items-center">
                                                            <input
                                                                type="radio"
                                                                name="answers[{{ $question->id }}][]"
                                                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                                value="{{ $option->option }}"
                                                                x-model="answers[{{ $question->id }}]"
                                                                :required="show"
                                                            >
                                                            <span class="ml-2">{{ $option->option }}</span>
                                                        </label>
                                                    @endif
                                                @endforeach
                                            </div>
                                            <span class="text-red-500 text-sm"
                                                  x-text="errors['answers[{{ $question->id }}]']"></span>
                                        </div>
                                        {{-- Text --}}
                                    @elseif ($question->typeQuestion->type === 'text')
                                        <input type="text" name="answers[{{ $question->id }}]"
                                               x-model="answers[{{ $question->id }}]"
                                               class="w-full border rounded-md p-2">
                                        <span class="text-red-500 text-sm"
                                              x-text="errors['answers[{{ $question->id }}]']"></span>

                                        {{-- Textarea --}}
                                    @elseif ($question->typeQuestion->type === 'textarea')
                                        <textarea name="answers[{{ $question->id }}]"
                                                  x-model="answers[{{ $question->id }}]"
                                                  rows="4"
                                                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        ></textarea>
                                        <span class="text-red-500 text-sm"
                                              x-text="errors['answers[{{ $question->id }}]']"></span>

                                        {{-- Select --}}
                                    @elseif ($question->typeQuestion->type === 'select')
                                        <select name="answers[{{ $question->id }}]"
                                                x-model="answers[{{ $question->id }}]"
                                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        >
                                            <option value="">Selecciona una opción</option>
                                            @foreach ($question->options as $option)
                                                <option
                                                    value="{{ $option->option }}">{{ $option->option }}</option>
                                            @endforeach
                                        </select>
                                        <span class="text-red-500 text-sm"
                                              x-text="errors['answers[{{ $question->id }}]']"></span>

                                        {{-- Radio --}}
                                    @elseif ($question->typeQuestion->type === 'radio')
                                        @foreach ($question->options as $option)
                                            <label class="inline-flex items-center">
                                                <input type="radio" name="answers[{{ $question->id }}]"
                                                       value="{{ $option->option }}"
                                                       x-model="answers[{{ $question->id }}]">
                                                <span class="ml-2">{{ $option->option }}</span>
                                            </label>
                                        @endforeach
                                        <span class="text-red-500 text-sm"
                                              x-text="errors['answers[{{ $question->id }}]']"></span>

                                    @elseif($question->typeQuestion->type === 'checkbox')
                                        <div class="flex flex-col">
                                            @foreach ($question->options as $option)
                                                <div class="flex">
                                                    <input type="checkbox"
                                                           id="option_{{ $option->id }}"
                                                           value="{{ $option->option }}"
                                                           @click="setAnswerCheckBox({{ $question->id }},2, $event.target.value)"
                                                           class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded
                                                    focus:ring-blue-500 dark:focus:ring-blue-600
                                                    dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700
                                                    dark:border-gray-600"
                                                    >
                                                    <label
                                                        for="option_{{ $option->id }}"
                                                        class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                        {{ $option->option }}
                                                    </label>
                                                </div>
                                            @endforeach
                                        </div>
                                        <span class="text-red-500 text-sm"
                                              x-text="errors['answers[{{ $question->id }}]']"></span>

                                        {{-- Date --}}
                                    @elseif ($question->typeQuestion->type === 'date')
                                        <div class="relative max-w-sm">
                                            <div
                                                class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400"
                                                     aria-hidden="true"
                                                     xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                     viewBox="0 0 20 20">
                                                    <path
                                                        d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                                </svg>
                                            </div>
                                            <label class="inline-flex items-center">
                                                <input type="date" name="answers[{{ $question->id }}]"
                                                       class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                       placeholder="Select date"
                                                       x-model="answers[{{ $question->id }}]">
                                            </label>
                                        </div>
                                        <span class="text-red-500 text-sm"
                                              x-text="errors['answers[{{ $question->id }}]']"></span>

                                        {{-- Time --}}
                                    @elseif ($question->typeQuestion->type === 'time')
                                        <div class="relative inline-flex w-fit">
                                            <div
                                                class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400"
                                                     aria-hidden="true"
                                                     xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                     viewBox="0 0 24 24">
                                                    <path fill-rule="evenodd"
                                                          d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                                                          clip-rule="evenodd"/>
                                                </svg>
                                            </div>
                                            <input type="time" name="answers[{{ $question->id }}]"
                                                   class="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                   placeholder="Select date"
                                                   x-model="answers[{{ $question->id }}]">
                                        </div>
                                        <span class="text-red-500 text-sm"
                                              x-text="errors['answers[{{ $question->id }}]']"></span>

                                        {{-- Yes/No --}}
                                    @elseif ($question->typeQuestion->type === 'yes_no')
                                        <label class="inline-flex items-center">
                                            <input type="radio" name="answers[{{ $question->id }}]"
                                                   value="Sí"
                                                   x-model="answers[{{ $question->id }}]">
                                            <span class="ml-2">Sí</span>
                                        </label>
                                        <label class="inline-flex items-center">
                                            <input type="radio" name="answers[{{ $question->id }}]"
                                                   value="No"
                                                   x-model="answers[{{ $question->id }}]">
                                            <span class="ml-2">No</span>
                                        </label>
                                        <span class="text-red-500 text-sm"
                                              x-text="errors['answers[{{ $question->id }}]']"></span>

                                        {{-- FILE --}}
                                    @elseif($question->typeQuestion->type === 'file')
                                        <label
                                            for="file_input_{{ $question->id }}"
                                            class="block text-md font-medium"
                                        >
                                            {{ $question->question }}
                                            <span class="text-red-500 text-sm"
                                                  x-text="errors['answers[{{ $question->id }}]']"></span>
                                        </label>
                                        <input
                                            type="file"
                                            id="file_input_{{ $question->id }}"
                                            @change="handleFileUpload($event, {{ $question->id }})"
                                            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                        >
                                    @endif
                                </div>
                            @endif
                        @endforeach
                    </div>

                    <!-- Step 2: Preguntas dinámicas -->
                    <div x-show="step === 2" class="space-y-4">
                        @foreach ($form->questions as $question)
                            @if($question->stepper === 2)
                                <div class="mb-4 flex flex-col gap-1">
                                    <label for="question_{{ $question->id }}" class="block text-md font-medium">
                                        {{ $question->question }}
                                        @if($question->required)
                                            <span class="text-red-500">*</span>
                                        @endif
                                    </label>

                                    {{-- Select Options --}}
                                    @if($question->typeQuestion->type === 'select_options')
                                        <div x-data="{ show: false }" class="flex flex-col">
                                            <select name="answers[{{ $question->id }}]"
                                                    x-model="answers[{{ $question->id }}]"
                                                    :disabled="show"
                                                    :value="show ? '' : answers[{{ $question->id }}]"
                                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            >
                                                <option value="">Selecciona una opción</option>
                                                @foreach ($question->options as $option)
                                                    @if($option->second != true)
                                                        <option
                                                            value="{{ $option->option }}">{{ $option->option }}</option>
                                                    @endif
                                                @endforeach
                                            </select>

                                            <label for="question_{{ $question->id }}"
                                                   class="inline-flex items-center my-1 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    class="sr-only peer"
                                                    @change="show = !show; delete answers[{{ $question->id }}]"
                                                    :id="'question_' + {{ $question->id }}">
                                                <div
                                                    class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                                <span
                                                    class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">{{ $question->text_switch }}</span>
                                            </label>

                                            <div x-show="show" class="mt-2">
                                                @foreach ($question->options as $option)
                                                    @if($option->second == true)
                                                        <label class="flex items-center">
                                                            <input
                                                                type="radio"
                                                                name="answers[{{ $question->id }}][]"
                                                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                                value="{{ $option->option }}"
                                                                x-model="answers[{{ $question->id }}]"
                                                                :required="show"
                                                            >
                                                            <span class="ml-2">{{ $option->option }}</span>
                                                        </label>
                                                    @endif
                                                @endforeach
                                            </div>
                                            <span class="text-red-500 text-sm"
                                                  x-text="errors['answers[{{ $question->id }}]']"></span>
                                        </div>
                                        {{-- Text --}}
                                    @elseif ($question->typeQuestion->type === 'text')
                                        <input type="text" name="answers[{{ $question->id }}]"
                                               x-model="answers[{{ $question->id }}]"
                                               class="w-full border rounded-md p-2">
                                        <span class="text-red-500 text-sm"
                                              x-text="errors['answers[{{ $question->id }}]']"></span>

                                        {{-- Textarea --}}
                                    @elseif ($question->typeQuestion->type === 'textarea')
                                        <textarea name="answers[{{ $question->id }}]"
                                                  x-model="answers[{{ $question->id }}]"
                                                  rows="4"
                                                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        ></textarea>
                                        <span class="text-red-500 text-sm"
                                              x-text="errors['answers[{{ $question->id }}]']"></span>

                                        {{-- Select --}}
                                    @elseif ($question->typeQuestion->type === 'select')
                                        <select name="answers[{{ $question->id }}]"
                                                x-model="answers[{{ $question->id }}]"
                                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        >
                                            <option value="">Selecciona una opción</option>
                                            @foreach ($question->options as $option)
                                                <option
                                                    value="{{ $option->option }}">{{ $option->option }}</option>
                                            @endforeach
                                        </select>
                                        <span class="text-red-500 text-sm"
                                              x-text="errors['answers[{{ $question->id }}]']"></span>

                                        {{-- Radio --}}
                                    @elseif ($question->typeQuestion->type === 'radio')
                                        @foreach ($question->options as $option)
                                            <label class="inline-flex items-center">
                                                <input type="radio" name="answers[{{ $question->id }}]"
                                                       value="{{ $option->option }}"
                                                       x-model="answers[{{ $question->id }}]">
                                                <span class="ml-2">{{ $option->option }}</span>
                                            </label>
                                        @endforeach
                                        <span class="text-red-500 text-sm"
                                              x-text="errors['answers[{{ $question->id }}]']"></span>

                                    @elseif($question->typeQuestion->type === 'checkbox')
                                        <div class="flex flex-col">
                                            @foreach ($question->options as $option)
                                                <div class="flex">
                                                    <input type="checkbox"
                                                           id="option_{{ $option->id }}"
                                                           value="{{ $option->option }}"
                                                           @click="setAnswerCheckBox({{ $question->id }},2, $event.target.value)"
                                                           class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded
                                                    focus:ring-blue-500 dark:focus:ring-blue-600
                                                    dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700
                                                    dark:border-gray-600"
                                                    >
                                                    <label
                                                        for="option_{{ $option->id }}"
                                                        class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                        {{ $option->option }}
                                                    </label>
                                                </div>
                                            @endforeach
                                        </div>
                                        <span class="text-red-500 text-sm"
                                              x-text="errors['answers[{{ $question->id }}]']"></span>

                                        {{-- Date --}}
                                    @elseif ($question->typeQuestion->type === 'date')
                                        <div class="relative max-w-sm">
                                            <div
                                                class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400"
                                                     aria-hidden="true"
                                                     xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                     viewBox="0 0 20 20">
                                                    <path
                                                        d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                                </svg>
                                            </div>
                                            <label class="inline-flex items-center">
                                                <input type="date" name="answers[{{ $question->id }}]"
                                                       class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                       placeholder="Select date"
                                                       x-model="answers[{{ $question->id }}]">
                                            </label>
                                        </div>
                                        <span class="text-red-500 text-sm"
                                              x-text="errors['answers[{{ $question->id }}]']"></span>

                                        {{-- Time --}}
                                    @elseif ($question->typeQuestion->type === 'time')
                                        <div class="relative inline-flex w-fit">
                                            <div
                                                class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400"
                                                     aria-hidden="true"
                                                     xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                     viewBox="0 0 24 24">
                                                    <path fill-rule="evenodd"
                                                          d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                                                          clip-rule="evenodd"/>
                                                </svg>
                                            </div>
                                            <input type="time" name="answers[{{ $question->id }}]"
                                                   class="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                   placeholder="Select date"
                                                   x-model="answers[{{ $question->id }}]">
                                        </div>
                                        <span class="text-red-500 text-sm"
                                              x-text="errors['answers[{{ $question->id }}]']"></span>

                                        {{-- Yes/No --}}
                                    @elseif ($question->typeQuestion->type === 'yes_no')
                                        <label class="inline-flex items-center">
                                            <input type="radio" name="answers[{{ $question->id }}]"
                                                   value="Sí"
                                                   x-model="answers[{{ $question->id }}]">
                                            <span class="ml-2">Sí</span>
                                        </label>
                                        <label class="inline-flex items-center">
                                            <input type="radio" name="answers[{{ $question->id }}]"
                                                   value="No"
                                                   x-model="answers[{{ $question->id }}]">
                                            <span class="ml-2">No</span>
                                        </label>
                                        <span class="text-red-500 text-sm"
                                              x-text="errors['answers[{{ $question->id }}]']"></span>

                                        {{-- FILE --}}
                                    @elseif($question->typeQuestion->type === 'file')
                                        <label
                                            for="file_input_{{ $question->id }}"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            {{ $question->question }}
                                            <span class="text-red-500 text-sm"
                                                  x-text="errors['answers[{{ $question->id }}]']"></span>
                                        </label>
                                        <input
                                            type="file"
                                            id="file_input_{{ $question->id }}"
                                            @change="handleFileUpload($event, {{ $question->id }})"
                                            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                        >
                                    @endif
                                </div>
                            @endif
                        @endforeach
                    </div>

                    <!-- Step 3: Confirmación -->
                    <div x-show="step === 3">
                        <p>Por favor, revisa la información antes de enviar.</p>
                        <label for="nombre" class="block text-sm font-medium">Nombre Completo</label>
                        <input type="text" name="nombre" x-model="customer.nombre"
                               class="w-full border rounded-md p-2"
                               required>

                        <label for="email" class="block text-sm font-medium mt-4">Correo Electrónico</label>
                        <input type="email" name="email" x-model="customer.email"
                               class="w-full border rounded-md p-2"
                               required>

                        <label for="telefono" class="block text-sm font-medium mt-4">Teléfono</label>
                        <input type="tel" maxlength="9" name="telefono" x-model="customer.telefono"
                               class="w-full border rounded-md p-2" required>

                        <label for="document" class="block text-sm font-medium mt-4">Documento</label>
                        <input type="text" maxlength="8" name="document" x-model="customer.document"
                               class="w-full border rounded-md p-2" required>

                        <label for="direccion" class="block text-sm font-medium mt-4">Dirección</label>
                        <input type="text" name="direccion" x-model="customer.direccion"
                               class="w-full border rounded-md p-2" required>
                    </div>

                    <!-- Botones de navegación -->
                    <div class="flex justify-between mt-4">
                        <button type="button" @click="prevStep"
                                class="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-md text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2"
                                :disabled="step <= 1"
                        >
                            Anterior
                        </button>
                        <button type="button"
                                @click="nextStep"
                                class="text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-md text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 me-2 mb-2"
                                x-show="step < 3">Siguiente
                        </button>
                        <button type="submit"
                                class="text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-md text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 me-2 mb-2"
                                x-disabled="step !== 3"
                                x-show="step === 3">
                            Enviar Reclamo
                        </button>
                    </div>

                </form>

            </div>
        </div>
        <div id="toast-success"
             class="fixed right-5 flex bottom-5 hidden items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
             role="alert">
            <div
                class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                     viewBox="0 0 20 20">
                    <path
                        d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
                <span class="sr-only">Check icon</span>
            </div>
            <div class="ms-3 text-sm font-normal">Reclamo Envíado</div>
            <button type="button"
                    class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                    onclick="document.getElementById('toast-success').classList.add('hidden')"
                    aria-label="Close">
                <span class="sr-only">Close</span>
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
            </button>
        </div>

    </div>

    <script>


        function formWizard() {
            return {
                step: 1, // Inicializar el paso
                customer: { // Datos del cliente
                    nombre: '',
                    email: '',
                    telefono: '',
                    documento: '',
                    direccion: ''
                },
                answers: [], // Respuestas a las preguntas
                errors: {}, // Errores de validación

                handleFileUpload(event, questionId) {
                    const file = event.target.files[0];
                    if (file) {
                        this.answers[questionId] = file;
                        this.errors['answers[' + questionId + ']'] = '';
                    }
                },
                setAnswerCheckBox(questionId, maxLength, value) {
                    if (!this.answers[questionId]) {
                        this.answers[questionId] = [];
                    }
                    if (this.answers[questionId].includes(value)) {
                        this.answers[questionId] = this.answers[questionId].filter(item => item !== value);
                    } else {
                        this.answers[questionId].push(value);
                    }

                    if (this.answers[questionId].length > maxLength) {
                        this.errors['answers[' + questionId + ']'] = 'No puedes seleccionar más de ' + maxLength + ' opciones.';
                    } else {
                        delete this.errors['answers[' + questionId + ']'];
                    }
                },
                nextStep() {
                    this.errors = {}; // Resetear errores

                    @foreach ($form->questions as $question)
                        @if ($question->required)
                    if ({{ $question->stepper }} === this.step) {
                        if (!this.answers[{{ $question->id }}] || this.answers[{{ $question->id }}] === '') {
                            this.errors['answers[{{ $question->id }}]'] = 'Este campo es obligatorio.';
                        }
                    }
                    @endif
                        @if ($question->max_options)
                    if ({{ $question->stepper }} === this.step) {
                        if (this.answers[{{ $question->id }}] && this.answers[{{ $question->id }}].length > {{ $question->max_options }}) {
                            this.errors['answers[{{ $question->id }}]'] = 'No puedes seleccionar más de {{ $question->max_options }} opciones.';
                        }
                    }
                    @endif
                    @endforeach

                    console.log(this.errors);
                    console.log(this.answers);
                    if (Object.keys(this.errors).length > 0) {
                        return;
                    }

                    if (this.step < 3) this.step++;
                },
                prevStep() {
                    if (this.step > 1) this.step--;
                },
                submitForm() {
                    const formData = new FormData();

                    Object.keys(this.customer).forEach(key => {
                        formData.append(`customer[${key}]`, this.customer[key]);
                    });

                    Object.keys(this.answers).forEach(key => {
                        const answer = this.answers[key];

                        if (answer instanceof File) {
                            formData.append(`answers[${key}]`, answer);
                            return;
                        }

                        if (Array.isArray(answer)) {
                            answer.forEach(value => {
                                formData.append(`answers[${key}][]`, value);
                            });
                        } else {
                            formData.append(`answers[${key}][]`, answer);
                        }
                    });

                    fetch('{{ route('form.submit') }}', {
                        method: 'POST',
                        headers: {
                            'X-CSRF-TOKEN': '{{ csrf_token() }}',
                            'Accept': 'application/json',
                        },
                        body: formData
                    })
                        .then(response => {
                            if (!response.ok) {
                                throw new Error('Network response was not ok');
                            }
                            return response.json();
                        })
                        .then(data => {
                            // Mostrar el toast de éxito al enviar correctamente
                            const toast = document.getElementById('toast-success');
                            toast.classList.remove('hidden');

                            // Ocultar el toast después de 3 segundos
                            setTimeout(() => {
                                toast.classList.add('hidden');
                                window.location.href = '{{ url('/reclamo') }}/' + data.complaintCode;
                            }, 3000);
                        })
                        .catch(error => console.error('Error al enviar el formulario:', error));
                }


            }
        }
    </script>
@endsection
