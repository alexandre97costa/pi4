import React from "react";
import TituloMicrosite from "../../../Components/TituloMicrosite";
import SubTituloMicrosite from "../../../Components/SubTituloMicrosite";

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


          </div>
        </div>
      </div>
    </div>
  );
}
