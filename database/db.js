const Sequelize = require("sequelize")
require("dotenv").config();
const connection = new Sequelize(process.env.DB_CONN_DB,process.env.DB_CONN_USER, process.env.DB_CONN_PW,{
    host: process.env.DB_CONN_HOST,
    dialect: process.env.DB_CONN_SGBD});

module.exports = connection