import React from "react";

import Dropdown from "../../../Components/Dropdown";
import TabelaUtilizadores from "../../../Components/Tabelas/TabelaUtilizadores";
import BotaoDashboard from "../../../Components/BotaoDashboard";

export default function Agentes() {
  const tipos = ["Todas", "A", "B", "C"];

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
            <div className="col-6 col-md-5">
              <BotaoDashboard
                to="/responsavel-regiao/validar-agentes-turisticos"
                colorBotao="btn-light btn-lg"
                icon="bi-journal-check"
                texto="Validar Agentes Turísticos"
              />
            </div>
            <TabelaUtilizadores tipoTabela="Agente Turístico" />
          </div>
        </div>
      </div>
    </>
  );
}
