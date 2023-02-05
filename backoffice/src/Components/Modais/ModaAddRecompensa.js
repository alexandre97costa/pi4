import React, { useEffect, useRef, useState } from 'react';
import auth from "../../Auth/auth.service";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Botao from '../Botao';
import Input from '../Input';
import axios from 'axios';
import Dropdown from '../Dropdown';

const ip = process.env.REACT_APP_IP;

export default function ModalAddRecompensa(props) {
    const [nomeRecompensa, setNomeRecompensa] = useState("")
    const [numeroPontos, setNumeroPontos] = useState(0)
    const [descricao, setDescricao] = useState("")

    const [tipo, setTipo] = useState([])
    const [selectTipo, setSelectTipo] = useState('')

    const [pontoInteresse, setPontoInteresse] = useState([])
    const [selectPontoInteresse, setSelectPontoInteresse] = useState('')

    useEffect(() => {
        getPontosInteresseAxios()
        getTiposAxios()
    }, [])

    const toastId = useRef(null)

    function dismissToast() {
        toast.dismiss(toastId.current)
    }

    async function axiosPost() {
        if (!nomeRecompensa) {
            return toast.error("Introduza um nome a recompensa")
        }
        if (!descricao) {
            return toast.error("Introduza uma descrição")
        }
        if (!numeroPontos) {
            return toast.error("Introduza o número de pontos")
        }
        if (!selectPontoInteresse) {
            return toast.error("Introduza o Ponto de Interesse")
        }

        const url = ip + "/recompensa"
        console.log(url)

        let options = {
            titulo: nomeRecompensa,
            descricao: descricao,
            pontos: numeroPontos,
            tipo_interesse_id: selectTipo.split(' ')[0],
            // ponto_interesse_id: selectPontoInteresse.split(' ')[0]
        }

        await axios
            .post(url, options, auth.header())
            .then((output) => {
                console.log(output)
                toast.success("Recompensa adicionada com sucesso")
            }).catch((error) => {
                toast.dismiss()

                toast.warning(error.response.data.msg)
                console.error(error)
            })
    }

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
        const url = ip + "/tipos/pi"
        console.log(url)

        await axios
            .get(url, auth.header())
            .then((output) => {
                setTipo([...output.data?.tipos_interesse.map(data => data.id + ' ' + data.nome)])
            }).catch((error) => {
                console.error(error)
                if (error.response.status === 404)
                    return toast.warning(error.response.data.msg)
            })
    }

    return (
        <div className='row align-self-center'>
            <div className="modal fade" id={props.idModal} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Adicionar Recompensa</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => dismissToast()}></button>
                        </div>
                        <div className="modal-body">

                            <Input className="input-group" id="nomeRecompensa" label="Nome da Recompensa" value={nomeRecompensa} onChange={(value) => setNomeRecompensa(value.target.value)} />

                            <textarea className="form-control mt-4" placeholder="Descrição da recompensa" id="descricao" rows="3" onChange={(value) => setDescricao(value.target.value)} />

                            <Input className="input-group mt-4" type="number" id="numeroPontos" value={numeroPontos} label="Número de Pontos" min="1" onChange={(value) => setNumeroPontos(value.target.value)} />

                            <Dropdown items={pontoInteresse} onChange={(item, index) => setSelectPontoInteresse(item)} />

                            <Dropdown items={tipo} onChange={(item, index) => setSelectTipo(item)} />

                        </div>
                        <div className="modal-footer">
                            <Botao className="btn-secondary" dismiss="modal" texto="Fechar" onClick={() => dismissToast()} />
                            <Botao texto="Enviar" onClick={() => axiosPost()} />
                            <ToastContainer />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}