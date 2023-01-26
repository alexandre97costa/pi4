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
    scan_evento,
    scan_ponto_interesse,
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

    get: async (req, res) => {
        // este controller nao precisa de filtros nenhuns, só do id do utilizador

        // precisa de scans a eventos, pontos de interesse, e recompensas
        // juntar tudo numa array com objectos que contenham
        // - pontos
        // - nome
        // - data
        // - boolean ganhos/perdidos        

        const { id } = req.params

        const _scan_eventos = await scan_evento
            .findAll({
                where: { visitante_id: id },
                attributes: ['created_at', 'pontos_recebidos'],
                order: [['created_at', 'desc']],
                include: { model: evento, attributes: ['nome'] }
            })


        const _scan_pi = await scan_ponto_interesse.findAll({
            where: { visitante_id: id },
            attributes: ['created_at', 'pontos_recebidos'],
            order: [['created_at', 'desc']],
            include: { model: ponto_interesse, attributes: ['nome'] }
        })

        const _vouchers = await voucher.findAll({
            where: { visitante_id: id },
            attributes: ['created_at', 'pontos_gastos'],
            order: [['created_at', 'desc']],
            include: { model: recompensa, attributes: ['titulo'] }
        })

        const output = [
            ..._scan_eventos.map(e => {
                return {
                    data: e.dataValues.created_at,
                    nome: e.evento.nome,
                    pontos: e.dataValues.pontos_recebidos,
                    boolean: true
                }
            }),
            ..._scan_pi.map(p => {
                return {
                    data: p.dataValues.created_at,
                    nome: p.ponto_interesse.nome,
                    pontos: p.dataValues.pontos_recebidos,
                    boolean: true
                }
            }),
            ..._vouchers.map(v => {
                return {
                    data: v.dataValues.created_at,
                    nome: v.recompensa.titulo,
                    pontos: v.dataValues.pontos_gastos,
                    boolean: true
                }
            })
        ]

        return res.status(200).json({ output })



        /*
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
        */
    }
}