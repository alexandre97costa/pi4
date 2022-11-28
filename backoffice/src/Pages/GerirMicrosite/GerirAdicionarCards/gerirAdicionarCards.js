import React from "react";
import TituloMicrosite from "../../../Components/TituloMicrosite";
import SubTituloMicrosite from "../../../Components/SubTituloMicrosite";
import UrlImagemMicrosite from "../../../Components/UrlImagemMicrosite";

export default function GerirAdicionarCards() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10">
          <p className="fs-3 mb-5 ms-4">Adicionar Conteúdo</p>

          <div className="card p-3 mb-5 ms-4 shadow bg-body rounded">
            <TituloMicrosite
            titulo="Título"/>
            <SubTituloMicrosite 
            subTitulo="Subtítulo"/>
            <UrlImagemMicrosite
            urlImagemMicrosite="URL da imagem para o conteúdo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
