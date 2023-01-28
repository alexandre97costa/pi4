import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios'
import auth from '../Auth/auth.service'
import dev from '../Auth/dev'
import { menu } from './menu'
const ip = process.env.REACT_APP_IP

export default function Sidebar(props) {

    const location = useLocation()
    const [tipos, setTipos] = useState([])
    const [tipoUtilizador, setTipoUtilizador] = useState('')
    const [tipoID, setTipoID] = useState(4)

    function getTipoUtilizador() {
        // todo: usar getCurrentUser em vez de getTipo (por ser async)
        let tipoObject = tipos.find(tipo => tipo.id === auth.getTipo())
        setTipoUtilizador(tipoObject?.nome ?? '...')
        setTipoID(tipoObject?.id ?? '...')
    }

    useEffect(() => {
        axios
            .get(ip + '/tipos/utilizador', auth.header())
            .then(response => setTipos(response.data.tipos))
            .catch(e => dev.error(e.message))
    }, [])

    useEffect(() => { tipos.length !== 0 && getTipoUtilizador() }, [tipos])

    return (
        <div className='bg-dark text-secondary col-2 px-2 pb-4 vh-100 d-none d-md-block overflow-auto'>
            <div className='d-flex flex-sm-column flex-row flex-grow-1 align-items-center align-items-sm-start'>

                {/* Titulo */}
                <Link to='/' className='navbar-brand w-100 text-light d-flex justify-content-start align-items-center py-3'>
                    <i className='bi bi-signpost-2-fill fs-1 ms-1 me-3 text-success'></i>
                    <div className=''>
                        <div className='fs-5 text-success lh-sm'>Green Trip</div>
                        <div className='fs-6 text-secondary lh-sm'>{tipoUtilizador}</div>
                    </div>
                </Link>

                {/* Lista */}
                <ul id='menu' className='nav d-flex flex-row flex-sm-column h-100 w-100'>
                    {menu[tipoID - 2].map((item, index) => {

                        return (
                            item.path === location.pathname ?
                                <li key={index} className=' py-1 d-flex align-items-center bg-success rounded-3'>
                                    <i className={'bi bi-' + item.icon + ' fs-4 mx-2 text-white'}></i>
                                    <span className=' d-none d-sm-inline fs-6 text-white fw-semibold'>
                                        {item.text}
                                    </span>
                                </li>
                                :
                                <Link key={index} to={item.path} className='text-decoration-none'>
                                    <li className='pi4-menu-item my-1 py-1 d-flex align-items-center rounded-3'>
                                        <i className={'bi bi-' + item.icon + ' fs-4 mx-2 text-success'}></i>
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