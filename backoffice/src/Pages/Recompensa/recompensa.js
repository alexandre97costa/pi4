import React, { useEffect, useState } from 'react';
import axios from 'axios';

import CardRecompensa from '../../Components/Cards/CardRecompensa';
import CardAdd from '../../Components/Cards/CardAdd';
import CardListaRecompensas from '../../Components/Cards/CardListaRecompensas';
import GraficoHorizontal from '../../Components/GraficoHorizontal';
import VisibleTo from "../../Helpers/VisibleTo";

//Imagem exemplo
import coffe from '../../Assets/Images/logo.png'

const ip = process.env.REACT_APP_IP

//array das categorias das recompensas 

export default function Recompensa() {
    const recompensas = [{
        nomeRecompensa: 'recompensa 1'
    }, {
        nomeRecompensa: 'recompensa 2'
    }, {
        nomeRecompensa: 'recompensa 3'
    }, {
        nomeRecompensa: 'recompensa 4'
    }]

    const recompensas2 = [{
        nomeRecompensa: 'recompensa 1'
    }, {
        nomeRecompensa: 'recompensa 2'
    }, {
        nomeRecompensa: 'recompensa 3'
    }]

    const teste = [{
        pontoInteresse: recompensas
    }, {
        pontoInteresse: recompensas2
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

    const borderRadius = 14

    const voucher = [
        "Desconto de 50% na Pizza",
        "Café Gratis"
    ];

    const dataVoucher = [
        "452",
        "531"
    ]

    const datasets = [{
        label: "Recompensa's",
        data: dataVoucher,
        backgroundColor: "#729d4c",
        borderRadius: borderRadius
    }]

    return (
        <div className='row gy-3'>

            <div className='col-12'>
                <p className="fs-5 text-body fw-light">Vista Geral</p>
            </div>

            {teste.map((item, index) => {
                return (
                    <div key={index} className='col-12 col-sm-6 col-md-3'>
                        <CardListaRecompensas
                            nomePontoInteresse="Nome do Ponto de Interesse"
                            recompensas={item.pontoInteresse}
                        />
                    </div>
                )
            })}

            <div className='col-12 mt-5'>
                <p className="fs-5 text-body fw-light">Recompensas</p>
            </div>

            <VisibleTo tipo='2'>
                <div className='col-12 col-md-3'>
                    <CardAdd
                        title='Adicionar Recompensa'
                        idModal='AddRecompensa'
                        nomeModal='addRecompensa'
                    />
                </div>
            </VisibleTo>


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
                <p className="fs-5 text-body fw-light">Recompensas Resgatadas</p>
            </div>

            <div className='col-12 col-md-10'>
                <GraficoHorizontal datasets={datasets} data={voucher} />
            </div>
        </div>
    )
}