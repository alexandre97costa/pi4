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
                allowNull: false,
                defaultValue: () => {
                    let date = new Date()
                    let nova = new Date(date.setDate(date.getDate() + 10))

                    const year = nova.getFullYear()
                    const month = nova.getMonth() + 1
                    const day = nova.getDate()


                    return year + '-' + month + '-' + day
                }
            },
            data_usado: DataTypes.DATE,
            pontos_gastos: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            codigo_confirmacao: {
                type: DataTypes.STRING(5),
                allowNull: false,
                defaultValue: 'A0000'
            },
        },
        {
            name: { singular: 'voucher', plural: 'vouchers' },
            underscored: true, // passa de 'createdAt' para 'created_at'. O postgres agradece :)
            freezeTableName: true, // não faz plurais nas relações com outras tabelas. Os devs agradecem :D
            paranoid: true, // na prática, faz com que os records não sejam eliminados, mas sim escondidos (soft-delete) 
            timestamps: true, // created_at, updated_at, e deleted_at
            hooks: {
                afterCreate: async v => {
                    // alterar o codigo de confirmação
                    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

                    console.log(v.id)

                    v.codigo_confirmacao =
                        characters.charAt(Math.floor(Math.random() * characters.length))
                        + v.id.toString().slice(-4).padStart(4, '0')
                    await v.save()

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