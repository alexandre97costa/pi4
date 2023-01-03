import React, { useEffect, useState } from 'react';

import CardForm from '../CardForm';

export default function TabelaListaAgentesTuristicos(props) {
    const [listaAgentesTuristicos, setListaAgentesTuristicos] = useState([])

    const listaAgentesTuristicosExemplo = [{
        id: 1,
        nome: "Isabel Coutinho",
        localidade: "Viseu",
        data: "2022-12-25",
        estado: "Pendente",
    }, {
        id: 2,
        nome: "Isabel Coutinho",
        localidade: "Viseu",
        data: "2022-12-25",
        estado: "Pendente",
    }, {
        id: 3,
        nome: "Isabel Coutinho",
        localidade: "Viseu",
        data: "2022-12-25",
        estado: "Pendente",
    }]

    const listaAgentesTuristicosValidar = [{
        id: 1,
        nome: "Isabel Coutinho",
        localidade: "Viseu",
        data: "2022-12-25",
        estado: "Pendente",
    }, {
        id: 2,
        nome: "Isabel Coutinho",
        localidade: "Viseu",
        data: "2022-12-25",
        estado: "Pendente",
    }]

    useEffect(() => {
        if (props.tipoTabela === 'validar')
            return setListaAgentesTuristicos(listaAgentesTuristicosValidar)

        setListaAgentesTuristicos(listaAgentesTuristicosExemplo)
    }, [])

    function axiosGetAgentesTuristicos() {

    }

    function axiosGetAgentesTuristicosPorValidar() {

    }

    function axiosDelete(index) {
        //Aqui fazemos o pedido axios pra dar delete
        console.log("Delete id: " + listaAgentesTuristicos[index].id + " com o nome: " + listaAgentesTuristicos[index].nome)
    }

    function axiosValidar(index) {
        //Aqui fazemos o pedido axios pra dar validar
        console.log("Validar id: " + listaAgentesTuristicos[index].id + " com o nome: " + listaAgentesTuristicos[index].nome)
    }

    return (
        <CardForm>
            <div className="table-responsive">
                <table className="table text-center align-middle">
                    <thead>
                        <tr>
                            <th className='text-start fw-normal fs-5' scope="col"># Nome</th>
                            <th className='fw-normal fs-5' scope="col">Localidade</th>
                            <th className='fw-normal fs-5 d-none d-md-table-cell' scope="col">Data</th>
                            <th className='fw-normal fs-5' scope="col">Estado</th>
                            <th className='fw-normal fs-5' scope="col">Ações</th>
                        </tr>
                    </thead>

                    <tbody className='table-group-divider'>
                        {listaAgentesTuristicos.map((item, index) => {
                            return (
                                <tr key={index} className="h-5-5rem">
                                    <td className='text-start w-20'>{item.nome}</td>
                                    <td className='w-20'>{item.localidade}</td>
                                    <td className='w-20 d-none d-md-table-cell'>{item.data}</td>
                                    <td className='w-20'>{item.estado}</td>
                                    <td className='w-20'>
                                        <button className='btn btn-outline-primary bi bi-check-lg ' onClick={() => axiosValidar(index)} />
                                        <button className='btn btn-outline-danger bi bi-x-lg ms-md-2' onClick={() => axiosDelete(index)} />
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