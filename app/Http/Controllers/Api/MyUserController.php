<?php

namespace App\Http\Controllers\Api;

use App\Models\MyUser;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Routing\Redirector;
use Illuminate\Support\Facades\Hash;


class MyUserController extends Controller
{
    public function logIn(Request $request)
    {
        // $input = Input::all();

        // $rules = ['email' => 'required|email',
        //           'password' => 'required'
        // ];
    
        // $validator = Validator::make($input, $rules);
    
        // if ($validator->passes()) {
        //     $attempt = Auth::attempt([
        //         'email' => $input['email'],
        //         'password' => $input['password']
        //     ]);
    
        //     if ($attempt) {
        //         return Redirect::intended('post');
        //     }
    
        //     return Redirect::to('login')
        //             ->withErrors(['fail'=>'Email or password is wrong!']);
        // }
    
        // //fails
        // return Redirect::to('login')
        //             ->withErrors($validator)
        //             ->withInput(Input::except('password'));
//----             
        // $email =  $request->get('name');
        // $password = $request->get('email');

        // $user = DB::table('my_users')->where('name', $email)->first();
        // if($user === null){
        //     // $this->error("查無此帳號名稱");
        //     return 1;
        // } else {
        //     return 2;
        // }
        // return 3;
//----
        // $email =  $request->get('name');
        // $password = $request->get('email');

        // $user = DB::table('my_users')->where('name', $email)->first();
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
        return "create";
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
        $myuser->password = Hash::make($request->get("password"));
        $myuser->email =  $request->get("email");
        $myuser->phone =  $request->get("phone");
        $myuser->balance = 0;

        $user = DB::table('my_users')->where('name', $myuser->name)->first();
        if($user !== null){
            // $this->error("帳號重複註冊");
            return "帳號重複註冊";
        }

        $myuser->save();
        // return Redirect::to('/'); redirect('/home/dashboard'); redirect()->route('login');
        return "success";
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id //old!!
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function show($request)
    {
        $myuser = new MyUser();

        $myuser->name = request('name');
        $myuser->email = request('email');

        $user = DB::table('my_users')->where('name', $myuser->name)->first();
        // if(!Hash::check($myuser->email, $user->email))
        // {
        //     echo "Not Matched";
        // }
        // else
        // {
            //$user = DB::table('users')->where('email',$email)->first();
           return 1;
        // }
        // return $name;

//---
        // if($user === null){
        //     // $this->error("查無此帳號名稱");
        //     return 1;
        // } else {
        //     return 2; //有此帳號名
        // }
        // return 3;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
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
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
    }
}
