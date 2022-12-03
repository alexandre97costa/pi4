import React from "react";
import CardsMicrosite from "../../../Components/CardsMicrosite";

export default function GerirMicrosite() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <p className="fs-3 mb-5"> Gerir Microsite</p>


            <div className="row">
              <div className="col-12">
                <div className=" row  row-cols-4">

                    <CardsMicrosite titulo="Menu" subTitulo="cabeçalho" />


                    <CardsMicrosite titulo="Hero Banner" subTitulo="cabeçalho" />


                    <CardsMicrosite titulo="Vantagens App" subTitulo="cabeçalho" />

                    <CardsMicrosite titulo="Publicidade Agente Turístico" subTitulo="cabeçalho" />


                    <CardsMicrosite titulo="Descarregar App" subTitulo="cabeçalho" />


                    <CardsMicrosite titulo="Footer" subTitulo="cabeçalho" />


                    <CardsMicrosite color="text-primary" titulo="+" subTitulo="cabeçalho" />


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
