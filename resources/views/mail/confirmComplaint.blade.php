@extends('mail.layouts.base')
@section('email_subject', 'Reclamo registrado')
@section('title', 'Reclamo registrado')
@section('subtitle', 'Gracias por confirmarlo. Ya estamos con tu caso.')
@section('content')
    @php $url = route('complaint.show', $complaint->token); @endphp
    <x-mail.text>Hola, <strong style="color:#111111;">{{ $complaint->customer->name }}</strong>. Tu reclamo quedó registrado y nuestro equipo lo revisará. Te avisaremos por este medio cada vez que cambie su estado.</x-mail.text>
    <x-mail.details :items="['Código' => $complaint->complaintCode]"/>
    <x-mail.button :href="$url">Ver mi reclamo</x-mail.button>
    <x-mail.fallback :href="$url"/>
@endsection
