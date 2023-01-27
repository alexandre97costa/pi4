import React, { useEffect, useRef, useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Botao from '../Botao';

export default function TabelaEditarAgente(props) {
    const [utilizadores, setUtilizadores] = useState([])

    const toastId = useRef(null)

    const utilizador = [{
        id: 1,
        nome: "Manuel Antonio",
        localidade: "Viseu",
    }]

    function axiosGetResponsaveisRegiao() {
        //Pedido api
    }

    function axiosPost() {
        return toast.success("Agente editado com sucesso")
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
                        <th className='fw-normal fs-5' scope="col">Localidade</th>
                        <th className='fw-normal fs-5' scope="col">Ação</th>
                    </tr>
                </thead>

                <tbody className='table-group-divider'>
                    {utilizadores.map((item, index) => {
                        return (
                            <tr key={index} className="h-5-5rem">
                                <td className='text-start w-33'>{item.nome}</td>
                                <td className='w-33'>{item.localidade}</td>
                                <td className='w-33'>
                                    <Botao className="btn-primary w-100" texto="Selecionar" onClick={() => axiosPost()} />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <ToastContainer position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={false}
                theme="light" />
        </div>
    );
}