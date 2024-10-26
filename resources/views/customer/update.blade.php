@extends('layouts.plantilla')

@section('title', 'Productos')

@section('content')
    <div class="flex flex-col gap-6 w-full">
        <div class="flex justify-between">
            <h1 class="flex items-center gap-1 text-2xl font-semibold text-gray-800 dark:text-white">
                <p>Actualizar el Producto</p>
                <p class="bg-slate-200 text-slate-600 py-0.5 px-2 rounded-lg">{{ $producto->nombre }}</p>
            </h1>
        </div>
        <div class="relative overflow-x-auto p-5 flex justify-center">

            <div class="flex justify-center w-full max-w-screen-md shadow-md sm:rounded-lg p-3">
                <form class="w-full flex flex-col gap-5" action="{{ route('customer.put', $producto->id) }}"
                      method="POST">
                    @csrf
                    <div class="grid gap-6 mb-6 md:grid-cols-2">

                        {{-- Nombre --}}
                        <div>
                            <label for="nombre" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                <p class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</p>
                            </label>
                            <input type="text" id="nombre" name="nombre"
                                   value="{{ old('nombre') ?? $producto->nombre }}"
                                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
                                   placeholder="MacBook Pro" required/>

                            @error('nombre')
                            <p class="text-xs text-red-500">{{ $message }}</p>
                            @enderror
                        </div>

                        {{-- Categoría --}}
                        <div>
                            <label for="categoria_id">
                                <p class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Categoría</p>
                            </label>
                            <select id="categoria_id" name="categoria_id" required
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500">
                                @foreach ($categorias as $categoria)
                                    <option value="{{ $categoria->id }}"
                                        {{ $producto->categoria_id == $categoria->id ? 'selected' : '' }}>
                                        {{ $categoria->descripcion }}
                                    </option>
                                @endforeach
                            </select>

                            @error('categoria_id')
                            <p class="text-xs text-red-500">{{ $message }}</p>
                            @enderror
                        </div>

                        {{-- Marca --}}
                        <div>
                            <label for="marca_id">
                                <p class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Marca</p>
                            </label>
                            <select id="marca_id" name="marca_id" required
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500">
                                @foreach ($marcas as $marca)
                                    <option value="{{ $marca->id }}"
                                        {{ $producto->marca_id == $marca->id ? 'selected' : '' }}>
                                        {{ $marca->descripcion }}</option>
                                @endforeach
                            </select>

                            @error('marca_id')
                            <p class="text-xs text-red-500">{{ $message }}</p>
                            @enderror
                        </div>

                        {{-- Unidad --}}
                        <div>
                            <label for="unidad_id">
                                <p class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Unidad</p>
                            </label>
                            <select id="unidad_id" name="unidad_id" required
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500">
                                @foreach ($unidades as $unidad)
                                    <option value="{{ $unidad->id }}"
                                        {{ $producto->unidad_id == $unidad->id ? 'selected' : '' }}>
                                        {{ $unidad->descripcion }}</option>
                                @endforeach
                            </select>

                            @error('unidad_id')
                            <p class="text-xs text-red-500">{{ $message }}</p>
                            @enderror
                        </div>

                        {{-- Precio de Compra --}}
                        <div>
                            <label for="precio_compra"
                                   class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                <p class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Precio de
                                    Compra</p>
                            </label>
                            <input type="text" id="precio_compra" name="precio_compra"
                                   value="{{ old('precio_compra') ?? $producto->precio_compra }}" required
                                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
                                   placeholder="10.99"/>

                            @error('precio_compra')
                            <p class="text-xs text-red-500">{{ $message }}</p>
                            @enderror
                        </div>


                        {{-- Precio de Venta --}}
                        <div>
                            <label for="precio_venta"
                                   class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                <p class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Precio de
                                    Venta</p>
                            </label>
                            <input type="text" id="precio_venta" name="precio_venta"
                                   value="{{ old('precio_venta') ?? $producto->precio_venta }}" required
                                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
                                   placeholder="10.99"/>

                            @error('precio_venta')
                            <p class="text-xs text-red-500">{{ $message }}</p>
                            @enderror
                        </div>

                    </div>
                    <div class="flex justify-end">
                        <button type="submit"
                                class="w-fit text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm  px-5 py-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">
                            Actualizar
                        </button>
                        <a href="{{ route('customer.index') }}"
                           class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-slate-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                            Cancelar</a>
                    </div>

                </form>

            </div>

        </div>
    </div>
@endsection
