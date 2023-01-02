import React, { useEffect } from 'react';

import CardBackground from './CardBackground';
import CardVantagensConteudo from './CardVantagensConteudo';

import svgCalendario from "../Assets/svg/calendar-week.svg";

export default function CardVantagens() {
    const vantagens = [{
        cardTitulo: "Faça as suas reservas",
        cardTexto: "Faça as reservas dos pontos turísticos que lhe interessem.", imagem: svgCalendario
    }, {
        cardTitulo: "Junte e troque pontos",
        cardTexto: "Ganhe pontos e troque por reservas se forma a ser favorecido.", imagem: svgCalendario
    }, {
        cardTitulo: "Torne-se membro",
        cardTexto: "Torne-se um agente turístico e promova o seu estabelecimento.", imagem: svgCalendario
    }]

    useEffect(() => {
        console.log("Sou do load 1 vez no CardVantagens")
    }, [])

    return (
        <CardBackground>
            <div className='row'>
                {vantagens.map((item, index) => {
                    return (
                        <div key={index} className='col-12 col-md-4'>
                            <CardVantagensConteudo cardTitulo={item.cardTitulo} cardTexto={item.cardTexto} imagem={item.imagem} />
                        </div>
                    )
                })}

            </div>
        </CardBackground>
    );
}