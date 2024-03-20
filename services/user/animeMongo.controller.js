//this is just an example how we can do the same with 
//mongoose all we have to create a model and implement thse

const Anime = require('./models/Anime'); // lets say this is our model

const getAnime = async (req, res, next) => {
    try {
        const animes = await Anime.find();
        return sendResponse({ res, status: 200, data: { animes } });
    } catch (error) {
        next(error);
    }
};

const createAnime = async (req, res, next) => {
    try {
        const newAnime = new Anime(req.body);
        await newAnime.save();
        return sendResponse({ res, status: 201, data: { success: true } });
    } catch (error) {
        next(error);
    }
};

const updateAnime = async (req, res, next) => {
    try {
        const updatedAnime = await Anime.findByIdAndUpdate(
            req.body.id,
            req.body,
            { new: true }
        );
        return sendResponse({ res, status: 200, data: { success: true } });
    } catch (error) {
        next(error);
    }
};