
var sequelize = require('../config/database')
const { Op, where } = require("sequelize")
const { dev: devClass } = require('../_dev/dev')
const dev = new devClass;
// * Como usar o Op:
// * https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#operators
const {
    ponto_interesse,
    ponto_interesse_recompensa,
    recompensa,
    tipo_interesse,
    utilizador,
    voucher
} = sequelize.models


module.exports = {
    get: async (req, res) => {

        // * filtros
        const id = req.params?.id ?? 0
        const visitante_id = req.query?.visitante_id ?? 0
        const recompensa_id = req.query?.recompensa_id ?? 0
        const tipo_interesse_id = req.query?.tipo_interesse_id ?? 0
        const usado = !!req.query?.usado

        // * ordenação e paginação
        const order = req.query?.order ?? 'id'
        const direction = req.query?.direction ?? 'asc'
        const offset = req.query?.offset ?? 0
        const limit = req.query?.limit ?? 0


        await voucher
            .findAndCountAll({
                where: {
                    id: !!+id ?
                        +id :
                        { [Op.ne]: 0 },
                    visitante_id: !!+visitante_id ?
                        +visitante_id :
                        { [Op.ne]: 0 },
                    recompensa_id: !!+recompensa_id ?
                        +recompensa_id :
                        { [Op.ne]: 0 },
                    data_usado: usado ?
                        { [Op.ne]: null } :
                        { [Op.eq]: null },
                },
                include: [
                    {
                        model: recompensa,
                        required: true,
                        attributes: ['titulo', 'descricao', 'pontos', 'tipo_interesse_id'],
                        include: [
                            {
                                model: tipo_interesse,
                                required: true,
                                attributes: ['nome'],
                                where: {
                                    id: !!+tipo_interesse_id ?
                                        +tipo_interesse_id :
                                        { [Op.ne]: 0 }
                                }
                            }, {
                                model: ponto_interesse_recompensa,
                                as: 'pontos_aderentes',
                                attributes: ['ponto_interesse_id'],
                                include: {
                                    model: ponto_interesse,
                                    as: 'ponto_interesse',
                                    attributes: ['nome'],
                                }
                            }
                        ]
                    }, {
                        model: utilizador,
                        as: 'visitante',
                        attributes: ['nome', 'email'],
                    }
                ],
                attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
                order: [[order, direction]],
                offset,
                limit: !!limit ? limit : null
            })
            .then(output => {
                return !output.count ?
                    res.status(404).json({ msg: 'Não existem vouchers que correspondam aos filtros solicitados.' }) :
                    res.status(200).json({ data: output.rows, count: output.count })
            })
            .catch(error => {
                res.status(400).json({ msg: 'Ocorreu um erro no pedido de reservas.' })
                dev.error(error)
                return
            })
    },

    post: async (req, res) => {

        if (req.auth.tipo !== 1)
            return res.status(401).json({ msg: 'Apenas visitantes podem resgatar vouchers.' })

        // o voucher precisa de visitante + recompensa.
        // o visitante vem no auth, a recompensa vem no body

        // o body tem que ter todos os coises
        const required_params = [
            'recompensa_id'
        ]
        const check_all_required = required_params.every(param => req.body.hasOwnProperty(param))
        if (!check_all_required)
            return res.status(400).json({ msg: 'Faltam dados para poder criar o voucher.', required_params })

        const { recompensa_id } = req.body

        // verificar se a recompensa existe realmente
        const _recompensa = await recompensa.findByPk(recompensa_id)
        if (_recompensa === null)
            return res.status(404).json({ msg: 'A recompensa fornecida não existe ou foi eliminada.' })

        await voucher
            .create({
                visitante_id: req.auth.id,
                recompensa_id: recompensa_id,
                pontos_gastos: _recompensa.pontos
            })
            .then(output => { return res.status(200).json({ voucher: output }) })
            .catch(error => {
                res.status(400).json({ error })
                dev.error(error)
                return
            })
    }
}