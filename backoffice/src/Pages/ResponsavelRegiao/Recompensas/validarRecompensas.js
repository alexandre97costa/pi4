import React from "react";

import Dropdown from "../../../Components/Dropdown";
import TabelaListaRecompensas from "../../../Components/Tabelas/TabelaListaRecompensas";
import BotaoDashboard from "../../../Components/BotaoDashboard";

export default function ValidarRecompensas() {
  const tipos = ["Todas", "A", "B", "C"]

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className='col-8 col-md-3'>
            <BotaoDashboard to="/responsavel-regiao/lista-recompensas" colorBotao="btn-light btn-lg" icon="bi-journal-check" texto="Lista de Recompensas" />
          </div>

          <div className="col-4 col-md-9 d-flex justify-content-end">
            <Dropdown tipos={tipos} onChange={(value) => console.log(value)} />
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <TabelaListaRecompensas tipoTabela="validar" />
          </div>
        </div>
      </div>
    </>
  );
}