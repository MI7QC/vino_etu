<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// TODO : Authentification de l'API avec JWT Token.

Route::apiResources([
    'users' => 'UserController',
    'bouteilles' => 'BouteilleController',
    'celliers' => 'CellierController',
    'transactions' => 'TransactionController',
    'celliers.bouteilles' => 'CellierBouteilleController',
    "affichageDetails" => "AffichageDetailsTransactionBouteilleTypeController"
]);

// Extension de la route users
Route::get('/users/{user}/celliers', 'UserController@showCelliers');

// SAQ API
Route::get('/saq', 'SAQController@getProduits');
Route::post('/saq', 'SAQController@ajouterProduit');
// End SAQ API

Route::fallback(function () {
    return response()->json(["erreur" => "404 - ressource non trouvée"]);
})->name("api.fallback.404");

