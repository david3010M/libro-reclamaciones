@extends('layouts.plantilla')

@section('content')
    <div class="min-h-screen bg-gray-100 w-full p-4 flex items-center justify-center">
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
                <form id="dynamicForm" @submit.prevent="submitForm">
                    @csrf

                    <!-- Step 1: Información del cliente -->
                    <div x-show="step === 1" class="space-y-4">
                        @foreach ($form->questions as $question)
                            @if($question->stepper === 1)
                                <div class="mb-4">
                                    {{-- Pregunta --}}
                                    <label for="question_{{ $question->id }}" class="block text-md font-medium">
                                        @if($question->typeQuestion->type === 'check_radio')
                                            <input type="checkbox" value="" class="sr-only peer">
                                            <div
                                                class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                            <span
                                                class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">{{ $question->question }}</span>
                                        @else
                                            {{ $question->question }}
                                            @if($question->required)
                                                <span class="text-red-500">*</span>
                                            @endif
                                        @endif
                                    </label>

                                    {{-- Text --}}
                                    @if ($question->typeQuestion->type === 'text')
                                        <input type="text" name="answers[{{ $question->id }}]"
                                               x-model="answers[{{ $question->id }}]"
                                               class="w-full border rounded-md p-2">
                                        <span class="text-red-500 text-sm"
                                              x-text="errors['answers[{{ $question->id }}]']"></span>

                                        {{-- Textarea --}}
                                    @elseif ($question->typeQuestion->type === 'textarea')
                                        <textarea name="answers[{{ $question->id }}]"
                                                  x-model="answers[{{ $question->id }}]"
                                                  rows="4" class="w-full border rounded-md p-2"></textarea>
                                        <span class="text-red-500 text-sm"
                                              x-text="errors['answers[{{ $question->id }}]']"></span>

                                        {{-- Select --}}
                                    @elseif ($question->typeQuestion->type === 'select')
                                        <select name="answers[{{ $question->id }}]"
                                                x-model="answers[{{ $question->id }}]"
                                                class="w-full border rounded-md p-2">
                                            <option value="">Selecciona una opción</option>
                                            @foreach ($question->options as $option)
                                                <option value="{{ $option->option }}">{{ $option->option }}</option>
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

                                        {{-- Check and Radio --}}
                                    @elseif ($question->typeQuestion->type === 'check_radio')
                                        @foreach ($question->options as $option)
                                            <label class="flex items-center">
                                                <input type="radio" name="answers[{{ $question->id }}][]"
                                                       value="{{ $option->option }}"
                                                       x-model="answers[{{ $question->id }}]"
                                                       class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                >
                                                <span class="ml-2">{{ $option->option }}</span>
                                            </label>
                                        @endforeach
                                        <span class="text-red-500 text-sm"
                                              x-text="errors['answers[{{ $question->id }}]']"></span>

                                        {{-- Yes/No --}}
                                    @elseif ($question->typeQuestion->type === 'yes_no')
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

                                        {{-- Checkbox --}}
                                    @elseif ($question->typeQuestion->type === 'checkbox')
                                        @foreach ($question->options as $option)
                                            <label class="inline-flex items-center">
                                                <input type="checkbox" name="answers[{{ $question->id }}][]"
                                                       value="{{ $option->option }}"
                                                       x-model="answers[{{ $question->id }}]">
                                                <span class="ml-2">{{ $option->option }}</span>
                                            </label>
                                        @endforeach
                                        <span class="text-red-500 text-sm"
                                              x-text="errors['answers[{{ $question->id }}]']"></span>
                                    @endif
                                </div>
                            @endif
                        @endforeach
                    </div>

                    <!-- Step 2: Preguntas dinámicas -->
                    <div x-show="step === 2" class="space-y-4">
                        @foreach ($form->questions as $question)
                            @if($question->stepper === 2)
                                <div class="mb-4">
                                    {{-- Pregunta --}}
                                    <label for="question_{{ $question->id }}" class="block text-sm font-medium">
                                        {{ $question->question }}
                                        @if($question->required)
                                            <span class="text-red-500">*</span>
                                        @endif
                                    </label>

                                    {{-- Text --}}
                                    @if ($question->typeQuestion->type === 'text')
                                        <input type="text" name="answers[{{ $question->id }}]"
                                               x-model="answers[{{ $question->id }}]"
                                               class="w-full border rounded-md p-2">
                                        <span class="text-red-500 text-sm"
                                              x-text="errors['answers[{{ $question->id }}]']"></span>

                                        {{-- Textarea --}}
                                    @elseif ($question->typeQuestion->type === 'textarea')
                                        <textarea name="answers[{{ $question->id }}]"
                                                  x-model="answers[{{ $question->id }}]"
                                                  rows="4" class="w-full border rounded-md p-2"></textarea>
                                        <span class="text-red-500 text-sm"
                                              x-text="errors['answers[{{ $question->id }}]']"></span>

                                        {{-- Select --}}
                                    @elseif ($question->typeQuestion->type === 'select')
                                        <select name="answers[{{ $question->id }}]"
                                                x-model="answers[{{ $question->id }}]"
                                                class="w-full border rounded-md p-2">
                                            <option value="">Selecciona una opción</option>
                                            @foreach ($question->options as $option)
                                                <option value="{{ $option->option }}">{{ $option->option }}</option>
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

                                        {{-- Check and Radio --}}
                                    @elseif ($question->typeQuestion->type === 'check_radio')
                                        @foreach ($question->options as $option)
                                            <p>
                                                {{ $option->option }}
                                            </p>
                                        @endforeach
                                        <span class="text-red-500 text-sm"
                                              x-text="errors['answers[{{ $question->id }}]']"></span>

                                        {{-- Yes/No --}}
                                    @elseif ($question->typeQuestion->type === 'yes_no')
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

                                        {{-- Checkbox --}}
                                    @elseif ($question->typeQuestion->type === 'checkbox')
                                        @foreach ($question->options as $option)
                                            <label class="inline-flex items-center">
                                                <input type="checkbox" name="answers[{{ $question->id }}][]"
                                                       value="{{ $option->option }}"
                                                       x-model="answers[{{ $question->id }}]">
                                                <span class="ml-2">{{ $option->option }}</span>
                                            </label>
                                        @endforeach
                                        <span class="text-red-500 text-sm"
                                              x-text="errors['answers[{{ $question->id }}]']"></span>
                                    @endif
                                </div>
                            @endif
                        @endforeach
                    </div>

                    <!-- Step 3: Confirmación -->
                    <div x-show="step === 3">
                        <p>Por favor, revisa la información antes de enviar.</p>
                        <label for="nombre" class="block text-sm font-medium">Nombre Completo</label>
                        <input type="text" name="nombre" x-model="customer.nombre" class="w-full border rounded-md p-2"
                               required>

                        <label for="email" class="block text-sm font-medium mt-4">Correo Electrónico</label>
                        <input type="email" name="email" x-model="customer.email" class="w-full border rounded-md p-2"
                               required>

                        <label for="telefono" class="block text-sm font-medium mt-4">Teléfono</label>
                        <input type="tel" name="telefono" x-model="customer.telefono"
                               class="w-full border rounded-md p-2" required>

                        <label for="documento" class="block text-sm font-medium mt-4">Documento</label>
                        <input type="text" name="documento" x-model="customer.documento"
                               class="w-full border rounded-md p-2" required>

                        <label for="direccion" class="block text-sm font-medium mt-4">Dirección</label>
                        <input type="text" name="direccion" x-model="customer.direccion"
                               class="w-full border rounded-md p-2" required>
                    </div>

                    <!-- Botones de navegación -->
                    <div class="flex justify-between mt-4">
                        <button type="button" @click="prevStep"
                                class="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-md text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2"
                                :disabled="step > 1"
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
                answers: {}, // Respuestas del formulario dinámico
                errors: {}, // Errores de validación

                nextStep() {
                    this.errors = {}; // Resetear errores

                    // Validación del Step 2
                    if (this.step === 0) {
                        @foreach ($form->questions as $question)
                            @if ($question->required)
                        if (!this.answers[{{ $question->id }}] || this.answers[{{ $question->id }}] === '') {
                            this.errors['answers[{{ $question->id }}]'] = 'Este campo es obligatorio.';
                        }
                        @endif
                        @endforeach

                        // Si hay errores, no avanzar al siguiente paso
                        if (Object.keys(this.errors).length > 0) {
                            return;
                        }
                    }

                    if (this.step < 3) this.step++;
                },
                prevStep() {
                    if (this.step > 1) this.step--;
                },
                submitForm() {
                    // Construir los datos del formulario
                    const formData = {
                        customer: this.customer,
                        answers: this.answers
                    };

                    // Enviar los datos del formulario usando Fetch API
                    fetch('{{ route('form.submit') }}', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'X-CSRF-TOKEN': '{{ csrf_token() }}'
                        },
                        body: JSON.stringify(formData)
                    })
                        .then(response => response.json())
                        .then(data => {
                            alert('Reclamo enviado correctamente');
                        })
                        .catch(error => console.error('Error al enviar el formulario:', error));
                }
            }
        }
    </script>
@endsection
