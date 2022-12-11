import React from "react";

import Dropdown from "../../../Components/Dropdown";
import Breadcrumb from "../../../Components/Breadcrumb";
import TabelaUtilizadores from "../../../Components/TabelaUtilizadores";

export default function Utilizadores() {
  return (
    <>
      <div className="container-fluid">

        <div className="row">

          <div className="col-12">
            <Breadcrumb icon="bi bi-list-ul" nome="Lista de Utilizadores" />
          </div>

        </div>

        <div className="row justify-content-end">

          <div className="col-4 col-md-2">
            <Dropdown onChange={(value) => console.log(value)}/>
          </div>

        </div>

      </div>

      <div className="row">
        <div className="col-12">

          <div className="card px-5 py-4 mb-5 shadow bg-body rounded-4 border-0 mt-2">
            <TabelaUtilizadores coluna1="# Nome" coluna2="Categoria" coluna3="Ações" />

          </div>
        </div>
      </div>
    </>
  );
}
