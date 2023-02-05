const { DataTypes } = require('sequelize')
const bcrypt = require('bcrypt')

module.exports = (sequelize) => {
    sequelize.define('utilizador',
        {
            nome: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: { msg: 'O nome não pode estar vazio.' },
                    is: {
                        args: /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/g, // só letras e espaços, incluindo acentos
                        msg: 'O nome só pode ter letras e espaços.'
                    }
                }
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    notNull: { msg: 'O email não pode estar vazio.' },
                    isEmail: { msg: 'O email inserido não é válido.' }
                }
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: { msg: 'A password não pode estar vazia.' },
                    notEmpty: { msg: 'A password não pode estar vazia.' },
                    min: {
                        args: [6],
                        msg: 'A password precisa de ter no minimo 6 carateres'
                    },
                    is: {
                        args: ['^[A-Za-zÀ-ÖØ-öø-ÿ\\.\\/\\d\\w@$!%*#?&]{6,}$'],
                        msg: 'A password precisa de ter letras, numeros, e um dos carateres especiais: _ @ $ ! % * # ? &.'
                    }
                }
            },
            data_nascimento: {
                type: DataTypes.DATEONLY,
                allowNull: false,
                validate: {
                    notNull: { msg: 'A data de nascimento não pode estar vazia.' },
                    isDate: { msg: 'A data de nascimento inserida não é valida.' },
                    isBefore: {
                        args: new Date(new Date().setFullYear(new Date().getFullYear() - 13)).toString(),
                        msg: 'Precisa de ter mais de 13 anos para se resgistar.'
                    }
                }
            },
            pontos: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0,
                validate: {
                    min: {
                        args: -1,
                        msg: 'Os pontos não podem ser negativos.'
                    }
                }
            }
        },
        {
            name: { singular: 'utilizador', plural: 'utilizadores' },
            underscored: true, // passa de 'createdAt' para 'created_at'. O postgres agradece :)
            freezeTableName: true, // não faz plurais nas relações com outras tabelas. Os devs agradecem :D
            paranoid: true, // na prática, faz com que os records não sejam eliminados, mas sim escondidos (soft-delete) 
            timestamps: true, // created_at, updated_at, e deleted_at
            hooks: {
                beforeCreate: (utilizador) => {
                    // capitalizar o nome
                    utilizador.nome =
                        utilizador.nome
                            .split(' ')
                            .map(word => {
                                return word[0].toUpperCase() + word.substring(1, word.length)
                            })
                            .join(' ');

                    // encriptar password
                    return bcrypt.hash(utilizador.password, 10)
                        .then(hash => { utilizador.password = hash; })
                        .catch(err => { throw new Error(err); });
                },
                beforeUpdate: (utilizador) => {
                    // se no update foi mudada a passe, é preciso encriptá-la
                    if (utilizador.previous().hasOwnProperty('password')) {
                        return bcrypt.hash(utilizador.password, 10)
                            .then(hash => { 
                                utilizador.password = hash; 
                                console.log('nova: ', utilizador.password)
                            })
                            .catch(err => { throw new Error(err); });
                    }
                },
                afterDestroy: async (utilizador) => {

                    await sequelize.models.reserva
                        .destroy({ where: { visitante_id: utilizador.id } })

                    await sequelize.models.comentario_avaliacao
                        .destroy({ where: { visitante_id: utilizador.id } })

                    await sequelize.models.scan_evento
                        .destroy({ where: { visitante_id: utilizador.id } })

                    await sequelize.models.scan_ponto_interesse
                        .destroy({ where: { visitante_id: utilizador.id } })

                }
            }
        }
    )
}