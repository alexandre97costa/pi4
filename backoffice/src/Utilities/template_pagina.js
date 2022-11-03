import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export function TemplatePagina(props) {
    return (
        <div className='container-fluid position-relative'>
            <div className='row vh-100'>
                {/* SideBar */}
                <div className='bg-dark text-secondary col-2 px-2'>
                    <div className='d-flex flex-sm-column flex-row flex-grow-1 align-items-center align-items-sm-start'>

                        {/* Titulo */}
                        <Link to='/' className='navbar-brand w-100 text-light d-flex justify-content-start align-items-center border-1 border-bottom border-secondary py-3 mb-3'>
                            <i className='bi bi-signpost-2-fill fs-1 ms-1 me-3 text-success'></i>
                            <div className=''>
                                <div className='fs-5 text-success lh-sm'>Green Trip</div>
                                <div className='fs-6 text-secondary lh-sm'>{props.userType}</div>
                            </div>
                        </Link>

                        {/* Lista */}
                        <ul id='menu' className='nav d-flex flex-row flex-sm-column h-100 w-100'>
                            {props.menu.map((item, index) => {


                                return (
                                    (props.selected ?? 0) === index ?
                                        <li className='my-1 py-1 d-flex align-items-center bg-success rounded-3'>
                                            <i className={'bi bi-' + item.icon + ' fs-4 mx-2 text-white'}></i>
                                            <span className=' d-none d-sm-inline fs-6 text-white fw-semibold'>
                                                {item.text}
                                            </span>
                                        </li>
                                        :
                                        <li className='my-1 py-1 d-flex align-items-center'>
                                            <i className={'bi bi-' + item.icon + ' fs-4 mx-2 text-success'}></i>
                                            <span className=' d-none d-sm-inline fs-6'>
                                                {item.text}
                                            </span>
                                        </li>
                                )
                            })}
                        </ul>

                    </div>
                </div>

                {/* Content */}
                <div className='col-10 bg-light'>
                    <div className='container-fluid py-3'>
                        {props.children}
                    </div>
                </div>

                {/* User */}
                <div className='col-2 position-absolute top-0 end-0 bg-white border mt-3 me-4 py-2 px-3 shadow-sm rounded-5'>

                    {props.userName}
                </div>
            </div>
        </div>
    )
}