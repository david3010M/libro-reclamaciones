@extends('mail.layouts.base')
@section('email_subject', 'Tu reclamo fue atendido')
@section('title', 'Tu reclamo fue atendido')
@section('subtitle', 'Ya puedes ver la respuesta de la empresa.')
@section('content')
    @php $url = route('complaint.show', $complaint->token); @endphp
    <x-mail.text>Hola, <strong style="color:#111111;">{{ $complaint->customer->name }}</strong>. Revisamos tu reclamo y ya tiene respuesta. Puedes leerla completa desde el botón de abajo; si hay archivos adjuntos, también van en este correo.</x-mail.text>
    <x-mail.details :items="['Código' => $complaint->complaintCode, 'Estado' => 'Atendido']"/>
    <x-mail.button :href="$url">Ver la respuesta</x-mail.button>
    <x-mail.text :muted="true">El reclamo queda archivado. Si necesitas algo más, puedes registrar uno nuevo cuando quieras.</x-mail.text>
    <x-mail.fallback :href="$url"/>
@endsection
