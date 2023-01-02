import React from "react";

import Dropdown from "../../../Components/Dropdown";
import TabelaUtilizadores from "../../../Components/Tabelas/TabelaUtilizadores";

export default function Agentes(){
    const tipos = ["Todas", "A", "B", "C"]
    
    return(
        <>
            <div className="container-fluid">
                <div className="row justify-content-end">
                    <div className="col-4 col-md-2">
                        <Dropdown tipos={tipos} onChange={(value) => console.log(value)} />
                    </div>                    
                </div>
                
                <div className="row">
                    <div className="col-12">
                        <TabelaUtilizadores tipoTabela="Agente Turístico" />
                    </div>
                </div>
            </div>
        </>
    )
}