import React from "react";

export default function CardRecompensa(props) {
  return (
    <>
      <div className="d-flex card border-0 rounded-4 shadow h-100 p-4">
      <button type="button" class="btn btn-outline-danger bi bi-trash3 align-self-end" aria-label="Close"></button>
        <img
          src={props.imagem}
          className="img-fluid align-self-center rounded w-50 img-fluid"
        />
        <h5 className="card-title fs-4 pt-3">{props.title}</h5>
        <h5 className="card-title text-success">{props.pontos}</h5>
      </div>
      <div className="pt-3 d-grid mx-auto">
      </div>
    </>
  );
}
