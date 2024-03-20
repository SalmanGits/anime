require("dotenv").config();
const { DBConnection } = require("./database/connection/connection.js");
//default is 3000,if no port will be there in the env then it will take 3000
const PORT = process.env.PORT || 3000;
const App = require("./app/main.js")
//initialising the db and app
const register = new App()
const app = register.init()
app.listen(PORT, () => {
    console.log(`app is listening on ${PORT}`)
    DBConnection.initialize()
})


