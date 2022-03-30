const Users = require("../../model/Users/Users");
const { setReponse } = require("../../utils");
const { v4: uuid } = require('uuid');

const user_list = (req, res) => {
    Users.all().then(resp =>{
        res.status(200).json(setReponse(1, "successs", 200, resp))
    }).catch(err => {
        res.status(500).json(setReponse(0, "successs", 500, err))
    });
}

const user_detail = (req, res) => {
    const id = req.params.id;

    const params = {
        select: 'id, username, email, status',
        where: { id: id }
    }
    Users.find(params).then(resp =>{
        res.status(200).json(setReponse(1, "success", 200, resp))
    }).catch(err => {
        res.status(500).json(setReponse(0, "error", 500, err))
    });
}

const user_update = (req, res) => {
    const id = req.params.id;

    const params = {
        select: ['id', 'username'],
        where: { id: id }
    }

    Users.find(params).then(resp =>{
        res.status(200).json(setReponse(1, "successs", 200, resp))
    }).catch(err => {
        res.status(500).json(setReponse(0, "error", 500, err))
    });
}

const user_delete = (req, res) => {
    const id = req.body.id;
    res.status(200).json(setReponse(1, "success delete", 200,  {id:id}))
}

const user_insert = (req, res) => {
    const postData = {...req.body, id: uuid()}
    Users.insert(postData).then(resp =>{
        const {errno=0, sqlMessage=''} = resp;
        if(!errno) res.status(200).json(setReponse(1, "success", 200, resp))
        else res.status(400).json(setReponse(0, sqlMessage, 400))
    }).catch(err => {
        res.status(500).json(setReponse(0, sqlMessage, 500))
    });
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