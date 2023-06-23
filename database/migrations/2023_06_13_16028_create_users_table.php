<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->foreignId('company_id')->references("id")->on("companies")->cascadeOnDelete();
            $table->string('name');
            $table->string('username');
            $table->string('email')->unique();
            $table->string('avatar')->default('unknown.png');
            $table->string('password');
            $table->string('phone')->nullable();
            $table->integer('payrate')->nullable();
            $table->integer('role_id');
            $table->timestamp('email_verified_at')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
