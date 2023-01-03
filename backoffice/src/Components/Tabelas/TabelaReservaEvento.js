import React, { useEffect, useState } from 'react';

import CardForm from '../CardForm';

export default function TabelaReservaEvento() {
    const [listaReservaEvento, setListaReservaEvento] = useState([])

    const listaReservaEventoExemplo = [{
        id: 1,
        nomeReserva: "Monte Branco",
        numeroPessoas: "4 pessoas",
        horaChegada: "18:00h",
        data: "15/01/2023",
    }, {
        id: 2,
        nomeReserva: "Monte Branco",
        numeroPessoas: "4 pessoas",
        horaChegada: "18:00h",
        data: "15/01/2023",
    }, {
        id: 3,
        nomeReserva: "Monte Branco",
        numeroPessoas: "4 pessoas",
        horaChegada: "18:00h",
        data: "15/01/2023",
    }]



    useEffect(() => {
        setListaReservaEvento(listaReservaEventoExemplo)
    }, [])


    function axiosDelete(index) {
        //Aqui fazemos o pedido axios pra dar delete
        console.log("Delete id: " + listaReservaEvento[index].id + " com o nome: " + listaReservaEvento[index].nomeReserva)
    }

    return (
        <CardForm>
            <div className="table-responsive">
                <table className="table text-center align-middle">
                    <thead>
                        <tr>
                            <th className='text-start fw-normal fs-5' scope="col">Nome Reserva</th>
                            <th className='fw-normal fs-5' scope="col">Nº Pessoas</th>
                            <th className='fw-normal fs-5 d-none d-md-table-cell' scope="col">Hora Chegada</th>
                            <th className='fw-normal fs-5' scope="col">Data</th>
                        </tr>
                    </thead>

                    <tbody className='table-group-divider'>
                        {listaReservaEvento.map((item, index) => {
                            return (
                                <tr key={index} className="h-5-5rem">
                                    <td className='text-start w-20'>{item.nomeReserva}</td>
                                    <td className='w-20'>{item.numeroPessoas}</td>
                                    <td className='w-20 d-none d-md-table-cell'>{item.horaChegada}</td>
                                    <td className='w-20'>{item.data}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </CardForm>
    );
}