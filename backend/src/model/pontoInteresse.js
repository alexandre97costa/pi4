const { DataTypes } = require('sequelize')

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
                    is: {
                        args: /^[0-9]{4}-[0-9]{3}$/i, // regex codigo postal (4 numeros + hiphen + 3 numeros)
                        msg: 'o valor inserido não corresponde ao padrão xxxx-xxx'
                    } 
                }
            },
            num_telemovel: {
                type: DataTypes.STRING(50),
                allowNull: false,
                validate: {
                    is: {
                        args: /^[0-9]{9}$/i, // regex nº tlm (9 numeros)
                        msg: 'o valor inserido não tem 9 números'
                    } 
                }
            },
            num_pontos: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            descricao: {
                type: DataTypes.STRING,
                allowNull: false
            },
            validado: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                default: false
            },
            // para evitar um count desnecessário à bd, sempre que há um scan este nº aumenta
            // para mais info, ver o modelo pontos_ponto_interesse
            count_scans: {
                type: DataTypes.INTEGER,
                allowNull: false,
                default: 0
            },
            // para evitar um avg desnecessário à bd, sempre que há uma aval este nº atualiza
            // para mais info, ver o modelo comentario_avaliacao
            avg_avaliacao: {
                type: DataTypes.DECIMAL,
                allowNull: false,
                default: 0.00
            }
        },
        {
            name: { singular: 'ponto_interesse', plural: 'pontos_interesse' },
            underscored: true, // passa de 'createdAt' para 'created_at'. O postgres agradece :)
            freezeTableName: true, // não faz plurais nas relações com outras tabelas. Os devs agradecem :D
            paranoid: true, // na prática, faz com que os records não sejam eliminados, mas sim escondidos (soft-delete) 
            timestamps: true, // created_at, updated_at, e deleted_at
        }
    )
}