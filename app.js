const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const User = require('./models/User')
const db = require('./models/db')

app.use(express.static('src'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())



app.get('/', async (req, res) => {
    res.sendFile(__dirname + '/src/index.html')

})

app.get('/cadastro', async (req, res) => {
    res.sendFile(__dirname + '/src/cadastro/cadastro.html')

})

app.post('/cadastro', async (req, res) => {
    const { user, password } = req.body;

    try {
        const novoUsuario = await User.create({ user, password });
        res.status(201).json(novoUsuario);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensagem: 'Erro ao criar usuário' });
        console.log(req.body)
    }
});

app.listen(8080, () => {
    console.log('Servidor Iniciado Com Sucesso na Porta 8080: http://localhost:8080 ')
})