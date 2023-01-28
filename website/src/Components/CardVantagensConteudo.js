import React from "react";
import CardBackground from "./CardBackground";

export default function CardVantagensConteudo(props) {
  return (
    <CardBackground className="border-0 text-center shadow-sm rounded-4 m-5 p-3">
      <img src={props.imagem} className="img-fluid align-self-center rounded w-50 img-fluid" />

      <h5 className="card-tittle pt-4 pb-3">{props.cardTitulo}</h5>
      <p className="card-text pb-3">{props.cardTexto}</p>
    </CardBackground>
  );
}
