const devConfig = require("../../config/dev.config.js")

class DBConnection {
    static async initialize() {
        try {
            console.log("Initializing DBConnection")
            await devConfig.default.initialize()
            console.log("DB Connected")

        } catch (error) {
            console.log(error)
        }
    }

}
//our main dbconnection
const dbConnection = () => {
    return devConfig.default
}
module.exports = { DBConnection, dbConnection }