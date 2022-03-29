require('dotenv').config();
const QueryBuilder = require('node-querybuilder');
const mysql = require('mysql')

class DB { 
    constructor () {
        const { 
            DB_NAME, 
            DB_PASS, 
            DB_USER, 
            DB_HOST 
        } = process.env

        const settings = {
            host: DB_HOST,
            database: DB_NAME,
            user: DB_USER,
            password: DB_PASS
        };
        
        this.con = new QueryBuilder(settings, 'mysql');
    }

    getCon () {
        return this.con;
    }    

}

module.exports = DB
