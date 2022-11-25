import React from 'react';

export default function GerirMicrosite() {
    return (
        <div className='container-fluid'>
            <div className='row gx-3'>
                <div className='col-12'>
                    <p className='fs-3 mb-5'> Gerir Microsite</p>

                    <div className='row'>
                        <div className='col-12'>
                            <div className='row card-group text'>
                                <div className='col-12 card  p-3 m-2 shadow rounded-3'>
                                    <div className='card-body'>
                                        <h5 className='card-title text-center'>Menu</h5>
                                        <p className='card-text text-center'><small className='text-muted'>Cabeçalho</small></p>
                                    </div>
                                </div>

                                <div className=' col-12 card p-3  m-2 shadow rounded-3'>
                                    <div className='card-body'>
                                        <h5 className='card-title text-center'>Hero Banner</h5>
                                        <p className='card-text text-center'><small className='text-muted'>Card 0</small></p>
                                    </div>
                                </div>

                                <div className='col-12 card p-3 m-2 shadow rounded-3'>
                                    <div className='card-body'>
                                        <h5 className='card-title text-center'>Vantagens App</h5>
                                        <p className='card-text text-center'><small className='text-muted'>Card </small></p>
                                    </div>
                                </div>

                                <div className='col-12 card p-3  m-2 shadow rounded-3'>
                                    <div className='card-body '>
                                        <h5 className='card-title text-center'>Publicidade Agente Turístico</h5>
                                        <p className='card-text text-center'><small className='text-muted'>Card 2</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-10'>
                            <div className='row card-group'>
                                <div className='col-4 card  p-3 m-2 shadow rounded-3'>
                                    <div className='card-body'>
                                        <h5 className='card-title text-center'>Descarregar App</h5>
                                        <p className='card-text text-center'><small className='text-muted'>Card 3</small></p>
                                    </div>
                                </div>

                                <div className=' col-4 card p-3  m-2 shadow rounded-3'>
                                    <div className='card-body'>
                                        <h5 className='card-title text-center'>Footer</h5>
                                        <p className='card-text text-center'><small className='text-muted'>Rodapé</small></p>
                                    </div>
                                </div>

                                <div className='col-3 card p-3 m-2 shadow rounded-3'>
                                    <div className='card-body'>
                                        <h5 className='card-title text-center'>+</h5>
                                        <p className='card-text text-center'><small className='text-muted'> Adicionar Conteúdo </small></p>
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