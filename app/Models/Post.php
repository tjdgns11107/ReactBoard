<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = [
        'post_user',
        'post_board',
        'post_title',
        'post_content',
        'post_view',
        'post_available',
    ];

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function board() {
        return $this->belongsTo(Board::class);
    }
}
