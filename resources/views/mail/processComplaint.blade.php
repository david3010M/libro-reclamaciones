@extends('mail.layouts.base')
@section('email_subject', 'Tu reclamo está en proceso')
@section('title', 'Estamos atendiendo tu reclamo')
@section('subtitle', 'Tu reclamo ya está en manos de nuestro equipo.')
@section('content')
    @php $url = route('complaint.show', $complaint->token); @endphp
    <x-mail.text>Hola, <strong style="color:#111111;">{{ $complaint->customer->name }}</strong>. Tu reclamo está en revisión y te notificaremos en cuanto tengamos una respuesta.</x-mail.text>
    <x-mail.details :items="['Código' => $complaint->complaintCode, 'Estado' => 'En proceso']"/>
    <x-mail.button :href="$url">Ver seguimiento</x-mail.button>
    <x-mail.fallback :href="$url"/>
@endsection
