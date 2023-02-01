import React from "react";

export default function CardRecompensa(props) {
  return (
    <>
      <div className="align-content-center card border-0 rounded-4 shadow h-100 p-4">
        <img
          src={props.imagem}
          className="img-fluid align-self-center rounded w-50 img-fluid"
        />
        <h5 className="card-title fs-4 pt-3">{props.title}</h5>
        <h5 className="card-title text-success">{props.pontos}</h5>
      </div>
      <div className="pt-3 d-grid mx-auto">
      <button type="button" className="btn btn-outline-danger">
        Eliminar
      </button>
      </div>
    </>
  );
}
