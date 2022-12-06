import React from "react";

export function Linhadalista (props){
    return(
        <div className='row'>
            <div className='col-12 pb-4'>
                <div className='list-group list-group-flush'>
                    <div className='list-group-item '>
                        <div className='row'>
                            <div className='col-12 pb-1'>
                                <div className='row'>
                                    <div className='col-5'>
                                        <p>{props.nomepessoa}</p>
                                    </div>
                                    <div className={ changeColorDoQueTuQuiseres(props) }>{props.nomeCard} </div>
                                                                                                        
                                    <div className='col-md-2 ms-auto'>
                                        <button className=' btn btn-outline-danger bi bi-trash-fill me-md-2'></button> 
                                        <button className='btn btn-outline-warning bi bi-pencil-fill' data-bs-toggle="modal" data-bs-target="#exampleModal"></button> 
                                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                <div class="modal-header">
                                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                    ...
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                    <button type="button" class="btn btn-primary">Save changes</button>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>                                
                    </div> 
                    <div className=' border-secondary'>                    
                    </div>
                </div>    
            </div>        
        </div>            
    )

    function changeColorDoQueTuQuiseres(props){
        return "p-2 text-white text-center rounded-2 col-2  " + props.color
    }
}