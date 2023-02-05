import React, { useEffect, useState } from 'react';
import axios from 'axios';
import auth from '../../Auth/auth.service';

import CardForm from '../CardForm';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ip = process.env.REACT_APP_IP

export default function TabelaReservaEvento(props) {
    const [reservas, setReservas] = useState([])

    useEffect(() => {
        axiosGet()
    }, [])

    async function axiosGet() {
        const url = ip + '/reserva'
        let options = {
            ...auth.header(),
            params: {
                evento_id: props.eventoId,
                validado: true
            },
        }

        await axios
            .get(url, options)
            .then((output) => {
                console.log(output.data.data)
                setReservas(output.data?.data ?? [])
            }).catch((error) => {
                toast.dismiss()
                toast.warning(error.response.data.msg)
                if (error.response.status === 404)
                    return setReservas([])

                console.error(error)
            })
    }

    function axiosDelete(index) {
        //Aqui fazemos o pedido axios pra dar delete
        // console.log("Delete id: " + listaReservaEvento[index].id + " com o nome: " + listaReservaEvento[index].nomeReserva)
    }

    return (
        <CardForm>
            <div className="table-responsive">
                <table className="table text-center align-middle">
                    <thead>
                        <tr>
                            <th className='text-start fw-normal fs-5' scope="col">Nome Reserva</th>
                            <th className='fw-normal fs-5' scope="col">Nº Pessoas</th>
                            <th className='fw-normal fs-5 d-none d-md-table-cell' scope="col">Hora Chegada</th>
                            <th className='fw-normal fs-5' scope="col">Data</th>
                        </tr>
                    </thead>

                    <tbody className='table-group-divider'>
                        
                    {reservas.length > 0 ? (
                        reservas.map((item, index) => {
                            const options = { year: 'numeric', month: 'numeric', day: 'numeric' }
                            return (
                                <tr key={index} className="h-5-5rem">
                                    <td className='text-start w-20'>{item.nome}</td>
                                    <td className='w-20'>{item.pessoas}</td>
                                    <td className='w-20 d-none d-md-table-cell'>{item.sessao?.data_hora.split('T')[1].split(':')[0]}:{item.sessao?.data_hora.split('T')[1].split(':')[1]}h</td>
                                    <td className='w-20'>{new Date(item.sessao?.data_hora.split('T')[0]).toLocaleDateString(undefined, options)}</td>
                                </tr>
                            )
                        })) : (
                            <tr>
                              <div className='pt-3 text-muted fw-light fst-italic'>
                                Não existem reservas no Evento selecionado
                              </div>
                            </tr>
                          )}
                    </tbody>
                </table>
                <ToastContainer />
            </div>
        </CardForm>
    );
}