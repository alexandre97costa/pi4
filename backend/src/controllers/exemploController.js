var { Exemplo } = require('../model/tabelas')
var sequelize = require('../model/db')
const { Op } = require("sequelize")
// * Como usar o Op:
// * https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#operators

module.exports = {
    enviar: async (req, res) => {

        res.send('Mensagem enviada através do ExemploController!')

        /*
        await sequelize
            .sync()
            .then(async () => {

                Exemplo
                    .findAll()
                    .then(output => { res.status(200).json({ exemplos: output }) })
                    .catch(error => { res.status(400); throw new Error(error); });

            })
            */
    }
}