const Users = require("../../model/Users/Users");
const { setReponse } = require("../../utils");

const user_list = (req, res) => {
    Users.all().then(resp =>{
        res.status(200).json(setReponse(1, "successs", 200, resp))
    });
}

const user_detail = (req, res) => {

}

const user_update = (req, res) => {

}

const user_delete = (req, res) => {

}

const user_insert = (req, res) => {

}

const user_logout = (req, res) => {

}

const user_login = (req, res) => {

}

module.exports = {
    user_login,
    user_list,
    user_logout,
    user_detail,
    user_update,
    user_list,
    user_insert,
    user_delete
}