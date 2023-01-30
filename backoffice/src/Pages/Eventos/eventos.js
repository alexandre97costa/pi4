import React from 'react'

import CardReservas from '../../Components/Cards/CardReservas';
import GraficoHorizontal from '../../Components/GraficoHorizontal';

export default function Eventos() {
    const testeReserva1 = [{
        dataReserva: '20 Jan 2023',
        numeroPessoas: '2'
    }, {
        dataReserva: '20 Jan 2023',
        numeroPessoas: '5'
    }, {
        dataReserva: '20 Jan 2023',
        numeroPessoas: '13'
    }]

    const testeReserva2 = [{
        dataReserva: '20 Jan 2023',
        numeroPessoas: '3'
    }, {
        dataReserva: '20 Jan 2023',
        numeroPessoas: '5'
    }]

    const teste = [{
        nomePontoInteresse: 'Ponto de Interesse',
        nomeEvento: 'Evento X',
        dataEvento: "20 Jan 2023",
        statusReserva: "20/30",
        valueNow: '85',
        reservas: testeReserva1
    }, {
        nomePontoInteresse: 'Ponto de Interesse',
        nomeEvento: 'Evento X',
        dataEvento: "21 Jan 2023",
        statusReserva: "8/9",
        valueNow: '99',
        reservas: testeReserva2
    }]


    const borderRadius = 14

    const evento = [
        "Piquenique a beira mar",
        "Jogo de futebol",
        "Visita guida",
        "Cinema para crianças",
        "Tour pela cidade"
    ];

    const dataEventos = [
        "12",
        "23",
        "1",
        "27",
        "12"
    ]

    const datasets = [{
        label: "Eventos",
        data: dataEventos,
        backgroundColor: "#729d4c",
        borderRadius: borderRadius
    }]

    return (
        <div className='row'>
            <div className='col-12'>
                <p className="fs-5 text-body fw-light">Vista Geral</p>
            </div>

            {teste.map((item, index) => {
                return (
                    <div key={index} className="col-12 col-sm-6 col-md-3">
                        <CardReservas
                            nomePontoInteresse={item.nomePontoInteresse}
                            nomeEvento={item.nomeEvento}
                            dataEvento={item.dataEvento}
                            statusReserva={item.statusReserva}
                            valueNow={item.valueNow}
                            reservas={item.reservas}
                        />
                    </div>
                )
            })}

            <div className='col-12 mt-5'>
                <p className="fs-5 text-body fw-light">Número de Pessoas no Evento</p>
            </div>

            <div className='col-12 col-md-10'>
                <GraficoHorizontal datasets={datasets} data={evento} />
            </div>
        </div>

    )
}