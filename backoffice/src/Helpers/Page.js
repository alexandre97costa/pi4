import React, { useEffect, useState } from 'react'
import axios from 'axios'
import auth from '../Auth/auth.service'
import dev from '../Auth/dev';

import { Sidebar } from '../Components/sidebar'
import User from '../Components/user'

const ip = process.env.REACT_APP_IP

let agente_turistico = [
	{ icon: "speedometer2", text: "Dashboard", path: "/" },
	{ icon: "geo-alt", text: "Pontos de Interesse", path: "/teste" },
	{ icon: "calendar4-event", text: "Eventos", path: "/1" },
	{ icon: "gift", text: "Recompensas", path: "/2" }
]

/*

admin
- dashboard
- utilizadores
- pontos de interesse
- eventos
- reservas
- recompensas
- microsite

rr
- dashboard
- agentes turisticos
- pontos de interesse
- eventos
- reservas
- recompensas

at
- dashboard
- pontos de interesse
- eventos
- recompensas

*/

export default function Page(props) {

    const [tipos, setTipos] = useState([])
    const [tipoUtilizador, setTipoUtilizador] = useState('')

    function getTipoUtilizador() {
        dev.log(tipos)
        let tipoObject = tipos.find(tipo => tipo.id === auth.getTipo())
        setTipoUtilizador(tipoObject.nome)
    }

    useEffect(() => { 
        dev.log("✅ Pagina()") 
        axios
            .get(ip + '/user/tipos', auth.header())
            .then(response => setTipos(response.data.data))
            .catch(e => dev.error(e.message))
    }, [])

    useEffect(() => {tipos.length !== 0 && getTipoUtilizador() }, [tipos])

    return (
        <div className='container-fluid position-relative'>
            <div className='row'>
                <Sidebar
                    userType={tipoUtilizador}
                    menu={agente_turistico}
                />

                {/* Content */}
                <div className='col-10 bg-light overflow-auto' style={{ maxHeight: '100vh' }}>
                    <div className='container-fluid py-3'>
                        <div className='row mb-4'>
                            <div className='display-6'>
                                {"Olá, Joaquim!"}
                            </div>
                        </div>
                        {props.children}
                    </div>
                </div>

                <User userName={"Joaquim"}/>
            </div>
        </div>
    )
}