/**
 * Fonctions utilitaires
 */


/**
 * Retourne le nom en français du numéro du mois donné en paramètre.
 * @param {number} mois
 */
function nomMois(mois) {
    switch (mois) {
        case 0:
            return "janvier";
        case 1:
            return "février";
        case 2:
            return "mars";
        case 3:
            return "avril";
        case 4:
            return "mai";
        case 5:
            return "juin";
        case 6:
            return "juillet";
        case 7:
            return "aôut";
        case 8:
            return "septembre";
        case 9:
            return "octobre";
        case 10:
            return "novembre";
        case 11:
            return "décembre";
    }
}

/**
 * Retourne une chaine de caractères contenant le nom du type de vin à partir de son ID.
 * @param type_id
 * @returns {string}
 */
function getType(type_id) {
    let type;
    switch (type_id) {
        case 1:
            type = "rouge";
            break;
        case "1":
            type = "rouge";
            break;
        case 2:
            type = "blanc";
            break;
        case "2":
            type = "blanc";
            break;
        case 3:
            type = "rosé";
            break;
        case "3":
            type = "rosé";
            break;
    }
    return type;
}

//CARACTERES SPECIAUX / KEBAB CASE
function kebab_case(para_str) {
    para_str = para_str.toLowerCase();
    para_str = para_str.replace(/[áâàåãä]/gi, 'a');
    para_str = para_str.replace(/[æ]/gi, 'ae');
    para_str = para_str.replace(/[éêèë]/gi, 'e');
    para_str = para_str.replace(/[íîìï]/gi, 'i');
    para_str = para_str.replace(/[óôòøõö]/gi, 'o');
    para_str = para_str.replace(/[œ]/gi, 'oe');
    para_str = para_str.replace(/[ùûüúûùü]/gi, 'u');
    para_str = para_str.replace(/[ýÿ]/gi, 'y');
    para_str = para_str.replace(/[ç¢]/gi, 'c');
    para_str = para_str.replace(/[Ð]/gi, 'd');
    para_str = para_str.replace(/[ƒ]/gi, 'f');
    para_str = para_str.replace(/[ñ]/gi, 'n');
    para_str = para_str.replace(/[š]/gi, 's');
    para_str = para_str.replace(/[ß]/gi, 'ss');
    para_str = para_str.replace(/[\^\\\|\.\{\}\[\]\(\)\?\#\!\+\*]/gi, ''); //caracteres echapees en regex sauf dollar
    para_str = para_str.replace(/[²&~"`°=¨£¤%µ,;:§]/gi, ''); //autres caracteres speciaux
    para_str = para_str.replace(/[\$]/gi, '');
    para_str = para_str.replace(/[€]/gi, 'e');
    para_str = para_str.replace(/[@]/gi, 'at');
    para_str = para_str.replace(/  /gi, ' '); //plusieurs espaces

    //remplaces par tirets
    para_str = para_str.replace(/[ _/']/gi, '-'); //espace

    //enlever les - au debut et a la fin
    para_str = para_str.replace(/[-]/gi, ' ');
    para_str = para_str.trim();
    para_str = para_str.replace(/[ ]/gi, '-'); //espace
    return para_str;
}

/* Validations */

/**
 * Vérifie si la chaîne de caractère donnée correspond à une adresse email valide
 * @param email
 * @returns {boolean}
 */
function isEmail(email) {
    let regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return regexp.test(String(email).toLowerCase());
}

/**
 * Vérifie si la chaîne de caractère donnée correspond à une URL valide
 * @param URL
 * @returns {boolean}
 */
function isURL(URL) {
    let regexp = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;

    return regexp.test(String(URL).toLowerCase());
}
