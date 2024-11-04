@extends('layouts.plantilla')

@section('title', 'Inicio de Sesión')

@section('content')
    <div class="w-full max-w-md bg-white shadow-md rounded-lg mt-4">
        <div class="p-5 border-b">
            <h2 class="text-2xl font-bold text-center">Iniciar Sesión</h2>
        </div>
        <div class="p-6">
            <form method="POST" action="{{ route('login') }}" class="grid gap-4">
                @csrf
                <div>
                    <label for="email" class="block text-sm font-medium text-gray-700">Correo</label>
                    <input
                        id="email"
                        name="email"
                        type="text"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        required
                    >
                </div>
                <div>
                    <label for="password" class="block text-sm font-medium text-gray-700">Contraseña</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        required
                    >
                </div>
                <button type="submit"
                        class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
                    Iniciar Sesión
                </button>
            </form>
        </div>
    </div>
@endsection
