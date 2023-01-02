import React from 'react';

import ConfirmarReservas from '../../../Components/Cards/CardReservas';
import CardRecompensa from '../../../Components/Cards/CardRecompensa';
import CardDetails from '../../../Components/Cards/CardDetails';
import Carousel from '../../../Components/Carousel';
import GraficoHorizontal from '../../../Components/GraficoHorizontal';

//Imagem exemplo
import Pancakes from '../../../Assets/Images/fotoagente.jpg'
import coffe from '../../../Assets/Images/logo.png'

export default function PontoInteresseDetalhe() {
    const imagens = [{
        imagem: Pancakes
    }, {
        imagem: Pancakes
    }]

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

    const itens = [{
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

    const recompensa = [{
        title: "Açucar grátis na compra do café",
        pontos: "100 Pontos",
        imagem: coffe
    }, {
        title: "Açucar grátis na compra do café",
        pontos: "1000 Pontos",
        imagem: coffe
    }, {
        title: "Açucar grátis na compra do café",
        pontos: "10 Pontos",
        imagem: coffe
    }, {
        title: "Açucar grátis na compra do café",
        pontos: "10 Pontos",
        imagem: coffe
    }]

    const pontoInteresseDetails = [{
        categoria: 'Nome',
        informacao: 'Forninho da Mimi'
    }, {
        categoria: 'Descrição',
        informacao: 'm restaurante com 5 estrelas, melhor comida caseira do mundo'
    }, {
        categoria: 'Tipo de Interesse',
        informacao: 'Restaurante'
    }, {
        categoria: 'Avaliação',
        informacao: '4.3 (52 avaliações)'
    }]

    const borderRadius = 14

    const dias = [
        "22/12",
        "23/12",
        "24/12",
        "25/12",
    ];

    const dataVisitas = [
        "100",
        "134",
        "108",
        "85"
    ]

    const datasets = [{
        label: "Visitas",
        data: dataVisitas,
        backgroundColor: "#BACC6A",
        borderRadius: borderRadius
    }]

    function axiosGetReservas() {
        //Aqui que fazemos o pedido axios das reservas
    }

    function axiosGetRecompensas() {
        //Aqui que fazemos o pedido axios das recompensa
    }

    return (
        <>
            <div className='row gy-3'>
                <div className='col-12 mt-4 mb-3'>
                    <p className="fs-5 text-body fw-light">Vista Geral</p>
                </div>
                <div className='col-12 col-md-6'>
                    <CardDetails info={pontoInteresseDetails} />
                </div>
                <div className='col-12 col-md-6'>
                    <Carousel id="imagensPontoInteresse" imagens={imagens} />
                </div>

                <div className="col-12 mt-5 mb-3">
                    <p className="fs-5 text-body fw-light">Eventos</p>
                </div>

                {itens.map((item, index) => {
                    return (
                        <div key={index} className="col-12 col-sm-6 col-md-3">
                            <ConfirmarReservas
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

                <div className='col-12 mt-5'>
                    <p className="fs-5 text-body fw-light">Recompensas</p>
                </div>

                {recompensa.map((item, index) => {
                    return (
                        <div key={index} className='col-12 col-sm-6 col-md-3'>
                            <CardRecompensa
                                title={item.title}
                                pontos={item.pontos}
                                imagem={item.imagem}
                            />
                        </div>
                    )
                })}

                <div className='col-12 mt-5'>
                    <p className="fs-5 text-body fw-light">Número de Visitas</p>
                </div>

                <div className='col-12 col-md-10'>
                    <GraficoHorizontal datasets={datasets} data={dias} />
                </div>

            </div>
        </>
    );
}