import React from 'react'

import CardForm from '../CardForm';

export default function CardListaRecompensas(props) {
    return (
        <CardForm>
                <p className="card-title fs-5 text-success">{props.nomePontoInteresse}</p>

                {props.recompensas.map((item, index) => {
                    return (
                        <div key={index} className="row w-100 align-self-center border-top py-3">
                            <div className='col-5'>
                                <p className="text-start text-muted">{item.nomeRecompensa}</p>
                            </div>
                            <div className='col-7 text-end'>
                                <button type="button" className="btn btn-outline-warning btn-sm me-2">Editar</button>
                                <button type="button" className="btn btn-outline-danger btn-sm">Eliminar</button>
                            </div>
                        </div>
                    )
                })}
        </CardForm>
    );
}