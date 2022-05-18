<?php

namespace App\Http\Controllers\Api;

use App\Models\MyUser;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class MyUserController extends Controller
{
    public function logIn(Request $request)
    {
        $email =  $req->get('email');
        $password = $req->get('password');

        $data = MyUser::all();
        return $request->get('email');

        // $user = DB::table('my_users')->where('email', $email)->first();
        // if(!Hash::check($password, $user->password))
        // {
        //     echo "Not Matched";
        // }
        // else
        // {
        //     //$user = DB::table('users')->where('email',$email)->first();
        //    echo $user->email;
        // }
        // return $email;
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = MyUser::all();

        return response()->json($data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $myuser = new MyUser();

        $myuser->name =  $request->get("name");
        $myuser->email =  $request->get("email");

        $myuser->save();

        return $myuser;

        // $name =  $request->input("name");
        // $email =  $request->input("email");

        // DB::table("my_users")->insert([
        //     "name" => $name,
        //     "email" => $email,
        // ]);

        // MyUser::create([
        //     "name" => $name,
        //     "email" => $email,
        // ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
