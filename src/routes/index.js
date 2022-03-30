const emailRoutes = require("./email");
const userRoutes = require("./users");
const authMiddleware = require("../middleware");
const cors = require('cors'); 
const bodyParser = require("body-parser");
const { setReponse } = require("../utils");

const applyRouting = (server) => {
    authMiddleware(server);
    server.use(cors({origin:true}))
    server.use(bodyParser.urlencoded({ extended: false }))
    server.use('/api', userRoutes)
    server.use('/api', emailRoutes)

    server.all('*', (req, res) => {
        res.status(404).json(setReponse(0, "not found", 404))
    })
}

module.exports = applyRouting;