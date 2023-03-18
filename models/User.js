const { Sequelize, DataTypes } = require('sequelize');
const banco = require('./db');

const User = banco.define('usuarios', {
    // Definição dos campos da tabela

    user: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = User;