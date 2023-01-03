import React, { useRef, useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Input from '../Input';
import Botao from '../Botao';

export default function ModalAddEvento(props) {
    const [nomeEvento, setNomeEvento] = useState("")
    const [dataEvento, setDataEvento] = useState("")
    const [limitePessoas, setLimitePessoas] = useState(0)
    const [descricao, setDescricao] = useState("")

    const toastId = useRef(null)

    function dismissToast() {
        toast.dismiss(toastId.current)
    }

    function axiosPost() {
        if (!nomeEvento) {
            return toast.error("Introduza um nome ao evento")
        }
        if (!dataEvento) {
            return toast.error("Introduza uma data de evento")
        }
        if (!limitePessoas) {
            return toast.error("Introduza um limite de pessoas")
        }

        toast.success("Evento adicionado com sucesso")

        console.log(nomeEvento)
        console.log(dataEvento)
        console.log(limitePessoas)
        console.log(descricao)
    }

    return (    
        <div className='row align-self-center'>
            <div className="modal fade" id={props.idModal} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Adicionar Evento</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => dismissToast()}></button>
                        </div>
                        <div className="modal-body">

                            <Input className="input-group" id="nomeEvento" placeholder="Nome do Evento" onchange={(value) => setNomeEvento(value.target.value)} />

                            <Input className="input-group mt-4" id="dataEvento" placeholder="dd-mm-aaaa" pattern="^(0?[1-9]|1[0-2])[-](0?[1-9]|[12]\d|3[01])[-](19|20)\d{2}$" onchange={(value) =>{
                                const regex = /^(0?[1-9]|1[0-2])[-](0?[1-9]|[12]\d|3[01])[-](19|20)\d{2}$/
                                if(regex.test(value.target.value))
                                    setDataEvento(value.target.value)
                            }} />

                            <Input className="input-group mt-4" type="number" id="limitePessoas" placeholder="Limite de pessoas" min="1" onchange={(value) => setLimitePessoas(value.target.value)} />

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