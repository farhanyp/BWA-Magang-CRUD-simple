<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Log\Logger;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function index(){

        $categories = Category::all();

        return Inertia::render('Dashboard', [
            'categories' => $categories
        ]);
    }

    public function create(){
        return Inertia::render('Auth/FormCategory');
    }

    public function store(Request $request){
        $data = $request->all();

        Category::create([
            'id' => Str::uuid(),
            'name' => $data['name']
        ]);

        return redirect()->route('dashboard');
    }

    public function edit($id){
        
        $category = Category::query()->find($id);

        return Inertia::render('Auth/EditFormCategory',[
            'category' => $category
        ]);
    }

    public function update(Request $request, $id){

        $data = $request->all();
        $category = Category::query()->find($id);
        $category->update($data);

        return redirect()->route('dashboard');
    }

    public function destroy($id){

        $category = Category::query()->find($id);
        $category->delete();

        return redirect()->route('dashboard');
    }
}
