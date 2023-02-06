import React, { useEffect, useState } from 'react';
import axios from "axios";
import auth from '../../Auth/auth.service';

import Botao from '../Botao';
import CardForm from '../CardForm';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ip = process.env.REACT_APP_IP;

export default function TabelaListaRecompensas(props) {
    const [listaRecompensas, setListaRecompensas] = useState([])

    useEffect(() => {
        if (props.tipoTabela === 'validar')
            axiosGetRecompensasPorValidar()
        if (!props.tipoTabela)
            axiosGetRecompensas()
    }, [props.tipo_id])

    async function axiosGetRecompensas() {
        const url = ip + "/recompensa"
        console.log("axiosGetRecompensas: " + url)

        let options = {
            ...auth.header(),
            params: {
                tipo_interesse_id: props.tipo_id,
                limit: props.limit
            }
        }

        await axios
            .get(url, options)
            .then((output) => {
                console.log(output.data.data)
                setListaRecompensas(output.data?.data ?? []);
            })
            .catch((error) => {
                if (error.response.status === 404) {
                    toast.warning(error.response.data.msg)
                    return setListaRecompensas([])
                }
                console.error(error)
            });
    }

    async function axiosGetRecompensasPorValidar() {
        const url = ip + "/recompensa"
        console.log("axiosGetRecompensasPorValidar: " + url)

        let options = {
            ...auth.header(),
            params: {
                validado: false,
                tipo_interesse_id: props.tipo_id
            }
        }

        await axios
            .get(url, options)
            .then((output) => {
                console.log(output.data.data)
                setListaRecompensas(output.data?.data ?? []);
            })
            .catch((error) => {
                if (error.response.status === 404) {
                    toast.warning(error.response.data.msg)
                    return setListaRecompensas([])
                }
                console.error(error)
            });
    }

    async function axiosDelete(index) {
        const url = ip + "/recompensa/" + index
        console.log(url)

        await axios
            .delete(url, auth.header())
            .then((output) => {
                toast.success(output.data.msg)
                axiosGetRecompensasPorValidar()
            })
            .catch((error) => {
                toast.error(error.response.data.msg)
                console.error(error)
            });
    }

    async function axiosInValidar(index) {
        const url = ip + "/recompensa/" + index
        console.log(url)

        const data = {
            validado: false
        }

        await axios
            .patch(url, data, auth.header())
            .then((output) => {
                toast.success(output.data.msg)
                axiosGetRecompensas()
            })
            .catch((error) => {
                toast.error(error.response.data.msg)
                console.error(error)
            });
    }

    async function axiosValidar(index) {
        const url = ip + "/recompensa/" + index
        console.log(url)

        const data = {
            validado: true
        }

        await axios
            .patch(url, data, auth.header())
            .then((output) => {
                toast.success(output.data.msg)
                axiosGetRecompensasPorValidar()
            })
            .catch((error) => {
                toast.error(error.response.data.msg)
                console.error(error)
            });
    }

    return (
        <CardForm>
            <div className="table-responsive">
                <table className="table text-center align-middle">
                    <thead>
                        <tr>
                            <th className='text-start fw-normal fs-5' scope="col"># Recompensa</th>
                            <th className='fw-normal fs-5 d-none d-md-table-cell' scope="col">Tipo de Recompensa</th>
                            <th className='fw-normal fs-5' scope="col">Pontos</th>
                            <th className='fw-normal fs-5' scope="col">Ações</th>
                        </tr>
                    </thead>

                    <tbody className='table-group-divider'>
                        {listaRecompensas.map((item, index) => {
                            if (props.tipoTabela === 'validar')
                                return (
                                    <tr key={index} className="h-5-5rem">
                                        <td className='text-start w-20'>{item.titulo}</td>
                                        <td className='w-20 d-none d-md-table-cell'>{item.tipo_interesse.nome}</td>
                                        <td className='w-20'>{item.pontos}</td>
                                        <td className='w-20'>
                                            <Botao className="btn-outline-primary bi bi-check-lg" onClick={() => axiosValidar(item.id)} />
                                            <Botao className="btn-outline-danger bi bi-trash-fill ms-md-2" onClick={() => axiosDelete(item.id)} />
                                        </td>
                                    </tr>
                                )

                            return (
                                <tr key={index} className="h-5-5rem">
                                    <td className='text-start w-20'>{item.titulo}</td>
                                    <td className='w-20 d-none d-md-table-cell'>{item.tipo_interesse.nome}</td>
                                    <td className='w-20'>{item.pontos}</td>
                                    <td className='w-20'>
                                        <Botao className="btn-outline-danger bi bi-trash-fill ms-md-2" onClick={() => axiosInValidar(item.id)} />
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <ToastContainer />
            </div>
        </CardForm>
    );
}