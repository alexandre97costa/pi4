import React from 'react';

import GraficoHorizontal from '../../../Components/GraficoHorizontal';
import BotaoDashboard from '../../../Components/BotaoDashboard';
import TabelaListaAgentesTuristicos from '../../../Components/Tabelas/TabelaListaAgentesTuristicos';

export default function Home() {
    const borderRadius = 14

    const dias = [
        "22/12",
        "23/12",
        "24/12",
        "25/12",
    ];

    const dataRestauracao = [
        "10",
        "13",
        "50",
        "26"
    ]

    const dataMuseus = [
        "100",
        "112",
        "58",
        "91"
    ]

    const dataEspacosVerdes = [
        "35",
        "36",
        "59",
        "126"
    ]

    const dataFeiras = [
        "145",
        "56",
        "89",
        "46"
    ]

    const datasets = [{
        label: "Restauração",
        data: dataRestauracao,
        backgroundColor: "#d6ffab",
        borderRadius: borderRadius
    }, {
        label: "Museus",
        data: dataMuseus,
        backgroundColor: "#BCD067",
        borderRadius: borderRadius,
    }, {
        label: "Espaços Verdes",
        data: dataEspacosVerdes,
        backgroundColor: "#80b155",
        borderRadius: borderRadius,
    }, {
        label: "Feiras",
        data: dataFeiras,
        backgroundColor: "#729d4c",
        borderRadius: borderRadius,
    }]

    return (
        <div className="row">
            <div className='col-12 mt-4'>
                <p className="fs-5 text-body fw-light">Ações Rápidas</p>
            </div>


            <div className='col-12 col-md-4'>
                    <BotaoDashboard to="/admin/lista-utilizadores" colorBotao="btn-light btn-lg" icon="bi-journal-check" texto="Atribuição de Perfil"/>
            </div>
            <div className='col-12 m-2'>
                
            </div>
            <div className='col-12 mb-3 col-sm-4 mb-sm-0 text-break col-md-3 text-center'>
                <BotaoDashboard to="/consultar-pontos-interesse" colorBotao="btn-regiao h-100 text-white fw-bold py-5 w-100 h-100 text-uppercase" texto="Pontos de Interesse" />
            </div>

            <div className='col-12 mb-3 col-sm-4 mb-sm-0 text-break col-md-3 text-center'>
                <BotaoDashboard to="/responsavel-regiao/lista-eventos" colorBotao="btn-primary h-100 text-white fw-bold py-5 w-100 h-100 text-uppercase" texto="Eventos" />
            </div>

            <div className='col-12 mb-3 col-sm-4 mb-sm-0 text-break col-md-3 text-center'>
                <BotaoDashboard to="/responsavel-regiao/lista-vouchers" colorBotao="btn-agentes h-100 text-white fw-bold py-5 w-100 h-100 text-uppercase" texto="Vouchers" />
            </div>

            <div className='row mt-5'>
                <div className='col-12 mt-5'>
                    <p className="fs-5 text-body fw-light">Validação de Agentes Turísticos</p>
                </div>
                <div className='col-12'>
                    <TabelaListaAgentesTuristicos />
                </div>

            </div>

            <div className='row'>
                <div className='col-12 mt-5'>
                    <p className="fs-5 text-body fw-light">Categorias mais visitadas</p>
                </div>

                <div className='col-12'>
                    <GraficoHorizontal datasets={datasets} data={dias} />
                </div>
            </div>

        </div>
    );
}