import React from 'react';
import { Link } from 'react-router-dom';

export default function CardUtilizadoresDetails(props) {
    return (
        <div className="card border-0 rounded-4 shadow h-100">
            <div className="card-body">
                <div className='row h-100 d-flex align-items-center'>
                    {props.info.map((item, index) => {
                        return (
                            <div key={index}>
                                
                                <div className='col-12'>
                                    <h5 className="card-subtitle mt-3 mb-2 ms-3 fs-4">Nome</h5>
                                    <p className="card-title mb-4 ms-3 fw-light">{item.nome}</p>
                                </div>

                                <div className='col-12'>
                                    <h5 className="card-subtitle mt-3 mb-2 ms-3 fs-4">E-mail</h5>
                                    <p className="card-title mb-4 ms-3 fw-light">{item.email}</p>
                                </div>  


                                <div className='col-12'>
                                    <h5 className="card-subtitle mt-3 mb-2 ms-3 fs-4">Função</h5>
                                    <p className="card-title mb-4 ms-3 fw-light">{item.tipo_utilizador.nome}</p>
                                </div>

                                <div className='col-12'>
                                    <h5 className="card-subtitle mt-3 mb-2 ms-3 fs-4">Observações</h5>
                                    <p className="card-title mb-4 ms-3 fw-light">{item.tipo_utilizador.observacoes}</p>
                                </div>

                                <div className='col-12 mb-3 ms-3 d-flex align-items-center'>
                                    <Link type="button" className="btn btn-lg btn-primary w-25" to="/editar-perfil">Editar Perfil</Link>
                                    <Link type="button" className="btn btn-lg btn-outline-secondary w-25 ms-5" to="/editar-passe">Editar Palavra-passe</Link>
                                </div>
                                
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}