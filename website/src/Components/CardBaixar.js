import React, { useEffect } from "react";

import Botao from "./Botao";
import CardBackground from "./CardBackground";

export default function CardBaixar() {
  const texto = {
    cardTitulo: "Já pensas-te na tua próxima viagem?",
    cardTexto: "Download da app My Green Trip"
  }

  useEffect(() => {
    console.log("Sou do load 1 vez no CardBaixar")
  }, [])

  return (
    <CardBackground className="bg-primary text-center shadow rounded-4 border-0">
      <h5 className="card-tittle text-light pb-3 p-5 ps-5 fs-2">
        {texto.cardTitulo}
      </h5>
      <p className="card-text text-light pb-3 fs-5">{texto.cardTexto}</p>
      <div className="pb-5">
        <Botao className="btn-dark btn-lg" texto="Download" />
      </div>
    </CardBackground>
  );
}
