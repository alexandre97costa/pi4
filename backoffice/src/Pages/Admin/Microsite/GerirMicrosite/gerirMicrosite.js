import React from "react";
import CardsMicrosite from "../../../../Components/Microsite/CardMicrosite";

export default function GerirMicrosite() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <p className="fs-3 mb-5"> Gerir Microsite</p>


          <div className="row">
            <div className="col-12">
              <div className=" row row-cols-4">

                <div className="col">
                  <CardsMicrosite titulo="Menu" subTitulo="Cabeçalho" />
                </div>

                <div className="col">
                  <CardsMicrosite titulo="Hero Banner" subTitulo="Conteúdo de Entrada" />
                </div>

                <div className="col">
                  <CardsMicrosite titulo="Vantagens App" subTitulo="Card 1" />
                </div>

                <div className="col">
                  <CardsMicrosite titulo="Publicidade Agente Turístico" subTitulo="Card 2" />
                </div>

                <div className="col">
                  <CardsMicrosite titulo="Descarregar App" subTitulo="Card 3" />
                </div>

                <div className="col">
                  <CardsMicrosite titulo="Footer" subTitulo="Rodapé" />
                </div>

                <div className="col">
                  <CardsMicrosite color="text-primary" titulo="+" subTitulo="Adicionar conteúdo" />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
