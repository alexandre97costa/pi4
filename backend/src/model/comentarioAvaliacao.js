const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('comentario_avaliacao',
        {
            comentario: DataTypes.STRING,
            avaliacao: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
        },
        {
            name: { singular: 'comentario_avaliacao', plural: 'comentarios_avaliacoes' },
            underscored: true, // passa de 'createdAt' para 'created_at'. O postgres agradece :)
            freezeTableName: true, // não faz plurais nas relações com outras tabelas. Os devs agradecem :D
            paranoid: true, // na prática, faz com que os records não sejam eliminados, mas sim escondidos (soft-delete) 
            timestamps: true, // created_at, updated_at, e deleted_at
            hooks: {
                afterCreate: async (ca) => {
                    // refresh ao avg_avaliacao do PI correspondente
                    let count = await sequelize.models.comentario_avaliacao.count({ where: { ponto_interesse_id: ca.ponto_interesse_id } })
                    let sum = await sequelize.models.comentario_avaliacao.sum('avaliacao', { where: { ponto_interesse_id: ca.ponto_interesse_id } })
                    let avg = (sum / count).toFixed(2)

                    await sequelize.models.ponto_interesse
                        .update({ avg_avaliacao: avg }, { where: { id: ca.ponto_interesse_id } })
                        .then(result => console.log('PI #' + ca.ponto_interesse_id + ' -> avg_avaliação atualizada'))
                        .catch(e => console.error(e))
                }
            }
        }
    )
}