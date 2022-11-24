
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

        // 🚨 guard clauses

        if (!email) { res.status(403).json({ message: 'Email necessário!' }); return; }
        if (!password) { res.status(403).json({ message: 'Password necessária!' }); return; }

        const user = await utilizador
            .findOne({ where: { email: email } })
            .then(response => { return response?.dataValues })
        if (!user) { res.status(400).json({ message: 'Utilizador não encontrado' }); return; }

        const passwordMatch = bcrypt.compareSync(password, user.password);
        if (!passwordMatch) { res.status(400).json({ message: 'Password errada' }); return; }

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
            expiresIn: 30 // seconds
        }

        res.status(200).json({
            message: 'Autenticação realizada com sucesso!',
            token: jwt.sign(token, secret, options)
        });

        return
    },

    list: async (req, res) => {
        await utilizador
            .findAll({
                attributes: ['nome', 'email', 'data_nascimento', 'updated_at'],
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

        await utilizador
            .findOne({ where: { email: email } })
            .then(userJaExiste => {
                if (userJaExiste) {
                    res.status(400).json({
                        success: false,
                        message: 'Utilizador com esse email já existe.'
                    })
                    return
                }
            })
            .catch(error => { throw new Error(error) })

        await utilizador
            .create({
                nome: nome,
                email: email,
                data_nascimento: data_nasc,
                password: password,
                tipo_utilizador_id: 1 // por defeito visitante
            })
            .then(data => {
                res.status(200).json({
                    success: true,
                    message: "Utilizador registado com sucesso!",
                    data
                })
            })
            .catch(error => {

                // se for por causa de validações do sequelize, manda a msg
                if (error.name === "SequelizeValidationError") {
                    res.status(400).json({
                        success: false,
                        message: error.errors.length === 1 ?
                            error.errors[0].message :
                            Array.from(error.errors, e => { return e.message })
                    })
                }
                // se for qualquer outra coisa, manda o servidor abaixo (para sermos informados do erro) 
                else {
                    res.status(400).json({
                        success: false,
                        message: error
                    })
                    throw new Error(error)
                }
            })


    },

    // only available in dev mode
    create_in_bulk: async (req, res) => {
        if (process.env.MODE !== 'dev') {
            res.send(403).json({ message: 'Only available in a development environment.' })
            return
        }

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
            res.status(400).json({
                success: false,
                message: 'Faltam dados! É preciso email e o id do novo tipo de utilizador.'
            })
            return
        }
    },

    change_tipo_utilizador: async (req, res) => {
        if (
            !req.body.email ||
            !req.body.tipo_utilizador_id
        ) {
            res.status(400).json({
                success: false,
                message: 'Faltam dados! É preciso email e o id do novo tipo de utilizador.'
            })
            return
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
            res.json({
                success: false,
                message: 'Faltam dados! É preciso email.'
            })
            return
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
