const { DataTypes } = require('sequelize')
const sequelize = require('../db')
const bcrypt = require('bcrypt')

//! Não eliminar pelize, dá sempre ter jeito ter uma tabela bem definida para os copy paste :p

const Exemplo = sequelize.define('exemplo',
    {
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descricao: {
            type: DataTypes.STRING
        }
    },
    {
        underscored: true, // passa de 'createdAt' para 'created_at'. O postgres agradece :)
        freezeTableName: true, // não faz plurais nas relações com outras tabelas. Os devs agradecem :D
        paranoid: true, // na prática, faz com que os records não sejam eliminados, mas sim escondidos (soft-delete) 
        timestamps: true, // created_at, updated_at, e deleted_at
    }
)

module.exports = { Exemplo }