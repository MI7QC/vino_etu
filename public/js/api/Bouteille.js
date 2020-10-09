/**
 * Interface avec L'API bouteilles
 */
class Bouteille {
    constructor() {
        this._URL_BOUTEILLES = `http://${window.location.host}/api/bouteilles`;
    }

    /**
     * Retourne sous forme de promesse toutes les bouteilles
     * @returns {Promise<*>}
     */
    index() {
        return fetch(`${this._URL_BOUTEILLES}`)
            .then(response => response.json())
            .then(data => data.data);
    }

    /**
     * Retourne sous forme de promesse une bouteille
     * @param id
     * @returns {Promise<*>}
     */
    show(id) {
        return fetch(`${this._URL_BOUTEILLES}/${id}`)
            .then(response => response.json())
            .then(data => data.data);
    };

    /**
     * Enregistre une nouvelle bouteille
     * @param bouteille
     * @returns {Promise<void>}
     */
    store(bouteille) {
        return fetch(`${this._URL_BOUTEILLES}`, {
                method: "POST",
                body: JSON.stringify(bouteille),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(response => response.json())
            .catch(err => err);
    }

    /**
     * Modifie une bouteille
     * @param id
     * @param data
     * @returns {Promise<void>}
     */
    update(id, data) {
        return fetch(`${this._URL_BOUTEILLES}/${id}`, {
                method: "PUT",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(response => response.json())
            .catch(err => err);
    }

    /**
     * Supprime une bouteille
     * @param id
     * @returns {Promise<void>}
     */
    destroy(id) {
        return fetch(`${this._URL_BOUTEILLES}/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .catch(err => err);
    }
}