import React from "react";
import Botao from "../../Components/Botao";
import Card from "../../Components/Card"
import CardVantagens from "../../Components/CardVantagens";

export function Exemplo() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">

          <div className="row">
            <div className="col-12">
              <img src="..." class="float-start" alt="..."></img>
            </div>
          </div>


          <Card
          cardTitulo="Dá asas ao teu negocio e inscreve-te na nossa app como Agente
          Turístico!"/>
          <CardVantagens/>




        </div>
      </div>
    </div>
  );
}
