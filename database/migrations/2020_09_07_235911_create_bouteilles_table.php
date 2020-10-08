<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateBouteillesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bouteilles', function (Blueprint $table) {
            $table->id();
            $table->string("nom");
            $table->string("code_saq");
            $table->string("pays");
            $table->text("description")->nullable();
            $table->float("prix_saq")->nullable();
            $table->string("url_saq")->nullable();
            $table->string("url_image")->nullable();
            $table->string("format");
            $table->foreignId("type_id")->references('id')->on('types');
            $table->timestamps();
        });

        // Génère des données de test //

        DB::table("bouteilles")->insert([
            "nom" => "1000 Stories Zinfandel Californie 2018",
            "code_saq" => "13584455",
            "description" => "Vin rouge | 750 ml | États-Unis",
            "pays" => "États-Unis",
            "type_id" => 1,
            "format" => "750 ml",
            "prix_saq" => 28.85,
            "url_image" => "https://www.saq.com/media/catalog/product/1/3/13584455-1_1578538222.png",
            "url_saq" => "https://www.saq.com/fr/13584455",
            "created_at" => new DateTime(),
            "updated_at" => new DateTime()
        ]);

        DB::table("bouteilles")->insert([
            "nom" => "11th Hour Cellars Pinot Noir",
            "code_saq" => "13966470",
            "description" => "Vin rouge | 750 ml | États-Unis",
            "pays" => "États-Unis",
            "type_id" => 1,
            "format" => "750 ml",
            "prix_saq" => 18.45,
            "url_image" => "https://www.saq.com/media/catalog/product/1/3/13966470-1_1578546924.png",
            "url_saq" => "https://www.saq.com/fr/13966470",
            "created_at" => new DateTime(),
            "updated_at" => new DateTime()
        ]);

        DB::table("bouteilles")->insert([
            "nom" => "13th Street Winery Gamay 2017",
            "code_saq" => "12705631",
            "description" => "Vin rouge | 750 ml | Canada",
            "pays" => "Canada",
            "type_id" => 1,
            "format" => "750 ml",
            "prix_saq" => 19.95,
            "url_image" => "https://www.saq.com/media/catalog/product/1/2/12705631-1_1582140016.png",
            "url_saq" => "https://www.saq.com/fr/12705631",
            "created_at" => new DateTime(),
            "updated_at" => new DateTime()
        ]);

        DB::table("bouteilles")->insert([
            "nom" => "AdegaMãe Dory Lisboa 2019",
            "code_saq" => "13626344",
            "description" => "Vin blanc | 750 ml | Portugal",
            "pays" => "Portugal",
            "type_id" => 2,
            "format" => "750 ml",
            "prix_saq" => 15,
            "url_image" => "https://www.saq.com/media/catalog/product/1/3/13626344-1_1578539422.png",
            "url_saq" => "https://www.saq.com/fr/13626344",
            "created_at" => new DateTime(),
            "updated_at" => new DateTime()
        ]);

        DB::table("bouteilles")->insert([
            "nom" => "Adegas Valminor Serra da Estrella 2019",
            "code_saq" => "13566652",
            "description" => "Vin blanc | 750 ml | Espagne",
            "pays" => "Espagne",
            "type_id" => 2,
            "format" => "750 ml",
            "prix_saq" => 15.65,
            "url_image" => "https://www.saq.com/media/catalog/product/1/3/13566652-1_1578537620.png",
            "url_saq" => "https://www.saq.com/fr/13566652",
            "created_at" => new DateTime(),
            "updated_at" => new DateTime()
        ]);

        DB::table("bouteilles")->insert([
            "nom" => "Aegerter Jean-Luc et Paul Bourgogne Blanc Vieilles Vignes 2018",
            "code_saq" => "13386432",
            "description" => "Vin blanc | 750 ml | France",
            "pays" => "France",
            "type_id" => 2,
            "format" => "750 ml",
            "prix_saq" => 24.9,
            "url_image" => "https://www.saq.com/media/catalog/product/1/3/13386432-1_1587144625.png",
            "url_saq" => "https://www.saq.com/fr/13386432",
            "created_at" => new DateTime(),
            "updated_at" => new DateTime()
        ]);

        DB::table("bouteilles")->insert([
            "nom" => "Château de Barbeyrolles 2017",
            "code_saq" => "13678021",
            "description" => "Vin rosé | 750 ml | France",
            "pays" => "France",
            "type_id" => 3,
            "format" => "750 ml",
            "prix_saq" => 40.25,
            "url_image" => "https://www.saq.com/media/wysiwyg/placeholder/category/06.png",
            "url_saq" => "https://www.saq.com/fr/13678021",
            "created_at" => new DateTime(),
            "updated_at" => new DateTime()
        ]);

        DB::table("bouteilles")->insert([
            "nom" => "Château de Cartes Vin Gris 2019",
            "code_saq" => "14559358",
            "description" => "Vin rosé | 750 ml | Canada",
            "pays" => "Canada",
            "type_id" => 3,
            "format" => "750 ml",
            "prix_saq" => 21.95,
            "url_image" => "https://www.saq.com/media/catalog/product/1/4/14559358-1_1594231230.png?",
            "url_saq" => "https://www.saq.com/fr/14559358",
            "created_at" => new DateTime(),
            "updated_at" => new DateTime()
        ]);

        DB::table("bouteilles")->insert([
            "nom" => "Château de Lancyre 2019",
            "code_saq" => "10263841",
            "description" => "Vin rosé | 750 ml | France",
            "pays" => "France",
            "type_id" => 3,
            "format" => "750 ml",
            "prix_saq" => 17.75,
            "url_image" => "https://www.saq.com/media/catalog/product/1/0/10263841-1_1580595016.png?",
            "url_saq" => "https://www.saq.com/fr/10263841",
            "created_at" => new DateTime(),
            "updated_at" => new DateTime()
        ]);

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('bouteilles');
    }
}
