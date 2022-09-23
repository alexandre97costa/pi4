const express = require('express')
const cors = require('cors')
require('dotenv').config();
const path = require('path') // para enviar ficheiros
const jwt_middleware = require('../jwt/jwt_middleware') // para login
const app = express()
app.set('port', process.env.PORT || 4001)

const exemploRoute = require('./routes/exemplo.js')

//* Middlewares
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    console.log('\x1b[37m\x1b[42m ' + req.method + ' \x1b[0m ' + req.url);
    next()
});

//* Rotas
app.use('/exemplo', exemploRoute)

// Rota de Introdução
app.use('/', (req, res) => {
    res.send('Yo yo, o backend tá aqui');
})

app.listen(app.get('port'), () => {
    console.log('Backend online!')
})