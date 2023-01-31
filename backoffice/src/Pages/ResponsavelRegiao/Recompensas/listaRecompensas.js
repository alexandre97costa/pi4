import React from "react";

import Dropdown from "../../../Components/Dropdown";
import TabelaListaRecompensas from "../../../Components/Tabelas/TabelaListaRecompensas";
import BotaoDashboard from "../../../Components/BotaoDashboard";

export default function ListaRecompensas() {
  const tipos = ["Todas", "A", "B", "C"];

  return (
    <>
      <div className="row">
        <div className="col-12 col-md-4 col-sm-12">
          <BotaoDashboard
            to="/validar-recompensas"
            class="btn-light btn-lg bg-white p-4 w-100 h-100 text-start d-flex align-items-center"
            icon="bi-card-checklist fs-3"
            texto="Validar de Recompensas"
          />
        </div>

        <div className="col-4 col-md-9 d-flex justify-content-end">
          <Dropdown tipos={tipos} onChange={(value) => console.log(value)} />
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <TabelaListaRecompensas />
        </div>
      </div>
    </>
  );
}
