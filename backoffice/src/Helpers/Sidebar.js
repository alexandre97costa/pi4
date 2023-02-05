import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios'
import auth from '../Auth/auth.service'
import dev from '../Auth/dev'
import { menu } from './menu'
const ip = process.env.REACT_APP_IP

export default function Sidebar(props) {

    const location = useLocation()
    const [tipoUtilizador, setTipoUtilizador] = useState('')
    const [tipoId, setTipoId] = useState(4)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTipoId(auth.getTipo().id)
        setTipoUtilizador(auth.getTipo().nome)
        setLoading(false)
    }, [])

    return (
        <div className='bg-dark text-secondary col-2 px-2 pb-4 vh-100 d-none d-md-block overflow-auto'>
            <div className='d-flex flex-sm-column flex-row flex-grow-1 align-items-center align-items-sm-start'>

                {/* Titulo */}
                <Link to='/' className='navbar-brand w-100 text-light d-flex justify-content-start align-items-center py-3'>
                    <i className='bi bi-signpost-2-fill fs-1 ms-1 me-3 text-primary'></i>
                    <div className=''>
                        <div className='fs-5 text-primary lh-sm'>Green Trip</div>
                        <div className='fs-6 text-secondary lh-sm'>{tipoUtilizador}</div>
                    </div>
                </Link>

                {/* Lista */}
                <ul id='menu' className='nav d-flex flex-row flex-sm-column h-100 w-100'>
                    {loading ?
                        <div>loading...</div>
                        :
                        menu[+tipoId - 2].map((item, index) => {

                        return (
                            item.path === location.pathname ?
                                <li key={index} className=' py-1 d-flex align-items-center bg-primary rounded-3'>
                                    <i className={'bi bi-' + item.icon + ' fs-4 mx-2 text-white'}></i>
                                    <span className=' d-none d-sm-inline fs-6 text-white fw-semibold'>
                                        {item.text}
                                    </span>
                                </li>
                                :
                                <Link key={index} to={item.path} className='text-decoration-none'>
                                    <li className='pi4-menu-item my-1 py-1 d-flex align-items-center rounded-3'>
                                        <i className={'bi bi-' + item.icon + ' fs-4 mx-2 text-primary'}></i>
                                        <span className='d-none d-sm-inline fs-6 text-secondary'>
                                            {item.text}
                                        </span>
                                    </li>
                                </Link>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}