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
    const [pontoInteresse, setPontoInteresse] = useState([])

    useEffect(() => {
        getPontosInteresseAxios()
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

        const url = ip + "/pi"
        console.log(url)

        let options = {
            titulo: nomeRecompensa,
            descricao: descricao,
            pontos: numeroPontos,
            tipo_interesse_id: ''
        }

        await axios
            .post(url, options, auth.header())
            .then((output) => {
                console.log(output)
                toast.success("Recompensa adicionada com sucesso")
            }).catch((error) => console.error(error))
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
            }).catch((error) => console.error(error))
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

                            <Input className="input-group" id="nomeRecompensa" label="Nome da Recompensa" value={nomeRecompensa} onchange={(value) => setNomeRecompensa(value.target.value)} />

                            <textarea className="form-control mt-4" placeholder="Descrição da recompensa" id="descricao" rows="3" onChange={(value) => setDescricao(value.target.value)} />

                            <Input className="input-group mt-4" type="number" id="numeroPontos" value={numeroPontos} label="Número de Pontos" min="1" onchange={(value) => setNumeroPontos(value.target.value)} />

                            <Dropdown items={pontoInteresse} onChange={(item, index) => console.log(item)} />

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