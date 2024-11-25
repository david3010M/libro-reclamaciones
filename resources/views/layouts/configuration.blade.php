@php use App\Models\Advance; @endphp
@extends('layouts.plantillaAdmin')

@section('title', 'Preguntas')

@section('content')

    <div class="flex flex-col gap-3 w-full max-w-screen-md">
        <div class="pb-4">
            <h2 class="text-lg font-semibold text-gray-800">Configuración de la Empresa</h2>
        </div>
        <div class="grid grid-cols-2 gap-4">
            <div class="row-span-4 grid place-items-center">
                <div class="h-32 w-32 bg-gray-100 shadow-lg rounded-full flex items-center justify-center overflow-hidden">
                    <img src="{{ 'logo.png' }}" id="logoPreview" alt="logo" class="h-full w-full object-cover">
                </div>
            </div>
            <div class="space-y-2 col-span-1">
                <label class="block text-sm font-medium text-gray-700">Logo de la Empresa</label>
                <div class="flex items-center space-x-4">
                    <button type="button" onclick="document.getElementById('fileInput').click()"
                        class="w-full flex justify-center px-3 py-1.5 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                        <x-ri-image-circle-line class="h-4 w-4 mr-2" />
                        Cambiar Logo
                    </button>
                    <input type="file" id="fileInput" name="companyLogo" class="hidden" accept="image/*"
                        onchange="handleLogoChange(event)">
                </div>
            </div>
            <div class="space-y-2">
                <label for="companyName" class="block text-sm font-medium text-gray-700">Nombre de la Empresa</label>
                <input type="text" id="companyName" name="companyName" value="{{ old('companyName', $companyName) }}"
                    class="mt-1 block w-full px-3 py-2 border text-xs border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
            </div>
            <div class="space-y-2">
                <label for="companyEmail" class="block text-sm font-medium text-gray-700">Email de la Empresa</label>
                <input type="text" id="companyEmail" name="companyEmail" value="{{ old('companyEmail', $companyEmail) }}"
                    class="mt-1 block w-full px-3 py-2 border text-xs border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
            </div>
            <div class="col-start-2 flex justify-end">
                <button type="button" onclick="handleSaveConfig()"
                    class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg px-3 py-1.5 text-xs text-center flex items-center dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                    Guardar Cambios
                </button>
            </div>
        </div>
        <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700">
        <div class="flex justify-center">
            <div class="gap-4 max-w-sm w-full flex flex-col">
                <div class="space-y-2">
                    <label for="currentPassword" class="block text-sm font-medium text-gray-700">Contraseña Actual</label>
                    <input type="password" id="currentPassword" name="currentPassword"
                        class="mt-1 block w-full px-3 py-2 border text-xs border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                </div>
                <div class="space-y-2">
                    <label for="newPassword" class="block text-sm font-medium text-gray-700">Nueva Contraseña</label>
                    <input type="password" id="newPassword" name="newPassword"
                        class="mt-1 block w-full px-3 py-2 border text-xs border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                </div>
                <div class="space-y-2">
                    <label for="confirmPassword" class="block text-sm font-medium text-gray-700">Confirmar Nueva
                        Contraseña</label>
                    <input type="password" id="confirmPassword" name="confirmPassword"
                        class="mt-1 block w-full px-3 py-2 border text-xs border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                </div>
                <button type="button" onclick="handleChangePassword()"
                    class="text-white w-full justify-center text-center bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg px-3 py-1.5 text-xs flex items-center dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                    Cambiar Contraseña
                </button>
            </div>
        </div>

        <div id="toast"
            class="hidden fixed flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow right-5 bottom-5 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800 transition-transform transform opacity-100 duration-[3000] ease-in-out"
            role="alert">
            <div id="successToast"
                class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                <x-ri-checkbox-circle-fill class="w-5 h-5" />
            </div>
            <div id = "errorToast"
                class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
                <x-ri-error-warning-fill class="w-5 h-5" />
            </div>
            <div id = "warningToast"
                class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
                <x-bxs-error class="w-5 h-5" />
            </div>
            <div class="ps-4 text-sm font-normal" id="textToast"></div>
        </div>
    </div>

    <script>
        let csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        // Función para actualizar la vista previa del logo
        function handleLogoChange(event) {
            const fileInput = event.target;
            const file = fileInput.files[0];

            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    document.querySelector('#logoPreview').src = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        }

        // Función para guardar los cambios de configuración
        function handleSaveConfig() {
            const companyName = document.getElementById('companyName').value;
            const companyEmail = document.getElementById('companyEmail').value;
            const companyLogo = document.getElementById('fileInput').files[0];

            // Crear un objeto FormData para enviar los datos del formulario incluyendo archivos
            const formData = new FormData();
            formData.append('name', companyName);
            formData.append('email', companyEmail);
            if (companyLogo) {
                formData.append('logo', companyLogo);
            }

            fetch('/libro/public/configuracion', {
                    method: 'POST',
                    headers: {
                        'X-CSRF-TOKEN': csrfToken,
                        'Accept': 'application/json'
                    },
                    body: formData
                })
                .then(response => {
                    response.json().then(data => {
                        showToast(data.action, data.message);
                    });
                    window.location.reload();
                })
                .catch(error => console.error('Error:', error));
        }

        // Función para cambiar la contraseña
        function handleChangePassword() {
            const currentPassword = document.getElementById('currentPassword').value;
            const newPassword = document.getElementById('newPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            fetch('/libro/public/update-password', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': csrfToken, // Aquí envías el token CSRF
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        currentPassword,
                        newPassword,
                        confirmPassword
                    })
                })
                .then(response => {
                    response.json().then(data => {
                        showToast(data.action, data.message);
                    });
                    window.location.reload();
                })
                .catch(error => console.error('Error:', error));
        }

        function showToast(type, message) {
            const toast = document.getElementById('toast');
            const textToast = document.getElementById('textToast');
            const successToast = document.getElementById('successToast');
            const errorToast = document.getElementById('errorToast');
            const warningToast = document.getElementById('warningToast');

            textToast.textContent = message;
            if (type === 'success') {
                successToast.style.display = 'flex';
                errorToast.style.display = 'none';
                warningToast.style.display = 'none';
            } else if (type === 'error') {
                successToast.style.display = 'none';
                errorToast.style.display = 'flex';
                warningToast.style.display = 'none';
            } else if (type === 'warning') {
                successToast.style.display = 'none';
                errorToast.style.display = 'none';
                warningToast.style.display = 'flex';
            }
            toast.classList.remove('hidden');
            setTimeout(() => {
                toast.classList.add('hidden');
            }, 3000);
        }
    </script>

@endsection
