module.exports = (sequelize) => {
    sequelize.define('pontos_ponto_interesse',
        {},
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
                        .then(result => console.log('PI #' + result.id + ' -> count_scans ++'))
                        .catch(e => console.error(e))
                }
            }
        }
    )
}