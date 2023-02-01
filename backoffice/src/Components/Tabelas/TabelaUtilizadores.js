import React, { useEffect, useState } from 'react';
import axios from 'axios'
import CardForm from '../CardForm';
import ModalSelectCategoria from '../Modais/ModalSelectCategoria';
import auth from '../../Auth/auth.service';

const ip = process.env.REACT_APP_IP

export default function TabelaUtilizadores({params}) {
    const [utilizadores, setUtilizadores] = useState([])


    useEffect(() => {
        axios
            .get(ip + '/utilizador' + (params ?? ''), auth.header())
            .then(output => {
                console.log(output)
                setUtilizadores(output.data?.data ?? [])
            })
            .catch(error => console.error(error))
    }, [])

    function tipo_bg(tipo) {

        switch (tipo) {
            case 'Visitante':
                return "bg-visitante"
            case 'Agente Turístico':
                return "bg-agente"
            case 'Responsável de Região':
                return "bg-responsavel"
            case 'Administrador':
                return "bg-admin"

            default:
                return "bg-visitante"

        }
    }

    function tipo_icon(tipo) {

        switch (tipo) {
            case 'Visitante':
                return "bi-phone"
            case 'Agente Turístico':
                return "bi-geo-alt"
            case 'Responsável de Região':
                return "bi-map"
            case 'Administrador':
                return "bi-globe2"

            default:
                return "bg-visitante"

        }
    }

    function axiosDelete(index) {
        //Aqui fazemos o pedido axios pra dar delete a utilizador
    }

    return (
        <CardForm>
            <div className="table-responsive">
                <table className="table text-start align-middle">
                    <thead>
                        <tr>
                            <th className='fw-semibold' scope="col">Nome</th>
                            <th className='fw-semibold' scope="col">Tipo de Utilizador</th>
                        </tr>
                    </thead>

                    <tbody className='table-group-divider'>
                        {utilizadores.length !== 0 &&
                            utilizadores.map((item, index) => {
                                return (
                                    <tr key={index} className="">
                                        <td className='text-start w-50'>
                                            {item.nome}
                                        </td>
                                        <td className='w-50 '>
                                            <div className='d-flex gap-3 w-100'>
                                                {/* tipo */}
                                                <div className={'px-4 py-2 text-white rounded-2 flex-grow-1 d-flex align-items-center ' + tipo_bg(item.tipo_utilizador.nome)}>
                                                    <i className={'bi me-4 fs-5 text-white justify-self-start ' + tipo_icon(item.tipo_utilizador.nome)}></i>
                                                    <span className=''>
                                                        {item.tipo_utilizador.nome}
                                                    </span>
                                                </div>
                                                {/* Editar */}
                                                <button className='btn btn-outline-secondary' data-bs-toggle="modal" data-bs-target={"#" + item.nome.replace(/\s+/g, "") + index}>
                                                    <i className='bi bi-pencil-fill me-2'></i>
                                                    Mudar tipo
                                                </button>
                                                {/* Eliminar */}
                                                <button className='btn btn-outline-danger' onClick={() => axiosDelete(index)}>
                                                    <i className='bi bi-trash-fill me-2'></i>
                                                    Eliminar
                                                </button>
                                            </div>
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