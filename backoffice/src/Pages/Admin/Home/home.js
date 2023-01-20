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
                    <BotaoDashboard colorBotao="btn-light btn-lg" icon="bi-journal-check" texto="Atribuição de Perfil"/>
                </div>

                <div className='col-4 col-md-2'>
                    <BotaoDashboard to="/admin/microsite" colorBotao="btn-light btn-lg" icon="bi-file-earmark " texto="Gerir Página Web"/>
                </div>

                <div className='col-4 col-md-2'>
                    <BotaoDashboard colorBotao="btn-light btn-lg" icon="bi-file-earmark " texto="Gerir Regiões Web"/>
                </div>

                <div className='col-12 mt-5'>
                    <p className="fs-5 text-body fw-light">Lista de Regiões</p>
                </div>

                <div className='col-12 mb-3 col-sm-4 mb-sm-0 text-break col-md-2 text-center'>
                    <BotaoDashboard to="/admin/lista-utilizadores" colorBotao="btn-agentes h-100 text-white fw-bold py-5 w-100 h-100" texto="Agentes Turísticos"/>
                </div>

                <div className='col-12 mb-3 col-sm-4 mb-sm-0 text-break col-md-2 text-center'>
                    <BotaoDashboard to="/admin/lista-utilizadores" colorBotao="btn-regiao h-100 text-white fw-bold py-5 w-100 h-100" texto="Responsáveis de Região"/>
                </div>

                <div className='col-12 mb-3 col-sm-4 mb-sm-0 text-break col-md-2 text-center'>
                    <BotaoDashboard to="/admin/lista-utilizadores" colorBotao="btn-primary h-100 text-white fw-bold py-5 w-100 h-100" texto="Visitantes"/>
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