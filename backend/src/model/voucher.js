const { DataTypes } = require('sequelize')
// const Utilizador = require('./utilizador')
// const Recompensa = require('./recompensa')

module.exports = (sequelize) => {
    sequelize.define('voucher',
        {
            data_compra: {
                type: DataTypes.DATEONLY,
                allowNull: false
            },
            data_validade: {
                type: DataTypes.DATEONLY,
                allowNull: false
            },
            data_usado: DataTypes.DATE,
            usado: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
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
}

// Voucher.belongsTo(Utilizador, { foreignKey: 'visitante_id' })
// Voucher.belongsTo(Recompensa, { foreignKey: 'recompensa_id' })
