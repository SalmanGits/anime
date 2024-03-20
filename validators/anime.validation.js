//using zod for validation

const { z } = require("zod")
const animeSchema = z.object({
    fav_character: z.string(),
    fav_series: z.string(),

})
module.exports = {
    animeSchema
}