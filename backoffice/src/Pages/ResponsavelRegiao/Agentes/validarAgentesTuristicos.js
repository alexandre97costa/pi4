import React from "react";

import Dropdown from "../../../Components/Dropdown";
import TabelaListaAgentesTuristicos from "../../../Components/Tabelas/TabelaListaAgentesTuristicos";
import BotaoDashboard from "../../../Components/BotaoDashboard";

export default function ValidarAgentesTuristicos() {
  const tipos = ["Todas", "A", "B", "C"]

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className='col-8 col-md-4'>
            <BotaoDashboard to="/responsavel-regiao/agentes" colorBotao="btn-light btn-lg" icon="bi-journal-check" texto="Lista de Agentes Turísticos" />
          </div>

          <div className="col-4 col-md-9 d-flex justify-content-end">
            <Dropdown tipos={tipos} onChange={(value) => console.log(value)} />
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <TabelaListaAgentesTuristicos tipoTabela="validar" />
          </div>
        </div>
      </div>
    </>
  );
}