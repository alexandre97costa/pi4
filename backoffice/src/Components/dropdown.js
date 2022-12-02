import React from 'react';

export default function dropdown (props) {
    return (       

        <div className='dropdown'>                                                       
            <button class="btn  bg-white border rounded-2 shadow-1 dropdown-toggle me-md-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <span>Filtro 1</span> 
            </button>
            <div className='dropdown-menu'>
                <div className='dropdown-item'>Action</div>
                <div className='dropdown-item'>Action</div>
                <div className='dropdown-item'>Action</div>                                
            </div> 

            <button class="btn  bg-white border rounded-2 shadow-1 dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Filtro 1
            </button>
             <div className='dropdown-menu'>
                <div className='dropdown-item'>Action</div>
                <div className='dropdown-item'>Action</div>
                <div className='dropdown-item'>Action</div>                                
            </div>                          
        </div>
                
    );
}