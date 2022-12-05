import React from "react";

export default function Botao (props){

    return(

        <div className="row me-4 mt-2 mb-2">
            <div className="col-2">
                < button onClick={(value)=>props.onClick(value)} type="button" className="btn btn-primary ms-3">{props.botao}</button>
            </div>
        </div>

    )

}