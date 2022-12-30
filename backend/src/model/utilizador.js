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
                    len: {
                        args: [6, 30],
                        msg: 'A password tem que conter entre 6 e 30 caracteres.'
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
                        args: new Date(new Date().setFullYear(new Date().getFullYear() -13)).toString(),
                        msg: 'Precisa de ter mais de 13 anos para se resgistar.'
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

                    // por defeito, todos os users começam como visitante
                    utilizador.tipo_utilizador_id = 1

                    // encriptar password
                    return bcrypt.hash(utilizador.password, 10)
                        .then(hash => { utilizador.password = hash; })
                        .catch(err => { throw new Error(err); });
                }
            }
        }
    )
}