const { Sequelize } = require('sequelize');

// todo: Github Action para alojar no heroku

const sequelize = new Sequelize(
    'pi3-sequelize',    // nome da db
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
                        'resposta',
                        'visita'
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