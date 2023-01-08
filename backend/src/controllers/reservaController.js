
var sequelize = require('../config/Database')
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
    // só visitantes é que podem fazer reservas
    postReserva: async (req, res) => {
        if (req.auth.tipo !== 1)
            return res.status(401).json({ msg: 'Apenas visitantes podem colocar reservas' })

        const { nome, num_pessoas, visitante_id, sessao_id, observacoes } = req.body

        await reserva
            .create({
                nome: nome,
                num_pessoas: num_pessoas,
                visitante_id: visitante_id,
                sessao_id: sessao_id,
                observacoes: observacoes
            })
            .then(output => { return res.status(200).json({ reserva: output }) })
            .catch(error => {
                res.status(400).json(error);
                dev.error(error)
                return
            })
    },

    // o unico parametro que o visitante pode mudar na sua reserva
    mudarVagasReserva: async (req, res) => {
        // só visitantes
        if (req.auth.tipo !== 1)
            return res.status(401).json({ msg: 'Apenas visitantes podem mudar as vagas da sua reserva' })

        if (!req.body.reserva_id || !req.body.num_pessoas_novo)
            return res.status(400).json({ msg: 'Faltam dados! É preciso identificar a reserva e o novo numero de pessoas.' })

        const { reserva_id, num_pessoas_novo } = req.body

        // procurar se a reserva existe e se é do visitante que as pediu
        const _reserva = await reserva.findByPk(reserva_id)

        if (_reserva === null)
            return res.status(404).json({ msg: 'Essa reserva não existe' })

        if (_reserva.visitante_id !== req.auth.id)
            return res.status(401).json({ msg: 'Só podes mudar as tuas próprias reservas' })

        await _reserva
            .update({ num_pessoas: +num_pessoas_novo })
            .then(output => { return res.status(200).json(output) })
            .catch(error => { return res.status(400).json(error) })
    },

    // o agente pode validar ou rejeitar a reserva
    validarReserva: async (req, res) => {
        // * 🚨 guard clauses
        // so agentes
        if (req.auth.tipo !== 2)
            return res.status(401).json({ msg: 'Apenas agentes turísticos podem validar reservas.' })

        if (!req.body.reserva_id || !req.body.validado)
            return res.status(400).json({ msg: 'Faltam dados! É preciso identificar a reserva e o novo valor de validação.' })

        const { reserva_id, validado } = req.body

        const _reserva = await reserva.findByPk(reserva_id)
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
            .then(output => { return res.status(200).json(output) })
            .catch(error => { return res.status(400).json(error) })
    },

    test_reserva: async (req, res) => {
        if (req.auth.tipo !== 2)
            return res.status(401).json({ msg: 'Apenas agentes podem confirmar reservas' })

        // !pode nao trazer algumas coisas 
        // ex: pode nao trazer sessao se nao houverem eventos
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
                                model: reserva
                            }
                        }
                    }
                }
            })


        res.status(200).json(reservas_agente)
    },

    // processo automatico parecido a um scan
    // o visitante mostra o codigo da sua reserva ao agente
    // o agente insere-o no back office, que por sua vez confirma a reserva
    confirmarResesva: async (req, res) => {
        // tem que ser um agente a confirmar
        if (req.auth.tipo !== 2)
            return res.status(401).json({ msg: 'Apenas agentes podem confirmar reservas' })

        if (!req.body.reserva_id || !req.body.codigo_confirmacao)
            return res.status(400).json({ msg: 'Faltam dados! É preciso identificar a reserva e o código de confirmação.' })

        const { reserva_id, codigo_confirmacao } = req.body

        // precisamos de apanhar as reservas deste agente em especifico, e procurar uma reserva dentro dessas
        const reservas_agente = await utilizador.findByPk(req.auth.id)


    },

    //só o visitante (e dono da reserva) é que pode eliminar
    deleteReserva: async (req, res) => {

    },

    // qualquer utilizador registado pode aceder a reservas
    getReserva: async (req, res) => {
        // * filtros
        let nome = req.query?.nome ?? '%'
        let reserva_id = req.query?.reserva_id ?? 0
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
                    num_pessoas: !!maxPessoas ?
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
    }
}