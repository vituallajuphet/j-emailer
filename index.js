const express = require('express');
const bodyParser = require("body-parser");
const applyRouting = require('./src/routes');
const server = express();
const port = process.env.PORT || 4000

applyRouting(server)

server.listen(port, () => {
    console.log('app is up and running port: '+port);
})