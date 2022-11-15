const { DataTypes } = require('sequelize')
const bcrypt = require('bcrypt')

module.exports = (sequelize) => {
    sequelize.define('utilizador',
        {
            nome: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },
            data_nascimento: {
                type: DataTypes.DATEONLY,
                allowNull: false
            }
        },
        {
            underscored: true, // passa de 'createdAt' para 'created_at'. O postgres agradece :)
            freezeTableName: true, // não faz plurais nas relações com outras tabelas. Os devs agradecem :D
            paranoid: true, // na prática, faz com que os records não sejam eliminados, mas sim escondidos (soft-delete) 
            timestamps: true, // created_at, updated_at, e deleted_at
            hooks: {
                beforeCreate: (utilizador) => {

                    return bcrypt.hash(utilizador.password, 10)
                        .then(hash => { utilizador.password = hash; })
                        .catch(err => { throw new Error(err); });
                }
            }
        }
    )
}