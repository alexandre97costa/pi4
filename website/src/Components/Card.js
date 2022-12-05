import React from "react";
import Botao from "./Botao";

export default function Card(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="card bg-secondary text-center">
            <div className="card-tittle ps-5 fs-5 text-start">
              {props.cardTitulo}
            </div>

            <div className="row align-items-end">
              <div className="col-12">
                <Botao botao="Inscrever-me" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
