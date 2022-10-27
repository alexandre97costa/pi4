const { DataTypes } = require('sequelize')
const sequelize = require('../config/Database')

const Reserva = sequelize.define('reserva',
    {
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        num_pessoas: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        validado: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        confirmado: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        observacoes: DataTypes.STRING
    },
    {
        underscored: true, // passa de 'createdAt' para 'created_at'. O postgres agradece :)
        freezeTableName: true, // não faz plurais nas relações com outras tabelas. Os devs agradecem :D
        paranoid: true, // na prática, faz com que os records não sejam eliminados, mas sim escondidos (soft-delete) 
        timestamps: true, // created_at, updated_at, e deleted_at
    }
)

module.exports = Reserva