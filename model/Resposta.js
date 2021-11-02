const Sequelize = require("sequelize");
const connection = require("../database/db");

const Resposta = connection.define('respostas', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true

    },
    corpo:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    idpergunta:{
        type: Sequelize.INTEGER,
        allowNull: false
        
    }
});

Resposta.sync({force: false});

module.exports = Resposta