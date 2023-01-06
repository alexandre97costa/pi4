const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('scan_ponto_interesse',
        {
            pontos_recebidos: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            underscored: true, // passa de 'createdAt' para 'created_at'. O postgres agradece :)
            freezeTableName: true, // não faz plurais nas relações com outras tabelas. Os devs agradecem :D
            paranoid: true, // na prática, faz com que os records não sejam eliminados, mas sim escondidos (soft-delete) 
            timestamps: true, // created_at, updated_at, e deleted_at
            hooks: {
                afterCreate: async (ppi) => {
                    // incrementa o count_scans do PI correspondente
                    await sequelize.models.ponto_interesse
                        .increment('count_scans', { where: { id: ppi.ponto_interesse_id } })
                        .then(result => {
                            console.log('PI #' + result[0][0][0].id + ' -> count_scans atualizado')
                        })
                        .catch(e => console.error(e))
                }
            }
        }
    )
}