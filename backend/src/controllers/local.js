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
    distrito: async (req, res) => {
        await distrito.findAndCountAll()
            .then(output => {
                return !output ?
                    res.status(404).json({ msg: 'Não existem distritos.' }) :
                    res.status(200).json({ distritos: output.rows, count: output.count })
            })
            .catch(error => {
                res.status(400).json({ msg: 'Ocorreu um erro no pedido de distritos.' })
                dev.error({ error })
                return
            })
    },
    municipio: async (req, res) => {
        const distrito_id = req.query?.distrito_id ?? 0

        await municipio.findAndCountAll({ where: { distrito_id: distrito_id } })
            .then(output => {
                return !output.count ?
                    res.status(404).json({ msg: 'Não existem municipios neste distrito.' }) :
                    res.status(200).json({ municipios: output.rows, count: output.count })
            })
            .catch(error => {
                res.status(400).json({ msg: 'Ocorreu um erro no pedido de municipios.' })
                dev.error({ error })
                return
            })
    },
    freguesia: async (req, res) => {
        const municipio_id = req.query?.municipio_id ?? 0

        await freguesia.findAndCountAll({ where: { municipio_id: municipio_id } })
            .then(output => {
                return !output.count ?
                    res.status(404).json({ msg: 'Não existem freguesias neste municipio.' }) :
                    res.status(200).json({ freguesias: output.rows, count: output.count })
            })
            .catch(error => {
                res.status(400).json({ msg: 'Ocorreu um erro no pedido de freguesias.' })
                dev.error({ error })
                return
            })
    }
}