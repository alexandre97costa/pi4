import React from 'react';


export default function GerirVantagensApp(props){
    return (

        <div className='row'>
            <div className='col-12'>
                <p className='fs-3 mb-5'>Vantagens Aplicação</p>

                <p className='fs-5'>Card introdução</p>
                <div className='card p-3 mb-5 shadow p-3 mb-5 bg-body rounded'>
                    <div className='row'>
                        <div className='col-10 '>


                            <div className=' col-10 mb-3 mt-3 offset-md-1'>
                                <label htmlFor='formGroupExampleInput' className='form-label'>Titulo</label>
                                <input type='text' className='form-control' id='formGroupExampleInput' placeholder='Example input placeholder'/>
                                
                                <div className=' col-10 d-grid gap-2 d-md-flex justify-content-md-end position-absolute end-0 pe-5'>
                                    <button className=' btn btn-outline-danger bi bi-trash-fill me-md-2'></button>
                                    <button className='btn btn-outline-warning bi bi-pencil-fill'></button>
                                </div>
                            </div>
                            
                            <div className='col-10 mb-3 mt-5 offset-md-1'>
                                <label htmlFor='formGroupExampleInput2' className='form-label'>Subtitulo</label>
                                <input type='text' className='form-control mb-5' id='formGroupExampleInput2' placeholder='Another input placeholder'/>

                                <div className='d-grid gap-2 d-md-flex justify-content-md-end position-absolute end-0 pe-5'>
                                    <button className=' btn btn-outline-danger bi bi-trash-fill me-md-2'></button>
                                    <button className='btn btn-outline-warning bi bi-pencil-fill'></button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <p className='fs-5'>Card 1</p>
                <div className='card p-3 mb-5 shadow p-3 mb-5 bg-body rounded'>
                    <div className='mb-3'>
                        <label htmlFor='formGroupExampleInput' className='form-label'>Icon</label>
                        <input type='text' className='form-control' id='formGroupExampleInput' placeholder='Example input placeholder'/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='formGroupExampleInput' className='form-label'>Titulo</label>
                        <input type='text' className='form-control' id='formGroupExampleInput' placeholder='Example input placeholder'/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='formGroupExampleInput2' className='form-label'>Subtitulo</label>
                        <input type='text' className='form-control' id='formGroupExampleInput2' placeholder='Another input placeholder'/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='formGroupExampleInput2' className='form-label'>Botão</label>
                        <input type='text' className='form-control' id='formGroupExampleInput2' placeholder='Another input placeholder'/>
                    </div>
                </div>


            </div>
        </div>
    );  
}