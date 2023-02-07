import React, { useEffect, useRef, useState } from 'react';
import auth from '../../../Auth/auth.service';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CardListaRecompensas from "../../../Components/Cards/CardListaRecompensas";
import CardReservas from '../../../Components/Cards/CardReservas';
import ModalValidar from '../../../Components/Modais/ModalValidar';
import ModalNewPontoInteresse from '../../../Components/Modais/ModalNewPontoInteresse';
import CardPontoInteresse from '../../../Components/Cards/CardPontoInteresse';

const ip = process.env.REACT_APP_IP

export default function Home() {
    const [codePontoInteresse, setCodePontoInteresse] = useState("")
    const [eventos, setEventos] = useState([])
    const [pontoInteresse, setPontoInteresse] = useState([]);
    const [pontosInteresseAvaliados, setPontosInteresseAvaliados] = useState([]);


    useEffect(() => {
        axiosGetEventos();
        axiosGetPontoInteresse()
        axiosGetPontosInteresseAvaliados()
    }, [])

    async function axiosGetPontosInteresseAvaliados() {
        const url = ip + "/pi"

        let options = {
            ...auth.header(),
            params: {
                limit: 4,
                order: 'avg_avaliacao',
                direction: 'desc',
                agente_turistico_id: auth.getUser().id
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

    async function axiosGetPontoInteresse() {
        const url = ip + "/pi"
        console.log(url)

        //Só vai buscar no caso de ser um agente turistico os seus pontos de interesse
        let optionsAT = {
            ...auth.header(),
            params: {
                agente_turistico_id: auth.getUser().id,
                order: 'id'
            }
        }

        return await axios
            .get(url, optionsAT)
            .then((output) => {
                setPontoInteresse(output.data?.data ?? []);
            })
            .catch((error) => console.error(error));
    }

    async function axiosGetEventos() {
        const url = ip + "/evento"/*saber qual a rota*/

        let options = {
            ...auth.header(),
            params: {
                limit: 3,
                order: 'id'
            },
        }

        await axios
            .get(url, options)
            .then((output) => {
                setEventos(output.data?.data ?? []);
            })
            .catch((error) => console.error(error));
    }

    async function validarVoucher(code) {
        toast.dismiss()
        if (!code)
            return toast.warning("Introduza um codigo")

        const url = ip + '/voucher/resgatar/' + code

        const data = {}

        await axios
            .patch(url, data, auth.header())
            .then((output) => {
                toast.success("Voucher validado")
            }).catch((error) => { 
                toast.error(error.response.data.msg)
                console.log(error) 
            })
    }

    async function validarReserva(code) {
        toast.dismiss()
        if (!code)
            return toast.warning("Introduza um codigo")

        const url = ip + "/reserva/confirmar/" + code

        let data = {}

        console.log(url)

        await axios
            .patch(url, data, auth.header())
            .then((output) => {
                toast.success("Reserva validada")
            }).catch((error) => {
                console.log(error)
                toast.error(error.response.data.msg)
            })
    }


    return (
        <>
            <div className='row'>
                <div className='col-12 mt-2'>
                    <p className="fs-5 text-body fw-light ">Ações Rápidas</p>
                </div>

                <div className='col-12 col-md-4 '>
                    <button
                        className="btn btn-light btn-lg bg-white p-4 w-100 h-100 text-start d-flex align-items-center shadow text-break rounded-3 border-0"
                        data-bs-toggle="modal"
                        data-bs-target="#validarVoucher">
                        <i className="bi bi-cart-check fs-3 pe-3 "></i>
                        Resgatar Voucher
                    </button>

                    <ModalValidar idModal="validarVoucher" title="Validar Voucher" onSubmit={(value) => {
                        validarVoucher(value)
                    }} />
                </div>

                <div className='col-12 col-md-4'>
                    <button
                        className="btn btn-light btn-lg bg-white p-4 w-100 h-100 text-start d-flex align-items-center shadow text-break rounded-3 border-0"
                        data-bs-toggle="modal"
                        data-bs-target="#validarReserva">
                        <i className="bi bi-journal-check fs-3 pe-3"></i>
                        Confirmar Reserva
                    </button>

                    <ModalValidar idModal="validarReserva" title="Validar Reserva" onSubmit={(value) => validarReserva(value)} />
                </div>

                <div className='col-12 col-md-4'>
                    <button
                        className="btn btn-light btn-lg bg-white p-4 w-100 h-100 text-start d-flex align-items-center shadow text-break rounded-3 border-0"
                        data-bs-toggle="modal"
                        data-bs-target="#NewPontoInteresse">
                        <i className="bi bi-geo-alt fs-3 pe-3"></i>
                        Criar Ponto de Interesse
                    </button>

                    <ModalNewPontoInteresse idModal="NewPontoInteresse" />
                </div>

                <div className='col-12 mt-5'>
                    <p className="fs-5 text-body fw-light">Validar Reservas<i className="bi bi-box-arrow-up-right ps-2"></i></p>
                </div>
            </div>

            <div className='row gy-4 mt-0'>
                {eventos.map((item, index) => {
                    return (
                        <div key={index} className="col-12 col-sm-6 col-md-4">
                            <CardReservas
                                idPontoInteresse={item.ponto_interesse.id}
                                nomePontoInteresse={item.ponto_interesse.nome}
                                nomeEvento={item.nome}
                                sessao={item.sessoes}
                                lotacao={item.lotacao}
                                eventoId={item.id}
                                onChange={() => axiosGetEventos()}
                            />
                        </div>
                    )
                })}

                <div className="col-12 mt-5">
                    <p className="fs-5 text-body fw-light">Recompensas Ativas</p>
                </div>

                {pontoInteresse.map((item, index) => {
                    return ((!!item.recompensas_associadas.length && !!item.recompensas_associadas[0].recompensa) &&
                        <div key={index} className="col-12 col-sm-6 col-md-4">
                            <CardListaRecompensas
                                nomePontoInteresse={item.nome}
                                recompensas={item.recompensas_associadas}
                            />
                        </div>
                    )

                })}

                <div className='col-12 col-md-12 mt-5'>
                    <p className="fs-5 text-body fw-light">Pontos de Interesse mais bem avaliados</p>
                </div>

                {pontosInteresseAvaliados.map((item, index) => {
                    if (!!item.imagens[0]) {
                        return (
                            <div key={index} className="col-12 col-xs-12 col-sm-6 col-md-4 col-lg-3 d-flex mb-5">
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
                    }
                })}
            </div>

            <ToastContainer />
        </>
    );
}