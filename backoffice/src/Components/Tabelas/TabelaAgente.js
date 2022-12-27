import React, { useEffect, useState } from 'react';
import CardForm from '../CardForm';

export default function TabelaListaAgente(props) {
    const [utilizadores, setUtilizadores] = useState([])

    const utilizador = [{
        id: 1,
        nome: "José António Gomes",
        regiao: "Viseu",
        tipoUtilizador: "Agente Turístico"
    }, {
        id: 2,
        nome: "Luisa Machado Castro",
        regiao: "Viseu",
        tipoUtilizador: "Agente Turístico"
    }, {
        id: 3,
        nome: "Manuel Antonio Cartão",
        regiao: "Viseu",
        tipoUtilizador: "Agente Turístico"
    }, {
        id: 4,
        nome: "Manuel Antonio",
        regiao: "Viseu",
        tipoUtilizador: "Agente Turístico"
    }, {
        id: 5,
        nome: "Manuel Antonio",
        regiao: "Viseu",
        tipoUtilizador: "Agente Turístico"
    }]

    useEffect(() => {
        setUtilizadores(utilizador)
    }, [])

    function changeClassCategoria(tipoUtilizador) {
        if (tipoUtilizador === 'Visitante')
            return "p-2 text-white w-50 me-auto ms-auto rounded-2 bg-visitante"
        if (tipoUtilizador === 'Responsável Região')
            return "p-2 text-white w-50 me-auto ms-auto rounded-2 bg-responsavel"
        if (tipoUtilizador === 'Agente Turístico')
        return "p-2 text-white w-50 me-auto ms-auto rounded-2 bg-agente"
    }

    function axiosDelete(index) {
        //Aqui fazemos o pedido axios pra dar delete a utilizador
        console.log("Delete id: " + utilizador[index].id + " com o nome: " + utilizador[index].nome)
    }

    return (
        <CardForm>
            <div className="table-responsive">
                <table className="table text-center align-middle">
                    <thead>
                        <tr>
                            <th className='text-start fw-normal fs-5' scope="col"># Nome</th>
                            <th className='fw-normal fs-5' scope="col">Categoria</th>
                            <th className='fw-normal fs-5' scope="col">Ações</th>
                        </tr>
                    </thead>

                    <tbody className='table-group-divider'>
                        {utilizadores.map((item, index) => {
                            return (
                                <tr key={index} className="h-5-5rem">
                                    <td className='text-start w-33'>{item.nome}</td>
                                    <td className='w-33'>
                                        <div className={changeClassCategoria(item.tipoUtilizador)}>{item.tipoUtilizador}</div>
                                    </td>
                                    <td className='w-33'>
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