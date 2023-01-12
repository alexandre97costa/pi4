
var sequelize = require('../config/Database')
const { Op } = require("sequelize")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { dev: devClass } = require('../_dev/dev')
const dev = new devClass;
require('dotenv').config()
const {
    tipo_utilizador,
    utilizador
} = sequelize.models
// * no final, podem-se apagar os que não estão a ser usados


module.exports = {

    login: async (req, res) => {

        let email = req.body?.email
        let password = req.body?.password
        let longExp = req.body?.longExp

        // 🚨 guard clauses

        if (!email) return res.status(403).json({ msg: 'Email necessário!' })
        if (!password) return res.status(403).json({ msg: 'Password necessária!' })

        const user = await utilizador
            .findOne({ where: { email: email } })
            .then(response => { return response?.dataValues })

        if (!user) return res.status(400).json({ msg: 'Utilizador não encontrado' })

        const passwordMatch = bcrypt.compareSync(password, user.password);
        if (!passwordMatch) return res.status(400).json({ msg: 'Password errada' })

        // ✅ a partir daqui já verificámos que tudo está bem, siga mandar o token

        dev.verbose(user)

        const token = {
            id: user.id,
            nome: user.nome,
            email: user.email,
            tipo: user.tipo_utilizador_id
        }

        const secret = process.env.JWT_SECRET

        const options = {
            algorithm: process.env.JWT_ALGORITHM,
            expiresIn: process.env.MODE === "dev" ?
                259200 :    // 3 dias
                900         // 15 minutos
        }

        return res.status(200).json({
            msg: 'Autenticação realizada com sucesso!',
            token: jwt.sign(token, secret, options)
        });
    },

    get: async (req, res) => {
        // * filtros
        const id = req.params?.id ?? 0
        const nome = req.query?.nome ?? '%'
        const tipo_utilizador_id = req.query?.tipo_utilizador_id ?? 0

        // * ordenação e paginação
        const order = req.query?.order ?? 'nome'
        const direction = req.query?.direction ?? 'asc'
        const offset = req.query?.offset ?? 0
        const limit = req.query?.limit ?? 0


        await utilizador
            .findAndCountAll({
                where: {
                    id: !!+id ?
                        +id :
                        { [Op.ne]: 0 },
                    nome: {
                        [Op.iLike]: '%' + nome + '%'
                    },
                    tipo_utilizador_id: !!+tipo_utilizador_id ?
                        +tipo_utilizador_id :
                        { [Op.ne]: 0 },
                },
                include: {
                    model: tipo_utilizador,
                    attributes: ['nome', 'observacoes']
                },
                attributes: { exclude: ['password'] },
                order: [[order, direction]],
                offset: offset,
                limit: !!limit ? limit : null,
            })
            .then(output => {
                return !output.count ?
                    res.status(404).json({ msg: 'Não existem pontos de interesse que correspondam aos filtros solicitados.' }) :
                    res.status(200).json({ data: output.rows, count: output.count })
            })
            .catch(error => {
                res.status(400).json({ error })
                dev.error(e)
                return
            })
    },

    post: async (req, res) => {
        if (
            !req.body.nome ||
            !req.body.email ||
            !req.body.data_nasc ||
            !req.body.password
        ) {
            return res.status(400).json({ msg: 'Faltam dados!' })
        }

        const nome = req.body.nome
        const email = req.body.email.trim() ?? ""
        const data_nasc = req.body.data_nasc
        const password = req.body.password
        const tipo = req.body?.tipo ?? 1

        const utilizadorJaExiste = await utilizador.findOne({ where: { email: email } })

        if (utilizadorJaExiste)
            return res.status(400).json({ msg: 'Utilizador com esse email já existe.' })

        await utilizador
            .create({
                nome: nome,
                email: email,
                data_nascimento: data_nasc,
                password: password,
                // em dev, pode-se criar um user que nao seja visitante logo à partida
                // em prod, todos os utilizadores começam como visitantes
                tipo_utilizador_id: process.env.MODE == "dev" ? +tipo : 1
            })
            .then(output => {
                return res.status(200).json({
                    msg: 'Utilizador registado com sucesso!',
                    user: output
                })
            })
            .catch(error => {
                console.log(error)

                // se for por causa de validações do sequelize, manda a msg
                if (error.name === "SequelizeValidationError") {
                    return res.status(400).json({
                        msg: error.errors.length === 1 ?
                            error.errors[0].message :
                            Array.from(error.errors, e => { return e.message })
                    })
                }
                // se for qualquer outra coisa, manda o servidor abaixo (para sermos informados do erro) 
                else {
                    res.status(400).json({ msg: error })
                    dev.error(error)
                    return
                }
            })


    },

    editar: async (req, res) => {
        const { id } = req.params
        //! Para eu nao andar aqui com cenas, na app manda tudo
        //! Manda o valor que já lá estava se não foi mudado
        const { nome, email, data_nascimento } = req.body

        // verificar se o utilizador realmente existe
        const _utilizador = await utilizador.findByPk(id)
        if (_utilizador === null)
            return res.status(404).json({ msg: 'O utilizador fornecido não existe ou foi eliminado.' })

        // cada utilizador só se pode editar a si mesmo
        if (req.auth.id !== id)
            return res.status(401).json({ msg: 'Só podesatualizar as tuas próprias informações' })

        await _utilizador
            .update({
                nome: nome,
                email: email,
                data_nascimento: data_nascimento
            })
            .then(output => {
                return !output[0] ?
                    res.status(400).json({ msg: 'Utilizador não atualizado.' }) :
                    res.status(200).json({ msg: 'Utilizador atualizado.', utilizador: output[0] })
            })
            .catch(error => {
                res.status(400).json({ error })
                dev.error(error)
                return
            })
    },

    mudar_tipo: async (req, res) => {
        // apenas admins e responsaveis podem mudar tipos
        if (req.auth.tipo !== 3 || req.auth.tipo !== 4)
            return res.status(401).json({ msg: 'Apenas administradores e responsáveis podem mudar o tipo de utilizador.' })

        // nao podes mudar o tipo a ti mesmo
        if (req.params.id === req.auth.id)
            return res.status(401).json({ msg: 'Não podes mudar o teu próprio tipo de utilizador.' })

        if (!req.body.novo_tipo)
            return res.status(400).json({ msg: 'Falta o novo tipo de utilizador' })

        const { id } = req.params
        const { novo_tipo } = req.body

        // verificar se o utilizador realmente existe
        const _utilizador = await utilizador.findByPk(id)
        if (_utilizador === null)
            return res.status(404).json({ msg: 'O utilizador fornecido não existe ou foi eliminado.' })

        await _utilizador
            .update({ tipo_utilizador_id: +novo_tipo })
            .then(output => {
                return !output[0] ?
                    res.status(400).json({ msg: 'Utilizador não atualizado.' }) :
                    res.status(200).json({ msg: 'Utilizador atualizado.', utilizador: output[0] })
            })
            .catch(error => {
                res.status(400).json({ error })
                dev.error(error)
                return
            })
    },

    delete: async (req, res) => {

        const { id } = req.params

        // os visitantes e agentes só se podem eliminar a si mesmos
        if (
            req.auth.id !== id && (
                req.auth.tipo === 1 ||
                req.auth.tipo === 2
            )) {
            return res.status(401).json({ msg: 'Não podes eliminar outros utilizadores.' })
        }

        // verificar se o utilizador realmente existe
        const _utilizador = await utilizador.findByPk(id)
        if (_utilizador === null)
            return res.status(404).json({ msg: 'O utilizador fornecido não existe ou já foi eliminado.' })

        // responsaveis so podem eliminar agentes e visitantes
        if (
            req.auth.tipo === 3 && (
                _utilizador.tipo_utilizador_id !== 1 &&
                _utilizador.tipo_utilizador_id !== 2
            )) {
            return res.status(401).json({ msg: 'Só podes eliminar agentes e visitantes.' })
        }

        // admins nao podem eliminar admins
        if (req.auth.tipo === 3 && _utilizador.tipo_utilizador_id === 4)
            return res.status(401).json({ msg: 'Não podes eliminar administradores.' })

        // ✅ tudo gucci, siga pra vinho
        await _utilizador.destroy()
            .then(output => {
                return !output ?
                    res.status(400).json({ msg: 'Utilizador não elimininado.' }) :
                    res.status(200).json({ msg: 'Utilizador elimininado.' })
            })
            .catch(error => {
                res.status(400).json({ error })
                dev.error(error)
                return
            })


    },

    tipos: async (req, res) => {
        await tipo_utilizador
            .findAll({ attributes: ['id', 'nome', 'observacoes'], order: [['id', 'ASC']] })
            .then(output => { res.status(200).json({ tipos: output }) })
            .catch(e => {
                res.status(400).json({ error })
                dev.error(e)
                return
            })
    },
}
