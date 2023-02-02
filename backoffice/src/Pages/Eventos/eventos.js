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
    }, []);

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

    async function axiosGetEventos() {
        const url = ip + "/evento"/*saber qual a rota*/
        console.log(url)
        console.log(auth.header())

		let options = {
			...auth.header(),
			params: {

			},
		}

        await axios
            .get(url, options)
            .then((output) => {
                console.log(output.data.data);
                setEventos(output.data?.data ?? []);
            })
            .catch((error) => console.error(error));
    }

    return (
        <div className='row'>
            <div className='col-12'>
                <p className="fs-5 text-body fw-light mb-0">Vista Geral</p>
            </div>

            <div className='row gy-4 mt-0'>
                {eventos.map((item, index) => {
                    return (
                        <div key={index} className="col-12 col-sm-6 col-md-4">
                            <CardReservas
                                nomePontoInteresse={item.ponto_interesse.nome}
                                nomeEvento={item.nome}
                                sessao={item.sessoes}
                                lotacao={item.lotacao}
                                eventoId={item.id}
                            />
                        </div>
                    )
                })}
            </div>

            <div className='col-12 mt-5'>
                <p className="fs-5 text-body fw-light">Número de Pessoas no Evento</p>
            </div>

            <div className='col-12 col-md-10'>
                <GraficoHorizontal datasets={datasets} data={evento} />
            </div>
        </div>

    )
}