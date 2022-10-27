const { DataTypes } = require('sequelize')
const sequelize = require('../config/Database')

const PontoInteresse = sequelize.define('ponto_interesse',
    {
        nome_ponto_interesse: {
            type: DataTypes.STRING,
            allowNull: false
        },
        morada: {
            type: DataTypes.STRING,
            allowNull: false
        },
        codigo_postal: {
            type: DataTypes.STRING(8),
            allowNull: false,
            validate: {
                is: /^[0-9]{4}-[0-9]{3}$/i // regex codigo postal (4 numeros + hiphen + 3 numeros)
            }
        },
        num_telefone: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        num_pontos: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        descricao: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        underscored: true, // passa de 'createdAt' para 'created_at'. O postgres agradece :)
        freezeTableName: true, // não faz plurais nas relações com outras tabelas. Os devs agradecem :D
        paranoid: true, // na prática, faz com que os records não sejam eliminados, mas sim escondidos (soft-delete) 
        timestamps: true, // created_at, updated_at, e deleted_at
    }
)

module.exports = PontoInteresse