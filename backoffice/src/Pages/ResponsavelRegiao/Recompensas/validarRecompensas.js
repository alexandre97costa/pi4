import React from "react";

import Dropdown from "../../../Components/Dropdown";
import TabelaListaRecompensas from "../../../Components/Tabelas/TabelaListaRecompensas";
import BotaoDashboard from "../../../Components/BotaoDashboard";

export default function ValidarRecompensas() {
  const tipos = ["Todas", "A", "B", "C"]

  return (
    <>
      <div className="row">

        <div className="col-12">
          <p className="fs-5 text-body fw-light">Ações Rápidas</p>
        </div>

        <div className="col-12 col-md-3 col-sm-12">
          <BotaoDashboard
            to="/lista-recompensas"
            class="btn-light btn-lg bg-white p-4 w-100 h-100 text-start d-flex align-items-center mb-5"
            icon="bi-card-list fs-2"
            texto="Lista de Recompensas"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-4 col-md-9 d-flex justify-content-end">
          <Dropdown items={tipos} onChange={(value) => console.log(value)} />
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <TabelaListaRecompensas tipoTabela="validar" />
        </div>
      </div>
    </>
  );
}