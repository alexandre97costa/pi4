const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('evento',
        {
            num_pontos: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            nome: {
                type: DataTypes.STRING,
                allowNull: false
            },
            descricao: {
                type: DataTypes.STRING,
                allowNull: false
            },
            num_vagas: {
                type: DataTypes.INTEGER,
                defaultValue: 0,
                allowNull: false
            }
        },
        {
            name: { singular: 'evento', plural: 'eventos' },
            underscored: true, // passa de 'createdAt' para 'created_at'. O postgres agradece :)
            freezeTableName: true, // não faz plurais nas relações com outras tabelas. Os devs agradecem :D
            paranoid: true, // na prática, faz com que os records não sejam eliminados, mas sim escondidos (soft-delete) 
            timestamps: true, // created_at, updated_at, e deleted_at
            hooks: {
                afterCreate: async (item, index) => {
                    console.log(item)
                    console.log("----------------")
                    console.log(index)
                    console.log("----------------")
                    console.log(sequelize)
                }
            }
        }
    )
}