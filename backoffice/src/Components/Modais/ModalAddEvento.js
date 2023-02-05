import React, { useEffect, useRef, useState } from 'react';
import auth from "../../Auth/auth.service";
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Input from '../Input';
import Botao from '../Botao';
import Dropdown from '../Dropdown';

const ip = process.env.REACT_APP_IP;

export default function ModalAddEvento(props) {
    const [nomeEvento, setNomeEvento] = useState("")
    const [descricao, setDescricao] = useState("")
    const [pontos, setPontos] = useState(0)
    const [vagas, setVagas] = useState(0)
    const [dataEvento, setDataEvento] = useState("")
    const [horaEvento, setHoraEvento] = useState("")
    const [horas, setHoras] = useState(0)

    const [pontoInteresse, setPontoInteresse] = useState([])
    const [selectPontoInteresse, setSelectPontoInteresse] = useState('')

    const [tipo, setTipo] = useState([])
    const [selectTipo, setSelectTipo] = useState('')

    const toastId = useRef(null)

    useEffect(() => {
        getPontosInteresseAxios()
        getTiposAxios()
    }, [])

    async function getPontosInteresseAxios() {
        const url = ip + "/pi"
        console.log(url)

        let options = {
            ...auth.header(),
            params: {
                agente_turistico_id: auth.getUser().id,
                order: 'id'
            }
        }

        await axios
            .get(url, options)
            .then((output) => {
                setPontoInteresse([...output.data?.data.map(data => data.id + ' ' + data.nome)])
            }).catch((error) => {
                if (error.response.status === 404)
                    return toast.warning(error.response.data.msg)
                console.error(error)
            })
    }

    async function getTiposAxios() {
        const url = ip + "/tipos/evento"
        console.log(url)

        await axios
            .get(url, auth.header())
            .then((output) => {
                setTipo([...output.data?.tipos_evento.map(data => data.id + ' ' + data.nome)])
            }).catch((error) => {
                console.error(error)
                if (error.response.status === 404)
                    return toast.warning(error.response.data.msg)
            })
    }

    function dismissToast() {
        toast.dismiss(toastId.current)
    }

    async function axiosPost() {
        console.log(horaEvento)
        if (!nomeEvento)
            return toast.error("Introduza um nome a recompensa")
        if (!descricao)
            return toast.error("Introduza uma descrição")
        if (!pontos)
            return toast.error("Introduza o número de pontos")
        if (!vagas)
            return toast.error("Introduza o número de vagas")
        if (!dataEvento)
            return toast.error("Introduza a data")
        if (!horaEvento)
            return toast.error("Introduza uma hora")
        if (!horas)
            return toast.error("Introduza o número de horas")
        if (!selectPontoInteresse)
            return toast.error("Selecione um ponto de interesse")
        if (!selectTipo)
            return toast.error("Selecione um tipo de evento")


        const url = ip + "/evento"
        console.log(url)

        let options = {
            nome: nomeEvento,
            descricao: descricao,
            pontos: pontos,
            vagas: vagas,
            horas_duracao: horas,
            ponto_interesse_id: selectPontoInteresse.split(' ')[0],
            tipo_evento_id: selectTipo.split(' ')[0]
        }

        await axios
            .post(url, options, auth.header())
            .then((output) => {
                console.log(output.data)
                toast.success(output.data.msg)
                props.onChange()
            }).catch((error) => {
                toast.dismiss()
                toast.warning(error.response.data.msg)
                console.error(error)
            })
    }

    return (
        <div className='row align-self-center'>
            <div className="modal fade" id={props.idModal} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Adicionar Evento</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => dismissToast()}></button>
                        </div>
                        <div className="modal-body">

                            <Input className="input-group" id="nomeEvento" label="Nome do Evento" onChange={(value) => setNomeEvento(value.target.value)} />

                            <Input className="input-group mt-4" id="dataEvento" type="date" label="Data (dd-mm-aaaa)" onChange={(value) => {
                                setDataEvento(value.target.value)
                            }} />

                            <Input className="input-group mt-4" id="horaEvento" type="time" label="Hora de inicio" onChange={(value) => {
                                setHoraEvento(value.target.value)
                            }} />

                            <Input className="input-group mt-4" type="number" id="horaEvento" label="Número de horas do evento" onChange={(value) => setHoras(value.target.value)} />

                            <Input className="input-group mt-4" type="number" id="limitePessoas" label="Número de vagas" min="1" onChange={(value) => setVagas(value.target.value)} />

                            <Input className="input-group mt-4" id="numeroPontos" type="number" label="Número de Pontos" onChange={(value) => setPontos(value.target.value)} />

                            <Dropdown items={pontoInteresse} onChange={(item, index) => setSelectPontoInteresse(item)} />

                            <Dropdown disabled="" items={tipo} onChange={(item, index) => setSelectTipo(item)} />

                            <textarea className="form-control mt-4" placeholder="Descrição" id="descricao" rows="3" onChange={(value) => setDescricao(value.target.value)} />

                        </div>
                        <div className="modal-footer">
                            <Botao className="btn-secondary" dismiss="modal" texto="Fechar" onClick={() => dismissToast()} />
                            <Botao texto="Validar" onClick={() => axiosPost()} />
                            <ToastContainer />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}