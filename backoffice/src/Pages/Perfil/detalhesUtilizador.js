import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import auth from "../../Auth/auth.service";
import CardAdd from '../../Components/Cards/CardAdd';
import CardPontoInteresse from '../../Components/Cards/CardPontoInteresse';
import CardDetails from '../../Components/Cards/CardDetails';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import fotoAgente from '../../Assets/Images/fotoagente.jpg'

const ip = process.env.REACT_APP_IP;

export default function DetalhesUtilizador() {

    const [utilizadores, setUtilizadores] = useState([]);
    const [pontoInteresseDetails, setPontoInteresseDetails] = useState([]);
    const { id_utilizador } = useParams();
    const { id_ponto_interesse } = useParams();

    useEffect(() => {
        axiosGetUtilizador()
      }, []);

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

      async function axiosGetPontoInteresse() {
        const url = ip + "/pi/" + id_ponto_interesse
    
        await axios
          .get(url, auth.header())
          .then((output) => {
            setPontoInteresseDetails(output.data?.data ?? []);
          })
          .catch((error) => {
            toast.dismiss()
            toast.error(error.response.data.msg)
            console.error(error)
          });
      }

    return (
        <>
            <div className='row gy-4'>
                <div className='col-3 d-none d-md-block'>
                    <img src={fotoAgente} className="card-img-top h-100 img-fluid rounded-4" />
                </div>

                <div className='col-12 col-md-9'>
                    <CardDetails info={utilizadores} />
                </div>


                <div className='col-12 col-md-3'>
                    <CardAdd
                        title="Adicionar Ponto de Interesse"
                        idModal='AddPontoInteresse'
                        nomeModal='addAgenteTuristicoPontoInteresse'
                    />
                </div>

                {pontoInteresseDetails.map((item, index) => {
                    return (
                        <div key={index} className='col-12 col-md-3'>
                            <CardPontoInteresse
                                id_ponto_interesse={item.id}
                                imagem={item.imagens[0].url}
                                nome={item.nome}
                                categoria={item.tipo_interesse.nome}
                                morada={item.morada}
                                numeroScans={item.count_scans}
                                //numeroComentarios={item.tipo_interesse.observacoes}
                                numeroFavoritos={item.avg_avaliacao}
                                //numeroCheck={item.validado}
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