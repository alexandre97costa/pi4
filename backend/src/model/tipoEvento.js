const { DataTypes } = require('sequelize')
const sequelize = require('../config/Database')
const bcrypt = require('bcrypt')

const TipoEvento = sequelize.define('tipo_evento',
    {
        nome_tipo_evento: DataTypes.STRING  
    },
    {
        underscored: true, // passa de 'createdAt' para 'created_at'. O postgres agradece :)
        freezeTableName: true, // não faz plurais nas relações com outras tabelas. Os devs agradecem :D
        paranoid: true, // na prática, faz com que os records não sejam eliminados, mas sim escondidos (soft-delete) 
        timestamps: true, // created_at, updated_at, e deleted_at
    }
)

module.exports = TipoEvento