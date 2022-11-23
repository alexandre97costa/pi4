import React from 'react';

export default function GerirMenu(){
    return(
        <div className='row'>
            <div className='col-12'>
                <p className='fs-3 mb-5'>Gerir Menu</p>

                <div className='card p-3 mb-5 shadow bg-body rounded'>
                    <div className='row p-3'>
                        <div className='col-12'>
                            <div className='row'>
                                <div className="col-12">
                                    <label htmlFor='formGroupExampleInput' className='form-label'>Inserir Logo</label>
                                </div>
                                <div className='row'>
                                    <div className='col-9 pb-4'>
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
        </div>
    );

    
}