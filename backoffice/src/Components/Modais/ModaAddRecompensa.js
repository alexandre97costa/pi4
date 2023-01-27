import React, { useEffect, useRef, useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Botao from '../Botao';
import Input from '../Input';

export default function ModalAddRecompensa(props) {
    const [nomeRecompensa, setNomeRecompensa] = useState("")
    const [numeroPontos, setNumeroPontos] = useState(0)
    const [url, setUrl] = useState("")
    const [descricao, setDescricao] = useState("")
    const [observacao, setObservacao] = useState("")

    const toastId = useRef(null)

    function dismissToast() {
        toast.dismiss(toastId.current)
    }

    function axiosPost() {
        if (!nomeRecompensa) {
            return toast.error("Introduza um nome a recompensa")
        }
        if (!descricao) {
            return toast.error("Introduza uma descrição")
        }
        if (!numeroPontos) {
            return toast.error("Introduza o número de pontos")
        }
        if (!url) {
            return toast.error("Introduza um url")
        }
        if (!observacao) {
            return toast.error("Introduza uma observação")
        }

        toast.success("Recompensa adicionada com sucesso")

        console.log(nomeRecompensa)
        console.log(numeroPontos)
        console.log(url)
    }

    useEffect(() => {
        console.log("Supostamente so 1 vez")
    }, [])

    useEffect(() => {
        console.log("Supostamente sempre")
    })

    useEffect(() => {
        console.log("Supostamente so quando o numero de pontos muda")
    }, [numeroPontos])

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

                            <Input className="input-group" id="nomeRecompensa" placeholder="Nome da Recompensa" value={nomeRecompensa} onchange={(value) => setNomeRecompensa(value.target.value)} />

                            <textarea className="form-control mt-4" placeholder="Descrição da recompensa" id="descricao" rows="3" onChange={(value) => setDescricao(value.target.value)} />

                            <Input className="input-group mt-4" type="number" id="numeroPontos" value={numeroPontos} placeholder="Número de Pontos" min="1" onchange={(value) => setNumeroPontos(value.target.value)} />

                            <Input className="input-group mt-4" id="urlImagem" placeholder="Url da imagem" onchange={(value) => setUrl(value.target.value)} />

                            <textarea className="form-control mt-4" placeholder="Observações, onde pode ser utilizada a recompensa" id="observacao" rows="3" onChange={(value) => setObservacao(value.target.value)} />

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