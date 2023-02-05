import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../Auth/auth.service';
import dev from '../Auth/dev';

export default function User() {
    const navigate = useNavigate()
    const [nome, setNome] = useState('A carregar...')

    // async function fetchName() {
    //     const user = await auth.getCurrentUser()
    //     if (user !== null)
    //         setNome(user.nome)
    // }

    useEffect(() => { setNome(auth.getUser().nome) }, [])

    return (
        <div className='col-2 d-flex justify-content-between  position-absolute top-0 end-0  mt-3 me-4 py-2 px-3 ' >
            <div className="dropdown w-100">
                <button className="btn btn-light bg-white border rounded-4 shadow dropdown-toggle d-flex justify-content-between align-items-center w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <span>{nome}</span>
                </button>
                <ul className="dropdown-menu dropdown-menu-end rounded-4 shadow">
                    <li>
                        <Link className="dropdown-item rounded-3" to="/detalhes-utilizador">
                            <i className='bi bi-person me-2'></i>
                            <span>Ver perfil</span>
                        </Link>
                    </li>
                    <li>
                        <button onClick={e => {
                            auth.logout();
                            navigate('/login')
                        }} className="dropdown-item rounded-3" path="">
                            <i className='bi bi-door-open me-2'></i>
                            <span>Logout</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}