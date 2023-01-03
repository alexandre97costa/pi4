import React, { useEffect, useState } from 'react';
import Botao from '../Botao';

import CardForm from '../CardForm';

export default function TabelaListaRecompensas(props) {
    const [listaRecompensas, setListaRecompensas] = useState([])

    const listaRecompensasExemplo = [{
        id: 1,
        pontoInteresse: "Monte Branco",
        recompensa: "Oferta de um bolo",
        tipoRecompensa: "Cafetaria",
        pontos: "150",
    }, {
        id: 2,
        pontoInteresse: "Monte Branco",
        recompensa: "Oferta de um bolo",
        tipoRecompensa: "Cafetaria",
        pontos: "150",
    }, {
        id: 3,
        pontoInteresse: "Monte Branco",
        recompensa: "Oferta de um bolo",
        tipoRecompensa: "Cafetaria",
        pontos: "150",
    }]

    const listaRecompensasValidar = [{
        id: 1,
        pontoInteresse: "Monte Branco",
        recompensa: "Oferta de um bolo",
        tipoRecompensa: "Cafetaria",
        pontos: "150",
    }, {
        id: 2,
        pontoInteresse: "Monte Branco",
        recompensa: "Oferta de um bolo",
        tipoRecompensa: "Cafetaria",
        pontos: "10",
    }]

    useEffect(() => {
        if (props.tipoTabela === 'validar')
            return setListaRecompensas(listaRecompensasValidar)

        setListaRecompensas(listaRecompensasExemplo)
    }, [])

    function axiosGetRecompensas() {

    }

    function axiosGetRecompensasPorValidar() {

    }

    function axiosDelete(index) {
        //Aqui fazemos o pedido axios pra dar delete
        console.log("Delete id: " + listaRecompensas[index].id + " com o nome: " + listaRecompensas[index].pontoInteresse)
    }

    function axiosValidar(index) {
        //Aqui fazemos o pedido axios pra dar validar
        console.log("Validar id: " + listaRecompensas[index].id + " com o nome: " + listaRecompensas[index].pontoInteresse)
    }

    return (
        <CardForm>
            <div className="table-responsive">
                <table className="table text-center align-middle">
                    <thead>
                        <tr>
                            <th className='text-start fw-normal fs-5' scope="col"># Ponto de Interesse</th>
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
                                            <Botao className="btn-outline-primary bi bi-check-lg" onClick={() => axiosValidar(index)} />
                                            <Botao className="btn-outline-danger bi bi-trash-fill ms-md-2" onClick={() => axiosDelete(index)} />
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
                                        <Botao className="btn-outline-danger bi bi-trash-fill ms-md-2" onClick={() => axiosDelete(index)} />
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