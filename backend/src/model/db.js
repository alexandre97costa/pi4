const { Sequelize } = require('sequelize');

// todo: Github Action para alojar no heroku

const sequelize = new Sequelize(
    'adm-test-database',    // nome da db
    'postgres',         // user
    'postgres',         // pass
    {
        host: 'localhost',
        port: '5432',
        dialect: 'postgres',
        logging: false,
        define: {
            // hooks globais, atingem todos os modelos
            hooks: {
                afterCreate: model => {
                    const ignoreModels = [
                        // mete aqui as tabelas que NÃO queres ter a aparecer na consola quando são criadas.
                        'uma-cena-qualquer'
                    ]
                    if (!ignoreModels.includes(model.constructor.name)) {
                        console.log('\x1b[37m\x1b[46m ' + model.constructor.name + '(#' + model.id + ') criado \x1b[0m ')
                    }
                },
                afterUpdate: model => {
                    console.log('\x1b[37m\x1b[43m ' + model.constructor.name + '(#' + model.id + ') atualizado \x1b[0m ')
                },
                afterDestroy: model => {
                    console.log('\x1b[37m\x1b[41m ' + model.constructor.name + '(#' + model.id + ') eliminado ⚠ \x1b[0m ')
                }
            }
        }
    }
)

sequelize.sync()

module.exports = sequelize 