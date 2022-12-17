
var sequelize = require('../config/Database')
const { Op } = require("sequelize")
const { dev: devClass } = require('../_dev/dev');
const userController = require('./userController');
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

    test_aval: async (req, res) => {
        await comentario_avaliacao
            .create({
                comentario: 'comentario de teste',
                avaliacao: req.query?.aval ?? 3,
                ponto_interesse_id: 1,
                visitante_id: 1
            })
            .then(output => { res.status(200).json({ output }) })
            .catch(error => { res.status(400).json(error); dev.error(error); });
    },

    test_img: async (req, res) => {
        await imagem
            .create({
                url: 'https://images.unsplash.com/photo-1572085313466-6710de8d7ba3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80',
                ponto_interesse_id: 1,
            })
            .then(output => { res.status(200).json({ output }) })
            .catch(error => { res.status(400).json(error); dev.error(error); });
    },

    test_ppi: async (req, res) => {
        await pontos_ponto_interesse
            .create({
                // ! atenção a estes numeros, verifica se existem estes ids na tua bd local
                ponto_interesse_id: 1,
                visitante_id: 1
            })
            .then(output => { res.status(200).json({ output }) })
            .catch(error => { res.status(400).json(error); dev.error(error); });
    },

    postPontoInteresse: async (req, res) => {
        const { nome, morada, codigo_postal, num_telemovel, num_pontos, descricao, freguesia_id, tipo_interesse_id } = req.body

        await ponto_interesse
            .create({
                nome: nome,
                morada: morada,
                codigo_postal: codigo_postal,
                num_telemovel: num_telemovel,
                num_pontos: num_pontos,
                descricao: descricao,
                freguesia_id: freguesia_id,
                tipo_interesse_id: tipo_interesse_id
            })
            .then(output => { res.status(200).json({ pontoInteresse: output }) })
            .catch(error => { res.status(400).json(error); throw new Error(error); });
    },

    getPontoInteresse: async (req, res) => {
        // * filtros
        let nome = req.query?.nome ?? '%'
        let pontoInteresseId = req.query?.pontoInteresseId ?? 0
        let tipoInteresseId = req.query?.tipoInteresseId ?? 0
        let freguesiaId = req.query?.freguesiaId ?? 0
        let agenteTuristicoId = req.query?.agenteTuristicoId ?? 0
        let distritoId = req.query?.distritoId ?? 0
        let minScans = req.query?.minScans ?? 0
        // todo: valor minimo para a avg_avaliacao

        // * ordenação e paginação
        let order = req.query?.order ?? 'nome'
        let direction = req.query?.direction ?? 'asc'
        let offset = req.query?.offset ?? 0
        let limit = req.query?.limit ?? 0

        // * outras opções
        let incluirEliminados = !!req.query?.incluirEliminados // incluir também os PIs eliminados
        let soEliminados = !!req.query?.soEliminados           // pedir só os PIs eliminados
        let validado = !!(req.query?.validado ?? true)         // True: Só PIs validados; False: Só PIs por validar

        await ponto_interesse
            .findAndCountAll({
                where: {
                    nome: {
                        [Op.iLike]: '%' + nome + '%'
                    },
                    id: !!+pontoInteresseId ?
                        +pontoInteresseId :
                        { [Op.ne]: 0 },
                    tipo_interesse_id: !!+tipoInteresseId ?
                        +tipoInteresseId :
                        { [Op.ne]: 0 },
                    freguesia_id: !!+freguesiaId ?
                        +freguesiaId :
                        { [Op.ne]: 0 },
                    agente_turistico_id: !!+agenteTuristicoId ?
                        +agenteTuristicoId :
                        {
                            [Op.or]: {
                                [Op.ne]: 0,
                                [Op.eq]: null // porque pode não ter agente
                            }
                        },
                    count_scans: !!minScans ?
                        { [Op.gt]: minScans } :
                        { [Op.ne]: -1 },
                    deleted_at: soEliminados ?
                        { [Op.eq]: null } :
                        // se for false, quero que venham com ou sem o deleted_at
                        // a condição para virem deleted é o paranoid
                        {
                            [Op.or]: {
                                [Op.ne]: null,
                                [Op.eq]: null
                            }
                        },
                    validado
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
                                    id: !!+distritoId ?
                                        +distritoId :
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
                order: [[order, direction]],
                offset,
                limit: !!limit ? limit : null,
                paranoid: !incluirEliminados || !soEliminados // caso um ou outro seja true, traz PIs eliminados
            })
            .then(output => {
                // caso não tenha encontrado, 404
                if (!output.count) {
                    return res.status(404).json({ msg: 'Não existem pontos de interesse que correspondam aos filtros solicitados' })
                }
                return res.status(200).json({ data: output.rows, count: output.count })
            })
            .catch(error => {
                res.status(400).json({ msg: 'Ocorreu um erro no pedido de pontos de interesse' })
                dev.error(error)
                return
            })
    },

    putPontoInteresse: async (req, res) => {
        //if(pontoInteresse == null) then pontoInteresse = '%'
        let pontoInteresseId = req.query?.pontoInteresseId ?? 0
        let agenteTuristicoId = req.query?.agenteTuristicoId ?? 0

        dev.log("pontoInteresseId: " + pontoInteresseId)

        if (!pontoInteresseId || !agenteTuristicoId)
            return res.status(400).json("Input invalido")

        const { nome, morada, codigo_postal, num_telemovel, num_pontos, descricao, freguesia_id, tipo_interesse_id } = req.body

        await ponto_interesse
            .update({
                nome: nome,
                morada: morada,
                codigo_postal: codigo_postal,
                num_telemovel: num_telemovel,
                num_pontos: num_pontos,
                descricao: descricao,
                freguesia_id: freguesia_id,
                tipo_interesse_id: tipo_interesse_id
            }, {
                where: {
                    id: pontoInteresseId,
                    agente_turistico_id: agenteTuristicoId
                }
            })
            .then(output => {
                if (!output[0])
                    return res.status(404).json("Ponto de Interesse não existe")
                res.status(200).json({ pontoInteresse: output })
            })
            .catch(error => { res.status(400).json(error); throw new Error(error); });
    },

    patchPontoInteresse: async (req, res) => {
        //if(pontoInteresse == null) then pontoInteresse = '%'
        let pontoInteresseId = req.query?.pontoInteresseId ?? 0

        if (!pontoInteresseId)
            return res.status(400).json("Input invalido")

        const { agente_turistico_id } = req.body

        await ponto_interesse
            .update({
                agente_turistico_id: agente_turistico_id
            }, { where: { id: pontoInteresseId } })
            .then(output => {
                if (!output[0])
                    return res.status(404).json("Ponto de Interesse não existe")
                res.status(200).json({ pontoInteresse: output })
            })
            .catch(error => { res.status(400).json(error); throw new Error(error); });
    },

    deletePontoInteresse: async (req, res) => {
        let pontoInteresseId = req.query?.pontoInteresseId ?? 0

        if (!pontoInteresseId)
            return res.status(400).json("Input invalido")

        await ponto_interesse
            .destroy({
                where: { id: pontoInteresseId }
            })
            .then(output => {
                if (!output)
                    return res.status(404).json("Ponto de interesse não existe")
                res.status(200).json({ pontoInteresse: output })
            })
            .catch(error => { res.status(400).json(error); throw new Error(error); });
    },

    getTipoPontoInteresse: async (req, res) => {
        await tipo_interesse.findAll()
            .then(output => { res.status(200).json({ tipoPontoInteresse: output }) })
            .catch(error => { res.status(400).json(error); throw new Error(error); });
    }
}