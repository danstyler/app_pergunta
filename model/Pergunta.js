const Sequelize = require("sequelize");
const connection = require("../database/db");

const Pergunta = connection.define('pergunta', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    titulo:{
        type: Sequelize.STRING(250),
        allowNull:false
    },
    descricao:{
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Pergunta.sync({force: false}).then();

module.exports = Pergunta;