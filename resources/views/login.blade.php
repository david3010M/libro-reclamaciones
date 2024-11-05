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
                    <input id="email" name="email" type="text"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        required>
                </div>
                <div>
                    <label for="password" class="block text-sm font-medium text-gray-700">Contraseña</label>
                    <input id="password" name="password" type="password"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        required>
                </div>
                <button type="submit"
                    class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
                    Iniciar Sesión
                </button>
            </form>
        </div>

        @if (session('error'))
            <div id="toast"
                class="fixed flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow right-5 bottom-5 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800 transition-transform transform opacity-100 duration-[3000] ease-in-out"
                role="alert">
                <div id = "errorToast"
                    class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
                    <x-ri-error-warning-fill class="w-5 h-5" />
                </div>
                <div class="ps-4 text-sm font-normal" id="textToast">
                    {{ session('error') }}
                </div>
            </div>
        @endif
    </div>
@endsection
