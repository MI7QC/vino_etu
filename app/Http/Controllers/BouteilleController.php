<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Facades\Response;
use App\Bouteille;
use App\Http\Resources\BouteilleResource;
use Illuminate\Support\Facades\Validator;

/**
 * Gère les routes de l'API bouteilles
 * @package App\Http\Controllers
 */
class BouteilleController extends Controller
{
    /**
     * Retournes toutes les bouteilles de la BDD
     * @return AnonymousResourceCollection
     */
    public function index()
    {
        return BouteilleResource::collection(Bouteille::all());
    }


    /**
     * Retourne une bouteille de la BDD
     * @param Bouteille $bouteille
     * @return BouteilleResource
     * @return JsonResponse
     */
    public function show(Bouteille $bouteille)
    {
        return new BouteilleResource($bouteille);
    }


    /**
     * Enregistre une bouteille dans la BDD
     * @param Request $request
     * @return JsonResponse
     */
    public static function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "nom" => "string|required",
            "code_saq" => "string|required|unique:bouteilles",
            "pays" => "string|required",
            "description" => "string",
            "prix_saq" => "numeric",
            "url_image" => "url",
            "url_saq" => "url",
            "format" => "string|required",
            "type_id" => "integer|required",
        ]);

        if ($validator->passes()) {
            return response()->json(Bouteille::create($request->all()), 200);
        }

        return response()->json(['erreur' => $validator->errors()->all()], 422);
    }


    /**
     * Modifie une bouteille dans la BDD
     * @param Request $request
     * @param Bouteille $bouteille
     * @return JsonResponse
     */
    public function update(Request $request, Bouteille $bouteille)
    {
        $validator = Validator::make($request->all(), [
            "nom" => "string|required",
            "code_saq" => "string",
            "pays" => "string|required",
            "description" => "string",
            "prix_saq" => "numeric",
            "url_image" => "url",
            "url_saq" => "url",
            "format" => "string|required",
            "type_id" => "integer",
        ]);

        if ($validator->passes()) {
            return response()->json($bouteille->update($request->all()), 200);
        }

        return response()->json(['erreur' => $validator->errors()->all()], 422);
    }


    /**
     * Supprime une bouteille dans la BDD
     * @param Bouteille $bouteille
     * @return JsonResponse
     * @throws Exception
     */
    public function destroy(Bouteille $bouteille)
    {
        if ($bouteille->delete())
            return Response::json("null", 204);
    }
}
