const { DataTypes } = require('sequelize')
const sequelize = require('../config/Database')
const bcrypt = require('bcrypt')

const Evento = sequelize.define('evento',
    {
        num_pontos: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        nome_evento: {
            type: DataTypes.STRING,
            allowNull: false
        },
        num_vagas: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
            allowNull: false
        },
        data_inicio: {
            type: DataTypes.DATE,
            allowNull: false
        },
        data_fim: {
            type: DataTypes.DATE,
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

module.exports = Evento