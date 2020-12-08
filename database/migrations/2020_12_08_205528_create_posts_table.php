<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            // $table->id();
            $table->bigIncrements('post_id');
            $table->unsignedBigInteger('post_user');
            $table->unsignedBigInteger('post_board');
            $table->string('post_password')->nullable();
            $table->string('post_title');
            $table->string('post_content');
            $table->unsignedBigInteger('post_view')->default(0);
            // 1: 글 존재, 0: 글 삭제
            $table->boolean('post_available')->default(1);
            $table->string('post_img')->nullable();
            $table->timestamps();

            $table->foreign('post_user')->references('user_id')->on('users')
                ->onUpdate('cascade')->onDelete('cascade');
            $table->foreign('post_board')->references('board_id')->on('boards')
                ->onUpdate('cascade')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
}
