import React from "react";

export default function BotaoGuardar (props){

    return(

        <div className="row me-4 mt-2 mb-2">
            <div className="col-2">
                < button type="button" className="btn btn-primary ms-3">{props.botaoGuardar}</button>
            </div>
        </div>

    )

}