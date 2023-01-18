
var sequelize = require('../config/database')
const { Op } = require("sequelize")
const { dev: devClass } = require('../_dev/dev')
const dev = new devClass;
// * Como usar o Op:
// * https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#operators
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

    get: async (req, res) => {
        /*
        // * filtros
        let nome = req.query?.nome ?? '%'
        let reserva_id = req.params?.id ?? 0
        let visitante_id = req.query?.visitante_id ?? 0
        let sessao_id = req.query?.sessao_id ?? 0
        let evento_id = req.query?.evento_id ?? 0
        let ponto_interesse_id = req.query?.ponto_interesse_id ?? 0
        let minPessoas = req.query?.minPessoas ?? 0
        let maxPessoas = req.query?.maxPessoas ?? 0
        let validado = !!(req.query?.validado ?? true)
        let confirmado = !!(req.query?.confirmado ?? true)

        // * ordenação e paginação
        let order = req.query?.order ?? 'nome'
        let direction = req.query?.direction ?? 'asc'
        let offset = req.query?.offset ?? 0
        let limit = req.query?.limit ?? 0

        await reserva
            .findAndCountAll({
                where: {
                    id: !!+reserva_id ?
                        +reserva_id :
                        { [Op.ne]: 0 },
                    nome: {
                        [Op.iLike]: '%' + nome + '%'
                    },
                    pessoas: !!maxPessoas ?
                        { [Op.between]: [minPessoas, maxPessoas] } :
                        { [Op.gte]: minPessoas },
                    // os visitantes (tipo 1) só podem ver as suas próprias reservas
                    visitante_id: (req.auth.tipo === 1) ?
                        req.auth.id :
                        { [Op.ne]: 0 },
                    validado,
                    confirmado,
                },
                include: [
                    {
                        model: utilizador,
                        required: true,
                        attributes: ['nome'],
                        where: {
                            id: !!+visitante_id ?
                                +visitante_id :
                                { [Op.ne]: 0 }
                        }
                    }, {
                        model: sessao,
                        required: true,
                        attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
                        where: {
                            id: !!+sessao_id ?
                                +sessao_id :
                                { [Op.ne]: 0 }
                        },
                        include: {
                            model: evento,
                            required: true,
                            attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
                            where: {
                                id: !!+evento_id ?
                                    +evento_id :
                                    { [Op.ne]: 0 }
                            },
                            include: {
                                model: ponto_interesse,
                                required: true,
                                attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
                                where: {
                                    id: !!+ponto_interesse_id ?
                                        +ponto_interesse_id :
                                        { [Op.ne]: 0 }
                                }
                            }
                        }
                    }
                ],
                order: [[order, direction]],
                offset,
                limit: !!limit ? limit : null
            })
            .then(output => {
                // caso nao tenha encontrado reservas, 404
                if (!output.count)
                    return res.status(404).json({ msg: 'Não existem reservas que correspondam aos filtros solicitados' })

                return res.status(200).json({ data: output.rows, count: output.count })
            })
            .catch(error => {
                res.status(400).json({ msg: 'Ocorreu um erro no pedido de reservas' })
                dev.error(error)
                return
            })
            */
    },

    post: async (req, res) => {
        /*
        if (req.auth.tipo !== 1)
            return res.status(401).json({ msg: 'Apenas visitantes podem colocar reservas' })

        // body tem que ter estes params
        const required_params = [
            'nome',
            'pessoas',
            'visitante_id',
            'sessao_id',
            'observacoes'
        ]
        const check_all_required = required_params.every(param => req.body.hasOwnProperty(param))
        if (!check_all_required)
            return res.status(400).json({ msg: 'Faltam dados para poder criar a reserva.' })

        const { nome, pessoas, visitante_id, sessao_id, observacoes } = req.body

        await reserva
            .create({
                nome: nome,
                pessoas: pessoas,
                visitante_id: visitante_id,
                sessao_id: sessao_id,
                observacoes: observacoes
            })
            .then(output => { return res.status(200).json({ reserva: output }) })
            .catch(error => {
                res.status(400).json({ error })
                dev.error(error)
                return
            })
            */
    },

    delete: async (req, res) => {
        /*
        // * 🚨 guard clauses
        // tem que ser visitante, logo à partida
        if (req.auth.tipo !== 1)
            return res.status(401).json({ msg: 'Apenas visitantes podem eliminar reservas' })

        const { id } = req.params
        
        // verificar se a reserva existe
        const _reserva = await reserva.findByPk(+id)
        if (_reserva === null)
            return res.status(404).json({ msg: 'Essa reserva não existe' })

        //só o dono da reserva é que pode eliminar
        if (_reserva.dataValues.visitante_id !== req.auth.id)
            return res.status(401).json({ msg: 'Não és o autor desta reserva' })

        // ✅ tudo gucci, siga pra vinho
        await _reserva
            .destroy()
            .then(output => {
                return !output ?
                    res.status(400).json({ msg: 'Reserva não eliminada' }) :
                    res.status(200).json({ msg: 'Reserva eliminada' })
            })
            .catch(error => {
                res.status(400).json({ error })
                dev.error(error)
                return
            })
            */
    },
}