import React, { useEffect, useState } from 'react';

import CardForm from '../CardForm';

export default function TabelaListaEventos(props) {
    const [listaEventos, setListaEventos] = useState([])

    const listaEventosExemplo = [{
        id: 1,
        eventos: "Recital das aves",
        pontoInteresse: "Jardim das mães",
    }, {
        id: 2,
        eventos: "Recital das aves",
        pontoInteresse: "Jardim das mães",
    }, {
        id: 3,
        eventos: "Recital das aves",
        pontoInteresse: "Jardim das mães",
    },{
        id: 4,
        eventos: "Recital das aves",
        pontoInteresse: "Jardim das mães",
    }]

    useEffect(() => {
        setListaEventos(listaEventosExemplo)
    }, [])


    function axiosDelete(index) {
        //Aqui fazemos o pedido axios pra dar delete
        console.log("Delete id: " + listaEventos[index].id + " com o nome: " + listaEventos[index].pontoInteresse)
    }

    function axiosValidar(index) {
        //Aqui fazemos o pedido axios pra dar validar
        console.log("Validar id: " + listaEventos[index].id + " com o nome: " + listaEventos[index].pontoInteresse)
    }

    return (
        <CardForm>
            <div className="table-responsive">
                <table className="table text-center align-middle">
                    <thead>
                        <tr>
                            <th className='text-start fw-normal fs-5' scope="col"># Eventos</th>
                            <th className='fw-normal fs-5' scope="col">Ponto de Interesse</th>
                            <th className='fw-normal fs-5' scope="col">Ações</th>
                        </tr>
                    </thead>

                    <tbody className='table-group-divider'>
                        {listaEventos.map((item, index) => {
                            if (props.tipoTabela === 'validar')
                                return (
                                    <tr key={index} className="h-5-5rem">
                                        <td className='text-start w-20'>{item.eventos}</td>
                                        <td className='w-20'>{item.pontoInteresse}</td>
                                        <td className='w-20'>
                                            <button type="button" class="btn btn-primary">Visualizar</button>
                                            <button className='btn btn-outline-danger bi bi-trash-fill ms-md-2' onClick={() => axiosDelete(index)} />
                                        </td>
                                    </tr>
                                )

                            return (
                                <tr key={index} className="h-5-5rem">
                                    <td className='text-start w-20'>{item.eventos}</td>
                                    <td className='w-20'>{item.pontoInteresse}</td>
                                    <td className='w-20'>
                                        <button type="button" class="btn btn-primary">Visualizar</button>
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