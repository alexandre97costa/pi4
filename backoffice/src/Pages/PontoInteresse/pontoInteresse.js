import React from 'react';

import CardPontoInteresse from '../../Components/Cards/CardPontoInteresse';
import CardAdd from '../../Components/Cards/CardAdd';

//imagem exemplo
import jardimMaes from '../../Assets/Images/jardimMaes.jpg'

export default function PontoInteresse(props) {
    const itens = [{
        id: 1,
        imagem: jardimMaes,
        title: "Nome do Local Turístico",
        subTitle: "Categoria",
        morada: "Morada",
        numeroScans: "10",
        numeroComentarios: "2200",
        numeroFavoritos: "1209",
        numeroCheck: "123"
    }, {
        id: 2,
        imagem: jardimMaes,
        title: "Nome do Local Turístico",
        subTitle: "Categoria",
        morada: "Morada",
        numeroScans: "1",
        numeroComentarios: "22",
        numeroFavoritos: "12",
        numeroCheck: "3"
    }]

    function tipoUtilizador() {
        if(props.tipoUtilizador === 'Agente Turistico')
        return (
            <div className='col-6 col-md-3'>
                <CardAdd
                    title="Adicionar Ponto de Interesse"
                    idModal='AddPontoInteresse'
                    nomeModal="newPontoInteresse"
                />
            </div>
        )
    }

    function axiosGetPontosInteresse() {
        //Aqui que fazemos o pedido axios dos pontos de interesse
    }

    return (
        <>
            <div className='row'>
                { tipoUtilizador() }

                {itens.map((item, index) => {
                    return (
                        <div key={index} className='col-12 col-md-3'>
                            <CardPontoInteresse
                                imagem={item.imagem}
                                nome={item.title}
                                categoria={item.subTitle}
                                morada={item.morada}
                                numeroScans={item.numeroScans}
                                numeroComentarios={item.numeroComentarios}
                                numeroFavoritos={item.numeroFavoritos}
                                numeroCheck={item.numeroCheck}
                            />
                        </div>
                    )
                })}
            </div>
        </>
    )
}