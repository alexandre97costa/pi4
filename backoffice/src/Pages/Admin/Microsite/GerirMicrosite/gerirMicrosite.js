import React from "react";

import CardsMicrosite from "../../../../Components/Microsite/CardMicrosite";

export default function GerirMicrosite() {
  return (
    <div className="container-fluid">

      <div className="row">
        <div className="col-12">
          <div className="row row-cols-4 gy-4">

            <div className="col">
              <CardsMicrosite titulo="Menu" subTitulo="Cabeçalho" path="/microsite/gerir-menu" />
            </div>

            <div className="col">
              <CardsMicrosite titulo="Hero Banner" subTitulo="Conteúdo de Entrada" path="/microsite/hero-banner" />
            </div>

            <div className="col">
              <CardsMicrosite titulo="Vantagens App" subTitulo="Card 1" path="/microsite/vantagens-app" />
            </div>

            <div className="col">
              <CardsMicrosite titulo="Publicidade Agente Turístico" subTitulo="Card 2" path="/microsite/publicidade-agente-turistico" />
            </div>

            <div className="col">
              <CardsMicrosite titulo="Descarregar App" subTitulo="Card 3" path="/microsite/descarregar-app" />
            </div>

            <div className="col">
              <CardsMicrosite titulo="Footer" subTitulo="Rodapé" path="/microsite/gerir-footer" />
            </div>

            <div className="col">
              <CardsMicrosite color="text-primary" titulo="+" subTitulo="Adicionar conteúdo" path="/microsite/adicionar-conteudo" />
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
