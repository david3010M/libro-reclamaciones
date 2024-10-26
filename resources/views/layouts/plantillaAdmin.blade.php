<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="favicon.ico" type="image/x-icon"/>
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"/>
    <title>@yield('title')</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
</head>

<body>
@include('layouts.menu')
<div class="h-screen w-screen flex justify-center sm:pl-60 bg-gray-100">
    <div class="max-w-screen-xl w-full">
        <div class="p-4 flex justify-center">
            @yield('content')
        </div>
    </div>
</div>
</body>

</html>
{{--
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p --}}
