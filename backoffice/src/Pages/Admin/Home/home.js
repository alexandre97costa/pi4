import React from 'react';
import { Link } from 'react-router-dom';

import GraficoHorizontal from '../../../Components/GraficoHorizontal';

export default function Home() {
    const borderRadius = 14

    const dias = [
        "22/12",
        "23/12",
        "24/12",
        "25/12",
    ];

    const dataUtilizadores = [
        "10",
        "13",
        "50",
        "26"
    ]

    const dataAgenteTuristico = [
        "100",
        "112",
        "58",
        "91"
    ]

    const dataResponsavelRegiao = [
        "35",
        "36",
        "59",
        "126"
    ]

    const dataAdmin = [
        "145",
        "56",
        "89",
        "46"
    ]

    const datasets = [{
        label: "Utilizadores",
        data: dataUtilizadores,
        backgroundColor: "#BACC6A",
        borderRadius: borderRadius
    }, {
        label: "Agente Turistico",
        data: dataAgenteTuristico,
        backgroundColor: "#BACC6A",
        borderRadius: borderRadius,
    }, {
        label: "Responsavel de Região",
        data: dataResponsavelRegiao,
        backgroundColor: "#BACC6A",
        borderRadius: borderRadius,
    }, {
        label: "Administrador",
        data: dataAdmin,
        backgroundColor: "#BACC6A",
        borderRadius: borderRadius,
    }]

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
                    <GraficoHorizontal datasets={datasets} data={dias} />
                </div>

            </div>
        </>
    );
}