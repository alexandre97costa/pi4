import React from 'react';
import Chart from 'chart.js/auto';

export function Administrador() {
    return (
        <div className='container col-8'>
            <p className="mb-4 mt-5 ms-5 fs-4"> Olá, Diogo!</p>
            <div className="ms-5">
                <p className="fs-6">Ações Rápidas</p>
                <div className='mt-4'>
                    <button
                        id='btn-submit'
                        type='submit'
                        className='btn btn-dashboard'
                    >
                        <i class="bi bi-journal-check"></i> Atribuição de Perfil
                    </button>
                    <button
                        id='btn-submit'
                        type='submit'
                        className='btn btn-dashboard ms-3'
                    >
                        <i className="bi bi-file-earmark"></i> Gerir Página Web
                    </button>
                    <button
                        id='btn-submit'
                        type='submit'
                        className='btn btn-dashboard ms-3'
                    >
                        <i className="bi bi-file-earmark"></i> Gerir Regiões
                    </button>
                </div>
                <div className="mt-5">
                    <p className="fs-6">Lista de utilizadores</p>
                    <div className='mt-4'>
                        <button
                            id='btn-submit'
                            type='submit'
                            className='btn btn-agentes fw-bold p-5'
                        >
                            Agentes Turísticos
                        </button>
                        <button
                            id='btn-submit'
                            type='submit'
                            className='btn btn-regiao ms-3 fw-bold p-5'
                        >
                            Responsáveis de Região
                        </button>
                        <button
                            id='btn-submit'
                            type='submit'
                            className='btn btn-primary ms-3 fw-bold p-5'
                        >
                            Visitantes
                        </button>
                    </div>
                </div>
                <div className="mt-5">
                    <p className="fs-6">Utilizadores</p>
                    <div className='mt-4'>
                    </div>
                </div>
            </div>
        </div>
    );
}