const {user, password, database} = require("pg/lib/defaults")

const pgsqlPool = require('pg').Pool

const Pool = new pgsqlPool({
    user: 'postgres',
    password: '2244',
    database:"account_manager",
    host: 'localhost',
    port: "5432",
    max: 100,
 })

 Pool.connect((err,connection)=>{
    if(err) throw err;
    console.log("Database connected successfully");
    connection.release();
 })

 module.exports = Pool;