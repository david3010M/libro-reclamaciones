<?php

use App\Http\Controllers\AnswerController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ComplaintController;
use App\Http\Controllers\FormController;
use App\Http\Controllers\QuestionController;
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

Route::get('/login', function () {
    return view('login');
});

Route::post('/login', [AuthController::class, 'login'])->name('login');

Route::get('/buscar-reclamo', [ComplaintController::class, 'search'])->name('complaint.search');
Route::get('/reclamo/{complaintCode}', [ComplaintController::class, 'show'])->name('complaint.show');
Route::get('/complaint/create', [ComplaintController::class, 'create'])->name('complaint.create');

Route::get('/', [FormController::class, 'showForm']);
Route::get('/nuevo-reclamo', [FormController::class, 'showForm'])->name('form.show');
Route::post('/form/submit', [FormController::class, 'submitForm'])->name('form.submit');
Route::get('/api/form/{formId}/questions', [FormController::class, 'getFormQuestions']);
Route::get('/form/next/{step}', [FormController::class, 'nextStep'])->name('form.next');
Route::get('/form/prev/{step}', [FormController::class, 'prevStep'])->name('form.prev');

Route::group(['middleware' => 'auth'], function () {
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

//    COMPLAINT
    Route::get('reclamos', [ComplaintController::class, 'index'])->name('complaint.index');
    Route::get('/complaint/{complaint}/edit', [ComplaintController::class, 'edit'])->name('complaint.edit');
    Route::post('/complaint/{complaint}/response', [ComplaintController::class, 'response'])->name('complaint.response');
    Route::post('/complaint/{complaint}/archive', [ComplaintController::class, 'archive'])->name('complaint.archive');
    Route::put('/complaint/{complaint}', [ComplaintController::class, 'update'])->name('complaint.update');
    Route::delete('/complaint/{complaint}', [ComplaintController::class, 'destroy'])->name('complaint.destroy');

//    QUESTION
    Route::get('/preguntas', [QuestionController::class, 'index'])->name('question.index');
    Route::get('/question/{question}', [QuestionController::class, 'show'])->name('question.show');
    Route::get('/question/create', [QuestionController::class, 'create'])->name('question.create');
    Route::post('/question', [QuestionController::class, 'store'])->name('question.store');
    Route::get('/question/{question}/edit', [QuestionController::class, 'edit'])->name('question.edit');
    Route::post('/question/{question}', [QuestionController::class, 'update'])->name('question.update');
    Route::delete('/question/{question}', [QuestionController::class, 'destroy'])->name('question.destroy');
});
