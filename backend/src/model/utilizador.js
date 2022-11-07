const { DataTypes } = require('sequelize')
const sequelize = require('../config/Database')
import TipoUtilizador from './tipoUtilizador'
import CandidaturaAT from './candidaturaAT'
import Reserva from './reserva'
import ComentarioAvaliacao from './comentarioAvaliacao'
import PontosEvento from './pontosEvento'
import PontosPontoInteresse from './pontosPontoInteresse'
import Voucher from './voucher'
import PontoInteresse from './pontoInteresse'
import Distrito from './distrito'

const Utilizador = sequelize.define('utilizador',
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
    }
)

Utilizador.belongsTo(TipoUtilizador, { foreignKey: 'tipo_utilizador_id' })
Utilizador.hasMany(CandidaturaAT, { foreignKey: 'visitante_id' })
Utilizador.hasMany(Reserva, { foreignKey: 'visitante_id' })
Utilizador.hasMany(ComentarioAvaliacao, { foreignKey: 'visitante_id' })
Utilizador.hasMany(PontosEvento, { foreignKey: 'visitante_id' })
Utilizador.hasMany(PontosPontoInteresse, { foreignKey: 'visitante_id' })
Utilizador.hasMany(Voucher, { foreignKey: 'visitante_id' })
Utilizador.hasMany(PontoInteresse, { foreignKey: 'agente_turistico_id' })
Utilizador.hasMany(Distrito, { foreignKey: 'responsavel_regiao_id' })

module.exports = Utilizador