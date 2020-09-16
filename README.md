# Projet web final : Vino

## Introduction

Ceci est le projet web final de l'équipe 1 des finissants du groupe 17612 de l'AEC en conception et programmation de sites web du Cégep Maisonneuve. 

API faite avec Laravel et front end en AJAX.

[Documentation Laravel](https://laravel.com/docs/7.x)

## Équipe

- Vladyslav Iefimov
- Christopher Parent-Paquette
- Samuel St-Jean
- Sacha Pignot

## Démo

#### Fonctionnalités disponibles
- [Page `/`](https://e1995086.webdev.cmaisonneuve.qc.ca/vino/) - Écran de connexion **OU** Page d'accueil (actuellement liste des bouteilles).
- [Page `/register`](https://e1995086.webdev.cmaisonneuve.qc.ca/vino/register) - Créer un nouveau compte
  
#### API

Pour les requêtes POST, PUT ou DELETE, veuillez tester avec un outil comme ***POSTMAN***.

##### SAQ

[`GET` - api/saq](https://e1995086.webdev.cmaisonneuve.qc.ca/vino/public/index.php/api/saq)

##### bouteilles

[`GET` - api/bouteilles](https://e1995086.webdev.cmaisonneuve.qc.ca/vino/public/index.php/api/bouteilles)

[`GET` - api/saq/bouteilles/1](https://e1995086.webdev.cmaisonneuve.qc.ca/vino/public/index.php/api/bouteilles/1)

##### celliers

[`GET` - api/celliers](https://e1995086.webdev.cmaisonneuve.qc.ca/vino/public/index.php/api/celliers)

[`GET` - api/saq/celliers/1](https://e1995086.webdev.cmaisonneuve.qc.ca/vino/public/index.php/api/celliers/1)

## Installation en local

### Installation avec le script shell

#### Windows

Double cliquez sur l'icone du script `install-laravel.sh` qui se trouve à la racine de votre répertoire.
Vous pouvez aussi le lancer en ligne de commande avec les commandes : 
  
    > install-laravel.sh
ou 

    > .\install-laravel.sh`.

#### Linux

Faites la commande :
  
    > ./install-laravel.sh

---

Une fois le script exécuté, configurer votre fichier .env et faites la commande
    
    > php artisan migrate:fresh --seed
    
Lancer le serveur

    > php artisan serve
### Installation manuelle

1. Copiez le fichier .env.example et renommez le .env
2. Indiquez-y vos informations pour connecter votre base de données
3. Exécutez les commandes suivantes :

Pour installer les dépendances, si pas déjà fait, installer [Composer](https://getcomposer.org/download/) puis :

    > composer install

Générer le APP_KEY (encrypter les cookies) :

    > php artisan key:generate

Nettoyer le cache et les configues

    > php artisan cache:clear

    > php artisan config:clear

Générer la BDD avec des données test

    > php artisan migrate --seed

Lancer le serveur

    > php artisan serve
    
## Front-end

Les fichiers de vues se trouvent dans le dossier `/ressources/views`, les assets pré-compilés dans leurs sous-dossiers dans `/ressources` et les assets compilés se retrouve dans `/public`.

Si vous n'utilisé pas `npm`, Vous pouvez mettre vos fichiers HTML dans le dossier `/ressources/views` et vos fichiers CSS/JS et autres assets directement dans le dossier `/public`.

## Routes
### Public

Les routes publiques se trouvent en grande partie dans le fichier routes/web.php

- `/` : Page d'Accueil
- `/login` : Écran de connexion
- `/register` : Écran de création de compte

### API

Les routes de l'api se trouvent dans le fichier routes/api.php

#### users

- `GET`       - `api/utilisateurs`                   : Retourner tout les utilisateurs
- `GET`       - `api/utilisateurs/{id}`              : Retourner un utilisateur
- `GET`       - `api/utilisateurs/{id}/celliers`     : Retourner les celliers d'un utilisateur
- `POST`      - `api/utilisateurs`                   : Ajouter un utilisateur 
- `PUT`       - `api/utilisateurs/{id}`              : Modifier un utilisateur
- `DELETE`    - `api/utilisateurs/{id}`              : Supprimer un utilisateur

#### saq

- `GET`       - `api/saq`                            : Retourner les données de SAQ  
  - requêtes de recherche possibles (ex : `api/saq?type=blanc&page=2`) :
      - type : rouge | blanc | rose
          - Défaut : rouge
      - page : 1 et plus
          - Défaut : 1

- `POST`      - `api/saq`                            : Ajouter une bouteille de la SAQ

#### bouteilles

- `GET`       - `api/bouteilles`                     : Retourner toutes les bouteilles
- `GET`       - `api/bouteilles/{id}`                : Retourner une bouteille
- `POST`      - `api/bouteilles`                     : Ajouter une bouteille 
- `PUT`       - `api/bouteilles/{id}`                : Modifier une bouteille
- `DELETE`    - `api/bouteilles/{id}`                : Supprimer une bouteille

#### celliers

- `GET`       - `api/celliers`                       : Retourner tout les celliers
- `GET`       - `api/celliers/{id}`                  : Retourner un cellier
- `POST`      - `api/celliers`                       : Ajouter un cellier 
- `PUT`       - `api/celliers/{id}`                  : Modifier un cellier
- `DELETE`    - `api/celliers/{id}`                  : Supprimer un cellier

#### celliers/bouteilles

- `GET`       - `api/celliers/{id}/bouteilles`       : Retourner toutes les bouteilles d'un celliers 
- `GET`       - `api/celliers/{id}/bouteilles/{id}`  : Retourner une bouteille d'un celliers 
- `POST`      - `api/celliers/{id}/bouteilles`       : Ajouter une bouteille dans un cellier 
- `PUT`       - `api/celliers/{id}/bouteilles`       : Modifier une bouteille d'un cellier
- `DELETE`    - `api/celliers/{id}/bouteilles`       : Supprimer une bouteille d'un cellier