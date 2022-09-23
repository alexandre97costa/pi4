const { DataTypes } = require('sequelize')
const sequelize = require('./db')
const bcrypt = require('bcrypt')

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
        freezeTableName: true,
        paranoid: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at',
    }
)