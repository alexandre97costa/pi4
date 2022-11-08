function applyExtraSetup(sequelize) {
    const {
        candidatura_at,
        comentario_avaliacao,
        distrito,
        evento,
        freguesia,
        imagem,
        municipio,
        ponto_interesse,
        ponto_interesse_recompensa,
        pontos_evento,
        pontos_ponto_interesse,
        recompensa,
        reserva,
        sessao,
        tipo_evento,
        tipo_interesse,
        tipo_utilizador,
        utilizador,
        voucher
    } = sequelize.models


    candidatura_at.belongsTo(distrito, { foreignKey: 'distrito_id' })
    candidatura_at.belongsTo(utilizador, { foreignKey: 'visitante_id' })

    comentario_avaliacao.belongsTo(utilizador, { foreignKey: 'visitante_id' })
    comentario_avaliacao.belongsTo(ponto_interesse, { foreignKey: 'ponto_interesse_id' })

    distrito.hasMany(candidatura_at, { foreignKey: 'distrito_id' })
    distrito.hasMany(municipio, { foreignKey: 'distrito_id' })
    distrito.belongsTo(utilizador, { foreignKey: 'responsavel_regiao_id' })

    evento.belongsTo(tipo_evento, { foreignKey: 'tipo_evento_id' })
    evento.hasMany(sessao, { foreignKey: 'evento_id' })
    evento.hasMany(pontos_evento, { foreignKey: 'evento_id' })
    evento.belongsTo(ponto_interesse, { foreignKey: 'ponto_interesse_id' })

    freguesia.belongsTo(municipio, { foreignKey: 'municipio_id' })
    freguesia.hasMany(ponto_interesse, { foreignKey: 'freguesia_id' })

    imagem.belongsTo(ponto_interesse, { foreignKey: 'ponto_interesse_id' })

    municipio.belongsTo(distrito, { foreignKey: 'distrito_id' })
    municipio.hasMany(freguesia, { foreignKey: 'municipio_id' })

    ponto_interesse.hasMany(evento, { foreignKey: 'ponto_interesse_id' })
    ponto_interesse.belongsTo(freguesia, { foreignKey: 'freguesia_id' })
    ponto_interesse.belongsTo(utilizador, { foreignKey: 'agente_turistico_id' })
    ponto_interesse.hasMany(imagem, { foreignKey: 'ponto_interesse_id' })
    ponto_interesse.hasMany(comentario_avaliacao, { foreignKey: 'ponto_interesse_id' })
    ponto_interesse.hasMany(pontos_ponto_interesse, { foreignKey: 'ponto_interesse_id' })
    ponto_interesse.hasMany(ponto_interesse_recompensa, { foreignKey: 'ponto_interesse_id' })
    ponto_interesse.belongsTo(tipo_interesse, { foreignKey: 'tipo_interesse_id' })

    ponto_interesse_recompensa.belongsTo(ponto_interesse, { foreignKey: 'ponto_interesse_id' })
    ponto_interesse_recompensa.belongsTo(recompensa, { foreignKey: 'recompensa_id' })

    pontos_evento.belongsTo(evento, { foreignKey: 'evento_id' })
    pontos_evento.belongsTo(utilizador, { foreignKey: 'visitante_id' })

    pontos_ponto_interesse.belongsTo(ponto_interesse, { foreignKey: 'ponto_interesse_id' })
    pontos_ponto_interesse.belongsTo(utilizador, { foreignKey: 'visitante_id' })

    recompensa.hasMany(voucher, { foreignKey: 'recompensa_id' })
    recompensa.hasMany(ponto_interesse_recompensa, { foreignKey: 'recompensa_id' })
    recompensa.belongsTo(tipo_interesse, { foreignKey: 'tipo_interesse_id' })

    reserva.belongsTo(utilizador, { foreignKey: 'visitante_id' })
    reserva.belongsTo(sessao, { foreignKey: 'sessao_id' })

    sessao.hasMany(reserva, { foreignKey: 'sessao_id' })
    sessao.belongsTo(evento, { foreignKey: 'evento_id' })

    tipo_evento.hasMany(evento, { foreignKey: 'tipo_evento_id' })

    tipo_interesse.hasMany(ponto_interesse, { foreignKey: 'tipo_interesse_id' })
    tipo_interesse.hasMany(recompensa, { foreignKey: 'tipo_interesse_id' })

    tipo_utilizador.hasMany(utilizador, { foreignKey: 'tipo_utilizador_id' })

    utilizador.belongsTo(tipo_utilizador, { foreignKey: 'tipo_utilizador_id' })
    utilizador.hasMany(candidatura_at, { foreignKey: 'visitante_id' })
    utilizador.hasMany(reserva, { foreignKey: 'visitante_id' })
    utilizador.hasMany(comentario_avaliacao, { foreignKey: 'visitante_id' })
    utilizador.hasMany(pontos_evento, { foreignKey: 'visitante_id' })
    utilizador.hasMany(pontos_ponto_interesse, { foreignKey: 'visitante_id' })
    utilizador.hasMany(voucher, { foreignKey: 'visitante_id' })
    utilizador.hasMany(ponto_interesse, { foreignKey: 'agente_turistico_id' })
    utilizador.hasMany(distrito, { foreignKey: 'responsavel_regiao_id' })

    voucher.belongsTo(utilizador, { foreignKey: 'visitante_id' })
    voucher.belongsTo(recompensa, { foreignKey: 'recompensa_id' })

}

module.exports = { applyExtraSetup };