<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\ProfileController;
use App\Models\Category;
use App\Models\Menu;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function(){
    $categories = Category::all();
    $menusData = Menu::with('category')->get();

    $result = [];

    foreach ($menusData as $menu) {
        $result[] = [
            'id' => $menu->id,
            'image' => $menu->image,
            'name' => $menu->name,
            'category' => $menu->category->name,
            'price' => $menu->price,
        ];
    }

    return Inertia::render("Welcome",[
        "categories" => $categories,
        "menus" => $result
    ]);
})->name('index');

Route::get('/dashboard', [CategoryController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');

Route::resource('menu', MenuController::class)->middleware(['auth', 'verified']);

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
