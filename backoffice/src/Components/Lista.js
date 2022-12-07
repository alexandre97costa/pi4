import React from 'react';

export function Lista (props) {
    return (    
        
        <div className='row'>
            <div className='col-12 pb-4'>
                <div className='list-group list-group-flush'>

                    <div className='list-group-item  border-secondary'>
                        <div className='row'>
                            <div className='col-12 pb-1'>
                                <div className='row'>
                                    <div className='col-5'>
                                        <h5> {props.nomeA}</h5>
                                    </div> 
                                    <div className='col-2 text-center '>
                                        <h5>{props.nomeB}</h5>
                                    </div>  
                                    <div className='col-md-3 ms-auto text-center'>
                                        <h5>{props.nomeC}</h5>
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

                
    );
}