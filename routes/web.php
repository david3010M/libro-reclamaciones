<?php

use App\Http\Controllers\ExcelReportController;
use App\Http\Controllers\PdfController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\ComplaintController;
use App\Http\Controllers\FormController;
use App\Http\Controllers\PasswordResetController;
use App\Http\Controllers\QuestionController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/login', function () {
    if (Auth::check()) {
        return redirect()->intended(route('complaint.index'));
    }
    return Inertia::render('Auth/Login');
})->name('login.show');

Route::post('/login', [AuthController::class, 'login'])->name('login');

Route::middleware('guest')->group(function () {
    Route::get('/olvide-mi-contrasena', [PasswordResetController::class, 'forgot'])->name('password.request');
    Route::post('/olvide-mi-contrasena', [PasswordResetController::class, 'sendLink'])->middleware('throttle:5,1')->name('password.email');
    Route::get('/restablecer-contrasena/{token}', [PasswordResetController::class, 'reset'])->name('password.reset');
    Route::post('/restablecer-contrasena', [PasswordResetController::class, 'update'])->name('password.update');
});

Route::get('/buscar-reclamo', [ComplaintController::class, 'search'])->name('complaint.search');
// El cliente busca por código y se le lleva a la URL con token; limitado para que no se pueda barrer códigos.
Route::get('/consultar-reclamo', [ComplaintController::class, 'lookup'])->middleware('throttle:15,1')->name('complaint.lookup');
Route::get('/reclamo/{token}', [ComplaintController::class, 'show'])->name('complaint.show');
Route::get('/reclamo-confirmacion/{complaintHash}', [ComplaintController::class, 'confirm'])->name('complaints.confirm');

Route::get('/', [FormController::class, 'showForm']);
Route::get('/nuevo-reclamo', [FormController::class, 'showForm'])->name('form.show');
Route::post('/form/submit', [FormController::class, 'submitForm'])->name('form.submit');
Route::get('/api/form/{formId}/questions', [FormController::class, 'getFormQuestions']);

Route::get('/respuesta-pdf/{token}', [PdfController::class, 'getResponseFromComplaint'])->name('response.pdf');
Route::get('/reclamo-pdf/{token}', [PdfController::class, 'getComplaint'])->name('complaint.pdf');


//    REPORT
Route::get('/reporteReclamos', [ExcelReportController::class, 'reportComplaintBySedes'])->name('complaint.report');
Route::get('/reporteReclamosZip', [ExcelReportController::class, 'generateAndDownloadZip'])->name('complaint.reportzip');

Route::group(['middleware' => 'auth'], function () {
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

    //    RECLAMOS (panel)
    Route::prefix('reclamos')->name('complaint.')->group(function () {
        Route::get('/', [ComplaintController::class, 'index'])->name('index');
        Route::get('/listado', [ComplaintController::class, 'list'])->name('list');
        Route::get('/{complaint}', [ComplaintController::class, 'detail'])->whereNumber('complaint')->name('view');
        Route::get('/{complaint}/responder', [ComplaintController::class, 'respond'])->whereNumber('complaint')->name('respond');
        Route::post('/{complaint}/atender', [ComplaintController::class, 'process'])->name('process');
        Route::post('/{complaint}/respuesta', [ComplaintController::class, 'response'])->name('response');
        Route::post('/{complaint}/extender', [ComplaintController::class, 'extend'])->name('extend');
        Route::post('/{complaint}/confirmar', [ComplaintController::class, 'recover'])->name('recover');
        Route::post('/{complaint}/archivar', [ComplaintController::class, 'archive'])->name('archive');
    });


    //    PREGUNTAS (formulario público)
    Route::prefix('preguntas')->name('question.')->group(function () {
        Route::get('/', [QuestionController::class, 'index'])->name('index');
        Route::get('/listado', [QuestionController::class, 'list'])->name('list');
        Route::get('/nueva', [QuestionController::class, 'create'])->name('create');
        Route::post('/', [QuestionController::class, 'store'])->name('store');
        Route::get('/{question}/editar', [QuestionController::class, 'edit'])->whereNumber('question')->name('edit');
        Route::post('/{question}', [QuestionController::class, 'update'])->whereNumber('question')->name('update');
        Route::delete('/{question}', [QuestionController::class, 'destroy'])->whereNumber('question')->name('destroy');
    });

    // CONFIGURACION
    Route::get('/configuracion', [CompanyController::class, 'index'])->name('config.index');
    Route::post('/configuracion', [CompanyController::class, 'store'])->name('config.store');
    Route::post('/update-password', [CompanyController::class, 'updatePassword'])->name('config.updatePassword');
});
