var sequelize = require('../config/Database')
const { Op } = require('sequelize')
const { dev: devClass } = require('../_dev/dev');
const dev = new devClass;
// * Como usar o Op:
// * https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#operators

const {
    ponto_interesse,
    pontos_ponto_interesse,
    comentario_avaliacao,
    imagem,
    utilizador,
    freguesia,
    tipo_interesse,
    municipio,
    distrito,
    ponto_interesse_recompensa,
    recompensa,
} = sequelize.models

module.exports = {
    anonymousScan: async (req, res) => {
        res.status(302).redirect('https://google.com')
    },
    visitanteScan: async (req, res) => {
        // Não permitir scans de utilizadores que não sejam visitantes
        if (req.auth.tipo !== 1)
            return res.status(401).json('Só visitantes é que podem carimbar Pontos de Interesse')

        
    },
}