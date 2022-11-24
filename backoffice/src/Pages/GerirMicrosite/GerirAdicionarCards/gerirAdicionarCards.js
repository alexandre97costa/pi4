import React from 'react';

export default function GerirAdicionarCards(){
    return(
        <div className='row'>
            <div className='col-10 '>
                <p className='fs-3 mb-5'>Adicionar Conteúdo</p>

                <div className='card  p-3 mb-5 shadow bg-body rounded'>
                    <div className='row pt-4 pb-4 justify-content-center'>
                        <div className='col-10'>
                            <div className='row'>
                                <div className='col-12'>
                                    <label htmlFor='formGroupExampleInput' className='form-label pb-1'>Titulo</label>
                                </div>
                                <div className='row'>
                                    <div className='col-12 pb-4'>
                                        <input type='text' className='form-control' id='formGroupExampleInput' placeholder=''/>
                                    </div>
                                </div>

                                <div className='col-12'>
                                    <label htmlFor='formGroupExampleInput' className='form-label pb-1'>Subtitulo</label>
                                </div>
                                <div className='row'>
                                    <div className='col-12 pb-4'>
                                        <input type='text' className='form-control' id='formGroupExampleInput' placeholder=''/>
                                    </div>
                                </div>

                                <div className='col-12'>
                                    <label htmlFor='formGroupExampleInput' className='form-label pb-1'>Imagem</label>
                                </div>
                                <div className='row'>
                                    <div className='col-12 pb-4'>
                                        <input type='text' className='form-control' id='formGroupExampleInput' placeholder=''/>
                                    </div>
                                </div>

                                <div className='col-12'>
                                    <label htmlFor='formGroupExampleInput' className='form-label pb-1'>Botão Texto</label>
                                </div>
                                <div className='row'>
                                    <div className='col-12 pb-4'>
                                        <input type='text' className='form-control' id='formGroupExampleInput' placeholder=''/>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col-4'>
                                        <button type='button' className='btn btn-primary mt-2'>Guardar</button>
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