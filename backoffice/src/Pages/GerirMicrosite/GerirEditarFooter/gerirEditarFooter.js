import React from 'react';

export default function GerirEditarFooter() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <p className='fs-3 mb-5'>Editar Footer</p>

                    <p className='fs-5'>Redes Sociais</p>
                    <div className='card p-3 mb-5 shadow bg-body rounded'>
                        <div className='row p-3'>
                            <div className='col-12 '>

                                <div className='row'>
                                    <div className='col-10'>
                                        <label htmlFor='formGroupExampleInput' className='form-label'> Adicionar icon Facebook</label>
                                    </div>
                                    <div className='row text-center'>
                                        <div className='col-10'>
                                            <input type='text' className='form-control' id='formGroupExampleInput' placeholder='Inserir url bootsrtap' />
                                        </div>
                                        <div className='col-md-2 ms-auto'>
                                            <button className='btn btn-outline-warning bi bi-pencil-fill me-md-3'></button>
                                            <button className=' btn btn-outline-danger bi bi-trash-fill'></button>
                                        </div>
                                    </div>

                                    <div className='col-10'>
                                        <label htmlFor='formGroupExampleInput' className='pt-4 form-label'>Link da Rede Social</label>
                                    </div>
                                    <div className='row text-center'>
                                        <div className='col-10 '>
                                            <input type='text' className='pb-2 form-control' id='formGroupExampleInput' placeholder='Inserir link para a rede social' />
                                        </div>
                                        <div className='col-md-2 ms-auto'>
                                            <button className='btn btn-outline-warning bi bi-pencil-fill me-md-3'></button>
                                            <button className=' btn btn-outline-danger bi bi-trash-fill'></button>
                                        </div>
                                    </div>

                                    <div className='col-12'>
                                        <label htmlFor='formGroupExampleInput' className='pt-4 form-label'>Adicionar icon Instagram</label>
                                    </div>
                                    <div className='row text-center'>
                                        <div className='col-10 pb-4'>
                                            <input type='text' className='pb-2 form-control' id='formGroupExampleInput' placeholder='Inserir url bootsrtap' />
                                        </div>
                                        <div className='col-md-2 ms-auto '>
                                            <button className='btn btn-outline-warning bi bi-pencil-fill me-md-3'></button>
                                            <button className=' btn btn-outline-danger bi bi-trash-fill'></button>
                                        </div>
                                    </div>

                                    <div className='col-12'>
                                        <label htmlFor='formGroupExampleInput' className='pt-2 form-label'>Link da Rede Social</label>
                                    </div>
                                    <div className='row text-center'>
                                        <div className='col-10'>
                                            <input type='text' className=' pb-2 form-control' id='formGroupExampleInput' placeholder='Inserir link para a rede social' />
                                        </div>
                                        <div className='col-md-2 ms-auto '>
                                            <button className='btn btn-outline-warning bi bi-pencil-fill me-md-3'></button>
                                            <button className=' btn btn-outline-danger bi bi-trash-fill'></button>
                                        </div>
                                    </div>

                                    <div className='col-12'>
                                        <label htmlFor='formGroupExampleInput' className='pt-2 form-label'>Adicionar icon Twitter</label>
                                    </div>
                                    <div className='row text-center'>
                                        <div className='col-10 pb-4'>
                                            <input type='text' className=' pb-2  form-control' id='formGroupExampleInput' placeholder='Inserir url bootsrtap' />
                                        </div>
                                        <div className='col-md-2 ms-auto '>
                                            <button className='btn btn-outline-warning bi bi-pencil-fill me-md-3'></button>
                                            <button className=' btn btn-outline-danger bi bi-trash-fill'></button>
                                        </div>
                                    </div>

                                    <div className='col-12'>
                                        <label htmlFor='formGroupExampleInput' className='form-label'>Link da Rede Social</label>
                                    </div>
                                    <div className='row text-center'>
                                        <div className='col-10'>
                                            <input type='text' className=' pb-2 form-control' id='formGroupExampleInput' placeholder='Inserir link para a rede social' />
                                        </div>
                                        <div className='col-md-2 ms-auto '>
                                            <button className='btn btn-outline-warning bi bi-pencil-fill me-md-3'></button>
                                            <button className=' btn btn-outline-danger bi bi-trash-fill'></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className='fs-5'>Politica de Privacidade & Cookies</p>
                    <div className='card p-3 mb-5 shadow p-3 mb-5 bg-body rounded'>
                        <div className='row p-3'>
                            <div className='col-12 '>

                                <div className='row'>
                                    <div className='col-12'>
                                        <label htmlFor='formGroupExampleInput' className='form-label ps-1 pb-1'>Link para a Politica de Privacidade</label>
                                    </div>
                                    <div className='row'>
                                        <div className='col-10 pb-4'>
                                            <input type='text' className='form-control' id='formGroupExampleInput' placeholder='Inserir o link da página de destino' />
                                        </div>
                                        <div className='col-md-2 ms-auto '>
                                            <button className='btn btn-outline-warning bi bi-pencil-fill me-md-3'></button>
                                            <button className=' btn btn-outline-danger bi bi-trash-fill'></button>
                                        </div>
                                    </div>

                                   <div className='row'>
                                    <div className='col-12'>
                                            <label htmlFor='formGroupExampleInput' className='form-label ps-1 pb-1'>Link para a Politica de Privacidade</label>
                                        </div>
                                        <div className='row'>
                                            <div className='col-10 pb-4 '>
                                                <input type='text' className='form-control ' id='formGroupExampleInput' placeholder='Inserir o link da página de destino' />
                                            </div>
                                            <div className='col-md-2 ms-auto '>
                                                <button className='btn btn-outline-warning bi bi-pencil-fill me-md-3'></button>
                                                <button className=' btn btn-outline-danger bi bi-trash-fill'></button>
                                            </div>
                                    </div>
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