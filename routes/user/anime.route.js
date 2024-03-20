const router = require('express').Router()
const validate = require('../../middleware/validation.js')
const AnimeService = require('../../services/user/anime.service.js')
router.get("/", AnimeService.get)
router.post("/",validate ,AnimeService.create)
router.put("/", AnimeService.update)
module.exports = router