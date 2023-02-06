import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import auth from '../../Auth/auth.service'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Botao from '../Botao';
import DropdownSelect from '../DropdownSelect';
import Input from '../Input';

const ip = process.env.REACT_APP_IP;

export default function ModalNewPontoInteresse(props) {
    const [nome, setNome] = useState("")
    const [descricao, setDescricao] = useState("")
    const [morada, setMorada] = useState("")
    const [codigoPostal, setCodigoPostal] = useState("")
    const [contacto, setContacto] = useState("")
    const [url, setUrl] = useState("")
    const [pontos, setPontos] = useState(0)

    const [selectTipo, setSelectTipo] = useState('')
    const [tipos, setTipos] = useState([])

    const [distritos, setDistritos] = useState([])
    const [selectedDistrito, setSelectDistrito] = useState('')

    const [municipios, setMunicipios] = useState([])
    const [selectedMunicipio, setSelectMunicipo] = useState('')

    const [freguesias, setFreguesias] = useState([])
    const [selectedFreguesia, setSelectFreguesia] = useState('')


    const toastId = useRef(null)

    useEffect(() => {
        getDistritos()
        getTipos()
    }, [])

    async function getDistritos() {
        const url = ip + '/local/distrito'

        await axios
            .get(url, auth.header())
            .then(output => {
                setDistritos(
                    output.data?.distritos.map(distrito => {
                        return {
                            label: distrito.nome,
                            value: distrito.id
                        }
                    }) ?? [])
            })
            .catch(error => console.log(error))
    }

    async function getMunicipios(item) {
        const url = ip + '/local/municipio'

        const options = {
            ...auth.header(),
            params: { distrito_id: item }
        }

        await axios
            .get(url, options)
            .then(output => {
                setMunicipios(
                    output.data?.municipios.map(municipio => {
                        return {
                            label: municipio.nome,
                            value: municipio.id
                        }
                    }) ?? [])
            })
            .catch(error => console.log(error))
    }

    async function getFreguesias(item) {
        const url = ip + '/local/freguesia'

        const options = {
            ...auth.header(),
            params: { municipio_id: item }
        }

        await axios
            .get(url, options)
            .then(output => {
                setFreguesias(
                    output.data?.freguesias.map(freguesia => {
                        return {
                            label: freguesia.nome,
                            value: freguesia.id
                        }
                    }) ?? [])
            })
            .catch(error => console.log(error))
    }

    async function getTipos() {
        const url = ip + '/tipos/pi'

        await axios
            .get(url, auth.header())
            .then(output => {
                setTipos(
                    output.data?.tipos_interesse.map(tipo => {
                        return {
                            label: tipo.nome,
                            value: tipo.id
                        }
                    }) ?? [])
            })
            .catch(error => console.log(error))
    }

    function dismissToast() {
        toast.dismiss(toastId.current)
    }

    async function axiosPost() {
        if (!nome)
            return toast.error("Introduza um nome")
        if (!morada)
            return toast.error("Introduza uma localização")
        if (!codigoPostal)
            return toast.error("Introduza um código postal")
        if (!contacto)
            return toast.error("Introduza um contacto")
        if (!pontos)
            return toast.error("Introduza o número de pontos")
        if (!url)
            return toast.error("Introduza uma imagem do ponto")
        if (!selectTipo)
            return toast.error("Selecione um tipo de interesse")

        const baseUrl = ip + '/pi'

        const data = {
            nome: nome,
            descricao: descricao,
            morada: morada,
            codigo_postal: codigoPostal,
            telemovel: contacto,
            pontos: pontos,
            freguesia_id: selectedFreguesia,
            tipo_interesse_id: selectTipo,
            url_imagem: url
        }

        await axios
            .post(baseUrl, data, auth.header())
            .then((output) => {
                toast.success("Ponto de Interesse adicionado com sucesso")
                console.log(output.data)
                props.onSubmit()
            }).catch((error) => console.log(error))
    }

    return (
        <>
            <div className="modal fade" id={props.idModal} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable">
                    <form className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Adicionar ponto de interesse</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => dismissToast()}></button>
                        </div>
                        <div className="modal-body">
                            <div className="card border border-0 mb-3 p-0">
                                <Input
                                    className="input-group mb-4"
                                    id="nomePontoInteresse"
                                    label="Nome"
                                    onChange={(value) => setNome(value.target.value)}
                                />
                                <DropdownSelect
                                    items={tipos}
                                    label="Selecione um tipo interesse"
                                    onChange={value => {
                                        if (!!value) {
                                            setSelectTipo(value)
                                        }
                                    }}
                                />
                                <Input
                                    className="input-group mt-3"
                                    id="localizacao"
                                    label="Morada"
                                    onChange={(value) => {
                                        setMorada(value.target.value)
                                    }}
                                />
                                <Input
                                    className="input-group mt-4"
                                    id="codigoPostal"
                                    label="Código Postal"
                                    onChange={(value) => {
                                        const regex = /^\d{4}-\d{3}?$/

                                        if (!!String(value.target.value).match(regex))
                                            setCodigoPostal(value.target.value)

                                        if (!String(value.target.value).match(regex))
                                            setCodigoPostal('')
                                    }}
                                />
                                <Input
                                    className="input-group mt-4"
                                    id="contacto"
                                    label="Contacto"
                                    onChange={(value) => {
                                        const regex = /^[0-9]{9}$/

                                        if (!!String(value.target.value).match(regex))
                                            setContacto(value.target.value)

                                        if (!String(value.target.value).match(regex))
                                            setContacto('')
                                    }}
                                />
                                <Input
                                    className="input-group mt-4"
                                    id="numeroPontos"
                                    type="number"
                                    label="Número de Pontos"
                                    onChange={(value) => {
                                        if (value.target.value <= 0) {
                                            setPontos(0)
                                            toast.warning('Os pontos não podem negativos ou 0')
                                        }

                                        const regex = /^-?\d+$/

                                        if(value.target.value > 0)
                                            if (!!String(value.target.value).match(regex))
                                                setPontos(value.target.value)
                                            else {
                                                setPontos('')
                                                toast.warning('Os pontos não podem ser decimais')
                                            }
                                    }}
                                />
                                <Input
                                    className="input-group mt-4"
                                    id="urlImagem"
                                    label="Url da imagem"
                                    onChange={(value) => {
                                        const regex = /(?:(?:https?:\/\/))[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b(?:[-a-zA-Z0-9@:%_\+.~#?&\/=]*(\.jpg|\.png|\.jpeg))/

                                        if (!!String(value.target.value).match(regex))
                                            setUrl(value.target.value)

                                        if (!String(value.target.value).match(regex))
                                            setUrl('')
                                    }} />
                                <textarea
                                    className="form-control my-4"
                                    placeholder="Descrição do Ponto de Interesse"
                                    id="descricao"
                                    rows="3"
                                    onChange={(value) => setDescricao(value.target.value)}
                                />

                                <DropdownSelect
                                    items={distritos}
                                    // selectedValue={3}
                                    label="Selecione um distrito"
                                    onChange={value => {
                                        if (!!value) {
                                            setSelectDistrito(value)
                                            getMunicipios(value)
                                        }
                                    }} />

                                <DropdownSelect
                                    items={municipios}
                                    label="Selecione um município"
                                    disabled={!selectedDistrito}
                                    onChange={value => {
                                        if (!!value) {
                                            setSelectMunicipo(value)
                                            getFreguesias(value)
                                        }
                                    }} />

                                <DropdownSelect
                                    items={freguesias}
                                    label="Selecione um freguesia"
                                    disabled={!selectedMunicipio}
                                    onChange={value => {
                                        setSelectFreguesia(value)
                                    }} />

                            </div>
                        </div>
                        <div className="modal-footer">
                            <Botao className="btn-secondary" dismiss="modal" texto="Fechar" onClick={() => dismissToast()} />
                            <Botao texto="Enviar" onClick={() => {
                                axiosPost()
                            }} />

                            <ToastContainer />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

