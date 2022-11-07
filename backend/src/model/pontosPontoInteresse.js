
// const PontoInteresse = require('./pontoInteresse')
// const Utilizador = require('./utilizador')

module.exports = (sequelize) => {
sequelize.define('pontos_ponto_interesse',
    {},
    {
        underscored: true, // passa de 'createdAt' para 'created_at'. O postgres agradece :)
        freezeTableName: true, // não faz plurais nas relações com outras tabelas. Os devs agradecem :D
        paranoid: true, // na prática, faz com que os records não sejam eliminados, mas sim escondidos (soft-delete) 
        timestamps: true, // created_at, updated_at, e deleted_at
    }
)
}

// PontosPontoInteresse.belongsTo(PontoInteresse, { foreignKey: 'ponto_interesse_id' })
// PontosPontoInteresse.belongsTo(Utilizador, { foreignKey: 'visitante_id' })