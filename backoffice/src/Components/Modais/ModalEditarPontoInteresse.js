import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import auth from '../../Auth/auth.service'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Botao from '../Botao';
import Input from '../Input';
import Dropdown from '../Dropdown';

const ip = process.env.REACT_APP_IP;

export default function ModalNewPontoInteresse(props) {
    const [nome, setNome] = useState("")
    const [descricao, setDescricao] = useState("")
    const [morada, setMorada] = useState("")
    const [codigoPostal, setCodigoPostal] = useState("")
    const [contacto, setContacto] = useState("")
    const [pontos, setPontos] = useState(0)

    const [selectTipo, setSelectTipo] = useState('')
    const [tipos, setTipos] = useState([])

    const toastId = useRef(null)

    useEffect(() => {
        fakeAxiosPostPontoInteresse()
        axiosGetTiposPontoInteresse()
    }, [props.pontoInteresse])

    function fakeAxiosPostPontoInteresse() {
        console.log(props.pontoInteresse)
        setNome(props.pontoInteresse?.nome)
        setDescricao(props.pontoInteresse?.descricao)
        setMorada(props.pontoInteresse?.morada)
        setCodigoPostal(props.pontoInteresse?.codigo_postal)
        setContacto(props.pontoInteresse?.telemovel)
        setSelectTipo(props.pontoInteresse?.tipo_interesse?.id + ' ' + props.pontoInteresse?.tipo_interesse?.nome)
    }

    async function axiosGetTiposPontoInteresse() {
        const url = ip + "/tipos/pi"

        await axios
            .get(url, auth.header())
            .then((output) => {
                setTipos([selectTipo, ...output.data.tipos_interesse.map(t => t.id + ' ' + t.nome)])
            })
            .catch((error) => {
                toast.error(error.response.data.msg)
                console.error(error)
            });
    }



    function dismissToast() {
        toast.dismiss(toastId.current)
    }

    function axiosPost() {
        if (nome === '')
            return toast.error("Introduza nome ao Ponto de Interesse")
        if (descricao === '')
            return toast.error("Introduza uma descrição ao Ponto de Interesse")
        if (morada === '')
            return toast.error("Introduza a morada ao Ponto de Interesse")
        if (codigoPostal === '')
            return toast.error("Introduza o codigo postal ao Ponto de Interesse")
        if (contacto === '')
            return toast.error("Introduza contacto ao Ponto de Interesse")
        if (selectTipo === '')
            return toast.error("Selecione um tipo")

        toast.success("Ponto de Interesse adicionado com sucesso")
        console.log(props.idPontoInteresse)
    }

    return (
        <>
            <div className="modal fade" id={props.idModal} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Editar ponto de interesse</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => dismissToast()}></button>
                        </div>
                        <div className="modal-body">
                            <div className="card border border-0 mb-3 p-0">
                                <Input className="input-group" id="nomePontoInteresse" label="Nome" value={nome} onChange={(value) => setNome(value.target.value)} />

                                <Input className="input-group mt-4" id="morada" label="Morada" value={morada} onchange={(value) => setMorada(value.target.value)} />

                                <Input className="input-group mt-4" id="codigoPostal" label="Código Postal" value={codigoPostal} onChange={(value) => setCodigoPostal(value.target.value)} />

                                <Input className="input-group mt-4" id="contacto" type="number" label="Contacto" value={contacto} onChange={(value) => setContacto(value.target.value)} />

                                <Input className="input-group mt-4" id="numeroPontos" type="number" value={pontos} label="Número de Pontos" onChange={(value) => setPontos(value.target.value)} />

                                <textarea className="form-control my-4" placeholder="Descrição" id="descricao" rows="3" defaultValue={descricao} onChange={(value) => setDescricao(value.target.value)} />

                                <Dropdown items={tipos} onChange={(item, index) => console.log(item)} />

                                {/* <select className="form-select mt-4" value={tipo} onChange={(value) => setTipo(value.target.value)}>
                                    {baseDadosTipo.map((item, index) => {
                                        return (  
                                            <option key={index} value={item.id}>{item.nome}</option>
                                        )
                                    })}
                                </select> */}

                            </div>
                        </div>
                        <div className="modal-footer">
                            <Botao className="btn-secondary" dismiss="modal" texto="Fechar" onClick={() => dismissToast()} />
                            <Botao texto="Enviar" onClick={() => axiosPost()} />

                            <ToastContainer />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

