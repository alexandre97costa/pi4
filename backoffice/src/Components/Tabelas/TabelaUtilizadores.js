import React, { useEffect, useState } from 'react';
import CardForm from '../CardForm';

import ModalSelectCategoria from '../Modais/ModalSelectCategoria';

export default function TabelaUtilizadores(props) {
    const [utilizadores, setUtilizadores] = useState([])

    useEffect(() => {
        const utilizador = [{
            nome: "Manuel Antonio",
            regiao: "Viseu",
            tipoUtilizador: "Visitante"
        }, {
            nome: "Manuel Jeremias",
            regiao: "Viseu",
            tipoUtilizador: "Responsável Região"
        }, {
            nome: "Manuel Antonio Cartão",
            regiao: "Viseu",
            tipoUtilizador: "Responsável Região"
        }, {
            nome: "Manuel Antonio",
            regiao: "Viseu",
            tipoUtilizador: "Agente Turístico"
        }, {
            nome: "Manuel Antonio",
            regiao: "Viseu",
            tipoUtilizador: "Visitante"
        }]

        setUtilizadores(utilizador)
    }, [])

    function changeClassCategoria(tipoUtilizador) {
        if (tipoUtilizador === 'Visitante')
            return "p-2 text-white w-50 me-auto ms-auto rounded-2 bg-visitante"
        if (tipoUtilizador === 'Responsável Região')
            return "p-2 text-white w-50 me-auto ms-auto rounded-2 bg-responsavel"

        return "p-2 text-white w-50 me-auto ms-auto rounded-2 bg-agente"
    }

    return (
        <CardForm>
            <div className="table-responsive">
                <table className="table text-center align-middle">
                    <thead>
                        <tr>
                            <th className='text-start fw-normal fs-5' scope="col">{props.coluna1}</th>
                            <th className='fw-normal fs-5' scope="col">{props.coluna2}</th>
                            <th className='fw-normal fs-5' scope="col">{props.coluna3}</th>
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
                                        <button className='btn btn-outline-warning bi bi-pencil-fill' data-bs-toggle="modal" data-bs-target={"#" + item.nome.replace(/\s+/g, "") + index} />
                                        <button className='btn btn-outline-danger bi bi-trash-fill ms-md-2' />
                                        <ModalSelectCategoria idModal={item.nome.replace(/\s+/g, "") + index} nome={item.nome} regiao={item.regiao} />
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