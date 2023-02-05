import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import auth from "../../Auth/auth.service";
import CardAdd from '../../Components/Cards/CardAdd';
import CardPontoInteresse from '../../Components/Cards/CardPontoInteresse';
import CardDetails from '../../Components/Cards/CardDetails';

import fotoAgente from '../../Assets/Images/fotoagente.jpg'

const ip = process.env.REACT_APP_IP;

export default function DetalhesUtilizador() {

    const [utilizadores, setUtilizadores] = useState([]);
    const { id_utilizador } = useParams();

    useEffect(() => {
        axiosGetUtilizador()
      }, []);

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

    const utilizadorDetails = [{
        categoria: 'Nome',
        informacao: 'Manuel Antonio'
    }, {
        Descrição: 'Descrição',
        informacao: 'Um agente turistico 5 estrelas'
    }, {
        categoria: 'Contacto',
        informacao: '910933857'
    } , {
        categoria: 'Email',
        informacao: 'manuel.antonio@gmail.com'
    }]

    async function axiosGetUtilizador() {
        const url = ip + "/utilizador/" + id_utilizador
    
        await axios
          .get(url, auth.header())
          .then((output) => {
            console.log(output.data.data);
            setUtilizadores(output.data?.data ?? []);
          })
          .catch((error) => console.error(error));
      }

    return (
        <>
            <div className='row gy-4'>
                <div className='col-3 d-none d-md-block'>
                    <img src={fotoAgente} className="card-img-top h-100 img-fluid rounded-4" />
                </div>

                <div className='col-12 col-md-9'>
                    <CardDetails info={utilizadorDetails} />
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
                                onClick={(value) => console.log(value)}
                            />
                        </div>
                    )
                })}
            </div>
        </>
    );
}