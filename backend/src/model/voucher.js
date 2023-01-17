const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('voucher',
        {
            data_compra: {
                type: DataTypes.DATEONLY,
                allowNull: false,
                defaultValue: DataTypes.NOW
            },
            data_validade: {
                type: DataTypes.DATEONLY,
                allowNull: false
            },
            data_usado: DataTypes.DATE,
            // todo: definido no controlador
            pontos_gastos: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            name: { singular: 'voucher', plural: 'vouchers' },
            underscored: true, // passa de 'createdAt' para 'created_at'. O postgres agradece :)
            freezeTableName: true, // não faz plurais nas relações com outras tabelas. Os devs agradecem :D
            paranoid: true, // na prática, faz com que os records não sejam eliminados, mas sim escondidos (soft-delete) 
            timestamps: true, // created_at, updated_at, e deleted_at
            hooks: {
                afterCreate: async v => {
                    // retirar pontos ao utilizador
                    await sequelize.models.utilizador.decrement(
                        { pontos: v.pontos_gastos },
                        { where: { id: v.visitante_id } }
                    )
                }
            }
        }
    )
}