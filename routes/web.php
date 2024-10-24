<?php

use App\Http\Controllers\ComplaintController;
use App\Http\Controllers\FormController;
use Illuminate\Support\Facades\Route;

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

Route::get('/', [ComplaintController::class, 'index'])->name('complaint.index');
Route::get('/complaint/create', [ComplaintController::class, 'create'])->name('complaint.create');
Route::post('/complaint/store', [ComplaintController::class, 'store'])->name('complaint.store');
Route::get('/complaint/{complaint}', [ComplaintController::class, 'show'])->name('complaint.show');
Route::get('/complaint/{complaint}/edit', [ComplaintController::class, 'edit'])->name('complaint.edit');
Route::put('/complaint/{complaint}', [ComplaintController::class, 'update'])->name('complaint.update');
Route::delete('/complaint/{complaint}', [ComplaintController::class, 'destroy'])->name('complaint.destroy');
Route::get('/complaint/search', [ComplaintController::class, 'search'])->name('complaint.search');

Route::get('/reclamo', [FormController::class, 'showForm'])->name('form.show');
Route::post('/form/submit', [FormController::class, 'submitForm'])->name('form.submit');
Route::get('/api/form/{formId}/questions', [FormController::class, 'getFormQuestions']);
Route::get('/form/next/{step}', [FormController::class, 'nextStep'])->name('form.next');
Route::get('/form/prev/{step}', [FormController::class, 'prevStep'])->name('form.prev');

