
var sequelize = require('../config/Database')
const { Op } = require("sequelize")
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
    postReserva: async (req, res) => {
        const { nome, num_pessoas, visitante_id, sessao_id,observacoes } = req.body

        await reserva
            .create({
                nome: nome,
                num_pessoas: num_pessoas,
                visitante_id: visitante_id,
                sessao_id: sessao_id,
                observacoes: observacoes
            })
            .then(output => { res.status(200).json({reserva: output}) })
            .catch(error => { res.status(400).json(error); throw new Error(error) })
    },

    list: async (req, res) => {
        distrito
            .findAll()
            .then(output => { res.status(200).json({ distritos: output }) })
            .catch(error => { res.status(400); throw new Error(error); });
    }
}