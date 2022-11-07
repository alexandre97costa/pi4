const { DataTypes } = require('sequelize')
const sequelize = require('../config/Database')
import Evento from './evento'
import Utilizador from './utilizador'

const PontosEvento = sequelize.define('pontos_evento',
    {},
    {
        underscored: true, // passa de 'createdAt' para 'created_at'. O postgres agradece :)
        freezeTableName: true, // não faz plurais nas relações com outras tabelas. Os devs agradecem :D
        paranoid: true, // na prática, faz com que os records não sejam eliminados, mas sim escondidos (soft-delete) 
        timestamps: true, // created_at, updated_at, e deleted_at
    }
)

module.exports = PontosEvento