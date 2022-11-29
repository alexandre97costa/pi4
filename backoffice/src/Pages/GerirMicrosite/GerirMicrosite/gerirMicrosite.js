import React from "react";
import CardsMicrosite from "../../../Components/CardsMicrosite";

export default function GerirMicrosite() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <p className="fs-3 mb-5"> Gerir Microsite</p>

          <div className="card shadow bg-body rounded">
            <div className="row">
              <div className="col-12">
                <div className=" row row-cols-4">
                  <CardsMicrosite titulo="Menu" subTitulo="cabeçalho" />
                  <CardsMicrosite titulo="Menu" subTitulo="cabeçalho" />
                  <CardsMicrosite titulo="Menu" subTitulo="cabeçalho" />
                  <CardsMicrosite titulo="Menu" subTitulo="cabeçalho" />
                </div>
              </div>
            </div>
                <div className=" row row-cols-12">
                  <CardsMicrosite titulo="Menu" subTitulo="cabeçalho" />
                  <CardsMicrosite titulo="Menu" subTitulo="cabeçalho" />
                  <CardsMicrosite titulo="Menu" subTitulo="cabeçalho" />
                </div>
              </div>

        </div>
      </div>
    </div>
  );
}
