const Sequelize = require('sequelize')

const conexao = new Sequelize('cadastro', 'root', 'snook7453@S', {
    host: 'localhost',
    dialect: 'mysql'
})

conexao.authenticate()
    .then(function () {
        console.log('conexão com banco de dados realizado com sucesso')
    }).catch(function () {
        console.log('erro conexão com banco de dados não realizado com sucesso')
    })

module.exports = conexao;