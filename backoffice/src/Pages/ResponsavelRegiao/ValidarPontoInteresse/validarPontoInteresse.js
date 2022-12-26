import React from "react";

import Dropdown from "../../../Components/Dropdown";
import TabelaListaValidarPontos from "../../../Components/Tabelas/TabelaValidarPontos";

export default function ValidarPontoInteresse(){
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
                        <TabelaListaValidarPontos/>
                    </div>
                </div>  
            </div>


        </>
    )
}