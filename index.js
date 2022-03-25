const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const router = express.Router();
const port = process.env.PORT || 4000
const routes = require('./src/routes')
const cors = require('cors')

app.use(cors({origin:true}))

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api', routes)

app.listen(port, () => {
    console.log('app is up and running port: '+port);
})