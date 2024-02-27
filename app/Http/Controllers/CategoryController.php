<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Log\Logger;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class CategoryController extends Controller
{
    public function index(){

        $categories = Category::all();

        return Inertia::render('Dashboard', [
            'categories' => $categories
        ]);
    }

    public function create(){
        return Inertia::render('Auth/Category/FormCategory');
    }

    public function store(Request $request){

        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
        ]);

        
        if ($validator->fails()) {
            throw ValidationException::withMessages($validator->errors()->toArray());
        }

        $data = $request->all();
        
        Category::create([
            'id' => Str::uuid(),
            'name' => $data['name']
        ]);

        return redirect()->route('dashboard');
    }

    public function edit($id){
        
        $category = Category::query()->find($id);

        return Inertia::render('Auth/Category/EditFormCategory',[
            'category' => $category
        ]);
    }

    public function update(Request $request, $id){
        
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
        ]);

        
        if ($validator->fails()) {
            throw ValidationException::withMessages($validator->errors()->toArray());
        }

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
