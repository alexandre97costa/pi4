import React from "react";

import Dropdown from "../../../Components/Dropdown";

export default function ReservasEvento(){
    const tipos = ["Todas", "A", "B", "C"]
    return(
        <>
            <div className="container-fluid">

                <div className="row justify-content-end">
                    <div className="col-4 col-md-2">
                        <Dropdown tipos={tipos} onChange={(value) => console.log(value)} />
                    </div>                    
                </div>
                                
            </div>

        </>
    )
}