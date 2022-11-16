import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

import TemplatePagina from '../../Helpers/templatePagina';
import Main from './main'
const ip = process.env.REACT_APP_IP

let agente_turistico = [
    { icon: "speedometer2", text: "Dashboard", path: "/" },
    { icon: "geo-alt", text: "Pontos de Interesse", path: "/teste" },
    { icon: "calendar4-event", text: "Eventos", path: "/" },
    { icon: "gift", text: "Recompensas", path: "/" }
]

export function Teste(props) {

    const [decodedToken, setDecodedToken] = useState(props.decodedToken)
    const [token, setToken] = useState(props.token)

    useEffect(() => {
        console.log("✅ Teste()")
        setToken(props.token)
    }, [])

    useEffect(() => { console.log(token) }, [token])
    useEffect(() => { console.log(decodedToken) }, [decodedToken])

    return (
        <TemplatePagina
            userType={"Agente Turístico"}
            userName={"Joaquim"}
            menu={agente_turistico}
            selected={0}
            title={"Olá, Joaquim!"}
        >
            <div className='row row-cols-1'>

                <button
                    className='col btn btn-lg btn-primary mb-3 '
                    onClick={e => {
                        console.log(token)
                        axios
                            .get(ip + '/vip', {
                                headers: {
                                    'Authorization': token
                                }
                            })
                            .then(response => {
                                console.log('vip response', response)
                            })
                    }}
                >
                    Entrar na zona vip
                </button>
            </div>
            <Main />
        </TemplatePagina>
    );
}