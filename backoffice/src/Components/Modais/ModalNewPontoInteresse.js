import React, { useEffect, useRef, useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Botao from '../Botao';
import Input from '../Input';

export default function ModalNewPontoInteresse(props) {
    const [nome, setNome] = useState("")
    const [localizacao, setLocalizacao] = useState("")
    const [cp, setCP] = useState("")
    const [contacto, setContacto] = useState("")
    const [pontos, setPontos] = useState("")
    const [descricao, setDescricao] = useState("")
    const [tipo, setTipo] = useState(0)
    const [baseDadosTipo, setBaseDadosTipo] = useState([])

    const toastId = useRef(null)

    const TiposPontoInteresse = [{
        id: 0,
        nome: 'Tipo do Ponto de Interesse'
    }, {
        id: 1,
        nome: 'Restaurante'
    }, {
        id: 2,
        nome: 'Museu'
    }]

    useEffect(() => {
        console.log("Passei aqui")
        setBaseDadosTipo(TiposPontoInteresse)
    }, [])

    function axiosPostPontoInteresse() {
        //Aqui fazemos o post na api
    }

    function axiosGetTiposPontoInteresse() {
        //Aqui fazemos o pedido api para sabermos quais pontos de interesse existem
    }

    function dismissToast() {
        toast.dismiss(toastId.current)
    }

    function axiosPost() {
        if(!nome)
            return toast.error("Introduza um nome")
        if(!localizacao)
            return toast.error("Introduza uma localização")
        if(!cp)
            return toast.error("Introduza um código postal")
        if(!contacto)
            return toast.error("Introduza um contacto")
        if(!pontos)
            return toast.error("Introduza o número de pontos")
        if(!tipo)
            return toast.error("Selecione um tipo de interesse")

        toast.success("Ponto de Interesse adicionado com sucesso")
    }

    return (
        <>
            <div className="modal fade" id={props.idModal} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Adicionar ponto de interesse</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => dismissToast()}></button>
                        </div>
                        <div className="modal-body">
                            <div className="card border border-0 mb-3 p-0">
                                <Input className="input-group" id="nomePontoInteresse" placeholder="Nome" onchange={(value) => setNome(value.target.value)} />

                                <Input className="input-group mt-4" id="localizacao" placeholder="Morada" onchange={(value) => setLocalizacao(value.target.value)} />

                                <Input className="input-group mt-4" id="codigoPostal" placeholder="Código Postal" onchange={(value) => setCP(value.target.value)} />

                                <Input className="input-group mt-4" id="contacto" placeholder="Contacto" onchange={(value) => setContacto(value.target.value)} />

                                <Input className="input-group mt-4" id="numeroPontos" placeholder="Número de Pontos" onchange={(value) => setPontos(value.target.value)} />

                                <textarea className="form-control mt-4" placeholder="Descrição" id="descricao" rows="3" onChange={(value) => setDescricao(value.target.value)} />

                                <select className="form-select mt-4" value={tipo} onChange={(value) => setTipo(value.target.value)}>
                                    {baseDadosTipo.map((item, index) => {
                                        return (  
                                            <option key={index} value={item.id}>{item.nome}</option>
                                        )
                                    })}
                                </select>

                            </div>
                        </div>
                        <div className="modal-footer">
                            <Botao className="btn-secondary" dismiss="modal" texto="Fechar" onClick={() => dismissToast()} />
                            <Botao texto="Validar" onClick={() => axiosPost()} />

                            <ToastContainer />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

