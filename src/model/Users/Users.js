const DB = require("../../database")
const db = new DB()
const con = db.getCon()
const TBL = 'tbl_users';

const all = () => {
    return new Promise((resolve, reject) => {
        con.get(TBL, (err, response) => {
            if (err) reject(err)
            resolve(response)
        });
    });
}

const insert = async (params) => {
    try {
        return await con.returning('id').insert(TBL, params);
    } catch (error) {
        return error
    }
}
 
const find =  (params) => {
    const {select, where} = params;
    return new Promise((resolve, reject) => {
        con.select(select)
        .where(where)
        .get(TBL, (err, res) => {
            if (err) reject(err)
            resolve(res)
        });
    })
}

const Users = {
    all,
    insert,
    find
}

module.exports = Users