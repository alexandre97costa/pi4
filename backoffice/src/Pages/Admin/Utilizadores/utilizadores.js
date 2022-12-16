import React from "react";

import Dropdown from "../../../Components/Dropdown";
import TabelaUtilizadores from "../../../Components/Tabelas/TabelaUtilizadores";
import CardForm from "../../../Components/CardForm";

export default function Utilizadores() {
  const tipos = ["Todos", "Admin", "Responsavel de região", "Agente turistico"]

  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-end">

          <div className="col-4 col-md-2">
            <Dropdown tipos={tipos} onChange={(value) => console.log(value)}/>
          </div>

        </div>

      </div>

      <div className="row">
        <div className="col-12">
          <TabelaUtilizadores coluna1="# Nome" coluna2="Categoria" coluna3="Ações" />
        </div>
      </div>
    </>
  );
}
