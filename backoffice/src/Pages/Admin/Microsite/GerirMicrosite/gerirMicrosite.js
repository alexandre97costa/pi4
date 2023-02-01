import React from "react";

import CardsMicrosite from "../../../../Components/Microsite/CardMicrosite";

export default function GerirMicrosite() {
  return (
    <div className="container-fluid">

      <div className="row">
        <div className="col-12">
          <div className="row row-cols-4 m-3 gy-4">

            <div className="col-12 col-md-3 col-sm-6">
              <CardsMicrosite color="text-primary" titulo="Menu" subTitulo="Cabeçalho" path="/admin/microsite/gerir-menu" />
            </div>

            <div className="col-12 col-md-3 col-sm-6">
              <CardsMicrosite color="text-primary" titulo="Hero Banner" subTitulo="Conteúdo de Entrada" path="/admin/microsite/hero-banner" />
            </div>

            <div className="col-12 col-md-3 col-sm-6">
              <CardsMicrosite color="text-primary" titulo="Vantagens App" subTitulo="Card 1" path="/admin/microsite/vantagens-app" />
            </div>

            <div className="col-12 col-md-3 col-sm-6">
              <CardsMicrosite color="text-primary" titulo="Publicidade Agente Turístico" subTitulo="Card 2" path="/admin/microsite/publicidade-agente-turistico" />
            </div>

            <div className="col-12 col-md-3 col-sm-6">
              <CardsMicrosite color="text-primary"  titulo="Descarregar App" subTitulo="Card 3" path="/admin/microsite/descarregar-app" />
            </div>

            <div className="col-12 col-md-3 col-sm-6">
              <CardsMicrosite color="text-primary" titulo="Footer" subTitulo="Rodapé" path="/admin/microsite/gerir-footer" />
            </div>

            <div className="col-12 col-md-3 col-sm-6">
              <CardsMicrosite color="text-primary" titulo="+" subTitulo="Adicionar conteúdo" path="/admin/microsite/adicionar-conteudo" />
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
