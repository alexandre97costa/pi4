import React from "react";

import Dropdown from "../../../Components/Dropdown";

export default function AssociarPontoInteresse(){
    const tipos = ["Todas", "A", "B", "C"]
    return(
        <>
            <div className="container-fluid">
               <div className="row">
                    <div className="col-4 col-md-9 d-flex justify-content-end">
                        <Dropdown tipos={tipos} onChange={(value) => console.log(value)} />
                    </div>
                </div>  
            </div>

        </>
    )
}