import React from "react";


export default function AtribuicaoPerfil(props){
    return(

        <div className="row">
            <div className="col-12">

            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#ola">
                Launch demo modal
            </button>

                <div className="modal fade " id="ola" aria-hidden="true">
                    
                    <div className="modal-dialog  bg-dark border border-dark rounded-2">
                        <div className="model-content">
                            <div className="modal-header text-white"> 
                                <h3 className="modal-title">Selecionar Categoria</h3>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body bg-white rounded-bottom">
                                olaaaaa

                            </div>
                        </div>
                            
                    </div>
                    
                </div>        
            </div>
        </div>
    );
}