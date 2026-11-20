@extends('mail.layouts.base')
@section('email_subject', 'Nuevo reclamo registrado')
@section('title', 'Nuevo reclamo')
@section('subtitle', 'Un cliente confirmó un reclamo y espera atención.')
@section('content')
    @php $url = route('complaint.index'); @endphp
    <x-mail.text>Hay un nuevo reclamo en el sistema. Revísalo y atiéndelo desde la sección de reclamos.</x-mail.text>
    <x-mail.details :items="['Código' => $complaint->complaintCode, 'Cliente' => $complaint->customer->name]"/>
    <x-mail.button :href="$url">Ver reclamos</x-mail.button>
@endsection
