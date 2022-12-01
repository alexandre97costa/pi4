import React from "react";
import { RecompensaTabela } from "../../Components/RecompensaTabela";

export function ATRecompensas(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <RecompensaTabela
          nomePI="Palácio do Gelo"
          nomeRecompensa0="Recompensa A"
          nomeRecompensa2="Recompensa B"
          nomeRecompensa3="Recompensa C"
          nomeRecompensa4="Recompensa D"
          nomeRecompensa1="Recompensa E"
          />
        </div>
        <div className="col-6">
          <RecompensaTabela
          nomePI="Palácio do Gelo"
          nomeRecompensa0="Recompensa A"
          nomeRecompensa2="Recompensa B"
          nomeRecompensa3="Recompensa C"
          nomeRecompensa4="Recompensa D"
          nomeRecompensa1="Recompensa E"
          />
        </div>
      </div>
    </div>
  );
}
