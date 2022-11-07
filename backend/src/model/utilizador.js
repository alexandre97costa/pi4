const { DataTypes } = require('sequelize')
const sequelize = require('../config/Database')
import TipoUtilizador from './tipoUtilizador'
import CandidaturaAT from './candidaturaAT'
import Reserva from './reserva'
import PontosEvento from './pontosEvento'
import ComentarioAvaliacao from './comentarioAvaliacao'
import PontosPontoInteresse from './pontosPontoInteresse'
import Voucher from './voucher'
import Distrito from './distrito'
import PontoInteresse from './pontoInteresse'

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

module.exports = Utilizador