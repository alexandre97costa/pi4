
var sequelize = require('../config/Database')
const { Op } = require("sequelize")
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
    postEvento: async (req, res) => {
        const { num_pontos, nome, descricao, num_vagas, ponto_interesse_id, tipo_evento_id } = req.body

        await evento
            .create({
                num_pontos: num_pontos,
                nome: nome,
                descricao: descricao,
                num_vagas: num_vagas,
                ponto_interesse_id: ponto_interesse_id,
                tipo_evento_id: tipo_evento_id,
            })
            .then(output => { res.status(200).json({ evento: output }) })
            .catch(error => { res.status(400); throw new Error(error); });
    },

    getEvento: async (req,res) => {
        let tipoEventoId = req.query?.tipoEventoId ?? 0
        let pontoInteresseId =  req.query?.pontoInteresseId ?? 0

        await evento
            .findAll({
                where: {
                    tipo_evento_id: !!+tipoEventoId ? tipoEventoId : { [Op.ne]: 0 },
                    ponto_interesse_id: !!+pontoInteresseId ? pontoInteresseId : { [Op.ne]:0 } 
                },
                include: {
                    all: true
                }
            })
            .then(output => {
                if(!output[0])
                    return res.status(404).json("Evento's não foram encontrados")
                res.status(200).json({evento: output})
            })
            .catch(error => { res.status(400).json(error); throw new Error(error); });
    },

    putEvento: async (req, res) => {
        let eventoId = req.query?.eventoId ?? 0

        if(!eventoId)
            return res.status(400).json("Input invalido")

        const { num_pontos, nome, descricao, num_vagas, ponto_interesse_id, tipo_evento_id } = req.body
        
        await evento
            .update({
                num_pontos: num_pontos,
                nome: nome,
                descricao: descricao,
                num_vagas: num_vagas,
                ponto_interesse_id: ponto_interesse_id,
                tipo_evento_id: tipo_evento_id
            }, {
                where: {
                    id: eventoId
                }
            })
            .then(output => {
                if(!output[0])
                    return res.status(404).json("Evento não existe")
                res.status(200).json({pontoInteresse: output})
            })
            .catch(error => { res.status(400).json(error); throw new Error(error); });
    },

    deleteEvento: async(req, res) => {
        let eventoId = req.query?.eventoId ?? 0

        if(!eventoId)
            return res.status(400).json("Input invalido")

        await evento
            .destroy({
                where: { id: eventoId }
            })
            .then(output => {
                if(!output)
                    return res.status(404).json("Evento não existe")
                res.status(200).json({evento: output}) 
            })
            .catch(error => { res.status(400).json(error); throw new Error(error); }); 
    },

    getTipoEvento: async(req, res) => {
        await tipo_evento.findAll()
        .then(output => { res.status(200).json({tipoEvento: output}) })
        .catch(error => { res.status(400).json(error); throw new Error(error); });
    }
}