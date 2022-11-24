import React from 'react'


export default function ListaUtilizador(props){

    return (
       <div className='row'>
            <div className='col-12'>
                <div className='card p-3 mb-5 shadow bg-body rouded'>
                    <div className='row p-3'>
                        <div className='col-12'>
                            <div className='row'>
                                
                                
                                <div className='row'>
                                    <div className='col-12 pb-4'>
                                        <div className='list-group list-group-flush'>
                                            <div className='list-group-item '>
                                                <div className='row'>
                                                    <div className='col-5 pb-1'>
                                                        <text>02 José António Gomes</text>
                                                        <div className='col-1'>
                                                            <button className=' btn btn-outline-danger bi bi-trash-fill me-md-2'></button> 
                                                        </div> 
                                                        <div className='col-1'>
                                                            <button className='btn btn-outline-warning bi bi-pencil-fill'></button> 
                                                         </div>  
                                                    </div>
                                                </div> 
                                                                                    
                                            </div>   

                                            <div className='list-group-item'>
                                                <div className='row'>
                                                    <div className='col-5 pb-1'>
                                                        <text>02 José António Gomes</text>
                                                    </div>
                                                </div> 
                                                <div className='col-1'>
                                                    <button className=' btn btn-outline-danger bi bi-trash-fill me-md-2'></button> 
                                                </div> 
                                                <div className='col-1'>
                                                    <button className='btn btn-outline-warning bi bi-pencil-fill'></button> 
                                                </div>                                          
                                            </div>                                    
                                        </div>
                                    </div>
                                </div>

                                    
                                

                                        <div className='col-10 pb-1'>
                                            <input type='text' className='form-control' id='formGroupExampleInput' placeholder='Example input placeholder'/>                                
                                         </div>
                                        <div className='col-1'>
                                            <button className=' btn btn-outline-danger bi bi-trash-fill me-md-2'></button> 
                                        </div> 
                                        <div className='col-1'>
                                            <button className='btn btn-outline-warning bi bi-pencil-fill'></button> 
                                        </div>   

                                        
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
       </div>   
    );      
}