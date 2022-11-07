const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('candidatura_at',
        {
            localidade_at: {
                type: DataTypes.STRING(50),
                allowNull: false
            },
            texto_candidatura: {
                type: DataTypes.STRING(512),
                allowNull: false
            },
            estado: {
                type: DataTypes.BOOLEAN,
                allowNull: true
            },
            observacoes: DataTypes.STRING
        },
        {
            underscored: true, // passa de 'createdAt' para 'created_at'. O postgres agradece :)
            freezeTableName: true, // não faz plurais nas relações com outras tabelas. Os devs agradecem :D
            paranoid: true, // na prática, faz com que os records não sejam eliminados, mas sim escondidos (soft-delete) 
            timestamps: true, // created_at, updated_at, e deleted_at
        }
    )
}