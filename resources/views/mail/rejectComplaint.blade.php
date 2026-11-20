@extends('mail.layouts.base')
@section('email_subject', 'Tu reclamo no fue confirmado')
@section('title', 'Reclamo no confirmado')
@section('subtitle', 'Pasaron las 48 horas sin que se confirmara.')
@section('content')
    @php $url = route('form.show'); @endphp
    <x-mail.text>Hola, <strong style="color:#111111;">{{ $complaint->customer->name }}</strong>. Como no confirmaste tu reclamo a tiempo, se rechazó automáticamente.</x-mail.text>
    <x-mail.details :items="['Código' => $complaint->complaintCode, 'Estado' => 'Rechazado']"/>
    <x-mail.text>Si aún quieres presentarlo, registra uno nuevo y confírmalo desde tu correo.</x-mail.text>
    <x-mail.button :href="$url">Registrar nuevo reclamo</x-mail.button>
@endsection
