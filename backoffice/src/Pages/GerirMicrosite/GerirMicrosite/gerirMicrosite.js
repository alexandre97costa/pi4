import React from "react";
import CardsMicrosite from "../../../Components/CardsMicrosite";

export default function GerirMicrosite() {
  return (
    <div className="container-fluid">
      <div className="row gx-3">
        <div className="col-12">
          <p className="fs-3 mb-5"> Gerir Microsite</p>

          <div className="card p-3 mb-5 ms-4 shadow bg-body rounded">
            <div className="row">
              <div className="col-12">
                <CardsMicrosite titulo="Menu" subTitulo="cabeçalho" />
                <CardsMicrosite titulo="Menu" subTitulo="cabeçalho" />
                <CardsMicrosite titulo="Menu" subTitulo="cabeçalho" />
                <CardsMicrosite titulo="Menu" subTitulo="cabeçalho" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
