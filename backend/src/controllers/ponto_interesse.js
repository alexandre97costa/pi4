var sequelize = require('../config/database')
const { Op } = require('sequelize')
const { dev: devClass } = require('../_dev/dev');
const dev = new devClass;
// * Como usar o Op:
// * https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#operators

const {
    ponto_interesse,
    pontos_ponto_interesse,
    comentario_avaliacao,
    imagem,
    utilizador,
    freguesia,
    tipo_interesse,
    municipio,
    distrito,
    ponto_interesse_recompensa,
    recompensa,
} = sequelize.models

module.exports = {

    get: async (req, res) => {
        // * filtros
        const id = req.params?.id ?? 0
        const nome_desc = req.query?.nome_desc ?? '' // pesquisa nos dois
        const tipo_interesse_id = req.query?.tipo_interesse_id ?? 0
        const freguesia_id = req.query?.freguesia_id ?? 0
        const agente_turistico_id = req.query?.agente_turistico_id ?? 0
        const distrito_id = req.query?.distrito_id ?? 0
        const min_scans = req.query?.min_scans ?? 0
        const min_aval = req.query?.min_aval ?? 0
        // todo: pontos

        // * ordenação e paginação
        const order = req.query?.order ?? 'nome'
        const direction = req.query?.direction ?? 'asc'
        const offset = req.query?.offset ?? 0
        const limit = req.query?.limit ?? 0

        // * outras opções
        const incluir_eliminados = !!req.query?.incluir_eliminados // incluir também os PIs eliminados
        const so_eliminados = !!req.query?.so_eliminados           // pedir só os PIs eliminados
        const validado = !!(req.query?.validado ?? true)         // True: Só PIs validados; False: Só PIs por validar

        await ponto_interesse
            .findAndCountAll({
                where: {
                    id: !!+id ?
                        +id :
                        { [Op.ne]: 0 },
                    [Op.or]: [
                        { nome: { [Op.iLike]: '%' + nome_desc + '%' } },
                        { descricao: { [Op.iLike]: '%' + nome_desc + '%' } }
                    ],
                    tipo_interesse_id: !!+tipo_interesse_id ?
                        +tipo_interesse_id :
                        { [Op.ne]: 0 },
                    freguesia_id: !!+freguesia_id ?
                        +freguesia_id :
                        { [Op.ne]: 0 },
                    agente_turistico_id:
                        // se o utilizador logado for agente
                        (req.auth.tipo === 2) ?
                            // automaticamente so mostra os seus proprios PIS
                            req.auth.id :
                            // caso contrário, podemos filtrar pelo param (se vier preenchido)
                            !!+agente_turistico_id ?
                                +agente_turistico_id :
                                {
                                    [Op.or]: {
                                        [Op.ne]: 0,
                                        [Op.eq]: null // porque pode não ter agente
                                    }
                                },
                    count_scans: !!min_scans ?
                        { [Op.gt]: min_scans } :
                        { [Op.ne]: -1 },
                    avg_avaliacao: !!min_aval ?
                        { [Op.gt]: min_aval } :
                        { [Op.ne]: -1 },
                    deleted_at: !!so_eliminados ?
                        { [Op.ne]: null } :
                        // se for false, quero que venham com ou sem o deleted_at
                        // a condição para virem deleted é o paranoid
                        {
                            [Op.or]: {
                                [Op.ne]: null,
                                [Op.eq]: null
                            }
                        },
                    validado: validado
                },
                include: [
                    {
                        model: freguesia,
                        required: true,
                        attributes: ['id', 'nome'],
                        include: {
                            model: municipio,
                            required: true,
                            attributes: ['id', 'nome'],
                            include: {
                                model: distrito,
                                required: true,
                                attributes: ['id', 'nome'],
                                where: {
                                    id: !!+distrito_id ?
                                        +distrito_id :
                                        { [Op.ne]: 0 }
                                },
                            }
                        }
                    }, {
                        model: ponto_interesse_recompensa,
                        as: 'recompensas_associadas',
                        include: {
                            model: recompensa,
                            as: 'recompensa'
                        }
                    }, {
                        model: utilizador,
                        as: 'agente_turistico',
                        attributes: ['nome', 'email']
                    }, {
                        model: tipo_interesse,
                        attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
                    }, {
                        model: imagem,
                        attributes: ['blob', 'url'],
                    }
                ],
                distinct: true,
                order: [[order, direction]],
                offset: offset,
                limit: !!limit ? limit : null,
                paranoid: !!incluir_eliminados || !!so_eliminados ? false : true // caso um ou outro seja true, traz PIs eliminados
            })
            .then(output => {
                return !output.count ?
                    res.status(404).json({ msg: 'Não existem pontos de interesse que correspondam aos filtros solicitados.' }) :
                    res.status(200).json({ data: output.rows, count: output.count })
            })
            .catch(error => {
                res.status(400).json({ msg: 'Ocorreu um erro no pedido de pontos de interesse.' })
                dev.error({ error })
                return
            })
    },

    post: async (req, res) => {
        if (req.auth.tipo === 1)
            return res.status(401).json({ msg: 'Sem autorização para criar pontos de interesse.' })

        // o body tem que ter todos os coises
        const required_params = [
            'nome',
            'descricao',
            'morada',
            'codigo_postal',
            'telemovel',
            'pontos',
            'freguesia_id',
            'tipo_interesse_id',
            'url_imagem'
        ]
        const check_all_required = required_params.every(param => req.body.hasOwnProperty(param))
        if (!check_all_required)
            return res.status(400).json({ msg: 'Faltam dados para poder criar o ponto de interesse.', required_params })

        const { nome, morada, codigo_postal, telemovel, pontos, descricao, freguesia_id, tipo_interesse_id, url_imagem } = req.body

        await ponto_interesse
            .create({
                nome: nome,
                morada: morada,
                codigo_postal: codigo_postal,
                telemovel: telemovel,
                pontos: pontos,
                descricao: descricao,
                freguesia_id: freguesia_id,
                tipo_interesse_id: tipo_interesse_id,
                agente_turistico_id: req.auth.id,
                validado: true,
                imagens: [{
                    url: url_imagem
                }]
            }, {
                include: imagem
            })
            .then(output => {
                return res.status(200).json({
                    msg: 'Ponto de interesse criado.',
                    ponto_interesse: output
                })
            })
            .catch(error => {
                res.status(400).json({ error })
                dev.error(error)
                return
            })
    },

    editar: async (req, res) => {
        if (req.auth.tipo === 1)
            return res.status(401).json({ msg: 'Sem autorização para alterar informação do Ponto de Interesse' })

        // o body tem que ter todos os coises
        const required_params = [
            'nome',
            'descricao',
            'morada',
            'codigo_postal',
            'telemovel',
            'pontos',
            'tipo_interesse_id'
        ]
        const check_all_required = required_params.every(param => req.body.hasOwnProperty(param))
        if (!check_all_required)
            return res.status(400).json({ msg: 'Faltam dados para poder editar o ponto de interesse.' })

        const { id } = req.params
        const { nome, morada, codigo_postal, telemovel, pontos, descricao, freguesia_id, tipo_interesse_id } = req.body

        // verificar se o pi existe
        const _pi = await ponto_interesse.findByPk(+id)
        if (_pi === null) return res.status(404).json({ msg: 'O ponto de interesse não existe ou foi eliminado.' })

        // se for um agente a editar, verificar se o pi lhe pertence
        const _user = await utilizador.findByPk(+req.auth.id)
        console.log("pi: " + _pi.agente_turistico_id)
        console.log("agente: " + _user.id)
        console.log(_pi.agente_turistico_id !== _user.id)
        if (req.auth.tipo !== 2 && _pi.agente_turistico_id !== _user.id)
            return res.status(401).json({ msg: 'Como agente, não podes editar pontos de interesse que não te pertençam.' })


        await _pi
            .update({
                nome: nome,
                morada: morada,
                codigo_postal: codigo_postal,
                telemovel: telemovel,
                pontos: pontos,
                descricao: descricao,
                tipo_interesse_id: tipo_interesse_id
            })
            .then(output => {
                return !output ?
                    res.status(400).json({ msg: 'Ponto de interesse não atualizado.' }) :
                    res.status(200).json({ msg: 'Ponto de interesse atualizado.', ponto_interesse: output[0] })
            })
            .catch(error => {
                res.status(400).json({ error })
                dev.error(error)
                return
            })
    },

    mudar_agente: async (req, res) => {
        // so o responsavel de regiao e admin podem mudar o agente de um ponto
        if (req.auth.tipo !== 3 && req.auth.tipo !== 4)
            return res.status(401).json({ msg: 'Apenas responsáveis e admins podem mudar o agente de um ponto de interesse.' })

        const { id, agente_id } = req.params

        // verificar se o pi e o agente existem
        const _pi = await ponto_interesse.findByPk(+id)
        const _agente = await utilizador.findOne({ where: { id: +agente_id, tipo_utilizador_id: 2 } })
        if (_pi === null) return res.status(404).json({ msg: 'O ponto de interesse não existe ou foi eliminado.' })
        if (_agente === null) res.status(404).json({ msg: 'O utilizador fornecido não existe, foi eliminado, ou não é agente.' })


        await _pi
            .update({ agente_turistico_id: +agente_id })
            .then(output => {
                return !output ?
                    res.status(400).json({ msg: 'Ponto de interesse não atualizado.' }) :
                    res.status(200).json({ msg: 'Ponto de interesse atualizado.', ponto_interesse: output[0] })
            })
            .catch(error => {
                res.status(400).json({ error })
                dev.error(error)
                return
            })
    },

    mudar_estado: async (req, res) => {

        // so o responsavel de regiao e admin podem mudar o estado de um ponto
        if (req.auth.tipo !== 3 || req.auth.tipo !== 4)
            return res.status(401).json({ msg: 'Apenas responsáveis e admins podem mudar o estado de um ponto de interesse.' })

        const { id, novo_estado } = req.params

        // verificar se o pi existe
        const _pi = await ponto_interesse.findByPk(id)
        if (_pi === null) return res.status(404).json({ msg: 'O ponto de interesse não existe ou foi eliminado.' })


        await _pi
            .update(
                { validado: !!novo_estado }
            )
            .then(output => {
                return !output[0] ?
                    res.status(400).json({ msg: 'Ponto de interesse não atualizado.' }) :
                    res.status(200).json({ msg: 'Ponto de interesse atualizado.', ponto_interesse: output })
            })
            .catch(error => {
                res.status(400).json({ error })
                dev.error(error)
                return
            })
    },

    delete: async (req, res) => {
        if (req.auth.tipo === 1)
            return res.status(401).json({ msg: 'Visitantes não podem eliminar pontos de interesse' })

        const { id } = req.params

        // verificar se o pi existe
        const _pi = await ponto_interesse.findByPk(+id)
        if (_pi === null) return res.status(404).json({ msg: 'O ponto de interesse não existe' })


        await _pi
            .destroy()
            .then(output => {
                return !output ?
                    res.status(404).json({ msg: 'Ponto de interesse não foi eliminado.' }) :
                    res.status(200).json({ msg: 'Ponto de interesse eliminado.', ponto_interesse: output })
            })
            .catch(error => {
                res.status(400).json({ error })
                dev(error)
                return
            });
    },

    tipos: async (req, res) => {
        await tipo_interesse
            .findAll({ attributes: ['id', 'nome'] })
            .then(output => { return res.status(200).json({ tipos_interesse: output }) })
            .catch(error => {
                res.status(400).json({ error })
                dev(error)
                return
            })
    },

    comentarios_avaliacoes: async (req, res) => {

        const { id } = req.params
        const limit = req.query?.limit ?? 0

        const avg = await comentario_avaliacao.findOne({
            where: { ponto_interesse_id: +id },
            attributes: [[sequelize.fn('AVG', sequelize.col('comentario_avaliacao.avaliacao')), 'avg']]
        })

        await comentario_avaliacao
            .findAndCountAll({
                where: { ponto_interesse_id: +id },
                attributes: ['comentario', 'avaliacao', 'created_at'],
                include: { model: utilizador, attributes: ['nome'] },
                limit: !!limit ? limit : null
            })
            .then(output => {
                return res.status(200).json({
                    comentarios_avaliacoes: output.rows.map(c => {
                        return {
                            comentario: c.dataValues.comentario,
                            avaliacao: c.dataValues.avaliacao,
                            created_at: c.dataValues.created_at,
                            nome_visitante: c.utilizador.nome,

                        }
                    }),
                    avg,
                    count: output.count
                })
            })
            .catch(error => {
                res.status(400).json({ error })
                dev.error(error)
                return
            })
    },

    post_comentario_avaliacao: async (req, res) => {

        if (req.auth.tipo !== 1)
            return res.status(401).json({ msg: 'Sem autorização para comentar ou avaliar pontos de interesse.' })

        // o body tem que ter todos os coises
        const required_params = [
            'comentario',
            'avaliacao'
        ]
        const check_all_required = required_params.every(param => req.body.hasOwnProperty(param))
        if (!check_all_required)
            return res.status(400).json({ msg: 'Faltam dados para poder comentar/avaliar o ponto de interesse.', required_params })

        const { comentario, avaliacao } = req.body
        const { id } = req.params

        // verificar se o ponto de interesse existe realmente
        const _pi = await ponto_interesse.findByPk(+id)
        if (_pi === null) return res.status(404).json({ msg: 'O ponto de interesse não existe' })

        await comentario_avaliacao
            .create({
                comentario: comentario,
                avaliacao: avaliacao,
                visitante_id: req.auth.id,
                ponto_interesse_id: id
            })
            .then(output => {
                return res.status(200).json({
                    msg: 'Comentário/avaliação criado.',
                    comentario_avaliacao: output
                })
            })
            .catch(error => {
                res.status(400).json({ error })
                dev.error(error)
                return
            });
    },

    associar: async (req, res) => {
        // só agentes
        if (req.auth.tipo !== 2)
            return res.status(401).json({ msg: 'Apenas agentes podem associar recompensas a pontos de interesse.' })

        if (!req.body.hasOwnProperty('recompensa_id'))
            return res.status(400).json({ msg: 'Falta o recompensa_id no body.' })

        const { id } = req.params
        const { recompensa_id } = req.body

        // verificar se o ponto de interese realmente existe
        const _pi = await ponto_interesse.findByPk(id)
        if (_pi === null)
            res.status(404).json({ msg: 'O ponto de interesse fornecido não existe ou foi eliminado.' })

        // a partir daqui, tudo gucci

        await ponto_interesse_recompensa
            .create({
                ponto_interesse_id: id,
                recompensa_id: recompensa_id
            })
            .then(output => {
                return res.status(200).json({
                    msg: 'Ponto de interesse associado com a recompensa ' + recompensa_id + '.',
                    ponto_interesse_recompensa: output
                })
            })
            .catch(error => {
                res.status(400).json({ error })
                dev.error(error)
                return
            })
    },

    // * testes

    test_aval: async (req, res) => {
        await comentario_avaliacao
            .create({
                comentario: 'comentario de teste',
                avaliacao: req.query?.aval ?? 3,
                ponto_interesse_id: 1,
                visitante_id: 1
            })
            .then(output => { res.status(200).json({ output }) })
            .catch(error => {
                res.status(400).json({ error })
                dev.error(error)
                return
            });
    },

    test_img: async (req, res) => {
        await imagem
            .create({
                url: 'https://images.unsplash.com/photo-1572085313466-6710de8d7ba3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80',
                ponto_interesse_id: 1,
            })
            .then(output => { res.status(200).json({ output }) })
            .catch(error => {
                res.status(400).json({ error })
                dev.error(error)
                return
            });
    },

    test_ppi: async (req, res) => {
        await pontos_ponto_interesse
            .create({
                // ! atenção a estes numeros, verifica se existem estes ids na tua bd local
                ponto_interesse_id: 1,
                visitante_id: 1
            })
            .then(output => { res.status(200).json({ output }) })
            .catch(error => {
                res.status(400).json({ error })
                dev.error(error)
                return
            });
    },
}