@extends('layouts.plantilla')

@section('title', 'Reclamo')

@section('content')

    <div class="min-h-screen bg-gray-100 p-4">
        <div class="max-w-4xl mx-auto bg-white rounded-lg shadow">
            <div class="p-4 border-b">
                <h2 class="text-2xl font-bold">Consulta de Reclamo</h2>
            </div>
            <div class="p-4">
                <div class="space-y-6">
                    {{-- Información del reclamo --}}
                    <div class="bg-white p-4 rounded-lg shadow">
                        <h2 class="text-xl font-semibold mb-2">Reclamo</h2>
                        <div class="flex justify-between items-center">
                            <span
                                class="text-blue-600 font-bold text-lg">{{ $complaint->complaintCode ?? 'N/A' }}</span>
                            <span class="text-gray-600">{{$complaint->answers[0]->answer}}</span>
                        </div>
                    </div>

                    {{-- Avance del reclamo --}}
                    <div class="bg-white p-4 rounded-lg shadow">
                        <h3 class="font-semibold mb-2">Avances</h3>
                        <div class="flex items-center space-x-2 mb-2">
                            <x-ri-time-line class="text-gray-400 w-5 h-5"/>
                            <span class="text-sm text-gray-600">Última actualización hace
                                {{$complaint->advances->last()->date->diffForHumans()}}
                            </span>
                        </div>
                        <div class="space-y-2">
                            @foreach($complaint->advances as $advance)
                                <div class="flex items-center space-x-2">
                                    <x-ri-checkbox-circle-line class="text-green-500 w-6 h-6"/>
                                    <div>
                                        <div class="font-semibold">{{$advance->status}}</div>
                                        <div class="text-sm text-gray-600">{{$advance->date}}</div>
                                    </div>
                                </div>
                            @endforeach
                        </div>
                    </div>

                    {{-- Respuesta --}}
                    <div class="bg-white p-4 rounded-lg shadow">
                        <h3 class="font-semibold mb-2">Respuesta</h3>
                        <p class="text-gray-700 mb-2">
                            {{$complaint->answer}}
                        </p>
                        <div class="flex justify-end">
                            <button type="button"
                                    class="flex text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-lg px-3 py-2 text-xs font-medium text-center dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                                <x-ri-download-cloud-line class="w-4 h-4 mr-2"/>
                                Descargar Copia
                            </button>
                        </div>
                    </div>

                    {{-- Hoja de Reclamo --}}
                    <div class="bg-white p-4 rounded-lg shadow">
                        <h3 class="font-semibold mb-4">Hoja de Reclamo</h3>
                        <div class="space-y-2">
                            <div class="flex justify-between">
                                <span class="font-semibold">
                                    {{$complaint->customer->name}}
                                </span>
                                <span>
                                    {{$complaint->customer->document}}
                                </span>
                                <span>
                                    {{substr($complaint->customer->phone, 0, 1)}}*******{{substr($complaint->customer->phone, -1)}}
                                </span>
                            </div>
                            <div>
                                <label class="text-sm text-gray-600">Asignado a:</label>
                            </div>
                        </div>

                        @foreach($complaint->answers as $answer)
                            <div>
                                <label class="text-sm text-gray-500">
                                    {{$answer->question->title}}
                                </label>
                                {{--                                Split '/n' --}}
                                <p class="text-black">
                                    @foreach(explode("\n", $answer->answer) as $line)
                                        {{$line}}<br>
                                    @endforeach
                                </p>

                            </div>
                        @endforeach

                        <div class="flex justify-end">
                            <button type="button"
                                    class="mt-2 flex text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-lg px-3 py-2 text-xs font-medium text-center dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                                <x-ri-download-cloud-line class="w-4 h-4 mr-2"/>
                                Descargar hoja de reclamación
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
