<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('questions', function (Blueprint $table) {
            $table->id();
            $table->string('question');
            $table->string('description')->nullable();
            $table->string('required')->default(true);
            $table->integer('stepper')->default(1);
            $table->boolean('switch')->default(false);
            $table->string('text_switch')->nullable();
            $table->boolean('with_other')->default(false);
            $table->integer('max_options')->nullable();
            $table->foreignId('type_question_id')->constrained();
            $table->foreignId('form_id')->constrained();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('questions');
    }
};
