const { setReponse } = require("../../utils");

const isAuthenticated = (req, res, next) => {
    const { authorization = '' } = req?.headers;
    const jwt = authorization?.split(" ")[1];
    if(jwt !== '1234') {
        res.status(401).json(setReponse(0, "Unauthorized Request", 401))
    } else{
        next()
    }      
}

module.exports = {
    isAuthenticated
}