<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{

    /**
     * @return boolean
     */
    public function check(string $userEmail) : bool
    {
        try {
            $user = User::where('email', '=', $userEmail )->firstOrFail();

            return response()->json(true, Response::HTTP_OK);
        } catch (\Exception $e) {
            return response()->json(['data' => false, 'message' => $e->getMessage()], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

}
