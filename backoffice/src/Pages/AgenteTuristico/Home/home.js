import React, { useEffect, useRef, useState } from 'react';
import auth from '../../../Auth/auth.service';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BotaoDashboard from '../../../Components/BotaoDashboard';

import CardReservas from '../../../Components/Cards/CardReservas';
import ModalValidar from '../../../Components/Modais/ModalValidar';
import GraficoHorizontal from '../../../Components/GraficoHorizontal';
import ModalNewPontoInteresse from '../../../Components/Modais/ModalNewPontoInteresse';

const ip = process.env.REACT_APP_IP

export default function Home() {
    const [codeReserva, setCodeReserva] = useState("")
    const [codeVoucher, setCodeVoucher] = useState("")
    const [codePontoInteresse, setCodePontoInteresse] = useState("")
    const [eventos, setEventos] = useState([])

    useEffect(() => {
        axiosGetEventos();
    }, [])

    async function axiosGetEventos() {
        const url = ip + "/evento"/*saber qual a rota*/
        console.log(url)
        console.log(auth.header())

        let options = {
            ...auth.header(),
            params: {
                limit: 3,
                order: 'id'
            },
        }

        await axios
            .get(url, options)
            .then((output) => {
                console.log(output.data.data);
                setEventos(output.data?.data ?? []);
            })
            .catch((error) => console.error(error));
    }

    const borderRadius = 14

    const pontoInteresse = [
        "Jardim das Mães",
        "Jardim dos Pais",
        "Jardim dos Filhos"
    ];

    const dataPontoInteresse = [
        "123",
        "138",
        "560"
    ]

    const datasets = [{
        label: "Ponto's de Interesse",
        data: dataPontoInteresse,
        backgroundColor: "#729d4c",
        borderRadius: borderRadius
    }]

    const toastId = useRef(null)

    function validarVoucher() {
        if (!codeVoucher)
            return toast.warning("Introduza um codigo")
        toast.success("Voucher validado")
    }

    function validarReserva() {
        if (!codeReserva)
            return toast.warning("Introduza um codigo")
        toast.success("Reserva validada")
    }

    function adicionarPontoInteresse() {
        if (!codePontoInteresse)
            return toast.warning("Introduza as informações")
        toast.success("Ponto de Interesse enviado com sucesso")
    }


    return (
        <>
            <div className='row'>
                <div className='col-12 mt-2'>
                    <p className="fs-5 text-body fw-light ">Ações Rápidas</p>
                </div>
                
                <div className='col-12 col-md-3 '>
                    <button className="btn btn-light btn-lg bg-white p-4 w-100 h-100 text-start d-flex align-items-center shadow text-break rounded-3 border-0" data-bs-toggle="modal" data-bs-target="#validarVoucher"><i className="bi bi-cart-check fs-3 pe-3 "></i> Validar Voucher</button>

                    <ModalValidar idModal="validarVoucher" title="Validar Voucher" onSubmit={(value) => setCodeVoucher(value)} onClick={() => validarVoucher()} />
                </div>

                <div className='col-12 col-md-3'>
                    <button className="btn btn-light btn-lg bg-white p-4 w-100 h-100 text-start d-flex align-items-center shadow text-break rounded-3 border-0" data-bs-toggle="modal" data-bs-target="#validarReserva"><i className="bi bi-journal-check fs-3 pe-3"></i>Validar Reserva</button>

                    <ModalValidar idModal="validarReserva" title="Validar Reserva" onSubmit={(value) => setCodeReserva(value)} onClick={() => validarReserva()} />
                </div>

                <div className='col-12 col-md-4'>
                    <button className="btn btn-light btn-lg bg-white p-4 w-100 h-100 text-start d-flex align-items-center shadow text-break rounded-3 border-0" data-bs-toggle="modal" data-bs-target="#NewPontoInteresse"><i className="bi bi-journal-check fs-3 pe-3"></i>Adicionar Ponto de Interesse</button>

                    <ModalNewPontoInteresse idModal="NewPontoInteresse" />
                </div>

                <div className='col-12 mt-5'>
                    <p className="fs-5 text-body fw-light">Confirmar Reservas<i className="bi bi-box-arrow-up-right ps-2"></i></p>
                </div>
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

            <div className='col-12 mt-5'>
                <p className="fs-5 text-body fw-light">Média de Visitas</p>
            </div>

            <div className='col-12 col-md-10'>
                <GraficoHorizontal datasets={datasets} data={pontoInteresse} />
            </div>
            <ToastContainer />
        </>
    );
}