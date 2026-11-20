<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        // Bitácora de correos: qué se envió, a quién, cuándo y si salió o falló.
        Schema::create('complaint_mails', function (Blueprint $table) {
            $table->id();
            $table->foreignId('complaint_id')->constrained();
            $table->string('type', 40);
            $table->string('recipient');
            $table->string('subject')->nullable();
            $table->string('status', 10); // sent | failed
            $table->unsignedSmallInteger('attachments')->default(0);
            $table->text('error')->nullable();
            $table->timestamps();

            $table->index(['complaint_id', 'created_at']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('complaint_mails');
    }
};
