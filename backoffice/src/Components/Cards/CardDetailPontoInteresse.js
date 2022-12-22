import React from 'react'

export default function CardDetailsPontoInteresse(props) {
    return (
        <div className='row mb-3'>
            <div className='col-12 mb-3 col-md-4 mb-md-0'>

                <div className="card border-0 rounded-4 shadow py-3 d-flex align-items-center">
                    <div className="card-body">
                        <h5 className="card-title fw-light">Nome</h5>
                        <h6 className="card-subtitle mb-4 fs-4">{props.nome}</h6>

                        <h5 className="card-title fw-light">Descricao</h5>
                        <h6 className="card-subtitle mb-4 fs-4">{props.descricao}</h6>

                        <h5 className="card-title fw-light">Tipo de Interesse</h5>
                        <h6 className="card-subtitle mb-4 fs-4">{props.tipoInteresse}</h6>

                        <h5 className="card-title fw-light">Avaliacao</h5>
                        <h6 className="card-subtitle fs-4">{props.avaliacao}</h6>
                    </div>
                </div>

            </div>

            <div className='col-12 col-md-8'>

                <div className="card border-0 rounded-4 shadow h-25rem">
                    <div className="card-body p-0">

                        {/* Mudar para componente */}
                        <div id="carouselExampleControls" className="carousel slide h-100 w-100" data-bs-ride="carousel">
                            <div className="carousel-inner h-100">
                                {props.imagens.map((item, index) => {
                                    if (!index)
                                        return (
                                            <div key={index} className="carousel-item h-100 active">
                                                <img src={item.imagem} className="d-block w-100 h-25rem rounded-4" alt={item.alt} />
                                            </div>
                                        )
                                    return (
                                        <div key={index} className="carousel-item h-100">
                                            <img src={item.imagem} className="d-block w-100 h-25rem rounded-4" alt={item.alt} />
                                        </div>
                                    )
                                })}
                            </div>

                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}