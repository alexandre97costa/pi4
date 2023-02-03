import React from "react";

export default function CardRecompensa(props) {
  return (
    <>
      <div className="d-flex card border-0 rounded-4 shadow h-100 p-4">
        <h5 className="card-title fs-4">
          <div className="row">
            <div className="col-8 col-md-9 align-self-center">{props.title}</div>
            <div className="col-4 col-md-3 text-end"><button type="button" className="btn bi bi-trash3 text-danger" aria-label="Close" /></div>
          </div>
        </h5>
        <h6 className="card-title fw-normal">{props.categoria}</h6>
        <h5 className="card-title text-success">{props.pontos} pontos</h5>
      </div>
    </>
  );
}
