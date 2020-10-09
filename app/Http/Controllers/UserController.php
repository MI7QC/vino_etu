<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Response;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\User;
use App\Cellier;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\CellierResource;

class UserController extends Controller
{
    /**
     * Retourne toutes les utilisateurs
     * @return AnonymousResourceCollection
     */
    public function index()
    {
        $users = UserResource::collection(User::all());

        foreach ($users as $user) {
            $user["roles"] = User::find($user->id)->roles()->get();
            $user["roles"]["capacités"] = User::find($user->id)->abilities();
        }

        return $users;
    }


    /**
     * Retourne un utilisateur
     * @param User $user
     * @return UserResource
     */
    public function show(User $user)
    {
        $roles = $user->roles()->get();
        $abilities = $user->abilities();

        $user = new UserResource($user);

        $user["roles"] = $roles;
        $user["roles"]["capacités"] = $abilities;

        return $user;
    }

    /**
     * Retourne les celliers d'un utilisateur
     * @param User $user
     * @return CellierResource
     */
    public function showCelliers(User $user)
    {
        return new CellierResource(Cellier::where("user_id", $user->id)->get());
    }

    /**
     * Enregistre un cellier
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "name" => "string|required",
            "email" => "email|required|unique:users",
            "password" => "string|min:8|required",
            "role" => "integer|required"
        ]);

        if ($validator->passes()) {
            $request["password"] = Hash::make($request->password);

            return response()->json(User::create($request->all())->roles()->attach(request("role")), 200);
        }


        return response()->json(['erreur' => $validator->errors()->all()], 422);
    }


    /**
     * Modifie un utilisateur
     * @param Request $request
     * @param User $user
     * @return JsonResponse
     */
    public function update(Request $request, User $user)
    {
        $validator = Validator::make($request->all(), [
            "name" => "string",
            "email" => "email",
            "role" => "integer"
        ]);

        if ($validator->passes()) {
            $user->roles()->sync(request("role"));
            if ($request->password)
                $request["password"] = Hash::make($request->password);

            return response()->json($user->update($request->all()), 200);
        }

        return response()->json(['erreur' => $validator->errors()->all()], 422);
    }


    /**
     * Supprime un utilisateur
     * @param User $user
     * @return JsonResponse
     * @throws Exception
     */
    public function destroy(User $user)
    {

        if ($user->delete())
            return Response::json("null", 204);
    }
}
