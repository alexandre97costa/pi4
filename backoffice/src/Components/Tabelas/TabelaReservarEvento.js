import React, { useEffect, useState } from 'react';

import CardForm from '../CardForm';

export default function TabelaListaReservaEvento(props) {
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
        setLista(listaReservaEventoExemplo)
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
                            <th className='text-start fw-normal fs-5' scope="col">Nome Reserva </th>
                            <th className='fw-normal fs-5' scope="col">Recompensa</th>
                            <th className='fw-normal fs-5 d-none d-md-table-cell' scope="col">Tipo de Recompensa</th>
                            <th className='fw-normal fs-5' scope="col">Pontos</th>
                            <th className='fw-normal fs-5' scope="col">Ações</th>
                        </tr>
                    </thead>

                    <tbody className='table-group-divider'>
                        {listaRecompensas.map((item, index) => {
                            if (props.tipoTabela === 'validar')
                                return (
                                    <tr key={index} className="h-5-5rem">
                                        <td className='text-start w-20'>{item.pontoInteresse}</td>
                                        <td className='w-20'>{item.recompensa}</td>
                                        <td className='w-20 d-none d-md-table-cell'>{item.tipoRecompensa}</td>
                                        <td className='w-20'>{item.pontos}</td>
                                        <td className='w-20'>
                                            <button className='btn btn-outline-primary bi bi-check-lg' onClick={() => axiosValidar(index)} />
                                            <button className='btn btn-outline-danger bi bi-trash-fill ms-md-2' onClick={() => axiosDelete(index)} />
                                        </td>
                                    </tr>
                                )

                            return (
                                <tr key={index} className="h-5-5rem">
                                    <td className='text-start w-20'>{item.pontoInteresse}</td>
                                    <td className='w-20'>{item.recompensa}</td>
                                    <td className='w-20 d-none d-md-table-cell'>{item.tipoRecompensa}</td>
                                    <td className='w-20'>{item.pontos}</td>
                                    <td className='w-20'>
                                        <button className='btn btn-outline-danger bi bi-trash-fill ms-md-2' onClick={() => axiosDelete(index)} />
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </CardForm>
    );
}