import React from "react";
import { RecompensaTabela } from "../../Components/RecompensaTabela";
import CardRecompensa from "../../Components/CardRecompensa";

export default function ATRecompensas(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">

          <div className="row row-cols-auto">
            <div className="col-6">
              <RecompensaTabela
                nomePI="Palácio do Gelo"
                nomeRecompensa0="Recompensa"
                nomeRecompensa2="Recompensa B"
                nomeRecompensa3="Recompensa C"
                nomeRecompensa4="Recompensa D"
                nomeRecompensa1="Recompensa E"
              />
            </div>

            <div className="col-6">
              <RecompensaTabela
                nomePI="Palácio do Gelo"
                nomeRecompensa0="Recompensa"
                nomeRecompensa2="Recompensa B"
                nomeRecompensa3="Recompensa C"
                nomeRecompensa4="Recompensa D"
                nomeRecompensa1="Recompensa E"
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <CardRecompensa/>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
