
var sequelize = require('../config/Database')
const { Op } = require("sequelize")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config()
// * Como usar o Op:
// * https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#operators
const {
    tipo_utilizador,
    utilizador
} = sequelize.models
// * no final, podem-se apagar os que não estão a ser usados


module.exports = {

    login: async (req, res) => {

        let email, password = null

        if (!!req.body.email && !!req.body.password) {
            email = req.body.email
            password = req.body.password
        } else {
            res.status(403).json({
                success: false,
                message: 'Dados necessários: email e password'
            });
            return
        }

        // procura se existe um utilizador com o email enviado
        let user = await utilizador
            .findOne({ where: { email: email } })
            .then(data => { return data })
            .catch(error => { console.log(error) })

        console.log(user)


        if (!!user) {
            const passwordMatch = bcrypt.compareSync(password, user.password);
            if (passwordMatch) {

                // o que enviar no payload do jwt
                let token = {
                    nome: user.nome,
                    email: user.email,
                    tipo: user.tipo_utilizador_id
                }

                const options = {
                    algorithm: "HS256",
                    expiresIn: 30 // seconds
                }

                res.status(200).json({
                    success: true,
                    message: 'Autenticação realizada com sucesso!',
                    token: jwt.sign(token, process.env.JWT_SECRET, options),
                    username: user.username,
                    email: user.email
                });
                return
            }
        }

        res.status(403).json({
            success: false,
            message: 'Dados inválidos.'
        });
    },

    list: async (req, res) => {
        await sequelize.sync()
            .then(async () => {
                await utilizador
                    .findAll({
                        attributes: ['nome', 'email', 'data_nascimento', 'updated_at'],
                        include: {
                            model: tipo_utilizador,
                            attributes: ['nome', 'observacoes']
                        }
                    })
                    .then(data => { res.json({ success: true, data }) })
                    .catch(error => { return error })
            })

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
