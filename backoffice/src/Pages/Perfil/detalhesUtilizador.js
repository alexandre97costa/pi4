import React from 'react';

import CardDetail from '../../Components/Cards/CardDetails';
import CardAdd from '../../Components/Cards/CardAdd';
import CardPontoInteresse from '../../Components/Cards/CardPontoInteresse';

//Imagem exemplo
import fotoAgente from '../../Assets/Images/fotoagente.jpg'

export default function DetalhesAgenteTuristico() {
    const itens = [{
        id: 1,
        imagem: fotoAgente,
        title: "Nome do Local Turístico",
        subTitle: "Categoria",
        morada: "Morada",
        numeroScans: "10",
        numeroComentarios: "2200",
        numeroFavoritos: "1209",
        numeroCheck: "123"
    }, {
        id: 2,
        imagem: fotoAgente,
        title: "Nome do Local Turístico",
        subTitle: "Categoria",
        morada: "Morada",
        numeroScans: "1",
        numeroComentarios: "22",
        numeroFavoritos: "12",
        numeroCheck: "3"
    }]

    return (
        <>
            <div className='row'>
                <div className='col-12'>
                    <CardDetail
                        imagem={fotoAgente}
                        nome="Manuel Antonio"
                        descricao="Um agente turistico 5 estrelas"
                        contacto="910933857"
                        email="manuel.antonio@gmail.com"
                    />
                </div>

                <div className='col-12 col-md-3'>
                    <CardAdd
                        title="Adicionar Ponto de Interesse"
                        idModal='AddPontoInteresse'
                        nomeModal='addAgenteTuristicoPontoInteresse'
                    />
                </div>

                {itens.map((item, index) => {
                    return (
                        <div key={index} className='col-12 col-md-3'>
                            <CardPontoInteresse
                                id={item.id}
                                imagem={item.imagem}
                                nome={item.title}
                                categoria={item.subTitle}
                                morada={item.morada}
                                numeroScans={item.numeroScans}
                                numeroComentarios={item.numeroComentarios}
                                numeroFavoritos={item.numeroFavoritos}
                                numeroCheck={item.numeroCheck}
                                tipo="remove"
                            />
                        </div>
                    )
                })}
            </div>
        </>
    );
}