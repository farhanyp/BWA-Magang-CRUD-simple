<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Menu;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Support\Str;

class MenuController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $menus = Menu::all();

        return Inertia::render('Menu',[
            'menus' => $menus
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = Category::all();
        return Inertia::render('Auth/FormMenu',[
            'categories' => $categories
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->all();
        $data['image'] = Storage::disk('public')->put('images', $request->file('image'));
        Menu::create([
            'id' => Str::uuid(),
            'image' => $data['image'],
            'name' => $data['name'],
            'price' => $data['price'],
            'category_id' => $data['category']
        ]);

        return redirect()->route('menu.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $menu = Menu::query()->find($id);
        $categories = Category::all();

        return Inertia::render('Auth/EditFormMenu',[
            'menu' => $menu,
            'categories' => $categories
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {

        $data = $request->all();
        $menu = Menu::query()->find($id);
        $menu->update($data);

        return redirect()->route('menu.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {

        $menu = Menu::query()->find($id);
        $menu->delete();

        return redirect()->route('menu.index');
    }
}
