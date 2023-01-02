import React from 'react'

export default function CardRecompensa(props) {
    return (
        <div className="card border-0 rounded-4 shadow h-100 p-4">
            <img src={props.imagem} className="img-fluid align-self-center rounded w-50 img-fluid" />

            <h5 className="card-title fs-4 pt-3">{props.title}</h5>
            <h5 className="card-title text-success">{props.pontos}</h5>
        </div>
    );
}