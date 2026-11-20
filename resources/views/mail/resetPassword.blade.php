@extends('mail.layouts.base')
@section('email_subject', 'Restablece tu contraseña')
@section('title', 'Restablece tu contraseña')
@section('subtitle', 'Recibimos una solicitud para cambiar la contraseña de tu cuenta.')
@section('content')
    <x-mail.text>Hola, <strong style="color:#111111;">{{ $user->name }}</strong>. Haz clic en el botón de abajo para elegir una contraseña nueva. El enlace vence en <strong style="color:#111111;">{{ $minutes }} minutos</strong>.</x-mail.text>
    <x-mail.button :href="$url">Restablecer contraseña</x-mail.button>
    <x-mail.fallback :href="$url"/>
    <x-mail.text>Si no fuiste tú, ignora este correo: tu contraseña no cambia hasta que uses el enlace.</x-mail.text>
@endsection
