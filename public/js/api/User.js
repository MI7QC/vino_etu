/**
 * Interface avec L'API users
 */
class User {
    constructor() {
        this._URL_USERS = `http://${window.location.host}/api/users`;
    }

    /**
     * Retourne sous forme de promesse tous les utilisateurs
     * @returns {Promise<*>}
     */
    index() {
        return fetch(`${this._URL_USERS}`)
            .then(response => response.json())
            .then(data => data.data);
    }

    /**
     * Retourne sous forme de promesse les données concernant un utilisateur
     * @param id
     * @returns {Promise<*>}
     */
    show(id) {
        return fetch(`${this._URL_USERS}/${id}`)
            .then(response => response.json())
            .then(data => data.data);
    };

     showCellier(id) {
        return fetch(`${this._URL_USERS}/${id}/celliers`)
             .then(response => response.json())
             .then(data => data.data);
     };

    /**
     * Enregistre un nouvel utilisateur
     * @param user
     * @returns {Promise<void>}
     */
    store(user) {
        return fetch(`${this._URL_USERS}`, {
                method: "POST",
                body: JSON.stringify(user),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(response => response.json())
            .catch(err => err);
    }

    /**
     * Modifie les données d'un utilisateur
     * @param id
     * @param data
     * @returns {Promise<void>}
     */
    update(id, data) {
        return fetch(`${this._URL_USERS}/${id}`, {
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
     * Supprime un utilisateur
     * @param id
     * @returns {Promise<void>}
     */
    destroy(id) {
        return fetch(`${this._URL_USERS}/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .catch(err => err);
    }
}