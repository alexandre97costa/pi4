
var sequelize = require('../config/Database')
const { Op } = require("sequelize")
const { dev: devClass } = require('../_dev/dev');
const userController = require('./userController');
const dev = new devClass;
// * Como usar o Op:
// * https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#operators

const {
    ponto_interesse,
    utilizador,
    freguesia,
    tipo_interesse,
    municipio,
    distrito,
} = sequelize.models

module.exports = {
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

        // * ordenação e paginação
        let order = req.query?.order ?? 'nome'
        let direction = req.query?.order ?? 'asc'
        let offset = req.query?.offset ?? 0
        let limit = req.query?.limit ?? 0

        // * outras opções
        let includeDeleted = !!req.query?.includeDeleted


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
                },
                include: [
                    {
                        model: freguesia,
                        required: true,
                        attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
                        include: {
                            model: municipio,
                            required: true,
                            attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
                            include: {
                                model: distrito,
                                required: true,
                                attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
                                where: {
                                    id: !!+distritoId ?
                                        +distritoId :
                                        { [Op.ne]: 0 }
                                },
                            }
                        }
                    },{
                        model: utilizador,
                        as: 'agente_turistico'
                    },{
                        model: tipo_interesse,
                        attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
                    }
                ],
                order: [[order, direction.toUpperCase()]],
                offset,
                limit: !!limit ? limit : null,
                paranoid: !includeDeleted
            })
            .then(output => {
                dev.log(output)
                if (!output.count) {
                    return res.status(404).json("Não existem Pontos de Interesse que correspondam a estes filtros")
                }

                res.status(200).json({ data: output.rows, count: output.count })
            })
            .catch(error => { res.status(400).json(error); throw new Error(error); });
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