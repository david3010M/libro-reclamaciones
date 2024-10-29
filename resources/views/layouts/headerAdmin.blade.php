<header class="bg-white shadow-sm w-full">
    <div class="flex items-center justify-between p-4">
        <h1 class="text-xl font-semibold">Panel de Administración</h1>
        <form method="POST" action="{{route('logout')}}">
            @csrf
            <button class="flex items-center gap-2 border px-3 py-1.5 text-sm border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100">
                <x-ri-logout-box-line class="w-4 h-4" />
                Cerrar Sesión
            </button>
        </form>
    </div>
</header>
