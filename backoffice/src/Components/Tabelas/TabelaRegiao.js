import React, { useEffect, useState } from 'react';
import axios from "axios";
import auth from "../../Auth/auth.service";

import CardForm from '../CardForm';
import ModalAssociarResponsavel from '../Modais/ModalAssociarResponsavel';

const ip = process.env.REACT_APP_IP;

export default function TabelaRegiao(props) {
    const [regioes, setRegioes] = useState([])

    useEffect(() => {
        axiosGet()
    }, [])

    async function axiosGet() {
        const url = ip + '/local/distrito'

        await axios
            .get(url, auth.header())
            .then((output) => {
                console.log(output.data.distritos)
                setRegioes(output.data.distritos)
            })
            .catch((error) => console.log(error))
    }

    return (
        <CardForm>
            <div className="table-responsive">
                <table className="table text-center align-middle">
                    <thead>
                        <tr>
                            <th className='text-start fw-normal fs-5' scope="col"># Região</th>
                            {/* <th className='fw-normal fs-5' scope="col"># Responsável de Região</th> */}
                            <th className='fw-normal fs-5' scope="col">Ações</th>
                        </tr>
                    </thead>

                    <tbody className='table-group-divider'>
                        {regioes.map((item, index) => {
                            console.log(item)
                            if(!item.responsavel)
                                return (
                                    <tr key={index} className="h-5-5rem">
                                    <td className='text-start w-33'>{item.nome}</td>
                                    {/* <td className='text-center w-33'></td> */}
                                    <td className='w-33'>
                                        <button className='btn btn-outline-warning' data-bs-toggle="modal" data-bs-target={"#" + item.nome.replace(/\s+/g, "") + index}>
                                            Editar <i className='bi bi-pencil-fill' />
                                        </button>
                                        {/* <button className='btn btn-outline-danger bi bi-trash-fill ms-md-2' /> */}
                                        <ModalAssociarResponsavel idModal={item.nome.replace(/\s+/g, "") + index}/>
                                    </td>
                                </tr>
                                )
                            return (
                                <tr key={index} className="h-5-5rem">
                                    <td className='text-start w-33'>{item.nome}</td>
                                    {/* <td className='text-center w-33'>{item.responsavel}</td> */}
                                    <td className='w-33'>
                                        <button className='btn btn-outline-warning bi bi-pencil-fill' data-bs-toggle="modal" data-bs-target={"#" + item.nome.replace(/\s+/g, "") + index} />
                                        {/* <button className='btn btn-outline-danger bi bi-trash-fill ms-md-2' /> */}
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