const { animeSchema } = require("../validators/anime.validation")
const { sendResponse } = require("res-express")

const validate = (req, res, next) => {
    try {
        const parsed = animeSchema.safeParse(req.body)
        if (parsed.success) {
            return next()
        } else {
            return sendResponse({ res, status: 400, data: { error: parsed.error } })
        }
    } catch (error) {
        next(error)
    }
}

module.exports = validate