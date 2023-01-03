var sequelize = require('../config/Database')
const { Op } = require('sequelize')
const { dev: devClass } = require('../_dev/dev');
const dev = new devClass;
// * Como usar o Op:
// * https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#operators

const {
    ponto_interesse,
    scan_ponto_interesse,
    utilizador,
    evento,
    scan_evento,
    sessao
} = sequelize.models

module.exports = {
    anonymousScan: async (req, res) => {
        res.status(200).json(req.params.codigo)
        // res.status(302).redirect('https://google.com')
    },

    scan_ponto_interesse: async (req, res) => {
        // Não permitir scans de utilizadores que não sejam visitantes
        if (req.auth.tipo !== 1)
            return res.status(401).json('Só visitantes é que podem carimbar Pontos de Interesse')


        const pi = await ponto_interesse.findOne({ where: { codigo_uuid: req.params.codigo } })

        // não encontrou o PI
        if (pi === null)
            return res.status(404).json('Esse Ponto de Interesse não existe. Talvez tenha sido eliminado?')

        const u = await utilizador.findOne({ where: { email: req.auth.email } })


        await scan_ponto_interesse
            .create({
                visitante_id: u.id,
                ponto_interesse_id: pi.id,
                pontos_recebidos: pi.num_pontos,
            })
            .then(data => res.status(200).json(data))
            .catch(e => res.status(400).json(e))
    },

    scan_evento: async (req, res) => {
        // Não permitir scans de utilizadores que não sejam visitantes
        if (req.auth.tipo !== 1)
            return res.status(401).json('Só visitantes é que podem carimbar Eventos')

        const ev = await evento.findOne({ where: { codigo_uuid: req.params.codigo } })

        // nao encontrou o evento
        if (ev === null)
            return res.status(404).json('Esse Evento não existe. Talvez tenha sido eliminado?')

        // o scan foi feito fora de horas?
        // - apanhamos as sessoes todas do evento
        // - calculamos o intervalo de horas (com o ev.num_horas)
        // - comparamos com a data atual

        const sessoes = await sessao.findAll({ where: { evento_id: ev.id } })

        // se nao houver sessoes para o evento
        if (!sessoes.length)
            return res.status(400).json('Esse Evento não tem sessões, logo não pode ser carimbado.')

        let dentroDeUmaSessao = false
        sessoes.forEach(sessao => {
            let agora = new Date()
            let inicio_sessao = sessao.dataValues.data_hora
            let fim_sessao = new Date(new Date(inicio_sessao).setHours(inicio_sessao.getHours() + ev.num_horas))

            if (inicio_sessao <= agora && fim_sessao >= agora)
                dentroDeUmaSessao = true
        })

        if (!dentroDeUmaSessao)
            return res.status(400).json('Não está a decorrer nenhuma sessão para este evento')

        const u = await utilizador.findOne({ where: { email: req.auth.email } })

        await scan_evento
            .create({
                visitante_id: u.id,
                evento_id: ev.id,
                pontos_recebidos: ev.num_pontos
            })
            .then(data => res.status(200).json(data))
            .catch(e => res.status(400).json(e))

    },
}