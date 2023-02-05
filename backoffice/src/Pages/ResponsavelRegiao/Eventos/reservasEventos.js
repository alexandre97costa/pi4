import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Dropdown from "../../../Components/Dropdown";
import TabelaReservaEvento from "../../../Components/Tabelas/TabelaReservaEvento";

export default function ReservasEvento() {
    const eventoId = useParams()

    useEffect(() => {
        console.log(eventoId)
    }, [])

    return (
        <>
            <div className="row">
                <div className="col-12 mt-4">
                    <TabelaReservaEvento eventoId={eventoId.eventoId} />
                </div>
            </div>
        </>
    )
}