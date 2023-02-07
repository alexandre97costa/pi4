const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('reserva',
        {
            nome: {
                type: DataTypes.STRING,
                allowNull: false
            },
            pessoas: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            validado: {
                type: DataTypes.BOOLEAN,
                defaultValue: null
            },
            codigo_confirmacao: {
                type: DataTypes.STRING(5),
                allowNull: false,
                defaultValue: 'A0000'
            },
            confirmado: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            observacoes: DataTypes.STRING
        },
        {
            name: { singular: 'reserva', plural: 'reservas' },
            underscored: true, // passa de 'createdAt' para 'created_at'. O postgres agradece :)
            freezeTableName: true, // não faz plurais nas relações com outras tabelas. Os devs agradecem :D
            paranoid: true, // na prática, faz com que os records não sejam eliminados, mas sim escondidos (soft-delete) 
            timestamps: true, // created_at, updated_at, e deleted_at
            hooks: {
                afterCreate: async reserva => {
                    // exemplo de resultado final: "F0345"
                    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                    reserva.codigo_confirmacao =
                        characters.charAt(Math.floor(Math.random() * characters.length))
                        + reserva.id.toString().slice(-4).padStart(4, '0')
                    await reserva.save()
                }
            }
        }
    )
}