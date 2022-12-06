import React from "react";
import Botao from "./Botao";

export default function CardVantagensConteudo(props) {
  return (
    <div className="container text">
      <div className="row p-5">
        <div className="col-12">
          
          <div className="card border-0 text-center shadow p-3">
            <img src="..." class="card-img-top" alt="..." />

              <h5 className="card-tittle">{props.cardTitulo}</h5>
              <p className="card-text">{props.cardTexto}</p>
              <Botao botao="Ver mais" />

          </div>
        </div>
      </div>
    </div>
  );
}
