require('dotenv').config()
const express = require('express')
const cors = require('cors')
const interceptor = require('express-interceptor')
const { expressjwt: validate_jwt } = require('express-jwt');
const app = express()
app.set('port', process.env.PORT || 4001)
const port = app.get('port')
const sequelize = require('./config/database')
sequelize.sync(
    { alter: true }
)
const { dev: devClass } = require('./_dev/dev')
const dev = new devClass;

const dev_routes = require('./routes/dev')

const evento_routes = require('./routes/evento')
const ponto_interesse_routes = require('./routes/ponto_interesse')
const recompensa_routes = require('./routes/recompensa')
const reserva_routes = require('./routes/reserva')
const scan_routes = require('./routes/scan')
const utilizador_routes = require('./routes/utilizador')
const voucher_routes = require('./routes/voucher')

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
                (Object.keys(req.params).length !== 0 ? '\n\x1b[35m⤷ params \x1b[30m' + JSON.stringify(req.params).replaceAll('"', '\'') : '') +
                // query
                (!!req._parsedUrl.query ? '\n\x1b[35m⤷ query \x1b[30m' + req._parsedUrl.query.replaceAll('&', ' ') : '') +
                // body
                (!!req._body ? '\n\x1b[35m⤷ body \x1b[30m' + JSON.stringify(req.body).replaceAll('"', '\'') : '') +
                '\x1b[0m');

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
            { url: '/utilizador/login', methods: ['POST'] },

            // ? para os scans feitos fora da app, nao precisam de auth porque são redirecionados para o micro site
            { url: /^\/scan/, methods: ['GET'] },

            // ? para cenas que nos ajudam em modo dev
            // ? os controllers devolvem 403 se estiver em prod
            { url: /^\/dev/ },

            // { url: /^\// },
        ]
    })
);
// tratamento de erros do validate_jwt
app.use(function (e, req, res, next) {
    if (e.name === 'UnauthorizedError')
        return res.status(e.status).json({ msg: e.inner.message })

    console.log(e)
    next(e);
});

//* Rotas
app.use('/evento', evento_routes)
app.use('/pi', ponto_interesse_routes)
app.use('/recompensa', recompensa_routes)
app.use('/reserva', reserva_routes)
app.use('/scan', scan_routes)
app.use('/utilizador', utilizador_routes)
app.use('/voucher', voucher_routes)

app.use('/dev', dev_routes)

// Rota de Introdução
app.use('/', (req, res) => {
    res.status(200).json({
        msg: 'Vieste para o root. Se não era suposto, verifica o método ou o url!',
        method: req.method,
        url: req.baseUrl + req._parsedUrl.pathname
    });
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
        (process.env.MODE === "dev") ?
            console.log('\x1b[30mBackend online! \x1b[0m\x1b[34m▶ http://localhost:' + port + '\x1b[0m\n') :
            console.log('\x1b[30mBackend online!\x1b[0m\n')
    });
}
init();
