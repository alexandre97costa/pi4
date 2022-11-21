require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { expressjwt: validate_jwt } = require('express-jwt');
const app = express()
app.set('port', process.env.PORT || 4001)
const port = app.get('port')
const sequelize = require('./config/Database')
sequelize.sync()

const exemploRoute = require('./routes/exemplo.js')
const userRoutes = require('./routes/user.js')

//* Middlewares
app.use(cors());
app.use(express.json());
// log dos pedidos todos que o servidor recebe
app.use((req, res, next) => {
    if (req.url === '/user/login') {
        console.log('\x1b[37m\x1b[42m ' + req.method + ' \x1b[0m ' + req.url + ' \x1b[30m👀 ' + req.body.email + '\x1b[0m');
    } else {
        console.log('\x1b[37m\x1b[42m ' + req.method + ' \x1b[0m ' + req.url);
    }
    next()
});
// validação jwt a tudo menos /login e /recuperar-password
app.use(
    validate_jwt({
        secret: process.env.JWT_SECRET,
        algorithms: [process.env.JWT_ALGORITHM],
    }).unless({ path: ['/user/login', '/recuperar-password'] })
);

//* Rotas
app.use('/exemplo', exemploRoute)
app.use('/user', userRoutes)

// Rota de Introdução
app.use('/', (req, res) => {
    res.send('Yo yo, o backend tá aqui');
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
    console.log(`\x1b[30mStarting backend in ` + process.env.MODE + ' mode...');
    await assertDatabaseConnectionOk();
    app.listen(port, () => {
        console.log('\x1b[30mBackend online! \x1b[0m\x1b[34m▶ http://localhost:' + port + '\x1b[0m')
    });
}
init();
