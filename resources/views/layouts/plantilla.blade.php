<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="{{ url('logo.png') }}" type="image/x-icon"/>
    <title>@yield('title')</title>
    {{--    @vite(['resources/css/app.css', 'resources/js/app.js'])--}}
    <link rel="stylesheet" href="{{ url('build/assets/app-94cc96d4.css') }}">
    <script src="{{ url('build/assets/app-90e01098.js') }}" defer></script>
</head>

<body>
<div class="h-screen w-screen flex flex-col bg-gray-100 overflow-x-hidden">
    @include('layouts.header')
    <div class="flex justify-center items-center relative">
        <div class="w-full">
            <div class="flex justify-center">
                @yield('content')
            </div>
        </div>
    </div>
</div>
</body>

</html>
{{--
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p --}}
