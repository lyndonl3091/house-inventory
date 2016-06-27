'use strict';

const mysql = require('mysql');

let db = mysql.createConnection(process.env.JAWSDB_URL || {
  host:  'localhost',
  user: 'root',
  password: process.env.MYSQL_PASSWORD,
  database: 'testdb'

});
// console.log('password:', process.env.MYSQL_PASSWORD);
db.connect();

module.exports = db;
