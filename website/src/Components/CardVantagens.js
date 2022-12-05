import React from "react";
import Botao from "./Botao";

export default function CardVantagens(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <div className="card text-center">
            <img src="..." class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-tittle">{props.cardTitulo}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Botao botao="Inscrever-me" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
