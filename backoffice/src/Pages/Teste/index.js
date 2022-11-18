import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import dev from '../../Auth/dev';

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

    const [token, setToken] = useState('')


    useEffect(() => {
        dev.log("✅ Teste()")
        setToken(localStorage.getItem('token'))
    }, [])

    return (
        <TemplatePagina
            userType={"Agente Turístico"}
            userName={"Joaquim"}
            menu={agente_turistico}
            selected={0}
            title={"Olá, Joaquim!"}
        >
            <Main />
        </TemplatePagina>
    );
}