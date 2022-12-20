import React from 'react'

export default function CardDetails(props) {
  return (
    <div className="row mb-4">
      <div className="col-3 d-none d-md-block">
        <img src={props.imagem} className="card-img-top h-100 img-fluid rounded" />
      </div>

      <div className="col-md-9">
        <div className="card border-0 shadow mb-3 h-100">

          <div className="card-body">
            <h5 className="card-title fw-light">Nome</h5>
            <h6 className="card-subtitle mb-4 fs-4">{props.nome}</h6>

            <h5 className="card-title fw-light">Descrição</h5>
            <h6 className="card-subtitle mb-4 fs-4">{props.descricao}</h6>

            <h5 className="card-title fw-light">Contacto</h5>
            <h6 className="card-subtitle mb-4 fs-4">{props.contacto}</h6>

            <h5 className="card-title fw-light">Email</h5>
            <h6 className="card-subtitle fs-4">{props.email}</h6>

          </div>
        </div>
      </div>
    </div>
  );
}