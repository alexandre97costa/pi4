
var sequelize = require('../config/database')
const utilizadorController = require('./utilizador.js')
const bulk_users = require('../_dev/request bodies/create_user_in_bulk.json')
const { dev: devClass } = require('../_dev/dev')
const dev = new devClass;
const {
    utilizador,
} = sequelize.models

module.exports = {

    create_users: async (req, res) => {
        if (process.env.MODE !== 'dev') return res.send(403).json({ msg: 'Este endpoint só está disponível em ambiente de desenvolvimento.' })

        await utilizador
            .bulkCreate(bulk_users, { individualHooks: true })
            .then(response => res.status(200).json(response))
            .catch(error => res.status(400).json({ error }))
    },

    login_tipo: async (req, res) => {
        if (process.env.MODE !== 'dev') return res.send(403).json({ msg: 'Este endpoint só está disponível em ambiente de desenvolvimento.' })
        
        const { tipo } = req.params
        let { body } = req

        switch (+tipo) {
            default:
            case 1:
                body.email = "visitante@email.com"
                body.password = "password"
                break;
            case 2:
                body.email = "agente@email.com"
                body.password = "password"
                break;
            case 3:
                body.email = "responsavel@email.com"
                body.password = "password"
                break;
            case 4:
                body.email = "admin@email.com"
                body.password = "password"
                break;
        }
        utilizadorController.login(req, res)
    },
}