import React from 'react'
import { Link } from 'react-router-dom';

import Botao from '../Botao';

export default function CardPontoInteresse(props) {
  function chooseTipoCartao(tipo) {
    if (tipo === 'remove')
      return (
        <Botao className="btn-outline-danger w-100" onClick={() => props.onClick(props.id)} texto="Remover" />
      )

    return (
      <Link to={"/pontos-interesse/" + props.id_ponto_interesse} className="btn btn-outline-success w-100">Ver mais detalhes</Link>
    )
  }

  return (
    <div className="card border-0 rounded-4 shadow"  >
      <img src={props.imagem} className="card-img-top" />

      <div className="card-body p-3 d-flex flex-column">
        <h5 className="card-title fs-4">{props.nome}</h5>

        <h6 className="card-subtitle fs-4 fw-light">{props.categoria}</h6>

        <p className="card-text fs-6 fw-light mb-4">{props.morada}</p>

        <div className="fs-4 mb-4 mt-auto">
          <div className="text-center">
            <i className="bi bi-qr-code-scan text-success px-2">{props.numeroScans}</i>
            {/* <i className="bi bi-chat text-primary px-2">{props.numeroComentarios}</i> */}
            <i className="bi bi-star text-warning px-2">{props.numeroFavoritos}</i>
            {/* <i className="bi bi-journal-check text-info px-2">{props.numeroCheck}</i> */}
          </div>
          {chooseTipoCartao(props.tipo)}
        </div>
      </div>
    </div>
  );
}


