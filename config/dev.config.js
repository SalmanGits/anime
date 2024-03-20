require("dotenv").config()
const { DataSource } = require("typeorm")
//all import of model will be in this file
const model_index = require("../database/connection/model_index")
exports.default = new DataSource({
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: false,
    migrations: ["database/migrations/*.js"],
    entities: model_index,
    ssl: {
        rejectUnauthorized: false,
        ca: process.env.CA_CERTIFICATE.toString(),
    }
})