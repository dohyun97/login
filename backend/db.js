const mysql = require("mysql");

const db = mysql.createConnection({
    host: "login-1.cz71yv90fct2.ca-central-1.rds.amazonaws.com",
    user: "admin",
    password: "hyun9753",
    database:"sys"
});

db.connec();

module.exports = db;