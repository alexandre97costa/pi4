import React, { useEffect, useRef, useState } from 'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Botao from '../Botao';
import auth from "../../Auth/auth.service";

const ip = process.env.REACT_APP_IP;

export default function TabelaEditarAgente(props) {
    const [utilizadores, setUtilizadores] = useState([])

    useEffect(() => {
        axiosGetResponsaveisRegiao()
    }, [])

    function axiosGetResponsaveisRegiao() {
        //Pedido api
        const url = ip + "/utilizador"
        console.log(url)

        let options = {
            ...auth.header(),
            params: {
                tipo_utilizador_id: 2
            }
        }

        axios
          .get(url, options)
          .then((output) => {
            console.log(output.data);
            setUtilizadores(output.data?.data ?? []);
          })
          .catch((error) => {
            toast.dismiss()
            toast.warning(error.response.data.msg)
            console.error(error)
          });
    }

    async function axiosPost(item) {
        const url = ip + '/pi/' + props.pontoInteresseId + '/agente/' + item.id
        console.log(url)

        await axios
            .patch(url, {}, auth.header())
            .then((output) => {
                toast.dismiss()
                console.log(output)
                return toast.success("Agente editado com sucesso")
            }).catch((error) => {
                toast.dismiss()
                toast.error(error.response.data.msg)
                console.log(error)
            })
    }

    return (
        <div className="table-responsive">
            <table className="table text-center align-middle">
                <thead>
                    <tr>
                        <th className='text-start fw-normal fs-5' scope="col">Nome</th>
                        <th className='fw-normal fs-5' scope="col">Ação</th>
                    </tr>
                </thead>

                <tbody className='table-group-divider'>
                    {utilizadores.map((item, index) => {
                        return (
                            <tr key={index} className="h-5-5rem">
                                <td className='text-start w-33'>{item.nome}</td>
                                <td className='w-33'>
                                    <Botao className="btn-primary w-100" texto="Selecionar" onClick={() => axiosPost(item)} />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <ToastContainer />
        </div>
    );
}