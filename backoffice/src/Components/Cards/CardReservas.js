import React, { useEffect, useState } from 'react'
import VisibleTo from '../../Helpers/VisibleTo';
import auth from '../../Auth/auth.service';

import Botao from '../Botao'
import axios from 'axios';

const ip = process.env.REACT_APP_IP

export default function CardReservas(props) {
    const [reservas, setReservas] = useState([])

    useEffect(() => {
        getReservas()
    }, [])

    useEffect(() => {
        props.onChange()
        console.log("Passei aqui")
    }, [reservas])

    async function getReservas() {
        const url = ip + '/reserva'
        let options = {
            ...auth.header(),
            params: {
                evento_id: props.eventoId,
                validado: null
            },
        }

        await axios
            .get(url, options)
            .then((output) => {
                console.log(output.data.data)
                setReservas(output.data?.data ?? [])
            }).catch((error) => {
                if(error.response.status === 404)
                    return setReservas([])

                console.error(error)
            })
    }

    async function postValidar(id) {
        const url = ip + '/reserva/validar/' + id
        console.log("post url: " + url)

        let options = { validado: true }

        await axios
            .patch(url, options, auth.header())
            .then((output) => {
                console.log(output.data)
                getReservas()
            }).catch((error) => console.error(error) )
    }

    async function deleteReserva(id) {
        const url = ip + '/reserva/validar/' + id
        console.log("delete url: " + url)

        let options = { validado: false }

        await axios
            .patch(url, options, auth.header())
            .then((output) => {
                console.log(output.data)
                getReservas()
            }).catch((error) => console.error(error) )
    }

    return (
        <div className="card border border-0 rounded-4 shadow">

            <div className="col-12">
                <div className='row py-3'>

                    <div className='col-6'>
                        <p className="fs-6 text-success mx-2 mt-2">{props.nomePontoInteresse}</p>
                        <p className="fs-5 mx-2">{props.nomeEvento}</p>
                    </div>

                    <VisibleTo tipo='4'>
                        <div className='col-6 text-end'>
                            <Botao to="/admin/lista-utilizadores" className="btn-outline-success btn-sm me-2 mb-5" texto="Lista de reservas" />
                        </div>
                    </VisibleTo>

                </div>
            </div>

            <div className="container">

                {props.sessao.map((item, index) => {
                    const options = { year: 'numeric', month: 'numeric', day: 'numeric' }
                    const ocupacaoPercentagem = ((item.vagas * 100) / props.lotacao) - 100
                    const ocupacao = props.lotacao - item.vagas

                    return (
                        <div className="row" key={index}>
                            <div className="col">
                                <p className="fs-6 text-start text-muted mb-1">{new Date(item.data_hora.split('T')[0]).toLocaleDateString(undefined, options)} {item.data_hora.split('T')[1].split(':')[0]}:{item.data_hora.split('T')[1].split(':')[1]}</p>
                            </div>
                            <div className="col">
                                <p className="fs-6 text-end text-muted mb-1">{ocupacao}/{props.lotacao}</p>
                            </div>
                            <div className='col-12 mb-4'>
                                <div className="progress mx-auto w-100">
                                    <div className="progress-bar progress-bar-striped progress-bar bg-success text-align:center" role="progressbar" aria-label="Animated striped example" aria-valuenow={-ocupacaoPercentagem} aria-valuemin="0" aria-valuemax={props.lotacao} style={{ width: -ocupacaoPercentagem + '%' }}></div>
                                </div>
                            </div>
                        </div>
                    )
                })}

                {reservas.map((item, index) => {
                    const options = { year: 'numeric', month: 'numeric', day: 'numeric' }

                    return (
                        <div key={index} className='col-12 border-top'>
                            <div className='row align-items-center py-3'>

                                <div className='col-6'>
                                    <div className="text-start text-muted">{new Date(item.sessao.data_hora.split('T')[0]).toLocaleDateString(undefined, options)} {item.sessao.data_hora.split('T')[1].split(':')[0]}:{item.sessao.data_hora.split('T')[1].split(':')[1]}<i className="fs-6 bi bi-person ms-2" />{item.pessoas}</div>
                                </div>

                                <VisibleTo tipo='2'>
                                    <div className="col-6 text-end">
                                        <Botao className="btn-outline-success btn-sm" texto="Confirmar" onClick={() => postValidar(item.id)} />
                                        <Botao className="btn-outline-danger btn-sm mt- 0 mt-sm-2 mt-md-0 ms-2" texto="Rejeitar" onClick={() => deleteReserva(item.id)} />
                                    </div>
                                </VisibleTo>

                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    );
}