
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

        let user = await utilizador
            .findOne({ where: { email: email } })
            .then(data => { return data })
            .catch(error => { console.log(error) })

        console.log(user)


        if (!!user) {
            const passwordMatch = bcrypt.compareSync(password, user.password);
            if (passwordMatch) {

                let token = {
                    email: email
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
                    .findAll({ include: tipo_utilizador })
                    .then(data => { res.json({ success: true, data }) })
                    .catch(error => { return error })
            })

    },

    create: async (req, res) => {
        if (
            !req.body.name ||
            !req.body.email ||
            !req.body.data_nasc ||
            !req.body.password
        ) {
            res.status(400).json({
                success: false,
                message: 'Faltam dados! É preciso nome, email, data de nascimento e password.'
            })
            return
        }

        const name = req.body.name
        const email = req.body.email
        const data_nasc = req.body.data_nasc
        const password = req.body.password


        let userJaExiste = await utilizador
            .findOne({
                where: {
                    [Op.or]: [
                        { email: email },
                        { name: name }
                    ]
                }
            })

        if (userJaExiste) {
            res.json({
                success: false,
                message: 'Utilizador com esse email já existe.'
            })
            return
        }

        await utilizador
            .create({
                name: name,
                email: email,
                data_nascimento: data_nasc,
                password: password,
            })
            .then(data => {
                res.status(200).json({
                    success: true,
                    message: "Utilizador registado com sucesso!",
                    data
                });
            })
            .catch(error => { throw new Error(error) })


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
