import React from 'react';
import { Link } from 'react-router-dom';

export default function User(props) {
    return (
        <div className='col-2 d-flex justify-content-between  position-absolute top-0 end-0  mt-3 me-4 py-2 px-3 '>
            <div className="dropdown w-100">
                <button className="btn btn-light bg-white border rounded-4 shadow dropdown-toggle d-flex justify-content-between align-items-center w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <span>{props.userName}</span>
                </button>
                <ul className="dropdown-menu dropdown-menu-end rounded-4 shadow">
                    <li>
                        <Link className="dropdown-item rounded-3" path="">
                            <i className='bi bi-person me-2'></i>
                            <span>Ver perfil</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item rounded-3" path="">
                            <i className='bi bi-door-open me-2'></i>
                            <span>Logout</span>
                        </Link>
                    </li>

                    <li><hr className='dropdown-divider' /></li>
                    <li><h6 className="dropdown-header text-danger">Só pra desenvolvimento</h6></li>
                    <li>
                        <Link className="dropdown-item rounded-3" path="">
                            <i className='bi bi-lightning-charge-fill text-warning me-2'></i>
                            <span>Administrador</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item rounded-3" path="">
                            <i className='bi bi-lightning-charge-fill text-warning me-2'></i>
                            <span>Responsável de Região</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item rounded-3" path="">
                            <i className='bi bi-lightning-charge-fill text-warning me-2'></i>
                            <span>Agente Turístico</span>
                        </Link>
                    </li>
                </ul>
            </div>

            {/* 
        {props.userName}
        <i className='bi bi-chevron-down'></i>
         */}
        </div>
    );
}