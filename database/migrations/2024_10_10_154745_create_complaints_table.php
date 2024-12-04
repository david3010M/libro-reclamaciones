<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

use function Laravel\Prompts\table;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('complaints', function (Blueprint $table) {
            $table->id();
            $table->string('number');
            $table->integer('timeToAnswer')->default(0);
            $table->integer('days')->default(30);
            $table->string('complaintCode');
            $table->text('hash');
            $table->boolean('verified')->default(false);
            $table->boolean('rejected')->default(false);
            $table->string('answer')->default('Pendiente');
            $table->foreignId('customer_id')->constrained();
            $table->foreignId('sede_id')->constrained('sedes');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('complaints');
    }
};
