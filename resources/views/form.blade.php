@extends('layouts.plantilla')

@section('content')
    <div class="min-h-screen bg-gray-100 w-full p-4 flex items-center justify-center">
        <div class="w-full max-w-2xl">
            <div class="bg-white shadow-md rounded-lg p-6" x-data="formWizard()">
                <h1 class="text-2xl font-bold text-center mb-4">Libro de Reclamaciones</h1>

                <!-- Barra de progreso -->
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

                <!-- Formulario dinámico -->
                <form @submit.prevent="submitForm">
                    <!-- Paso 1: Datos personales -->
                    <div x-show="step === 1" class="space-y-4">
                        <div>
                            <label for="nombre" class="block text-sm font-medium">Nombre completo</label>
                            <input id="nombre" name="nombre" type="text" x-model="formData.nombre"
                                   class="w-full border rounded-md p-2" required>
                            <span x-show="errors.nombre" class="text-red-500 text-sm" x-text="errors.nombre"></span>
                        </div>
                        <div>
                            <label for="email" class="block text-sm font-medium">Correo electrónico</label>
                            <input id="email" name="email" type="email" x-model="formData.email"
                                   class="w-full border rounded-md p-2" required>
                            <span x-show="errors.email" class="text-red-500 text-sm" x-text="errors.email"></span>
                        </div>
                        <div>
                            <label for="telefono" class="block text-sm font-medium">Teléfono</label>
                            <input id="telefono" name="telefono" type="tel" x-model="formData.telefono"
                                   class="w-full border rounded-md p-2" required>
                            <span x-show="errors.telefono" class="text-red-500 text-sm" x-text="errors.telefono"></span>
                        </div>
                    </div>

                    <!-- Paso 2: Tipo de reclamo -->
                    <div x-show="step === 2" class="space-y-4">
                        <div>
                            <label for="tipoReclamo" class="block text-sm font-medium">Tipo de reclamo</label>
                            <input id="tipoReclamo" name="tipoReclamo" type="text" x-model="formData.tipoReclamo"
                                   class="w-full border rounded-md p-2" required>
                            <span x-show="errors.tipoReclamo" class="text-red-500 text-sm"
                                  x-text="errors.tipoReclamo"></span>
                        </div>
                    </div>

                    <!-- Paso 3: Descripción del reclamo -->
                    <div x-show="step === 3" class="space-y-4">
                        <div>
                            <label for="descripcion" class="block text-sm font-medium">Descripción del reclamo</label>
                            <textarea id="descripcion" name="descripcion" rows="5" x-model="formData.descripcion"
                                      class="w-full border rounded-md p-2" required></textarea>
                            <span x-show="errors.descripcion" class="text-red-500 text-sm"
                                  x-text="errors.descripcion"></span>
                        </div>
                    </div>

                    <!-- Botones de navegación -->
                    <div class="flex justify-between mt-4">
                        <button type="button" @click="prevStep" class="bg-gray-500 text-white rounded-md px-4 py-2"
                                :disabled="step === 1">
                            Anterior
                        </button>
                        <template x-if="step < 3">
                            <button type="button" @click="nextStep" class="bg-blue-600 text-white rounded-md px-4 py-2">
                                Siguiente
                            </button>
                        </template>
                        <template x-if="step === 3">
                            <button type="submit" class="bg-blue-600 text-white rounded-md px-4 py-2">Enviar reclamo
                            </button>
                        </template>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <script>
        function formWizard() {
            return {
                step: 1,
                formData: {
                    nombre: '',
                    email: '',
                    telefono: '',
                    tipoReclamo: '',
                    descripcion: ''
                },
                errors: {},
                // Validación para cada paso antes de avanzar
                nextStep() {
                    this.errors = {}; // Reiniciar errores

                    // Validar campos del paso 1
                    if (this.step === 1) {
                        if (!this.formData.nombre) this.errors.nombre = 'El nombre es obligatorio';
                        if (!this.validateEmail(this.formData.email)) this.errors.email = 'El correo es inválido';
                        if (!this.formData.telefono) this.errors.telefono = 'El teléfono es obligatorio';
                    }

                    // Validar campos del paso 2
                    if (this.step === 2 && !this.formData.tipoReclamo) {
                        this.errors.tipoReclamo = 'El tipo de reclamo es obligatorio';
                    }

                    // Si no hay errores, avanza al siguiente paso
                    if (Object.keys(this.errors).length === 0 && this.step < 3) {
                        this.step++;
                    }
                },
                prevStep() {
                    if (this.step > 1) this.step--;
                },
                // Validar correo electrónico
                validateEmail(email) {
                    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.[^<>()[\]\.,;:\s@"]{2,}))$/i;
                    return re.test(String(email).toLowerCase());
                },
                // Enviar el formulario
                submitForm() {
                    this.errors = {}; // Reiniciar errores

                    // Validar campos del paso 3
                    if (!this.formData.descripcion) {
                        this.errors.descripcion = 'La descripción es obligatoria';
                        return;
                    }

                    // Realizar la petición AJAX
                    fetch('{{ route('form.submit') }}', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'X-CSRF-TOKEN': '{{ csrf_token() }}'
                        },
                        body: JSON.stringify(this.formData)
                    })
                        .then(response => response.json())
                        .then(data => {
                            console.log(data);
                            alert('Formulario enviado exitosamente!');
                        })
                        .catch(error => console.error('Error al enviar el formulario:', error));
                }
            }
        }
    </script>
@endsection
