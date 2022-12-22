import React from 'react'
import Carousel from '../Carousel';

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
                <Carousel id="imagensPontoInteresse" imagens={props.imagens} />
            </div>
        </div>
    );
}