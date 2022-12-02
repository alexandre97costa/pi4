import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Auth/auth.service';
import dev from '../../Auth/dev';
import Logo from '../../Assets/Images/logo.png';

export default function Login(props) {

    const navigate = useNavigate()
    const location = useLocation()
    let previousPage = location?.state?.from ?? '/';
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [longExp, setLongExp] = useState(false)

    async function submit() {
        dev.log('Attempting to login...')
        let login = await auth.login(email, password, longExp)

        if (login.success) {
            navigate(previousPage)
        } else {
            dev.log(login.message)
        }
    }

    return (
        <>
            <div className='container-fluid text-light'>
                <div className='row vh-100'>
                    <div className="col-lg-6 h-100 d-flex align-items-center justify-content-center bg-primary-login">
                    <img src={Logo} className="img-fluid h-25" alt="Logo" />
                    </div>
                    <div className='col-lg-6 h-100 d-flex align-items-center justify-content-center text-dark'>
                        <form onSubmit={e => {
                            e.preventDefault()
                            submit()
                        }} >
                        <p className="text-center  mb-5 color-text fs-1 fw-bold">Recuperar Palavra-passe</p>
                        <label className="fs-5 mb-2 ms-1" htmlFor='input-password'>Palavra-passe</label>
                            <div className='form-floating mb-4'>
                            <input
                                    id='input-password'
                                    name="password"
                                    type='password'
                                    className='form-control rounded-3'
                                    placeholder='secret!'
                                    value={password}
                                    onChange={e => { setPassword(e.target.value) }}
                                />
                            </div>
                            <label className="fs-5 mb-2 ms-1" htmlFor='input-confpassword'>Repetir Palavra-passe</label>
                            <div className='form-floating mb-5'>
                                <input
                                    id='input-confpassword'
                                    name="confirm_password"
                                    type='password'
                                    className='form-control rounded-3'
                                    placeholder='secret!'
                                    value={password}
                                    onChange={e => { setPassword(e.target.value) }}
                                />
                            </div>
                            <button
                                id='btn-submit'
                                type='submit'
                                className='btn btn-lg btn-primary w-100 shadow mb-4'
                            >
                                Confirmar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}