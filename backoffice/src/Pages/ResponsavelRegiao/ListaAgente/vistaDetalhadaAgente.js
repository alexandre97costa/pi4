import React from "react";

import Dropdown from "../../../Components/Dropdown";
import DetalhesAgenteTuristico from "../../Perfil/detalhesUtilizador";

export default function VistaDetalhadaAgente(){
    const tipos = ["Todas", "A", "B", "C"]
    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <DetalhesAgenteTuristico/>
                    </div>
                </div>
            </div>

        </>
    )
}