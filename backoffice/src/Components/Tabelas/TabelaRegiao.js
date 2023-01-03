import React, { useEffect, useState } from 'react';

import CardForm from '../CardForm';
import ModalAssociarResponsavel from '../Modais/ModalAssociarResponsavel';

export default function TabelaRegiao(props) {
    const [regioes, setRegioes] = useState([])

    const regioesTeste = [{
        nome: "Tondela",
        responsavel: "02 José António Gomes",
    }, {
        nome: "Tondela",
        responsavel: "02 José António Gomes",
    }, {
        nome: "Tondela",
        responsavel: "02 José António Gomes",
    }, {
        nome: "Tondela",
        responsavel: ''
    }]
    useEffect(() => {
        setRegioes(regioesTeste)
    }, [])

    return (
        <CardForm>
            <div className="table-responsive">
                <table className="table text-center align-middle">
                    <thead>
                        <tr>
                            <th className='text-start fw-normal fs-5' scope="col"># Região</th>
                            <th className='fw-normal fs-5' scope="col"># Responsável de Região</th>
                            <th className='fw-normal fs-5' scope="col">Ações</th>
                        </tr>
                    </thead>

                    <tbody className='table-group-divider'>
                        {regioes.map((item, index) => {
                            if(!item.responsavel)
                                return (
                                    <tr key={index} className="h-5-5rem">
                                    <td className='text-start w-33'>{item.nome}</td>
                                    <td className='text-center w-33'></td>
                                    <td className='w-33'>
                                        <button className='btn btn-outline-warning bi bi-pencil-fill' data-bs-toggle="modal" data-bs-target={"#" + item.nome.replace(/\s+/g, "") + index} />
                                        <button className='btn btn-outline-danger bi bi-trash-fill ms-md-2' />
                                        <ModalAssociarResponsavel idModal={item.nome.replace(/\s+/g, "") + index}/>
                                    </td>
                                </tr>
                                )
                            return (
                                <tr key={index} className="h-5-5rem">
                                    <td className='text-start w-33'>{item.nome}</td>
                                    <td className='text-center w-33'>{item.responsavel}</td>
                                    <td className='w-33'>
                                        <button className='btn btn-outline-warning bi bi-pencil-fill' data-bs-toggle="modal" data-bs-target={"#" + item.nome.replace(/\s+/g, "") + index} />
                                        <button className='btn btn-outline-danger bi bi-trash-fill ms-md-2' />
                                        <ModalAssociarResponsavel idModal={item.nome.replace(/\s+/g, "") + index}/>
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