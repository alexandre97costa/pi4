require('dotenv').config()
const express = require('express')
const cors = require('cors')
const interceptor = require('express-interceptor')
const { expressjwt: validate_jwt } = require('express-jwt');
const app = express()
app.set('port', process.env.PORT || 4001)
const port = app.get('port')
const sequelize = require('./config/Database')
sequelize.sync(
    { alter: true }
)
const { dev: devClass } = require('./_dev/dev')
const dev = new devClass;

const exemploRoute = require('./routes/exemplo')
const utilizadorRoutes = require('./routes/utilizadorRoutes')
const pontoInteresseRoutes = require('./routes/pontoInteresseRoutes')
const eventoRoutes = require('./routes/eventoRoutes')
const reservaRoutes = require('./routes/reservaRoutes')
const scanRoutes = require('./routes/scanRoutes')

//* Middlewares
app.use(cors());
app.use(express.json());
// log dos pedidos todos que o servidor recebe (incluindo o status!)
app.use(interceptor((req, res) => {
    return {
        isInterceptable: () => { return true },
        intercept: (body, send) => {
            console.log(
                '\x1b[30m\x1b[45m ' + req.method +
                ' \x1b[0m ' + req.baseUrl + req._parsedUrl.pathname +
                ' \x1b[33m' + res.statusCode +
                
                // params
                (!!req.params ? '\n\x1b[35m⤷ params \x1b[30m' + JSON.stringify(req.params).replaceAll('"','\'') : '') +
                // query
                (!!req._parsedUrl.query ? '\n\x1b[35m⤷ query \x1b[30m' + req._parsedUrl.query.replaceAll('&', ' ') : '') +
                // body
                (!!req._body ? '\n\x1b[35m⤷ body \x1b[30m' + JSON.stringify(req.body).replaceAll('"','\'') : '') +
                '\x1b[0m');
            // console.log(req)
            send(body);
        }
    }
}))
// validação jwt (com exclusoes dentro do unless)
app.use(
    validate_jwt({
        secret: process.env.JWT_SECRET,
        algorithms: [process.env.JWT_ALGORITHM],
    }).unless({
        path: [
            { url: '/utilizador', methods: ['POST'] },
            { url: '/utilizador/login', methods: ['GET'] },
            { url: '/utilizador/tipos', methods: ['GET'] },
            { url: '/utilizador/all', methods: ['GET'] },
            { url: '/utilizador/bulk', methods: ['POST'] },
            { url: '/pontoInteresse', method: ['GET'] },
            { url: '/pontoInteresse/tipoPontosInteresse', method: ['GET'] },
            
            // para os scans feitos fora da app, nao precisam de auth porque são redirecionados para o micro site
            { url: /^\/scan/, method: ['GET'] },

            // { url: /^\// },
        ]
    })
);
// tratamento de erros do validate_jwt
app.use(function (e, req, res, next) {
    (e.name === 'UnauthorizedError') ?
        res.status(e.status).json(e.inner) :
        next(e);
});

//* Rotas
app.use('/exemplo', exemploRoute)
app.use('/utilizador', utilizadorRoutes)
app.use('/pontoInteresse', pontoInteresseRoutes)
app.use('/evento', eventoRoutes)
app.use('/reserva', reservaRoutes)
app.use('/scan', scanRoutes)

// Rota de Introdução
app.use('/', (req, res) => {
    res.status(200).json({msg: 'Vieste para o "/". Se não era suposto, verifica o método ou o url!'});
})




// * daqui pra baixo são só cenas para iniciar a bd como deve ser
// * e depois iniciar o app.listen()

async function assertDatabaseConnectionOk() {
    console.log(`\x1b[30mChecking database connection...`);
    try {
        await sequelize.authenticate();
        console.log('Database connection OK!');
    } catch (error) {
        console.log('\x1b[30mUnable to connect to the database.');
        console.log('\x1b[31m' + error.message + '\x1b[0m');
        process.exit(1);
    }
}
async function init() {
    console.log('\x1b[30mStarting backend in ' + process.env.MODE + ' mode...');
    await assertDatabaseConnectionOk();
    app.listen(port, () => {
        console.log('\x1b[30mBackend online! \x1b[0m\x1b[34m▶ http://localhost:' + port + '\x1b[0m\n')
    });
}
init();
