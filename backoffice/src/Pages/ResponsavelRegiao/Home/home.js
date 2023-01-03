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
        backgroundColor: "#BACC6A",
        borderRadius: borderRadius
    }, {
        label: "Museus",
        data: dataMuseus,
        backgroundColor: "#BACC6A",
        borderRadius: borderRadius,
    }, {
        label: "Espaços Verdes",
        data: dataEspacosVerdes,
        backgroundColor: "#BACC6A",
        borderRadius: borderRadius,
    }, {
        label: "Feiras",
        data: dataFeiras,
        backgroundColor: "#BACC6A",
        borderRadius: borderRadius,
    }]

    return (
        <div className="row">
            <div className='col-12 mt-5'>
                <p className="fs-5 text-body fw-light">Ações Rápidas</p>
            </div>

            <div className='row row-cols-4 gt-4'>
                <div className='col pb-3 col-sm-3 mb-sm-0 text-break  text-center'>
                    <BotaoDashboard to="/utilizadores" colorBotao="btn-agentes h-100 text-white fw-bold py-5 w-100 h-100" texto="Agentes Turísticos" />
                </div>

                <div className='col pb-3 col-sm-3 mb-sm-0 text-break  text-center'>
                    <BotaoDashboard to="/utilizadores" colorBotao="btn-regiao h-100 text-white fw-bold py-5 w-100 h-100" texto="Pontos de Interesse" />
                </div>

                <div className='col pb-3 col-sm-3 mb-sm-0 text-break  text-center'>
                    <BotaoDashboard to="/utilizadores" colorBotao="btn-primary h-100 text-white fw-bold py-5 w-100 h-100" texto="Eventos" />
                </div>

                <div className='col pb-3 col-sm-3 mb-sm-0 text-break  text-center'>
                    <BotaoDashboard to="/utilizadores" colorBotao="btn-agentes h-100 text-white fw-bold py-5 w-100 h-100" texto="Vouchers" />
                </div>

                <div className='col b-3 col-sm-3 mb-sm-0 text-break  text-center'>
                    <BotaoDashboard to="/utilizadores" colorBotao="btn-regiao h-100 text-white fw-bold py-5 w-100 h-100" texto="Recompensas" />
                </div>
            </div>

            <div className='row'>
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