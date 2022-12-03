
var sequelize = require('../config/Database')
const { Op } = require("sequelize")
const { dev: devClass } = require('../_dev/dev');
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
// * no final, podem-se apagar os que não estão a ser usados


module.exports = {
    // list: async (req, res) => {
    //     ponto_interesse
    //         .findAll()
    //         .then(output => { res.status(200).json({ distritos: output }) })
    //         .catch(error => { res.status(400); throw new Error(error); });
    // },

    getPontoInteresse: async (req, res) => {
        //if(pontoInteresse == null) then pontoInteresse = '%'
        let nome = req.query?.nome ?? '%'
        let pontoInteresseId =  req.query?.pontoInteresseId ?? 0
        let tipoInteresseId =  req.query?.tipoInteresseId ?? 0
        let freguesiaId = req.query?.freguesiaId ?? 0
        let agenteTuristicoId = req.query?.agenteTuristicoId ?? 0
        let distritoId = req.query?.distritoId ?? 0

        dev.log("distritoId: " + distritoId)

        ponto_interesse
            .findAll({
                where: {
                    nome: {
                        [Op.iLike]: '%' + nome + '%'
                    },
                    id: !!+pontoInteresseId ? pontoInteresseId : { [Op.ne]: pontoInteresseId },
                    tipo_interesse_id: !!+tipoInteresseId ? tipoInteresseId : { [Op.ne]: tipoInteresseId },
                    freguesia_id: !!+freguesiaId ? freguesiaId : { [Op.ne]: freguesiaId },
                    agente_turistico_id: !!agenteTuristicoId ? agenteTuristicoId : { [Op.ne]: agenteTuristicoId },
                    freguesia_id: !!+distritoId ? { include: {
                        model: municipio,
                        include: {
                            model: distrito,
                            through: {
                                attributes: [ id ]
                            },
                            where: {
                                id: !!+distritoId ? distritoId : { [Op.ne]: distritoId }
                            }
                        }
                    }} : { [Op.ne]: distritoId },
                },
                include: { all: true }
                // include: [{
                //     all: true
                // }, {
                //     model: freguesia,
                //     include: {
                //         model: municipio,
                //         where: {
                //             distrito_id: !!+distritoId ? distritoId : { [Op.ne]: distritoId }
                //         }
                //     }
                // }]
            })
            .then(output => {
                if(!output[0])
                    return res.status(404).json("Ponto's de Interesse não existem")
                res.status(200).json({pontoInteresse: output})
            })
            .catch(error => { res.status(400).json(error); throw new Error(error); });
    },

    putPontoInteresse: async (req, res) => {
        //if(pontoInteresse == null) then pontoInteresse = '%'
        let pontoInteresseId =  req.query?.pontoInteresseId ?? 0
        let agenteTuristicoId = req.query?.agenteTuristicoId ?? 0

        if(!pontoInteresseId || !agenteTuristicoId)
            return res.status(400).json("Input invalido")

        const { nome, morada, codigo_postal, num_telemovel, num_pontos, descricao, freguesia_id, tipo_interesse_id } = req.body

        ponto_interesse
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
                if(!output[0])
                    return res.status(404).json("Ponto de Interesse não existe")
                res.status(200).json({pontoInteresse: output})
            })
            .catch(error => { res.status(400).json(error); throw new Error(error); });
    },

    patchPontoInteresse: async (req, res) => {
        //if(pontoInteresse == null) then pontoInteresse = '%'
        let pontoInteresseId =  req.query?.pontoInteresseId ?? 0

        if(!pontoInteresseId)
            return res.status(400).json("Input invalido")

        const agente_turistico_id = req.body

        ponto_interesse
            .update({
                agente_turistico_id: agente_turistico_id
            }, { where: { id: pontoInteresseId } })
            .then(output => {
                if(!output[0])
                    return res.status(404).json("Ponto de Interesse não existe")
                res.status(200).json({pontoInteresse: output})
            })
            .catch(error => { res.status(400).json(error); throw new Error(error); });
    },

    deletePontoInteresse: async (req, res) => {
        let pontoInteresseId =  req.query?.pontoInteresseId ?? 0

        if(!pontoInteresseId)
            return res.status(400).json("Input invalido")

        ponto_interesse
            .destroy({
                where: { id: pontoInteresseId }
            })            
            .then(output => { res.status(200).json({pontoInteresse: output}) })
            .catch(error => { res.status(400).json(error); throw new Error(error); });      
    },

    getTipoPontoInteresse: async (req, res) => {
        tipo_interesse.findAll()
        .then(output => { res.status(200).json({tipoPontoInteresse: output}) })
        .catch(error => { res.status(400).json(error); throw new Error(error); });
    }
}