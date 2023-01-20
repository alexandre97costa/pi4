var sequelize = require('../config/database')
const { Op } = require('sequelize')
const { dev: devClass } = require('../_dev/dev');
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
    // todo: estes controllers todos 😭

    get: async (req, res) => {
        // * filtros
        const { id } = req.params
        const nome_desc = req.query?.nome_desc ?? '' // pesquisa nos dois
        const tipo_evento_id = req.query?.tipo_evento_id ?? 0
        const ponto_interesse_id = req.query?.ponto_interesse_id ?? 0

        // * ordenação e paginação
        const order = req.query?.order ?? 'nome'
        const direction = req.query?.direction ?? 'asc'
        const offset = req.query?.offset ?? 0
        const limit = req.query?.limit ?? 0

        await evento
            .findAndCountAll({
                where: {
                    id: !!+id ?
                        id :
                        { [Op.ne]: 0 },
                    nome: { [Op.iLike]: '%' + nome_desc + '%' },
                    descricao: { [Op.iLike]: '%' + nome_desc + '%' },
                    tipo_evento_id: !!+tipo_evento_id ?
                        tipo_evento_id :
                        { [Op.ne]: 0 },
                    ponto_interesse_id: !!+ponto_interesse_id ?
                        ponto_interesse_id :
                        { [Op.ne]: 0 }
                },
                include: [
                    {
                        model: tipo_evento,
                        attributes: ['nome']
                    }, {
                        model: ponto_interesse,
                        attributes: ['nome']
                    }, {
                        model: sessao,
                        attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt', 'evento_id'] }
                    }
                ],
                attributes: { exclude: ['codigo_uuid'] },
                order: [[order, direction]],
                offset: offset,
                limit: !!limit ? limit : null,
            })
            .then(output => {
                return !output.count ?
                    res.status(404).json({ msg: 'Não existem eventos que correspondam aos filtros solicitados.' }) :
                    res.status(200).json({ data: output.rows, count: output.count })
            })
            .catch(error => {
                res.status(400).json({ msg: 'Ocorreu um erro no pedido de eventos.' })
                dev.error({ error })
                return
            })
    },

    post: async (req, res) => {
        // so agentes
        if (req.auth.tipo !== 2)
            return res.status(401).json({ msg: 'Sem autorização para criar eventos.' })

        // o body tem todos os parametros necessarios?
        const required_params = [
            'nome',
            'descricao',
            'pontos',
            'vagas',
            'horas_duracao',
            'ponto_interesse_id',
            'tipo_evento_id'
        ]
        const check_all_required = required_params.every(param => req.body.hasOwnProperty(param))
        if (!check_all_required)
            return res.status(400).json({ msg: 'Faltam dados para poder criar o evento.' })

        const { nome, descricao, pontos, vagas, horas_duracao, ponto_interesse_id, tipo_evento_id } = req.body

        // so para pontos de interesse que lhe pertencem
        const pis_agente = await ponto_interesse.findAll({ where: { agente_turistico_id: req.auth.id } })
        const pi_valido = pis_agente.find(pi => pi.id === ponto_interesse_id)
        if (!pi_valido)
            return res.status(404).json({ msg: 'O ponto de interesse fornecido não existe ou não te pertence.' })


        await evento
            .create({
                nome: nome,
                descricao: descricao,
                pontos: pontos,
                vagas: vagas,
                horas_duracao: horas_duracao,
                ponto_interesse_id: ponto_interesse_id,
                tipo_evento_id: tipo_evento_id,
            })
            .then(output => {
                return res.status(200).json({ msg: 'Evento criado.', evento: output })
            })
            .catch(error => {
                res.status(400).json({ error })
                dev.error(error)
                return
            });
    },

    editar: async (req, res) => {
        // so agentes podem editar
        if (req.auth.tipo !== 2)
            return res.status(401).json({ msg: 'Sem autorização para editar eventos.' })

        // precisa de todos os params no body
        const required_params = [
            'nome',
            'descricao',
            'pontos',
            'vagas',
            'horas_duracao',
            'ponto_interesse_id',
            'tipo_evento_id'
        ]
        const check_all_required = required_params.every(param => req.body.hasOwnProperty(param))
        if (!check_all_required)
            return res.status(400).json({ msg: 'Faltam dados para poder editar o evento.' })

        const { id } = req.params
        const { pontos, nome, descricao, vagas, ponto_interesse_id, tipo_evento_id } = req.body

        // verificar se o evento existe
        const _evento = await evento.findByPk(+id)
        if (_evento === null) return res.status(404).json({ msg: 'O evento fornecido não existe ou foi eliminado.' })

        // verificar se o evento pertence ao agente que o está a editar
        const eventos_agente = await utilizador
            .findOne({
                where: { id: req.auth.id },
                include: {
                    model: ponto_interesse,
                    include: evento
                }
            })
            .then(output => {
                return output?.pontos_interesse.map(pi => pi?.eventos).flat(2)
            })

        const evento_correto = eventos_agente.find(evento => evento.id = id)
        if (evento_correto === undefined)
            return res.status(401).json({ msg: 'Não podes editar um evento que não te pertence.' })

        await _evento
            .update({
                nome: nome,
                descricao: descricao,
                vagas: vagas,
                pontos: pontos,
                horas_duracao: horas_duracao,
                ponto_interesse_id: ponto_interesse_id,
                tipo_evento_id: tipo_evento_id
            })
            .then(output => {
                return !output[0] ?
                    res.status(400).json({ msg: 'Evento não atualizado' }) :
                    res.status(200).json({ msg: 'Evento atualizado', evento: output[0] })
            })
            .catch(error => {
                res.status(400).json({ error })
                dev.error(error)
                return
            })
    },

    delete: async (req, res) => {

        // apenas agentes podem eliminar eventos
        if (req.auth.tipo !== 2)
            res.status(401).json({ msg: 'Apenas agentes podem eliminar eventos.' })

        const { id } = req.params

        // verificar se o evento existe
        const _evento = await evento.findByPk(+id)
        if (_evento === null)
            return res.status(404).json({ msg: 'Esse evento não existe.' })

        // só o proprietario do evento é que pode eliminar
        const _pi = await ponto_interesse.findOne({ where: { id: _evento.ponto_interesse_id } })
        if (req.auth.id !== _pi.agente_turistico_id)
            return res.status(401).json({ msg: 'Só podes eliminar eventos dos quais és proprietário.' })

        await _evento
            .destroy()
            .then(output => {
                return !output ?
                    res.status(400).json({ msg: 'Evento não eliminado' }) :
                    res.status(200).json({ msg: 'Evento eliminado' })
            })
            .catch(error => {
                res.status(400).json({ error })
                dev.error(error)
                return
            })
    },

    tipos: async (req, res) => {
        await tipo_evento.findAll()
            .then(output => { res.status(200).json({ tipoEvento: output }) })
            .catch(error => { res.status(400).json(error); throw new Error(error); });
    }
}