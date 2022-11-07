const { DataTypes } = require('sequelize')
// const Evento = require('./evento')
// const Freguesia = require('./freguesia')
// const Utilizador = require('./utilizador')
// const Imagem = require('./imagem')
// const ComentarioAvaliacao = require('./comentarioAvaliacao')
// const PontosPontoInteresse = require('./pontosPontoInteresse')
// const PontoInteresseRecompensa = require('./pontoInteresseRecompensa')
// const TipoInteresse = require('./tipoInteresse')

module.exports = (sequelize) => {
    sequelize.define('ponto_interesse',
        {
            nome: {
                type: DataTypes.STRING,
                allowNull: false
            },
            morada: {
                type: DataTypes.STRING,
                allowNull: false
            },
            codigo_postal: {
                type: DataTypes.STRING(8),
                allowNull: false,
                validate: {
                    is: /^[0-9]{4}-[0-9]{3}$/i // regex codigo postal (4 numeros + hiphen + 3 numeros)
                }
            },
            num_telemovel: {
                type: DataTypes.STRING(50),
                allowNull: false
            },
            num_pontos: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            descricao: {
                type: DataTypes.STRING,
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

// PontoInteresse.hasMany(Evento, { foreignKey: 'ponto_interesse_id' })
// PontoInteresse.belongsTo(Freguesia, { foreignKey: 'freguesia_id' })
// PontoInteresse.belongsTo(Utilizador, { foreignKey: 'agente_turistico_id' })
// PontoInteresse.hasMany(Imagem, { foreignKey: 'ponto_interesse_id' })
// PontoInteresse.hasMany(ComentarioAvaliacao, { foreignKey: 'ponto_interesse_id' })
// PontoInteresse.hasMany(PontosPontoInteresse, { foreignKey: 'ponto_interesse_id' })
// PontoInteresse.hasMany(PontoInteresseRecompensa, { foreignKey: 'ponto_interesse_id' })
// PontoInteresse.belongsTo(TipoInteresse, { foreignKey: 'tipo_interesse_id' })
