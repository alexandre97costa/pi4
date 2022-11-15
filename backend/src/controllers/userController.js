
var sequelize = require('../config/Database')
const { Op } = require("sequelize")
// * Como usar o Op:
// * https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#operators
const {
    tipo_utilizador,
    utilizador
} = sequelize.models
// * no final, podem-se apagar os que não estão a ser usados


module.exports = {
    all: async (req, res) => {
        utilizador
            .findAll({ include: tipo_utilizador })
            .then(output => { res.status(200).json({ utilizadores: output }) })
            .catch(error => { res.status(400); throw new Error(error); });
    },
    login: async (req, res) => {
        utilizador
            .findAll({ include: tipo_utilizador })
            .then(output => { res.status(200).json({ utilizadores: output }) })
            .catch(error => { res.status(400); throw new Error(error); });
    }
}