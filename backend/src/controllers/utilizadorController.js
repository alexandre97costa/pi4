
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

    // todo: atualizar estes controllers todos
    get: async (req, res) => {
        await utilizador
            .findAll({
                attributes: ['nome', 'email', 'password', 'data_nascimento', 'updated_at'],
                include: {
                    model: tipo_utilizador,
                    attributes: ['nome', 'observacoes']
                }
            })
            .then(data => { res.status(200).json({ data }) })
            .catch(e => { dev.error(e); res.status(400).json({ e }) })
    },

    tipos: async (req, res) => {
        await tipo_utilizador
            .findAll({ attributes: ['id', 'nome', 'observacoes'], order: [['id', 'ASC']] })
            .then(data => { res.status(200).json({ data }) })
            .catch(e => { dev.error(e); res.status(400).json({ e }) })
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
            .then(data => {
                return res.status(200).json({
                    msg: 'Utilizador registado com sucesso!',
                    data
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
        // todo ainda não está feito
        if (
            !req.body.email ||
            !req.body.tipo_utilizador_id
        ) {
            return res.status(400).json({ msg: 'Faltam dados! É preciso email e o id do novo tipo de utilizador.' })
        }
    },

    mudar_tipo: async (req, res) => {
        if (
            !req.body.email ||
            !req.body.tipo_utilizador_id
        ) {
            return res.status(400).json({ msg: 'Faltam dados! É preciso email e o id do novo tipo de utilizador.' })
        }

        const email = req.body.email
        const tipo_utilizador_id = req.body.tipo_utilizador_id

        await utilizador
            .findOne({ where: { email: email } })
            .then(async found => {
                if (!!found) {
                    await found
                        .update({ tipo_utilizador_id: tipo_utilizador_id })
                        .then(data => {
                            return res.status(200).json({
                                msg: 'Tipo de utilizador atualizado.',
                                data
                            })
                        })
                }
                else {
                    return res.status(404).json({ msg: 'Utilizador não encontrado.' })
                }
            })
    },

    delete: async (req, res) => {
        if (!req.body.email) {
            return res.json({ msg: 'Faltam dados! É preciso email.' })
        }

        const email = req.body.email

        await utilizador
            .findOne({ where: { email: email } })
            .then(async found => {
                if (!!found) {
                    await utilizador
                        .destroy({ where: { email: email } })
                        .then(destroyed => {
                            return res.json({ msg: 'Utilizador eliminado.' })
                        })
                }
                else {
                    return res.json({ msg: 'Utilizador não encontrado.' })
                }
            })

    },
}
