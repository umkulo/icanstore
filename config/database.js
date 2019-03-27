const Sequelize = require('sequelize');
const mysql = require('mysql');

module.exports = new Sequelize ({
    database: 'icanstore',
    // username: 'postgres',
    username: 'root',
    password: 'Mast3rk3y',
    host    : 'localhost',
    dialect : 'mysql'
    // dialect : 'postgres'
  });


// create connection to database
// const db = new Sequelize({
//   database: config.database,
//   username: config.username,
//   password: config.password,
//   host    : config.host,
//   dialect : config.dialect
// });  