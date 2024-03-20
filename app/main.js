const express = require('express');
const cors = require('cors');
const helmet = require('helmet')
const animeRoutes = require('../routes/user/anime.route.js');
const errorHandler = require('../middleware/errorHandler.js');


class App {
    constructor() {

        //configuring our app and middlewares
        this.app = express()
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(helmet())
        this.app.use(express.urlencoded({ extended: true }))

    }
    registerRoutes() {
        this.app.use('/anime', animeRoutes)

        //error handler middleware
        this.app.use(errorHandler)
    }

    init() {
        this.registerRoutes()
        return express().use("/api/v1", this.app)
    }


}

module.exports = App