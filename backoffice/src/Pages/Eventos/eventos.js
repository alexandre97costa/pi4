import React, { useEffect, useState } from 'react';
import axios from 'axios'
import auth from '../../Auth/auth.service';

import CardReservas from '../../Components/Cards/CardReservas';
import ModalAddEvento from '../../Components/Modais/ModalAddEvento'
import VisibleTo from '../../Helpers/VisibleTo';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ip = process.env.REACT_APP_IP

export default function Eventos() {
    const [eventos, setEventos] = useState([])

    useEffect(() => {
        axiosGetEventos();
    }, []);

    async function axiosGetEventos() {
        const url = ip + "/evento"/*saber qual a rota*/
        console.log("foi buscar")
        let options = {
            ...auth.header(),
            params: {},
        }

        await axios
            .get(url, options)
            .then((output) => {
                console.log(output.data.data);
                setEventos(output.data?.data ?? []);
            })
            .catch((error) => {
                toast.dismiss()
                toast.warning(error.response.data.msg)
                console.error(error)
            });
    }

    return (
        <div className='row mb-4'>
            <VisibleTo tipo="2">
                <div className='col-12 mt-2'>
                    <p className="fs-5 text-body fw-light">Ações Rápidas</p>
                </div>

                <div className='col-12 col-md-3'>
                    <button className="btn btn-light btn-lg shadow text-break rounded-3 mb-5" data-bs-toggle="modal" data-bs-target="#NewEvento">Adicionar Evento<i className="bi bi-journal-check ps-2"></i></button>

                    <ModalAddEvento idModal="NewEvento" onChange={() => axiosGetEventos()} />
                </div>
            </VisibleTo>


            <div className='col-12'>
                <p className="fs-5 text-body fw-light mb-0">Vista Geral</p>
            </div>

            <div className='row gy-4 mt-0'>
                {eventos.map((item, index) => {
                    return (
                        <div key={index} className="col-12 col-sm-6 col-md-4">
                            <CardReservas
                                nomePontoInteresse={item.ponto_interesse.nome}
                                nomeEvento={item.nome}
                                sessao={item.sessoes}
                                lotacao={item.lotacao}
                                eventoId={item.id}
                                onChange={() => axiosGetEventos()}
                            />
                        </div>
                    )
                })}
            </div>
            <ToastContainer />
        </div>
    )
}