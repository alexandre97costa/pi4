import React from "react";
import Microsite from "../../../Components/microsite";

export default function GerirAdicionarCards() {
  return (
    <div className="container">
          <div className="row">
            <div className="col-10">
              <Microsite 
              titulo="Título"
              tituloPlaceholder="adasdads"
              subtitulo="Subtítulo"
              subtituloPlaceholder="adasd"
              />
            </div>
          </div>
    </div>
  );
}
