import React, { useEffect, useState } from 'react';
import axios from 'axios'
import CardForm from '../CardForm';
import ModalSelectCategoria from '../Modais/ModalSelectCategoria';
import auth from '../../Auth/auth.service';

const ip = process.env.REACT_APP_IP

export default function TabelaUtilizadores(props) {
    const [utilizadores, setUtilizadores] = useState([])


    useEffect(() => {
        axios
            .get(ip + '/utilizador', auth.header())
            .then(output => {
                console.log(output)
                setUtilizadores(output.data?.data ?? [])
            })
            .catch(error => console.error(error))
    }, [])

    function changeClassCategoria(tipoUtilizador) {
        if (tipoUtilizador === 'Visitante')
            return "p-2 text-white w-50 me-auto ms-auto rounded-2 bg-visitante"
        if (tipoUtilizador === 'Responsável de Região')
            return "p-2 text-white w-50 me-auto ms-auto rounded-2 bg-responsavel"

        return "p-2 text-white w-50 me-auto ms-auto rounded-2 bg-agente"
    }

    function axiosDelete(index) {
        //Aqui fazemos o pedido axios pra dar delete a utilizador
    }

    return (
        <CardForm>
            <div className="table-responsive">
                <table className="table text-center align-middle">
                    <thead>
                        <tr>
                            <th className='text-start fw-normal fs-5' scope="col">Nome</th>
                            <th className='fw-normal fs-5' scope="col">Categoria</th>
                            <th className='fw-normal fs-5' scope="col">Ações</th>
                        </tr>
                    </thead>

                    <tbody className='table-group-divider'>
                        {utilizadores.length !== 0 &&
                            utilizadores.map((item, index) => {
                            return (
                                <tr key={index} className="">
                                    <td className='text-start w-33'>{item.nome}</td>
                                    <td className='w-33'>
                                        <div className={changeClassCategoria(item.tipo_utilizador.nome)}>{item.tipo_utilizador.nome}</div>
                                    </td>
                                    <td className='w-33'>
                                        <button className='btn btn-outline-warning bi bi-pencil-fill' data-bs-toggle="modal" data-bs-target={"#" + item.nome.replace(/\s+/g, "") + index} />
                                        <button className='btn btn-outline-danger bi bi-trash-fill ms-md-2' onClick={() => axiosDelete(index)} />
                                        <ModalSelectCategoria idModal={item.nome.replace(/\s+/g, "") + index} nome={item.nome} regiao={item.regiao} id={item.id} />
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