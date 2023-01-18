
var sequelize = require('../config/database')
const { Op } = require("sequelize")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { dev: devClass } = require('../_dev/dev')
const dev = new devClass;
require('dotenv').config()
const {
    candidatura_at,
    comentario_avaliacao,
    distrito,
    evento,
    freguesia,
    imagem,
    municipio,
    ponto_interesse,
    ponto_interesse_recompensa,
    pontos_evento,
    pontos_ponto_interesse,
    recompensa,
    reserva,
    sessao,
    tipo_evento,
    tipo_interesse,
    tipo_utilizador,
    utilizador,
    voucher
} = sequelize.models
// * no final, podem-se apagar os que não estão a ser usados


module.exports = {

    // todo: estes controllers todos

    get: async (req, res) => { //✅
        // * filtros
        const id = req.params?.id ?? 0
        const titulo_desc = req.query?.titulo_desc ?? '%'
        const min_pontos = req.query?.min_pontos ?? 0
        const max_pontos = req.query?.max_pontos ?? 0
        const tipo_interesse_id = req.query?.tipo_interesse_id ?? 0
        const validado = !!(req.query?.validado ?? true)         // True: Só recompensas validadas; False: Só recompensas por validar

        // ? a recompensa não tem ponto de interesse, tem que se filtrar pela associação
        const ponto_interesse_id = req.query?.ponto_interesse_id ?? 0

        // * ordenação e paginação
        const order = req.query?.order ?? 'nome'
        const direction = req.query?.direction ?? 'asc'
        const offset = req.query?.offset ?? 0
        const limit = req.query?.limit ?? 0

        await recompensa
            .findAndCountAll({
                where: {
                    id: !!+id ?
                        +id :
                        { [Op.ne]: 0 },
                    titulo: { [Op.iLike]: '%' + titulo_desc + '%' },
                    descricao: { [Op.iLike]: '%' + titulo_desc + '%' },
                    pontos: !!max_pontos ? // basta ver se o max foi mexido, o min é wtv
                        { [Op.between]: [+min_pontos, +max_pontos] } :
                        { [Op.ne]: -1 },
                    tipo_interesse_id: !!+tipo_interesse_id ?
                        +tipo_interesse_id :
                        { [Op.ne]: 0 },
                    validado: validado
                },
                include: [
                    {
                        model: ponto_interesse_recompensa,
                        required: true,
                        attributes: ['ponto_interesse_id'],
                        where: {
                            ponto_interesse_id: !!ponto_interesse_id ?
                                +ponto_interesse_id :
                                { [Op.ne]: 0 }
                        }
                    }
                ],
                order: [[order, direction]],
                offset: offset,
                limit: !!limit ? limit : null,
            })
            .then(output => {
                return !output.count ?
                    res.status(404).json({ msg: 'Não existem recompensas que correspondam aos filtros solicitados.' }) :
                    res.status(200).json({ data: output.rows, count: output.count })
            })
            .catch(error => {
                res.status(400).json({ error })
                dev.error(e)
                return
            })

    },

    post: async (req, res) => {
        // apenas agentes e responsaveis podem criar recompensas
        if (req.auth.tipo !== 2 || req.auth.tipo !== 3)
            return res.status(401).json({ msg: 'Sem autorização para criar recompensas.' })

        const required_params = [
            'titulo',
            'descricao',
            'pontos',
            'tipo_interesse_id'
        ]
        const check_all_required = required_params.every(param => req.body.hasOwnProperty(param))
        if (!check_all_required)
            return res.status(400).json({ msg: 'Faltam dados para poder criar a recompensa.' })

        const { titulo, descricao, pontos, tipo_interesse_id } = req.body

        await recompensa
            .create({
                titulo: titulo,
                descricao: descricao,
                pontos: pontos,
                tipo_interesse_id: tipo_interesse_id
            })
            .then(output => {
                return res.status(200).json({
                    msg: 'Recompensa criada.',
                    recompensa: output
                })
            })
            .catch(error => {
                res.status(400).json({ error })
                dev.error(error)
                return
            });
    },

    validar: async (req, res) => {
        if (req.auth.tipo !== 3)
            return res.status(401).json({ msg: 'Apenas responsáveis de região podem validar recompensas.' })

        if (!req.body.hasOwnProperty('validado'))
            return res.status(400).json({ msg: 'Faltam dados para validar a recompensa.' })

        const { id } = req.params
        const { validado } = req.body

        // verificar se a recompensa realmente existe
        const _recompensa = await recompensa.findByPk(id)
        if (_recompensa === null)
            return res.status(404).json({ msg: 'A recompensa fornecida não existe ou foi eliminada.' })

        await _recompensa
            .update({ validado: !!validado })
            .then(output => {
                return !output[0] ?
                    res.status(400).json({ msg: 'Recompensa não atualizada.' }) :
                    res.status(200).json({ msg: 'Recompensa atualizada.', recompensa: output[0] })
            })
            .catch(error => {
                res.status(400).json({ error })
                dev.error(error)
                return
            })
    },

    editar: async (req, res) => {
        if (req.auth.tipo !== 3)
            return res.status(401).json({ msg: 'Apenas responsáveis de região podem editar recompensas.' })

        const required_params = [
            'titulo',
            'descricao',
            'pontos',
            'tipo_interesse_id'
        ]
        const check_all_required = required_params.every(param => req.body.hasOwnProperty(param))
        if (!check_all_required)
            return res.status(400).json({ msg: 'Faltam dados para poder criar a recompensa.' })

        const { titulo, descricao, pontos, tipo_interesse_id } = req.body

        // verificar se a recompensa realmente existe
        const _recompensa = await recompensa.findByPk(id)
        if (_recompensa === null)
            return res.status(404).json({ msg: 'A recompensa fornecida não existe ou foi eliminada.' })

        await _recompensa
            .update({
                titulo: titulo,
                descricao: descricao,
                pontos: pontos,
                tipo_interesse_id: tipo_interesse_id
            })
            .then(output => {
                return !output[0] ?
                    res.status(400).json({ msg: 'Recompensa não atualizada.' }) :
                    res.status(200).json({ msg: 'Recompensa atualizada.', recompensa: output[0] })
            })
            .catch(error => {
                res.status(400).json({ error })
                dev.error(error)
                return
            })
    },

    delete: async (req, res) => {
        if (req.auth.tipo !== 3)
            return res.status(401).json({ msg: 'Apenas responsáveis de região podem editar recompensas.' })

        const { id } = req.params

        // verificar se a recompensa realmente existe
        const _recompensa = await recompensa.findByPk(id)
        if (_recompensa === null)
            return res.status(404).json({ msg: 'A recompensa fornecida não existe ou foi eliminada.' })

        await _recompensa.destroy()
            .then(output => {
                return !output ?
                    res.status(400).json({ msg: 'Recompensa não elimininada.' }) :
                    res.status(200).json({ msg: 'Recompensa elimininada.' })
            })
            .catch(error => {
                res.status(400).json({ error })
                dev.error(error)
                return
            })
    },
}
