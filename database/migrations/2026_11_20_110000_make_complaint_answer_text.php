<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /** La respuesta era VARCHAR(255): respuestas normales no entraban y el guardado fallaba. */
    public function up(): void
    {
        DB::statement("ALTER TABLE complaints MODIFY answer TEXT NOT NULL DEFAULT ('Pendiente')");
    }

    public function down(): void
    {
        DB::statement("ALTER TABLE complaints MODIFY answer VARCHAR(255) NOT NULL DEFAULT 'Pendiente'");
    }
};
