//npm install mysql --save
const mysql = require("mysql"); 

const conn = mysql.createConnection({
    host: "127.0.0.1",
    port: 3307, //alternative port: 8889 / 3306
    user: "root", 
    password: "", //alternative password: "root"
    database: "iteminventory"
});

conn.connect();
module.exports = conn;