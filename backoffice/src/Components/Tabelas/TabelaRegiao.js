import React, { useEffect, useState } from 'react';
import CardForm from '../CardForm';

export default function TabelaRegiao(props) {
    const [regioes, setRegioes] = useState([])

    useEffect(() => {
        const regioes = [{
            nome: "224 Tondela",
            responsavel: "02 José António Gomes",
        }, {
            nome: "224 Tondela",
            responsavel: "02 José António Gomes",
        }, {
            nome: "224 Tondela",
            responsavel: "02 José António Gomes",
        }]

        setRegioes(regioes)
    })

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
                        {regioes.map((item, index) => {
                            return (
                                <tr key={index} className="h-5-5rem">
                                    <td className='text-start w-33'>{item.nome}</td>
                                    <td className='text-center w-33'>{item.responsavel}</td>
                                    <td className='w-33'>
                                        <button className='btn btn-outline-warning bi bi-pencil-fill' data-bs-toggle="modal" data-bs-target={"#" + item.nome.replace(/\s+/g, "") + index} />
                                        <button className='btn btn-outline-danger bi bi-trash-fill ms-md-2' />
                                        {/* <Modal idModal={item.nome.replace(/\s+/g, "") + index} nome={item.nome} regiao={item.regiao}/> */}
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