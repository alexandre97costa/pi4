import React, { useEffect } from "react";

import Botao from "./Botao";
import CardBackground from "./CardBackground";

export default function CardInscrever() {
  const cardTitulo = "Dá asas ao teu negocio e inscreve-te na nossa app como Agente Turístico!"

  useEffect(() => {
    console.log("Sou do load 1 vez no CardInscrever")
  }, [])

  return (
    <CardBackground className="bg-microsite shadow rounded-4 border-0 p-4">
      <div className="row align-items-center">

        <div className="col-12 col-md-8 card-tittle fs-4">
          {cardTitulo}
        </div>

        <div className="col-12 text-center mt-4 col-md-4 mt-md-0 text-md-end">
          <Botao texto="Inscrever-me" />
        </div>

      </div>
    </CardBackground>
  )
}
