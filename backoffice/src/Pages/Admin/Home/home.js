import React from 'react';

import GraficoHorizontal from '../../../Components/GraficoHorizontal';
import BotaoDashboard from '../../../Components/BotaoDashboard';

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
        label: "Visitantes",
        data: dataUtilizadores,
        backgroundColor: "#bacc6a",
        borderRadius: borderRadius
    }, {
        label: "Agente Turistico",
        data: dataAgenteTuristico,
        backgroundColor: "#80b155",
        borderRadius: borderRadius,
    }, {
        label: "Responsavel de Região",
        data: dataResponsavelRegiao,
        backgroundColor: "#539477",
        borderRadius: borderRadius,
    }, {
        label: "Administrador",
        data: dataAdmin,
        backgroundColor: "#6c757d",
        borderRadius: borderRadius,
    }]

    return (
        <>
            <div className="row row-cols-1 row-cols-md-4 gx-4 mb-5">
                <div className='col-12 col-md-12'>
                    <p className="fs-5 text-body fw-light">Ações Rápidas</p>
                </div>

                <BotaoDashboard
                    to="/utilizadores/0"
                    class="btn-light btn-lg bg-white p-4 w-100 h-100 text-start d-flex align-items-center"
                    icon="bi-person-check fs-3"
                    texto="Atribuição de Perfil" />
                <BotaoDashboard
                    to="/microsite"
                    class="btn-light btn-lg bg-white p-4 w-100 h-100 text-start d-flex align-items-center"
                    icon="bi-window-sidebar fs-3"
                    texto="Gerir Micro Site" />
                <BotaoDashboard
                    to="/regioes"
                    class="btn-light btn-lg bg-white p-4 w-100 h-100 text-start d-flex align-items-center"
                    icon="bi-map fs-3"
                    texto="Gerir Regiões" />

            </div>
            <div className="row row-cols-1 row-cols-md-4 gx-4 mb-5">

                <div className='col-12 col-md-12'>
                    <p className="fs-5 text-body fw-light">Lista de Utilizadores</p>
                </div>

                <BotaoDashboard
                    to="/utilizadores/1"
                    class="btn-light btn-lg bg-visitante text-light p-4 w-100 h-100 text-start d-flex align-items-center"
                    icon="bi-phone fs-3"
                    texto="Visitantes" />
                <BotaoDashboard
                    to="/utilizadores/2"
                    class="btn-light btn-lg bg-agente text-light p-4 w-100 h-100 text-start d-flex align-items-center"
                    icon="bi-geo-alt fs-3"
                    texto="Agentes Turísticos" />
                <BotaoDashboard
                    to="/utilizadores/3"
                    class="btn-light btn-lg bg-responsavel text-light p-4 w-100 h-100 text-start d-flex align-items-center"
                    icon="bi-map fs-3"
                    texto="Responsáveis de Região" />
                <BotaoDashboard
                    to="/utilizadores/4"
                    class="btn-light btn-lg bg-admin text-light p-4 w-100 h-100 text-start d-flex align-items-center"
                    icon="bi-globe2 fs-3"
                    texto="Administradores" />

            </div>
            <div className="row row-cols-1 row-cols-md-4 gx-4 mb-5">

                <div className='col-12 col-md-12'>
                    <p className="fs-5 text-body fw-light">Logins Utilizadores</p>
                </div>

                <div className='col-12 col-md-12'>
                    <GraficoHorizontal datasets={datasets} data={dias} />
                </div>

            </div>
        </>
    );
}