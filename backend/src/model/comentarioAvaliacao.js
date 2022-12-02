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
        }
    )
}