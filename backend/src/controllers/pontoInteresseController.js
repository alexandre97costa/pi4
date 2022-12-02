
var sequelize = require('../config/Database')
const { Op } = require("sequelize")
const { dev: devClass } = require('../_dev/dev');
const dev = new devClass;
// * Como usar o Op:
// * https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#operators

const {
    utilizador,
    freguesia,
    municipio,
    distrito,
    tipo_interesse,
    ponto_interesse
} = sequelize.models
// * no final, podem-se apagar os que não estão a ser usados


module.exports = {
    // list: async (req, res) => {
    //     ponto_interesse
    //         .findAll()
    //         .then(output => { res.status(200).json({ distritos: output }) })
    //         .catch(error => { res.status(400); throw new Error(error); });
    // },

    listPontosInteresse: async (req, res) => {
        //if(pontoInteresse == null) then pontoInteresse = '%'
        let nome = req.query?.nome ?? '%'
        let categoria = req.query?.categoria ?? 0

        dev.log("pontoInteresse: " + nome)
        dev.log("categoria: " + categoria)

        ponto_interesse
            .findAll({
                where: {
                    nome: { [Op.iLike]: '%' + nome + '%' },
                    tipo_interesse_id: !!+categoria ? categoria : { [Op.ne]: categoria }
                },
                include: [{
                        model: tipo_interesse,
                        attributes: ['nome']
                    }, {
                        model: utilizador,
                        as: 'agente_turistico'
                    }, {
                        model: freguesia,
                        attributes: ['nome'],
                        include: {
                            model: municipio,
                            attributes: ['nome'],
                            include: {
                                model: distrito,
                                attributes: ['nome']
                            }
                        }
                    }
                ]
            })
            .then(data => { res.status(200).json({ data }) })
            .catch(error => { res.status(400); throw new Error(error); });
    }
}