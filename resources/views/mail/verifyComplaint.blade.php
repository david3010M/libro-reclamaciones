@extends('mail.layouts.base')
@section('email_subject', 'Confirma tu reclamo')
@section('title', 'Confirma tu reclamo')
@section('subtitle', 'Tu reclamo solo queda registrado si lo confirmas.')
@section('content')
    @php $url = route('complaints.confirm', $complaint->hash); @endphp
    <x-mail.text>Hola, <strong style="color:#111111;">{{ $complaint->customer->name }}</strong>. Recibimos tu solicitud de reclamo con el código <strong style="color:#111111;">{{ $complaint->complaintCode }}</strong>.</x-mail.text>
    <x-mail.text>Para continuar, haz clic en el botón de abajo y confirma que el reclamo es tuyo. Tienes <strong style="color:#111111;">48 horas</strong>; pasado ese plazo, el reclamo se rechaza automáticamente.</x-mail.text>
    <x-mail.button :href="$url">Confirmar reclamo</x-mail.button>
    <x-mail.fallback :href="$url"/>
@endsection
