import React from 'react';
import { Link } from 'react-router-dom';

import GraficoHorizontal from '../../../Components/GraficoHorizontal';

export default function Home() {
    return (
        <>
            <div className="row">
                <div className='col-12 mt-5'>
                    <p className="fs-5 text-body fw-light">Ações Rápidas</p>
                </div>

                <div className='col-4 col-md-2'>
                    <Link to="" className='btn btn-light btn-lg shadow text-break rounded-4'>
                        <i className="bi bi-journal-check me-3" />Atribuição de Perfil
                    </Link>
                </div>

                <div className='col-4 col-md-2'>
                    <Link to="/microsite" className='btn btn-light btn-lg shadow text-break rounded-4'>
                        <i className="bi bi-file-earmark me-3" />Gerir Página Web
                    </Link>
                </div>

                <div className='col-4 col-md-2'>
                    <Link to="" className='btn btn-light btn-lg shadow text-break rounded-4'>
                        <i className="bi bi-file-earmark me-3" />Gerir Regiões Web
                    </Link>
                </div>

                <div className='col-12 mt-5'>
                    <p className="fs-5 text-body fw-light">Lista de Regiões</p>
                </div>

                <div className='col-12 mb-3 col-sm-4 mb-sm-0 text-break col-md-2 text-center'>
                    <Link to="/utilizadores" className='btn btn-agentes h-100 w-100 rounded-4 text-white fw-bold py-5'>Agentes Turísticos</Link>
                </div>

                <div className='col-12 mb-3 col-sm-4 mb-sm-0 text-break col-md-2 text-center'>
                    <Link to="/utilizadores" className='btn btn-regiao h-100 w-100 rounded-4 text-white fw-bold py-5'>Responsáveis de Região</Link>
                </div>

                <div className='col-12 mb-3 col-sm-4 mb-sm-0 text-break col-md-2 text-center'>
                    <Link to="/utilizadores" className='btn btn-primary h-100 w-100 rounded-4 fw-bold py-5'>Visitantes</Link>
                </div>

                <div className='col-12 mt-5'>
                    <p className="fs-5 text-body fw-light">Logins Utilizadores</p>
                </div>

                <div className='col-12 col-md-10'>
                    <GraficoHorizontal />
                </div>

            </div>
        </>
    );
}