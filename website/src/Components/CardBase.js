import React from "react";
import Botao from "./Botao";
import CardVantagensConteudo from "./CardVantagensConteudo";

export default function CardBase(props) {
  return (
    <div className="container">
      <div className="row pb-5">
        <div className="col-12">
          <div className="card bg-microsite text-center">
            <div className="card-tittle ps-5 fs-5 text-start">
              {props.cardTitulo}

              <CardVantagensConteudo/>
              <CardVantagensConteudo/>
              <CardVantagensConteudo/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
