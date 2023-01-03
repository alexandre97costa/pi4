import React, { useEffect, useState } from 'react';

import Botao from '../Botao';
import CardForm from '../CardForm';

export default function TabelaValidarPontos() {
    const [listaValidarPontos, setListaValidarPontos] = useState([])

    const listaValidarPontosExemplo = [{
        id: 1,
        pontoInteresse: "Monte Branco",
        morada: "Rua das Penas",
        tipoPontoInteresse: "Restaurante",
        descricao: "Este local é bastante conhecido por isto e  aqui",
    }, {
        id: 2,
        pontoInteresse: "Monte Branco",
        morada: "Rua das Penas",
        tipoPontoInteresse: "Restaurante",
        descricao: "Este local é bastante conhecido por isto e  aqui",
    }, {
        id: 3,
        pontoInteresse: "Monte Branco",
        morada: "Rua das Penas",
        tipoPontoInteresse: "Restaurante",
        descricao: "Este local é bastante conhecido por isto e  aqui",
    }]

    useEffect(() => {
        setListaValidarPontos(listaValidarPontosExemplo)
    }, [])

    function axiosDelete(index) {
        //Aqui fazemos o pedido axios pra dar delete
        console.log("Delete id: " + listaValidarPontos[index].id + " com o nome: " + listaValidarPontos[index].pontoInteresse)
    }

    function axiosValidar(index) {
        //Aqui fazemos o pedido axios pra dar validar
        console.log("Validar id: " + listaValidarPontos[index].id + " com o nome: " + listaValidarPontos[index].pontoInteresse)
    }

    return (
        <CardForm>
            <div className="table-responsive">
                <table className="table text-center align-middle">
                    <thead>
                        <tr>
                            <th className='text-start fw-normal fs-5' scope="col"># Ponto de Interesse</th>
                            <th className='fw-normal fs-5' scope="col">Morada</th>
                            <th className='fw-normal fs-5 d-none d-md-table-cell' scope="col">Tipo de P. Interesse</th>
                            <th className='fw-normal fs-5' scope="col">Descrição</th>
                            <th className='fw-normal fs-5' scope="col">Ações</th>
                        </tr>
                    </thead>

                    <tbody className='table-group-divider'>
                        {listaValidarPontos.map((item, index) => {
                            return (
                                <tr key={index} className="h-5-5rem">
                                    <td className='text-start w-20'>{item.pontoInteresse}</td>
                                    <td className='w-20'>{item.morada}</td>
                                    <td className='w-20 d-none d-md-table-cell'>{item.tipoPontoInteresse}</td>
                                    <td className='w-20'>{item.descricao}</td>
                                    <td className='w-20'>
                                        <Botao className="btn-outline-primary bi bi-check-lg" onClick={() => axiosValidar(index)}/>
                                        <Botao className="btn-outline-danger bi bi-trash-fill ms-md-2" onClick={() => axiosDelete(index)}/>
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