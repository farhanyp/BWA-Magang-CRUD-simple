<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $table = "categories";
    protected $primaryKey = "id";
    public $incrementing = false;

    protected $fillable = [
        'id',
        'name'
    ];

    public function menus(){
        return $this->hasMany(Menu::class, 'category_id', 'id');
    }
}
