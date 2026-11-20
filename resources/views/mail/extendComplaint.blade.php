@extends('mail.layouts.base')
@section('email_subject', 'Ampliamos el plazo de tu reclamo')
@section('title', 'Ampliamos el plazo')
@section('subtitle', 'Necesitamos un poco más de tiempo para resolver tu reclamo.')
@section('content')
    @php $url = route('complaint.show', $complaint->token); @endphp
    <x-mail.text>Hola, <strong style="color:#111111;">{{ $complaint->customer->name }}</strong>. Seguimos trabajando en tu reclamo, pero el análisis tomará un tiempo adicional. Gracias por tu paciencia.</x-mail.text>
    <x-mail.details :items="['Código' => $complaint->complaintCode, 'Plazo adicional' => $days . ' ' . ($days == 1 ? 'día' : 'días')]"/>
    <x-mail.button :href="$url">Ver seguimiento</x-mail.button>
    <x-mail.fallback :href="$url"/>
@endsection
