import React, { useRef, useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CardReservas from '../../../Components/Cards/CardReservas';
import ModalValidar from '../../../Components/Modais/ModalValidar';
import GraficoHorizontal from '../../../Components/GraficoHorizontal';
import ModalNewPontoInteresse from '../../../Components/Modais/ModalNewPontoInteresse';
import BotaoDashboard from '../../../Components/BotaoDashboard';

export default function Home() {
    const [codeReserva, setCodeReserva] = useState("")
    const [codeVoucher, setCodeVoucher] = useState("")
    const [codePontoInteresse, setCodePontoInteresse] = useState("")

    const testeReserva1 = [{
        dataReserva: '20 Jan 2023',
        numeroPessoas: '2'
    }, {
        dataReserva: '20 Jan 2023',
        numeroPessoas: '5'
    }, {
        dataReserva: '20 Jan 2023',
        numeroPessoas: '13'
    }]

    const testeReserva2 = [{
        dataReserva: '20 Jan 2023',
        numeroPessoas: '3'
    }, {
        dataReserva: '20 Jan 2023',
        numeroPessoas: '5'
    }]

    const teste = [{
        nomePontoInteresse: 'Ponto de Interesse',
        nomeEvento: 'Evento X',
        dataEvento: "20 Jan 2023",
        statusReserva: "20/30",
        valueNow: '85',
        reservas: testeReserva1
    }, {
        nomePontoInteresse: 'Ponto de Interesse',
        nomeEvento: 'Evento X',
        dataEvento: "21 Jan 2023",
        statusReserva: "8/9",
        valueNow: '99',
        reservas: testeReserva2
    }]

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
        backgroundColor: "#BACC6A",
        borderRadius: borderRadius
    }]

    function determinarValeuNow(statusReserva) {
        //Calcular de forma automática a percentagem de ocupação
        const percentagem = statusReserva.split('/')
        return '10'
    }

    const toastId = useRef(null)

    function validarVoucher() {
        if(!codeVoucher)
            return toast.warning("Introduza um codigo")
        toast.success("Voucher validado")
    }

    function validarReserva() {
        if(!codeReserva)
            return toast.warning("Introduza um codigo")
        toast.success("Reserva validada")
    }

    function adicionarPontoInteresse() {
        if(!codePontoInteresse)
            return toast.warning("Introduza as informações")
        toast.success("Ponto de Interesse enviado com sucesso")
    }
    

    return (
        <>
            <div className='row'>
                <div className='col-12 mt-2'>
                    <p className="fs-5 text-body fw-light">Ações Rápidas</p>
                </div>
                <div className='col-12 col-md-3'>
                    <button className="btn btn-light btn-lg shadow text-break rounded-3" data-bs-toggle="modal" data-bs-target="#validarVoucher">Validar Voucher<i className="bi bi-cart-check ps-2"></i></button>

                    <ModalValidar idModal="validarVoucher" title="Validar Voucher" onSubmit={(value) => setCodeVoucher(value)} onClick={() => validarVoucher()} />
                </div>
                <div className='col-12 col-md-3'>
                    <button className="btn btn-light btn-lg shadow text-break rounded-3" data-bs-toggle="modal" data-bs-target="#validarReserva">Validar Reserva<i className="bi bi-journal-check ps-2"></i></button>

                    <ModalValidar idModal="validarReserva" title="Validar Reserva" onSubmit={(value) => setCodeReserva(value)} onClick={() => validarReserva()} />
                </div>
                <div className='col-12 col-md-3'>
                    <button className="btn btn-light btn-lg shadow text-break rounded-3" data-bs-toggle="modal" data-bs-target="#NewPontoInteresse">Adicionar Ponto de Interesse<i className="bi bi-journal-check ps-2"></i></button>

                    <ModalNewPontoInteresse idModal="NewPontoInteresse"/>
                </div>

                <div className='col-12 mt-5'>
                    <p className="fs-5 text-body fw-light">Confirmar Reservas<i className="bi bi-box-arrow-up-right ps-2"></i></p>
                </div>
            </div>

            <div className='row'>
                {teste.map((item, index) => {
                    return (
                        <div key={index} className="col-12 col-sm-7 col-md-5 mb-4">
                            <CardReservas
                                nomePontoInteresse={item.nomePontoInteresse}
                                nomeEvento={item.nomeEvento}
                                dataEvento={item.dataEvento}
                                statusReserva={item.statusReserva}
                                valueNow={item.valueNow}
                                reservas={item.reservas}
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