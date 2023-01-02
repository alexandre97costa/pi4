import React from 'react';

export default function Carousel(props) {
    return (
        <div id={props.id} className="carousel slide h-100 w-100" data-bs-ride="carousel">
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

            <button className="carousel-control-prev" type="button" data-bs-target={'#' + props.id} data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={'#' + props.id} data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}