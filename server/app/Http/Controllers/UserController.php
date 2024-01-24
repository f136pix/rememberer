<?php

namespace App\Http\Controllers;

use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class UserController extends Controller
{

    /**
     * @return
     */
    public function check(Request $request)
    {
        $email = $request->email;
        try {
            $user = User::where('email', '=', $email)->firstOrFail();

            return response()->json(true, Response::HTTP_OK);
        } catch (Exception $e) {
            return response()->json(['data' => false, 'message' => $e->getMessage()], Response::HTTP_NOT_FOUND);
        }
    }

    public function test()
    {
        return response()->json(true, Response::HTTP_OK);
    }
}
