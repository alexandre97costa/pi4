const { DataTypes } = require('sequelize')
const sequelize = require('../config/Database')
const Voucher = require('./voucher')
const PontoInteresseRecompensa = require('./pontoInteresseRecompensa')
const TipoInteresse = require('./tipoInteresse')

const Recompensa = sequelize.define('recompensa',
    {
        // validado???
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        titulo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descricao: {
            type: DataTypes.STRING,
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

Recompensa.hasMany(Voucher, { foreignKey: 'recompensa_id' })
Recompensa.hasMany(PontoInteresseRecompensa, { foreignKey: 'recompensa_id' })
Recompensa.belongsTo(TipoInteresse, { foreignKey: 'tipo_interesse_id' })

module.exports = Recompensa