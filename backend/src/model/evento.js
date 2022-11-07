const { DataTypes } = require('sequelize')
// const TipoEvento = require('./tipoEvento')
// const Sessao = require('./sessao')
// const PontosEvento = require('./pontosEvento')
// const PontoInteresse = require('./pontoInteresse')

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
            underscored: true, // passa de 'createdAt' para 'created_at'. O postgres agradece :)
            freezeTableName: true, // não faz plurais nas relações com outras tabelas. Os devs agradecem :D
            paranoid: true, // na prática, faz com que os records não sejam eliminados, mas sim escondidos (soft-delete) 
            timestamps: true, // created_at, updated_at, e deleted_at
        }
    )
}

// Evento.belongsTo(TipoEvento, { foreignKey: 'tipo_evento_id' })
// Evento.hasMany(Sessao, { foreignKey: 'evento_id' })
// Evento.hasMany(PontosEvento, { foreignKey: 'evento_id' })
// Evento.belongsTo(PontoInteresse, { foreignKey: 'ponto_interesse_id' })
