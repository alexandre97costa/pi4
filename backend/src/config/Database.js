const { Sequelize } = require('sequelize');
const { applyExtraSetup } = require('./extra-setup.js');

const sequelize = new Sequelize(
    'pi4',              // nome da db
    'postgres',         // user
    '20447',         // pass
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
    require('../model/candidaturaAT'),
    require('../model/comentarioAvaliacao'),
    require('../model/distrito'),
    require('../model/evento'),
    require('../model/freguesia'),
    require('../model/imagem'),
    require('../model/municipio'),
    require('../model/pontoInteresse'),
    require('../model/pontoInteresseRecompensa'),
    require('../model/pontosEvento'),
    require('../model/pontosPontoInteresse'),
    require('../model/recompensa'),
    require('../model/reserva'),
    require('../model/sessao'),
    require('../model/tipoEvento'),
    require('../model/tipoInteresse'),
    require('../model/tipoUtilizador'),
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