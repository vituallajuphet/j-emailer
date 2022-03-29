const DB = require("../../database")
const db = new DB()
const con = db.getCon()
const TBL = 'tbl_users';

const all = async () => {
    return new Promise((resolve, reject) => {
        con.get(TBL, (err, response) => {
            if (err) reject(err)
            resolve(response)
        });
    });
}

const insert = async (params) => {
    return new Promise((resolve, reject) => {
       try {
        const res =  con.returning('id').insert(TBL, params);
        resolve(res)
       } catch (error) {
        reject(error)
       }
    });
}

const Users = {
    all
}

module.exports = Users