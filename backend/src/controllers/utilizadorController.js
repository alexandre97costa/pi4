
var sequelize = require('../config/Database')
const { Op } = require("sequelize")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { dev: devClass } = require('../_dev/dev')
const dev = new devClass;
require('dotenv').config()
const bulk_users = require('../_dev/request bodies/create_user_in_bulk.json')
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

        if (!email) return res.status(403).json({ message: 'Email necessário!' })
        if (!password) return res.status(403).json({ message: 'Password necessária!' })

        const user = await utilizador
            .findOne({ where: { email: email } })
            .then(response => { return response?.dataValues })

        if (!user) return res.status(400).json({ message: 'Utilizador não encontrado' })

        const passwordMatch = bcrypt.compareSync(password, user.password);
        if (!passwordMatch) return res.status(400).json({ message: 'Password errada' })

        // ✅ a partir daqui já verificámos que tudo está bem, siga mandar o token

        dev.verbose(user)

        const token = {
            nome: user.nome,
            email: user.email,
            tipo: user.tipo_utilizador_id
        }

        const secret = process.env.JWT_SECRET

        const options = {
            algorithm: process.env.JWT_ALGORITHM,
            expiresIn: 30000
        }

        return res.status(200).json({
            message: 'Autenticação realizada com sucesso!',
            token: jwt.sign(token, secret, options)
        });
    },

    list: async (req, res) => {
        await utilizador
            .findAll({
                attributes: ['nome', 'email', 'password' ,'data_nascimento', 'updated_at'],
                include: {
                    model: tipo_utilizador,
                    attributes: ['nome', 'observacoes']
                }
            })
            .then(data => { res.status(200).json({ data }) })
            .catch(e => { dev.error(e); res.status(400).json({ e }) })
    },

    list_tipos: async (req, res) => {
        await tipo_utilizador
            .findAll({ attributes: ['id', 'nome', 'observacoes'], order: [['id', 'ASC']] })
            .then(data => { res.status(200).json({ data }) })
            .catch(e => { dev.error(e); res.status(400).json({ e }) })
    },

    create: async (req, res) => {
        if (
            !req.body.nome ||
            !req.body.email ||
            !req.body.data_nasc ||
            !req.body.password
        ) {
            res.status(400).json({
                success: false,
                message: 'Faltam dados! É preciso email e o id do novo tipo de utilizador.'
            })
            return
        }

        const nome = req.body.nome
        const email = req.body.email.trim() ?? ""
        const data_nasc = req.body.data_nasc
        const password = req.body.password

        const utilizadorJaExiste = await utilizador.findOne({ where: { email: email } })

        if (utilizadorJaExiste) return res.status(400).json({ message: 'Utilizador com esse email já existe.' })
        

        await utilizador
            .create({
                nome: nome,
                email: email,
                data_nascimento: data_nasc,
                password: password,
            })
            .then(data => {
                res.status(200).json({
                    message: "Utilizador registado com sucesso!",
                    data
                })
            })
            .catch(error => {
                console.log(error)

                // se for por causa de validações do sequelize, manda a msg
                if (error.name === "SequelizeValidationError") {
                    return res.status(400).json({
                        message: error.errors.length === 1 ?
                            error.errors[0].message :
                            Array.from(error.errors, e => { return e.message })
                    })
                }
                // se for qualquer outra coisa, manda o servidor abaixo (para sermos informados do erro) 
                else {
                    res.status(400).json({
                        message: error
                    })
                    dev(error)
                    return
                }
            })


    },

    // only available in dev mode
    create_in_bulk: async (req, res) => {
        if (process.env.MODE !== 'dev') return res.send(403).json({ message: 'Only available in a development environment.' })
        

        await utilizador
            .bulkCreate(bulk_users, { individualHooks: true })
            .then(response => res.status(200).json(response))
            .catch(error => res.status(400).json({ error }))
    },

    update: async (req, res) => {
        // todo ainda não está feito
        if (
            !req.body.email ||
            !req.body.tipo_utilizador_id
        ) {
            return res.status(400).json({
                success: false,
                message: 'Faltam dados! É preciso email e o id do novo tipo de utilizador.'
            })
        }
    },

    change_tipo_utilizador: async (req, res) => {
        if (
            !req.body.email ||
            !req.body.tipo_utilizador_id
        ) {
            return res.status(400).json({
                success: false,
                message: 'Faltam dados! É preciso email e o id do novo tipo de utilizador.'
            })
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
                            res.status(200).json({
                                success: true,
                                message: 'Tipo de utilizador atualizado.',
                                data
                            })
                        })
                }
                else {
                    res.status(404).json({
                        success: false,
                        message: 'Utilizador não encontrado.'
                    })
                }
            })
    },

    delete: async (req, res) => {
        if (!req.body.email) {
            return res.json({
                success: false,
                message: 'Faltam dados! É preciso email.'
            })
        }

        const email = req.body.email

        await utilizador
            .findOne({ where: { email: email } })
            .then(async found => {
                if (!!found) {
                    await utilizador
                        .destroy({ where: { email: email } })
                        .then(destroyed => {
                            res.json({
                                success: true,
                                message: 'Utilizador eliminado.'
                            })
                        })
                }
                else {
                    res.json({
                        success: false,
                        message: 'Utilizador não encontrado.'
                    })
                }
            })

    },
}
