<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;

return new class extends Migration
{
    /** Token aleatorio para la URL pública: el código (MR002-00000003) es correlativo y se puede adivinar. */
    public function up(): void
    {
        Schema::table('complaints', function (Blueprint $table) {
            $table->string('token', 40)->nullable()->unique()->after('hash');
        });

        DB::table('complaints')->whereNull('token')->orderBy('id')->each(function ($row) {
            DB::table('complaints')->where('id', $row->id)->update(['token' => Str::random(40)]);
        });
    }

    public function down(): void
    {
        Schema::table('complaints', function (Blueprint $table) {
            $table->dropColumn('token');
        });
    }
};
