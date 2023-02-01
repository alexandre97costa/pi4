import React from 'react'
import VisibleTo from '../../Helpers/VisibleTo';

import Botao from '../Botao'

export default function CardReservas(props) {
    return (
        <div className="card border border-0 rounded-4 shadow">
                
            <div className="col-12">
                <div className='row align-items-center py-3'>
                    
                    <div className='col-5'>
                        <p className="fs-6 text-success mx-2 mt-2">{props.nomePontoInteresse}</p>
                        <p className="fs-5 mx-2">{props.nomeEvento}</p>
                    </div>

                    <div className='col-7 text-end'>
                        <Botao to="/admin/lista-utilizadores" className="btn-outline-success btn-sm me-2 mb-5"  texto="Lista de reservas"/>
                    </div>
                    
                </div>
            </div>


            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="fs-6 text-start text-muted mb-1">{props.dataEvento}</p>
                    </div>
                    <div className="col">
                        <p className="fs-6 text-end text-muted mb-1">{props.statusReserva}</p>
                    </div>
                    <div className='col-12 mb-4'>
                        <div className="progress mx-auto w-100">
                            <div className="progress-bar progress-bar-striped progress-bar bg-success text-align:center" role="progressbar" aria-label="Animated striped example" aria-valuenow={props.valueNow} aria-valuemin="0" aria-valuemax="90" style={{ width: props.valueNow + '%' }}></div>
                        </div>
                    </div>

                    <div className="col">
                        <p className="fs-6 text-start text-muted mb-1">{props.dataEvento}</p>
                    </div>
                    <div className="col">
                        <p className="fs-6 text-end text-muted mb-1">{props.statusReserva}</p>
                    </div>
                    <div className='col-12 mb-4'>
                        <div className="progress mx-auto w-100">
                            <div className="progress-bar progress-bar-striped progress-bar bg-success text-align:center" role="progressbar" aria-label="Animated striped example" aria-valuenow={props.valueNow} aria-valuemin="0" aria-valuemax="90" style={{ width: props.valueNow + '%' }}></div>
                        </div>
                    </div>

                    {props.reservas.map((item, index) => {
                        return (
                            <div key={index} className='col-12 border-top'>
                                <div className='row align-items-center py-3'>

                                    <div className='col-5'>
                                        <div className="text-start text-muted"> {item.dataReserva}<i className="fs-6 bi bi-person" />{item.numeroPessoas}</div>
                                    </div>

                                    <VisibleTo tipo='2'>
                                        <div className="col-7 text-end">
                                            <Botao className="btn-outline-success btn-sm me-2" texto="Confirmar" onClick={() => console.log(index)} />
                                            <Botao className="btn-outline-danger btn-sm" texto="Rejeitar" onClick={() => console.log(index)} />
                                        </div>
                                    </VisibleTo>

                                </div>
                            </div>
                        )
                    })}
                    

                </div>
            </div>
        </div>
    );
}