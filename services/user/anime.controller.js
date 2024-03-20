const { dbConnection } = require('../../database/connection/connection.js');
//its my npm package only
const { sendResponse } = require("res-express")


//writing typeorm inbuilt functions instead of raw queries cause these are small apis

//these queries is easily optimizable with redis cache and indexing
const getAnime = async (req, res, next) => {
    try {
        const animes = await dbConnection().getRepository("anime").find()
        return sendResponse({ res, status: 200, data: { animes } })
    } catch (error) {
        next(error);
    }
}


const createAnime = async (req, res, next) => {
    try {
        await dbConnection().createQueryBuilder().insert().into("anime").values(req.body).execute()
        return sendResponse({ res, status: 201, data: { success: true } })
    } catch (error) {
        next(error);
    }
}
const updateAnime = async (req, res, next) => {
    try {
        await dbConnection().createQueryBuilder().update("anime").set(req.body).where("id=:id", { id: req.body.id }).execute()
        return sendResponse({ res, status: 200, data: { success: true } })
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createAnime,
    updateAnime,
    getAnime
}