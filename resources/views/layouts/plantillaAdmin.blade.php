<!DOCTYPE html>
<html class="contenedor-scroll overflow-x-hidden">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="{{ url('logo.png') }}" type="image/x-icon"/>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"/>
    <title>@yield('title')</title>
    <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
    {{--    @vite(['resources/css/app.css', 'resources/js/app.js'])--}}
    <link rel="stylesheet" href="{{ url('build/assets/app-9e0a0c14.css') }}">
    <script src="{{ url('build/assets/app-90e01098.js') }}" defer></script>
</head>

<body>
@include('layouts.menu')
<div class="h-screen w-screen flex flex-col items-center lg:pl-64 bg-gray-100">
    @include('layouts.headerAdmin')
    <div class="max-h-[calc(100vh-66px)] w-full overflow-y-auto flex justify-center">
        <div class="max-w-screen-xl w-full">
            <div
                class="p-4 pb-8 m-4 flex justify-center bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
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
