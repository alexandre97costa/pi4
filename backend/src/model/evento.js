const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('evento',
        {
            nome: {
                type: DataTypes.STRING,
                allowNull: false
            },
            descricao: {
                type: DataTypes.STRING,
                allowNull: false
            },
            pontos: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            lotacao: {
                type: DataTypes.INTEGER,
                defaultValue: 0,
                allowNull: false
            },
            // horas_duracao: quantas horas demora o evento.
            // É usado juntamente com a data/hora das sessoes
            // para determinar se um scan a este evento é válido
            horas_duracao: { 
                type: DataTypes.INTEGER,
                defaultValue: 1,
                allowNull: false
            },
            codigo_uuid: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4
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
                }
            }
        }
    )
}