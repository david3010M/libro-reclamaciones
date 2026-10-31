@extends('layouts.plantilla')

@section('title', 'Nueva contraseña')

@section('content')
    <div class="w-full max-w-md bg-white shadow-md rounded-lg mt-4">
        <div class="p-5 border-b">
            <h2 class="text-2xl font-bold text-center">Nueva contraseña</h2>
        </div>
        <div class="p-6">
            @if (session('error'))
                <div class="mb-4 p-3 text-sm text-red-700 bg-red-100 rounded-md">{{ session('error') }}</div>
            @endif
            @if ($errors->any())
                <div class="mb-4 p-3 text-sm text-red-700 bg-red-100 rounded-md">{{ $errors->first() }}</div>
            @endif
            <form method="POST" action="{{ route('password.update') }}" class="grid gap-4">
                @csrf
                <input type="hidden" name="token" value="{{ $token }}">
                <div>
                    <label for="email" class="block text-sm font-medium text-gray-700">Correo</label>
                    <input id="email" name="email" type="email" value="{{ old('email', $email) }}" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required>
                </div>
                <div>
                    <label for="password" class="block text-sm font-medium text-gray-700">Nueva contraseña (mín. 8 caracteres)</label>
                    <input id="password" name="password" type="password" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required>
                </div>
                <div>
                    <label for="password_confirmation" class="block text-sm font-medium text-gray-700">Confirmar contraseña</label>
                    <input id="password_confirmation" name="password_confirmation" type="password" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required>
                </div>
                <button type="submit" class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">Guardar contraseña</button>
            </form>
        </div>
    </div>
@endsection
