import React from 'react';

import CardReservas from '../../../Components/Cards/CardReservas';
import ModalValidar from '../../../Components/Modais/ModalValidar';

export default function Home() {
    const testeReserva1 = [{
        dataReserva:'20 Jan 2023',
        numeroPessoas:'2'
    }, {
        dataReserva:'20 Jan 2023',
        numeroPessoas:'5'
    }, {
        dataReserva:'20 Jan 2023',
        numeroPessoas:'13'
    }]

    const testeReserva2 = [{
        dataReserva:'20 Jan 2023',
        numeroPessoas:'3'
    }, {
        dataReserva:'20 Jan 2023',
        numeroPessoas:'5'
    }]

    const teste= [{
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

    function determinarValeuNow(statusReserva) {
        //Calcular de forma automática a percentagem de ocupação
        const percentagem = statusReserva.split('/')
        return '10' 
    }

    return (
        <>
            <div className='row'>
                <div className='col-12'>
                    <p className="fs-5 text-body fw-light">Ações Rápidas</p>
                </div>
                <div className='col-4 col-md-2'>
                    <button className="btn btn-light btn-lg shadow text-break rounded-4" data-bs-toggle="modal" data-bs-target="#validarVoucher">Validar Voucher<i className="bi bi-cart-check ps-2"></i></button>

                    <ModalValidar idModal="validarVoucher" title="Validar Voucher" onClick={() => console.log("submeter")} />
                </div>
                <div className='col-4 col-md-2'>
                    <button className="btn btn-light btn-lg shadow text-break rounded-4" data-bs-toggle="modal" data-bs-target="#validarReserva">Validar Reserva<i className="bi bi-journal-check ps-2"></i></button>

                    <ModalValidar idModal="validarReserva" title="Validar Reserva" onClick={() => console.log("submeter")} />
                </div>
                <div className='col-12 mt-4'>
                    <p className="fs-5 text-body fw-light">Confirmar Reservas<i className="bi bi-box-arrow-up-right ps-2"></i></p>
                </div>
            </div>

            <div className='row'>
                {teste.map((item, index) => {
                    return(
                        <div key={index} className="col-12 col-sm-6 col-md-3">
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
        </>
    );
}