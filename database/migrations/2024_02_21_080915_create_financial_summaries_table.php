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
        Schema::create('financial_summaries', function (Blueprint $table) {
            $table->uuid("id")->unique();
            $table->integer("profit");
            $table->integer("loss");
            $table->timestamps();

            $table->string("order_id");
            $table->foreign('order_id')->references('id')->on("orders")->onDelete("cascade");

            $table->string("capital_id");
            $table->foreign('capital_id')->references('id')->on("capitals")->onDelete("cascade");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('financial_summaries');
    }
};
