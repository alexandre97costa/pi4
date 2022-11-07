const { DataTypes } = require('sequelize')
const sequelize = require('../config/Database')
import Reserva from './reserva'
import Evento from './evento'

const Sessao = sequelize.define('sessao',
    {
        data_hora: {
            type: DataTypes.DATE,
            allowNull: false
        },
        inicio_evento: DataTypes.BOOLEAN,
        fim_evento: DataTypes.BOOLEAN
    },
    {
        underscored: true, // passa de 'createdAt' para 'created_at'. O postgres agradece :)
        freezeTableName: true, // não faz plurais nas relações com outras tabelas. Os devs agradecem :D
        paranoid: true, // na prática, faz com que os records não sejam eliminados, mas sim escondidos (soft-delete) 
        timestamps: true, // created_at, updated_at, e deleted_at
    }
)

Sessao.hasMany(Reserva, { foreignKey: 'sessao_id' })
Sessao.belongsTo(Evento, { foreignKey: 'evento_id' })

module.exports = Sessao