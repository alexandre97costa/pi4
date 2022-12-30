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

const exemploRoute = require('./routes/exemplo.js')
const userRoutes = require('./routes/userRoutes.js')
const pontoInteresseRoute = require('./routes/pontoInteresseRoutes.js')
const eventoRoute = require('./routes/eventoRoutes.js')
const reservaRoute = require('./routes/reservaRoutes')

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
                // ' \x1b[30m 🕙 ' + new Date().toLocaleTimeString().slice(0, -3) + '\x1b[0m ' +
                (!!req._parsedUrl.query ? '\n\x1b[35m⤷ query \x1b[30m' + req._parsedUrl.query.replaceAll('&', ' ') : '') +
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
            { url: '/user', methods: ['POST'] },
            { url: '/user/login', methods: ['GET'] },
            { url: '/user/bulk', methods: ['POST'] },
            { url: /^\/pontoInteresse/ },
            { url: /^\/evento/ },
            { url: /^\// }
        ]
    })
);
// tratamento de erros do validate_jwt
app.use(function (e, req, res, next) {
    (e.name === "UnauthorizedError") ?
        res.status(e.status).json(e.inner) :
        next(e);
});

//* Rotas
app.use('/exemplo', exemploRoute)
app.use('/user', userRoutes)
app.use('/pontoInteresse', pontoInteresseRoute)
app.use('/evento', eventoRoute)
app.use('/reserva', reservaRoute)

// Rota de Introdução
app.use('/', (req, res) => {
    res.status(200).json({msg: 'Yo yo, o backend tá aqui'});
})






// * daqui pra baixo são só cenas para iniciar a bd como deve ser
// * e depois iniciar o app.listen()

async function assertDatabaseConnectionOk() {
    console.log(`\x1b[30mChecking database connection...`);
    try {
        await sequelize.authenticate();
        console.log('Database connection OK!');
    } catch (error) {
        console.log('\x1b[31mUnable to connect to the database:\x1b[0m');
        console.log(error.message);
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
