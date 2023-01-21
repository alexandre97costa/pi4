const { Sequelize } = require('sequelize');
const { applyExtraSetup } = require('./extra-setup.js');

const sequelize = new Sequelize(
    'pi4',              // nome da db
    'postgres',         // user
    'ola',         // pass
    {
        host: 'localhost',
        port: '5432',
        dialect: 'postgres',
        logging: false,
        // logging: console.log,
        define: {
            // hooks globais, atingem todos os modelos
            hooks: {
                afterCreate: model => {
                    const ignoreModels = [
                        // mete aqui as tabelas que NÃO queres ter a aparecer na consola quando são criadas.
                        'uma-cena-qualquer'
                    ]
                    if (!ignoreModels.includes(model.constructor.name)) {
                        console.log('\x1b[37m\x1b[46m ' + model.constructor.name + ' #' + model.id + ' criado \x1b[0m ')
                    }
                },
                afterUpdate: model => {
                    console.log('\x1b[37m\x1b[43m ' + model.constructor.name + ' #' + model.id + ' atualizado \x1b[0m ')
                },
                afterDestroy: model => {
                    console.log('\x1b[37m\x1b[41m ' + model.constructor.name + ' #' + model.id + ' eliminado ⚠ \x1b[0m ')
                }
            }
        }
    }
)

// traz as tabelas todas
const models = [
    require('../model/candidatura_at'),
    require('../model/comentario_avaliacao'),
    require('../model/distrito'),
    require('../model/evento'),
    require('../model/freguesia'),
    require('../model/imagem'),
    require('../model/municipio'),
    require('../model/ponto_interesse'),
    require('../model/ponto_interesse_recompensa'),
    require('../model/scan_evento'),
    require('../model/scan_ponto_interesse'),
    require('../model/recompensa'),
    require('../model/reserva'),
    require('../model/sessao'),
    require('../model/tipo_evento'),
    require('../model/tipo_interesse'),
    require('../model/tipo_utilizador'),
    require('../model/utilizador'),
    require('../model/voucher')
]
// define as tabelas todas (ou seja, cria-as)
for (const model of models) {
    model(sequelize)
}

// depois de termos a certeza que as tabelas existem todas,
// fazemos as relações
applyExtraSetup(sequelize);

module.exports = sequelize 