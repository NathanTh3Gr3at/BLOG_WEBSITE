const mysql = require('mysql2/promise');
const db_password =require('../secrets/db_password')
const pool = mysql.createPool({
  host: "localhost",
  database: "blog",
  user: "root",
  password: db_password,
});
module.exports = pool;
