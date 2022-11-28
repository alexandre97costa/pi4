import React from "react";
import UrlImagemMicrosite from "../../../Components/UrlImagemMicrosite";

export default function GerirMenu() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10">
          <p className="fs-3 mb-5 ms-4">Descarregar App</p>

          <div className="card p-3 mb-5 ms-4 shadow bg-body rounded">
            <UrlImagemMicrosite urlImagem="Url da imagem" />
          </div>
        </div>
      </div>
    </div>
  );
}
