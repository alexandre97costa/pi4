import React from "react";
import TituloMicrosite from "../../../../Components/Microsite/TituloMicrosite";
import SubTituloMicrosite from "../../../../Components/Microsite/SubTituloMicrosite";
import InputMicrosite from "../../../../Components/Microsite/InputMicrosite";
import Botao from "../../../../Components/Botao";

export default function GerirDescarregarApp() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10">
          <p className="fs-3 mb-5 ms-4">Descarregar App</p>

          <div className="card p-3 mb-5 ms-4 shadow bg-body rounded">
            <TituloMicrosite
            titulo="Título"/>
            <SubTituloMicrosite 
            subTitulo="Subtítulo"/>
            <InputMicrosite 
            botao="Texto Botão"/>
            <Botao
            Botao="Guardar"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
