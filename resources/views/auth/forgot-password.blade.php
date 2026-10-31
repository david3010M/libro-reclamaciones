@extends('layouts.plantilla')

@section('title', 'Recuperar contraseña')

@section('content')
    <div class="w-full max-w-md bg-white shadow-md rounded-lg mt-4">
        <div class="p-5 border-b">
            <h2 class="text-2xl font-bold text-center">Recuperar contraseña</h2>
        </div>
        <div class="p-6">
            @if (session('status'))
                <div class="mb-4 p-3 text-sm text-green-700 bg-green-100 rounded-md">{{ session('status') }}</div>
            @endif
            @if ($errors->any())
                <div class="mb-4 p-3 text-sm text-red-700 bg-red-100 rounded-md">{{ $errors->first() }}</div>
            @endif
            <form method="POST" action="{{ route('password.email') }}" class="grid gap-4">
                @csrf
                <p class="text-sm text-gray-600">Ingresa tu correo y te enviaremos un enlace para crear una nueva contraseña.</p>
                <div>
                    <label for="email" class="block text-sm font-medium text-gray-700">Correo</label>
                    <input id="email" name="email" type="email" value="{{ old('email') }}" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required>
                </div>
                <button type="submit" class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">Enviar enlace</button>
                <a href="/login" class="text-sm text-center text-blue-600 hover:underline">Volver al inicio de sesión</a>
            </form>
        </div>
    </div>
@endsection
