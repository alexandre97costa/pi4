const { DataTypes } = require('sequelize')

// const PontoInteresse = require('./pontoInteresse')
// const Utilizador = require('./utilizador')

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
            underscored: true, // passa de 'createdAt' para 'created_at'. O postgres agradece :)
            freezeTableName: true, // não faz plurais nas relações com outras tabelas. Os devs agradecem :D
            paranoid: true, // na prática, faz com que os records não sejam eliminados, mas sim escondidos (soft-delete) 
            timestamps: true, // created_at, updated_at, e deleted_at
        }
    )
}

// ComentarioAvaliacao.belongsTo(Utilizador, { foreignKey: 'visitante_id' })
// ComentarioAvaliacao.belongsTo(PontoInteresse, { foreignKey: 'ponto_interesse_id' })
