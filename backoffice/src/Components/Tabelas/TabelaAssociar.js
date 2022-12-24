import React, { useEffect, useState } from 'react';

export default function TabelaAssociar(props) {
    const [utilizadores, setUtilizadores] = useState([])

    const utilizador = [{
        id: 1,
        nome: "Manuel Antonio",
        classificacao: "4/5",
    }, {
        id: 2,
        nome: "Manuel Jeremias",
        classificacao: "4.23/5",
    }, {
        id: 3,
        nome: "Manuel Antonio Cartão",
        classificacao: "1.29/5",
    }, {
        id: 4,
        nome: "Manuel Antonio",
        classificacao: "3.56/5",
    }, {
        id: 5,
        nome: "Manuel Antonio",
        classificacao: "4.7/5",
    }]

    function axiosGetResponsaveisRegiao() {
        //Pedido api
    }

    useEffect(() => {
        setUtilizadores(utilizador)
    }, [])

    return (
        <div className="table-responsive">
            <table className="table text-center align-middle">
                <thead>
                    <tr>
                        <th className='text-start fw-normal fs-5' scope="col">Nome</th>
                        <th className='fw-normal fs-5' scope="col">Classificacao</th>
                        <th className='fw-normal fs-5' scope="col">Ação</th>
                    </tr>
                </thead>

                <tbody className='table-group-divider'>
                    {utilizadores.map((item, index) => {
                        return (
                            <tr key={index} className="h-5-5rem">
                                <td className='text-start w-33'>{item.nome}</td>
                                <td className='w-33'>{item.classificacao}</td>
                                <td className='w-33'>
                                    <button type='button' className='btn btn-primary w-100' data-bs-dismiss="modal" aria-label="Close">Selecionar</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}