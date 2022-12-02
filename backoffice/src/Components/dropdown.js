import React from 'react';

export default function dropdown (props) {
    return (       

        <div className='col-md-2 ms-auto'>

            <div className='dropdown'>                                                       
                <button class="btn  bg-white border rounded-2 shadow-1 dropdown-toggle me-md-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {props.nomeButao}                    
                </button>
                <div className='dropdown-menu'>
                    <div className='dropdown-item'>{props.nome1}</div>
                    <div className='dropdown-item'>{props.nome2}</div>
                    <div className='dropdown-item'>{props.nome3}</div>                                
                </div>                         
            </div>
                
        </div>
                
    );
}