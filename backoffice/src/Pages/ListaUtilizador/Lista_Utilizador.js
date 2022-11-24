import React, {useEffect, useState} from 'react'
import auth from '../../Auth/auth.service';
import dev from '../Auth/dev';
import { Sidebar } from '../Components/sidebar'
import User from '../Components/user'

let administrador =[
    { icon: "speedometer2", text: "Dashboard", path: "/" },
	{ icon: "geo-alt", text: "Pontos de Interesse", path: "/teste" },
	{ icon: "calendar4-event", text: "Eventos", path: "/" },
	{ icon: "gift", text: "Recompensas", path: "/" }  
]
export function lista_utilizadores(props){
    useEffect(() => { dev.log("✅ Pagina()") }, [])

    return (
        <div className='container-fluid position-relative'>
            <div className='row'>
                <Sidebar
                    userType={"Administrador "}
                    menu={administrador}
                    selected={0}
                />

                {/* Content */}
                <div className='col-10 bg-light overflow-auto' style={{ maxHeight: '100vh' }}>
                    <div className='container-fluid py-3'>
                        <div className='row mb-4'>
                            <div className='display-6'>
                                {"Lista de Utilizadores"}
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