import React, { useEffect } from 'react'
import dev from '../Auth/dev';

import { Sidebar } from '../Components/sidebar'
import User from '../Components/user'


let agente_turistico = [
	{ icon: "speedometer2", text: "Dashboard", path: "/" },
    { icon: "person-badge", text: "Agentes Turísticos", path: "/inicioAT" },
	{ icon: "geo-alt", text: "Pontos de Interesse", path: "/teste" },
	{ icon: "calendar4-event", text: "Eventos", path: "/" },
	{ icon: "gift", text: "Recompensas", path: "/" }
]

export default function Page(props) {
    useEffect(() => { dev.log("✅ Pagina()") }, [])

    return (

        
        <div className='container-fluid position-relative'>
            <div className='row'>
                <Sidebar
                    userType={"Agente Turístico"}
                    menu={agente_turistico}
                    selected={0}
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