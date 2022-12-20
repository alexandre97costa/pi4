import React from 'react'
import { Link } from 'react-router-dom';

export default function CardPontoInteresse(props) {
  function chooseTipoCartao(tipo) {
    if(tipo === 'remove')
      return (
        <button className="btn btn-outline-danger w-100" onClick={(value) => props.onClick(value)}>Remover</button>
      )

    return(
      <Link to={"/AT_detalhesPI/" + props.id} className="btn btn-outline-success w-100">Ver mais detalhes</Link>
    )
  }

  return (
    <div className="card border-0 shadow">
      <img src={props.imagem} className="card-img-top" />

      <div className="card-body p-3">
        <h5 className="card-title fs-4">{props.nome}</h5>

        <h6 className="card-subtitle fs-4 fw-light">{props.categoria}</h6>

        <p className="card-text fs-5 fw-light mb-4">{props.morada}</p>

        <div className="fs-4 text-center mb-4">
          <i className="bi bi-qr-code-scan text-success px-2">{props.numeroScans}</i>
          <i className="bi bi-chat text-primary px-2">{props.numeroComentarios}</i>
          <i className="bi bi-star text-warning px-2">{props.numeroFavoritos}</i>
          <i className="bi bi-journal-check text-info px-2">{props.numeroCheck}</i>
        </div>

        { chooseTipoCartao(props.tipo) }

      </div>
    </div>
  );
}


