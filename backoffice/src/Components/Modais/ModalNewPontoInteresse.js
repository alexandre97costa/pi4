import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import auth from '../../Auth/auth.service'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Botao from '../Botao';
import Dropdown from '../Dropdown';
import DropdownSelect from '../DropdownSelect';
import Input from '../Input';

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

    const [distritos, setDistritos] = useState([])
    const [selectedDistrito, setSelectDistrito] = useState('')

    const [municipios, setMunicipios] = useState([])
    const [selectedMunicipio, setSelectMunicipo] = useState('')

    const [freguesias, setFreguesias] = useState([])
    const [selectedFreguesia, setSelectFreguesia] = useState('')


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
        getDistritos()
    }, [])

    useEffect(() => {
        console.log(selectedDistrito)
    }, [selectedDistrito])

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
            .then(output => { setMunicipios([...output.data?.municipios.map(data => data.id + ' ' + data.nome)]) })
            .catch(error => console.log(error))
    }

    async function getFreguesias(item) {
        const url = ip + '/local/freguesia'

        const options = {
            ...auth.header(),
            params: { municipio_id: item.split(' ')[0] }
        }

        await axios
            .get(url, options)
            .then(output => { setFreguesias([...output.data?.freguesias.map(data => data.id + ' ' + data.nome)]) })
            .catch(error => console.log(error))
    }

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
        if (!selectTipo)
            return toast.error("Selecione um tipo de interesse")

        toast.success("Ponto de Interesse adicionado com sucesso")
    }

    return (
        <>
            <div className="modal fade" id={props.idModal} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Adicionar ponto de interesse</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => dismissToast()}></button>
                        </div>
                        <div className="modal-body">
                            <div className="card border border-0 mb-3 p-0">
                                <Input
                                    className="input-group"
                                    id="nomePontoInteresse"
                                    label="Nome"
                                    onchange={(value) => setNome(value.target.value)}
                                />
                                <Input
                                    className="input-group mt-4"
                                    id="localizacao"
                                    label="Morada"
                                    onchange={(value) => setMorada(value.target.value)}
                                />
                                <Input
                                    className="input-group mt-4"
                                    id="codigoPostal"
                                    label="Código Postal"
                                    onchange={(value) => setCodigoPostal(value.target.value)}
                                />
                                <Input
                                    className="input-group mt-4"
                                    id="contacto"
                                    type="number"
                                    label="Contacto"
                                    onchange={(value) => setContacto(value.target.value)}
                                />
                                <Input
                                    className="input-group mt-4"
                                    id="numeroPontos"
                                    type="number"
                                    label="Número de Pontos"
                                    onchange={(value) => setPontos(value.target.value)}
                                />
                                <textarea
                                    className="form-control my-4"
                                    label="Descrição"
                                    id="descricao"
                                    rows="3"
                                    onChange={(value) => setDescricao(value.target.value)}
                                />
                                <DropdownSelect
                                    items={distritos}
                                    // selectedValue={3}
                                    onChange={(value, label) => {
                                        setSelectDistrito(value)
                                        getMunicipios(value)
                                    }} />

                                <Dropdown
                                    items={municipios}
                                    disabled={!selectedDistrito}
                                    onChange={(item, index) => {
                                        setSelectMunicipo(item)
                                        // axiosGetFreguesia(item)
                                    }} />

                                <Dropdown
                                    items={freguesias}
                                    disabled={!selectedMunicipio}
                                    onChange={(item) => {
                                        setSelectFreguesia(item)
                                    }} />

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

