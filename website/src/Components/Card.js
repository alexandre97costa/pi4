import React from "react";
import Botao from "./Botao";

export default function Card(props) {
  return (
    <div className="container">
      <div className="row pb-5 ">
        <div className="col-sm">
          <div className="card border-0 bg-microsite text-center">
            <div className="card-tittle ps-5 fs-5">
              {props.cardTitulo}
              <Botao botao="Inscrever-me" />
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}
