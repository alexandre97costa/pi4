const express = require('express')
const cors = require('cors')
require('dotenv').config();
const path = require('path') // para enviar ficheiros
const jwt_middleware = require('../jwt/jwt_middleware') // para login
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
app.use((req, res, next) => {
    console.log('\x1b[37m\x1b[42m ' + req.method + ' \x1b[0m ' + req.url);
    next()
});

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
