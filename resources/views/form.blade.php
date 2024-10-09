@extends('layouts.plantilla')

@php($step = $step ?? 1)

@section('content')
    <div class="min-h-screen bg-gray-100 w-full p-4 flex items-center justify-center">
        <div class="w-full max-w-2xl">
            <div class="bg-white shadow-md rounded-lg">
                <div class="p-6 text-center">
                    <h1 class="text-2xl font-bold">Libro de Reclamaciones</h1>
                </div>
                <div class="p-6">
                    <div class="mb-8">
                        <div class="flex justify-between items-center">
                            @foreach([1, 2, 3] as $num)
                                <div class="flex flex-col items-center">
                                    <div class="w-10 h-10 rounded-full flex items-center justify-center {{ $step >= $num ? 'bg-blue-600 text-white' : 'bg-gray-300' }}">
                                        {{ $num }}
                                    </div>
                                    <span class="text-sm mt-2">Paso {{ $num }}</span>
                                </div>
                            @endforeach
                        </div>
                        <div class="mt-4 h-2 bg-gray-200 rounded-full">
                            <div class="h-full bg-blue-600 rounded-full transition-all duration-300 ease-in-out"
                                 style="width: {{ (($step - 1) / 2) * 100 }}%">
                            </div>
                        </div>
                    </div>

                    <form method="POST" action="{{ route('form.submit') }}">
                        @csrf
                        @if ($step === 1)
                            <div class="space-y-4">
                                <div>
                                    <label for="nombre" class="block text-sm font-medium">Nombre completo</label>
                                    <input id="nombre" name="nombre" value="{{ old('nombre', $formData['nombre']) }}" required class="w-full border rounded-md p-2">
                                </div>
                                <div>
                                    <label for="email" class="block text-sm font-medium">Correo electrónico</label>
                                    <input id="email" name="email" type="email" value="{{ old('email', $formData['email']) }}" required class="w-full border rounded-md p-2">
                                </div>
                                <div>
                                    <label for="telefono" class="block text-sm font-medium">Teléfono</label>
                                    <input id="telefono" name="telefono" type="tel" value="{{ old('telefono', $formData['telefono']) }}" required class="w-full border rounded-md p-2">
                                </div>
                            </div>
                        @elseif ($step === 2)
                            <div class="space-y-4">
                                <div>
                                    <label for="tipoReclamo" class="block text-sm font-medium">Tipo de reclamo</label>
                                    <input id="tipoReclamo" name="tipoReclamo" value="{{ old('tipoReclamo', $formData['tipoReclamo']) }}" required class="w-full border rounded-md p-2">
                                </div>
                            </div>
                        @elseif ($step === 3)
                            <div class="space-y-4">
                                <div>
                                    <label for="descripcion" class="block text-sm font-medium">Descripción del reclamo</label>
                                    <textarea id="descripcion" name="descripcion" rows="5" required class="w-full border rounded-md p-2">{{ old('descripcion', $formData['descripcion']) }}</textarea>
                                </div>
                            </div>
                        @endif
                        <div class="flex justify-between mt-4">
                            <button type="button" onclick="location.href='{{ route('form.prev', $step) }}'"
                                    class="bg-gray-500 text-white rounded-md px-4 py-2 {{ $step === 1 ? 'opacity-50 cursor-not-allowed' : '' }}"
                                {{ $step === 1 ? 'disabled' : '' }}>
                                Anterior
                            </button>
                            @if ($step < 3)
                                <button type="button" onclick="location.href='{{ route('form.next', $step) }}'" class="bg-blue-600 text-white rounded-md px-4 py-2">
                                    Siguiente
                                </button>
                            @else
                                <button type="submit" class="bg-blue-600 text-white rounded-md px-4 py-2">
                                    Enviar reclamo
                                </button>
                            @endif
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
