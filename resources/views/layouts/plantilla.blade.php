<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="{{ url('favicon.ico') }}" type="image/x-icon" />
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
    <title>@yield('title')</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
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
