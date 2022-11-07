var { CandidaturaAT } = require('../model/candidaturaAT')
var { Exemplo } = require('../model/exemplo')
var sequelize = require('../config/Database')
const { Op } = require("sequelize")
// * Como usar o Op:
// * https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#operators

module.exports = {
    list: async (req, res) => {

        await sequelize
            .sync()
            .then(async () => {

                Exemplo
                    .findAll({
                        attributes: ['nome', 'descricao']
                    })
                    .then(output => { res.status(200).json({ exemplos: output }) })
                    .catch(error => { res.status(400); throw new Error(error); });

            })

    }
}