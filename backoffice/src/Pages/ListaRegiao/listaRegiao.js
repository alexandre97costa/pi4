import React from "react";

import Dropdown from "../../Components/Dropdown";
import TabelaRegiao from "../../Components/Tabelas/TabelaRegiao";
import CardForm from "../../Components/CardForm";

export default function ListaRegiao() {
  const tipos = ["Todas", "A", "B", "C"]

  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-end">
          <div className="col-4 col-md-2">
            <Dropdown tipos={tipos} onChange={(value) => console.log(value)} />
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <TabelaRegiao coluna1="# Região" coluna2="# Responsável de Região" coluna3="Ações"/>
          </div>
        </div>


      </div>
    </>
  );
}
