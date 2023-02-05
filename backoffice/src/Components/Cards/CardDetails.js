import React from 'react';

export default function CardDetails(props) {
    return (
        <div className="card border-0 rounded-4 shadow h-100">
            <div className="card-body">
                <div className='row h-100 d-flex align-items-center'>
                    {props.info.map((item, index) => {
                        return (
                            <div key={index}>
                                <div className='col-12'>
                                    <h5 className="card-title fw-light">Nome</h5>
                                    <h6 className="card-subtitle mb-4 fs-5">{item.nome}</h6>
                                </div>

                                <div className='col-12'>
                                    <h5 className="card-title fw-light">Descricao</h5>
                                    <h6 className="card-subtitle mb-4 fs-5">{item.descricao}</h6>
                                </div>


                                <div className='col-12'>
                                    <h5 className="card-title fw-light">Categoria</h5>
                                    <h6 className="card-subtitle mb-4 fs-5">{item.tipo_interesse.nome}</h6>
                                </div>

                                <div className='col-12'>
                                    <h5 className="card-title fw-light">Avaliação</h5>
                                    <h6 className="card-subtitle mb-4 fs-5">{item.avg_avaliacao}</h6>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}