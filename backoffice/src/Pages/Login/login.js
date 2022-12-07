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
                        <p className="text-center  mb-5 color-text fs-1 fw-bold">Iniciar sessão</p>
                        <label className="fs-5 mb-2 ms-1" htmlFor='input-email'>Email</label>
                            <div className='form-floating mb-4'>
                                <input
                                    id='input-email'
                                    type='text' // ! mudar pra email
                                    pattern='^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,63})$'
                                    className='form-control rounded-3'
                                    placeholder='name@example.com'
                                    required
                                    value={email}
                                    onChange={e => { setEmail(e.target.value) }}
                                    onInvalid={e => { }}
                                />
                            </div>
                            <label className="fs-5 mb-2 ms-1" htmlFor='input-password'>Password</label>
                            <div className='form-floating mb-4'>
                                <input
                                    id='input-password'
                                    type='password'
                                    className='form-control rounded-3'
                                    placeholder='secret!'
                                    value={password}
                                    onChange={e => { setPassword(e.target.value) }}
                                />
                            </div>
                            <div className='form-check mb-4'>
                                <input
                                    id='input-long-exp'
                                    type='checkbox'
                                    className='form-check-input'
                                    value={longExp}
                                    onChange={e => { setLongExp(e.target.checked) }}
                                />
                                <label className='form-check-label text-secondary' htmlFor='input-long-exp'>
                                    Manter-me autorizado por mais tempo (5m)
                                </label>
                            </div>
                            <button
                                id='btn-submit'
                                type='submit'
                                className='btn btn-lg btn-primary w-100 shadow mb-4'
                            >
                                Entrar
                            </button>
                            <p className="">
                            Esqueceste-te da Palavra-passe? <a href="../recuperar" className="color-text">Recuperar</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}