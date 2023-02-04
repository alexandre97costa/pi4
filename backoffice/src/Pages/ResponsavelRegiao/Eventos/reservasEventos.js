import React from "react";

import Dropdown from "../../../Components/Dropdown";
import TabelaReservaEvento from "../../../Components/Tabelas/TabelaReservaEvento";

export default function ReservasEvento() {
    const tipos = ["Todas", "A", "B", "C"]

    return (
        <>
            <div className="row justify-content-end">
                <div className="col-4 col-md-2">
                    <Dropdown tipos={tipos} onChange={(value) => console.log(value)} />
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <TabelaReservaEvento />
                </div>
            </div>
        </>
    )
}