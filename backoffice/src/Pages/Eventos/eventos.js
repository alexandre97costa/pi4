import React, { useEffect, useState } from 'react';
import axios from 'axios'
import auth from '../../Auth/auth.service';

import CardReservas from '../../Components/Cards/CardReservas';
import GraficoHorizontal from '../../Components/GraficoHorizontal';

const ip = process.env.REACT_APP_IP

export default function Eventos() {

    const [eventos, setEventos] = useState([])

    useEffect(() => {
        axiosGetEventos();
      }, []);

    /*
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
    */


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
    
    function axiosGetEventos(){
        const url = ip + "/eventoController"/*saber qual a rota*/
        console.log(url)
        //Aqui que fazemos o pedido axios dos pontos de interesse
        axios
        .get(url, auth.header())
        .then((output) => {
            console.log(output);
            setEventos(output.data?.data ?? []);
        })
      .catch((error) => console.error(error));
    }

    return (
        <div className='row'>
            <div className='col-12'>
                <p className="fs-5 text-body fw-light">Vista Geral</p>
            </div>

            {eventos.map((item, index) => {
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