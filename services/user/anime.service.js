const { createAnime, updateAnime, getAnime } = require("./anime.controller");

class AnimeService {
    static async get(req, res, next) {
        return getAnime(req, res, next)
    }
    static async create(req, res, next) {
        return createAnime(req, res, next)
    }
    static async update(req, res,next) {
        return updateAnime(req, res, next)
    }


}
module.exports = AnimeService;