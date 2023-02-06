import React, { useEffect, useState } from 'react';
import axios from "axios";
import auth from "../../../Auth/auth.service";

import BotaoDashboard from '../../../Components/BotaoDashboard';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CardPontoInteresse from '../../../Components/Cards/CardPontoInteresse';

const ip = process.env.REACT_APP_IP;

export default function Home() {
    const [pontosInteresse, setPontoInteresse] = useState([]);
    const [pontosInteresseAvaliados, setPontosInteresseAvaliados] = useState([]);

    useEffect(() => {
        axiosGetPontosInteresse()
        axiosGetPontosInteresseAvaliados()
    }, [])

    async function axiosGetPontosInteresse() {
        const url = ip + "/pi"

        let options = {
            ...auth.header(),
            params: {
                limit: 4,
                order: 'count_scans',
                direction: 'desc'
            }
        }

        await axios
            .get(url, options)
            .then((output) => {
                setPontoInteresse(output.data?.data ?? []);
            })
            .catch((error) => {
                toast.warning(error.response.data.msg)
                console.error(error)
            });
    }

    async function axiosGetPontosInteresseAvaliados() {
        const url = ip + "/pi"

        let options = {
            ...auth.header(),
            params: {
                limit: 4,
                order: 'avg_avaliacao',
                direction: 'desc'
            }
        }

        await axios
            .get(url, options)
            .then((output) => {
                setPontosInteresseAvaliados(output.data?.data ?? []);
            })
            .catch((error) => {
                toast.warning(error.response.data.msg)
                console.error(error)
            });
    }

    return (
        <>
            <div className="row row-cols-1 row-cols-md-4 gx-4 mb-5">
                <div className='col-12 col-md-12'>
                    <p className="fs-5 text-body fw-light">Ações Rápidas</p>
                </div>

                <BotaoDashboard
                    to="/utilizadores/0"
                    class="btn-light btn-lg bg-white p-4 w-100 h-100 text-start d-flex align-items-center"
                    icon="bi-person-check fs-3"
                    texto="Atribuição de Perfil" />
                <BotaoDashboard
                    to="/microsite"
                    class="btn-light btn-lg bg-white p-4 w-100 h-100 text-start d-flex align-items-center"
                    icon="bi-window-sidebar fs-3"
                    texto="Gerir Micro Site" />
                <BotaoDashboard
                    to="/regioes"
                    class="btn-light btn-lg bg-white p-4 w-100 h-100 text-start d-flex align-items-center"
                    icon="bi-map fs-3"
                    texto="Gerir Regiões" />

            </div>
            <div className="row row-cols-1 row-cols-md-4 gx-4 mb-5">

                <div className='col-12 col-md-12'>
                    <p className="fs-5 text-body fw-light">Lista de Utilizadores</p>
                </div>

                <BotaoDashboard
                    to="/utilizadores/1"
                    class="btn-light btn-lg bg-visitante text-light p-4 w-100 h-100 text-start d-flex align-items-center"
                    icon="bi-phone fs-3"
                    texto="Visitantes" />
                <BotaoDashboard
                    to="/utilizadores/2"
                    class="btn-light btn-lg bg-agente text-light p-4 w-100 h-100 text-start d-flex align-items-center"
                    icon="bi-geo-alt fs-3"
                    texto="Agentes Turísticos" />
                <BotaoDashboard
                    to="/utilizadores/3"
                    class="btn-light btn-lg bg-responsavel text-light p-4 w-100 h-100 text-start d-flex align-items-center"
                    icon="bi-map fs-3"
                    texto="Responsáveis de Região" />
                <BotaoDashboard
                    to="/utilizadores/4"
                    class="btn-light btn-lg bg-admin text-light p-4 w-100 h-100 text-start d-flex align-items-center"
                    icon="bi-globe2 fs-3"
                    texto="Administradores" />

            </div>
            <div className="row row-cols-1 row-cols-md-4 gx-4 mb-5">

                <div className='col-12 col-md-12'>
                    <p className="fs-5 text-body fw-light">Pontos de Interesse mais visitados</p>
                </div>

                {pontosInteresse.map((item, index) => {
                    return (
                        <div key={index} className="col-12 col-xs-12 col-sm-6 col-md-4 col-lg-3 d-flex">
                            <CardPontoInteresse
                                id_ponto_interesse={item.id}
                                imagem={item.imagens[0].url}
                                nome={item.nome}
                                categoria={item.tipo_interesse.nome}
                                morada={item.morada}
                                numeroScans={item.count_scans}
                                numeroFavoritos={item.avg_avaliacao}
                            />
                        </div>
                    );
                })}

                <ToastContainer />

            </div>

            <div className="row row-cols-1 row-cols-md-4 gx-4 mb-5">

                <div className='col-12 col-md-12'>
                    <p className="fs-5 text-body fw-light">Pontos de Interesse mais bem avaliados</p>
                </div>

                {pontosInteresseAvaliados.map((item, index) => {
                    return (
                        <div key={index} className="col-12 col-xs-12 col-sm-6 col-md-4 col-lg-3 d-flex">
                            <CardPontoInteresse
                                id_ponto_interesse={item.id}
                                imagem={item.imagens[0].url}
                                nome={item.nome}
                                categoria={item.tipo_interesse.nome}
                                morada={item.morada}
                                numeroScans={item.count_scans}
                                numeroFavoritos={item.avg_avaliacao}
                            />
                        </div>
                    );
                })}

                <ToastContainer />

            </div>
        </>
    );
}