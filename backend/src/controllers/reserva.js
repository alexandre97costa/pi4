
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

    // qualquer utilizador registado pode aceder a reservas
    get: async (req, res) => {
        // * filtros
        const nome = req.query?.nome ?? '%'
        const reserva_id = req.params?.id ?? 0
        const visitante_id = req.query?.visitante_id ?? 0
        const sessao_id = req.query?.sessao_id ?? 0
        const evento_id = req.query?.evento_id ?? 0
        const ponto_interesse_id = req.query?.ponto_interesse_id ?? 0
        const minPessoas = req.query?.minPessoas ?? 0
        const maxPessoas = req.query?.maxPessoas ?? 0
        const validado = !!(req.query?.validado ?? true)
        const confirmado = !!(req.query?.confirmado ?? true)

        // * ordenação e paginação
        const order = req.query?.order ?? 'nome'
        const direction = req.query?.direction ?? 'asc'
        const offset = req.query?.offset ?? 0
        const limit = req.query?.limit ?? 0

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
                    validado: validado,
                    confirmado: confirmado,
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
                return !output.count ?
                    res.status(404).json({ msg: 'Não existem reservas que correspondam aos filtros solicitados.' }) :
                    res.status(200).json({ data: output.rows, count: output.count })
            })
            .catch(error => {
                res.status(400).json({ msg: 'Ocorreu um erro no pedido de reservas.' })
                dev.error({ error })
                return
            })
    },

    // só visitantes é que podem fazer reservas
    post: async (req, res) => {
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
    },

    // o unico parametro que o visitante pode mudar na sua reserva
    mudar_vagas: async (req, res) => {
        // só visitantes
        if (req.auth.tipo !== 1)
            return res.status(401).json({ msg: 'Apenas visitantes podem mudar as vagas da sua reserva' })

        if (!req.params.id || !req.body.pessoas_novo)
            return res.status(400).json({ msg: 'Faltam dados! É preciso identificar a reserva e o novo numero de pessoas.' })

        const { pessoas_novo } = req.body
        const { id } = req.params

        // procurar se a reserva existe e se é do visitante que as pediu
        const _reserva = await reserva.findByPk(id)

        if (_reserva === null)
            return res.status(404).json({ msg: 'Essa reserva não existe' })

        if (_reserva.visitante_id !== req.auth.id)
            return res.status(401).json({ msg: 'Só podes mudar as tuas próprias reservas' })

        await _reserva
            .update({ pessoas: +pessoas_novo })
            .then(output => { return res.status(200).json(output) })
            .catch(error => {
                res.status(400).json({ error })
                dev.error(error)
                return
            })
    },

    // o agente pode validar ou rejeitar a reserva
    validar: async (req, res) => {
        // * 🚨 guard clauses
        // so agentes
        if (req.auth.tipo !== 2)
            return res.status(401).json({ msg: 'Apenas agentes turísticos podem validar reservas.' })

        if (!req.params.id || !req.body.validado)
            return res.status(400).json({ msg: 'Faltam dados! É preciso identificar a reserva e o novo valor de validação.' })

        const { validado } = req.body
        const { id } = req.params

        const _reserva = await reserva.findByPk(id)
        if (_reserva === null) return res.status(404).json({ msg: 'Essa reserva não existe.' })

        // so o agente que é proprietario do ponto de interesse onde decorre o evento é que pode validar
        const _sessao = await evento.findByPk(_reserva.sessao_id)
        if (_sessao === null) return res.status(404).json({ msg: 'Essa sessão não existe' })

        const _evento = await evento.findByPk(_sessao.evento_id)
        if (_evento === null) return res.status(404).json({ msg: 'Esse evento não existe' })

        const _pi = await ponto_interesse.findByPk(_evento.ponto_interesse_id)
        if (_pi === null) return res.status(404).json({ msg: 'Esse ponto de interesse não existe' })

        if (req.auth.id !== _pi.agente_turistico_id)
            return res.status(401).json({ msg: 'Apenas o agente turístico proprietário pode validar uma reserva' })

        // ✅ tudo gucci, siga pra vinho
        await _reserva
            .update({ validado: !!validado })
            .then(output => {
                return !output[0] ?
                    res.status(400).json({ msg: 'Reserva não atualizada' }) :
                    res.status(200).json({ msg: 'Reserva atualizada', reserva: output[0] })
            })
            .catch(error => {
                res.status(400).json({ error })
                dev.error(error)
                return
            })
    },

    // processo automatico parecido a um scan
    // o visitante mostra o codigo da sua reserva ao agente
    // o agente insere-o no back office, que por sua vez confirma a reserva
    confirmar: async (req, res) => {
        // todo: testar
        // tem que ser um agente a confirmar
        // * 🚨 guard clauses
        if (req.auth.tipo !== 2)
            return res.status(401).json({ msg: 'Apenas agentes podem confirmar reservas' })

        if (!req.params.codigo)
            return res.status(400).json({ msg: 'É necessário o código de confirmação' })

        const { codigo } = req.params

        // verificar se a reserva existe 
        const _reserva = await reserva.findOne({ where: { codigo_confirmacao: codigo, confirmado: false } })
        if (_reserva === null)
            return res.status(404).json({ msg: 'Não existe nenhuma reserva por confirmar com o código fornecido.' })

        // todas as reservas relacionadas com o agente que inseriu o codigo
        const reservas_agente = await utilizador
            .findOne({
                where: { id: req.auth.id },
                include: {
                    model: ponto_interesse,
                    include: {
                        model: evento,
                        include: {
                            model: sessao,
                            include: {
                                model: reserva,
                                where: { confirmado: false }
                            }
                        }
                    }
                }
            })
            .then(output => {
                return output
                    ?.pontos_interesse.map(pi =>
                        pi?.eventos.map(e =>
                            e?.sessoes.map(s =>
                                s?.reservas
                            )
                        )
                    ).flat(3) // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
            })

        if (reservas_agente === undefined)
            return res.status(404).json({ msg: 'Não existem reservas associadas aos teus eventos' })

        // encontrar uma reserva que tenha aquele codigo de confirmacao
        const reserva_correta = reservas_agente.find(reserva => reserva.codigo_confirmacao === codigo)

        if (reserva_correta === undefined)
            return res.status(404).json({ msg: 'Não foi feita nenhuma reserva com este código. Se o código foi bem inserido, pode ser uma reserva a um evento que tu não geres.' })

        // ✅ tudo gucci, siga pra vinho
        await _reserva
            .update({
                confirmado: true
            })
            .then(output => {
                return !output[0] ?
                    res.status(400).json({ msg: 'Reserva não atualizada' }) :
                    res.status(200).json({ msg: 'Reserva atualizada', reserva: output[0] })
            })
            .catch(error => {
                res.status(400).json({ error })
                dev.error(error)
                return
            })
    },

    delete: async (req, res) => {
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
    },
}