import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Auth/auth.service';
import dev from '../../Auth/dev';
import Logo from '../../Assets/Images/logo.png';

const dev_mode = (process.env.REACT_APP_MODE === 'dev')

export default function Login(props) {

    const navigate = useNavigate()
    const location = useLocation()
    let previousPage = location.state?.from ?? '/dashboard';
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    async function submit(email, password) {
        dev.log('Attempting to login...')
        setLoading(true)
        let login = await auth.login(email, password)


        if (login.success) {
            navigate(previousPage)
        } else {
            dev.log(login.message)
            setLoading(false)
        }
    }

    // //check if the user is already logged in and redirect to dashboard
    // async function isLoggedIn() {
    //     const user = await auth.getCurrentUser()
    //     if (user !== null)
    //         navigate('/dashboard')
    // }

    // useEffect(() => {
    //     const user = auth.getCurrentUser()
    //     if (user !== null)
    //         navigate('/dashboard')
    // }, [])



    return (
        <div className='container-fluid text-light position-relative'>
            <div className='row vh-100'>
                <div className="col-lg-6 h-100 d-flex align-items-center justify-content-center bg-primary">
                    <img src={Logo} className="img-fluid h-25" alt="Logo" />
                </div>
                <div className='col-lg-6 h-100 d-flex align-items-center justify-content-center text-dark'>
                    <form onSubmit={e => {
                        e.preventDefault()
                        submit(email, password)
                    }} >
                        <p className="text-center  mb-5 color-text fs-1 fw-bold">Iniciar sessão</p>
                        <div className="form-floating mb-3">
                            <input
                                id="input-email"
                                type="text" // ! trocar para email mais tarde
                                className="form-control rounded-3"
                                placeholder="name@example.com"
                                onChange={e => { setEmail(e.target.value) }}
                            />
                            <label htmlFor='input-email'>Email</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                id="input-password"
                                type="password"
                                className="form-control rounded-3"
                                placeholder="secret!"
                                onChange={e => { setPassword(e.target.value) }}
                            />
                            <label htmlFor='input-password'>Password</label>
                        </div>
                        <button
                            id='btn-submit'
                            type='submit'
                            className='btn btn-lg btn-primary w-100 shadow mb-3 d-flex justify-content-center gap-3'
                        >
                            <span>Entrar</span>
                            {loading &&
                                <div className="spinner-border text-light" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            }
                        </button>
                        <p className="text-muted">
                            Esqueceste-te da Palavra-passe? <a href="../recuperar" className="color-text">Recuperar password</a>
                        </p>
                    </form>
                </div>
            </div>

            {dev_mode &&
                <div className='position-absolute ps-3 pt-2 top-0 start-0'>
                    Entrar como:
                    <button
                        type='button'
                        className='btn btn-light w-100 shadow mb-3 mt-2 d-flex justify-content-center gap-3'
                        onClick={e => submit('admin@email.com', 'password')}
                    >
                        Admin
                    </button>
                    <button
                        type='button'
                        className='btn btn-light w-100 shadow mb-3 d-flex justify-content-center gap-3'
                        onClick={e => submit('responsavel@email.com', 'password')}
                    >
                        Responsavel
                    </button>
                    <button
                        type='button'
                        className='btn btn-light w-100 shadow mb-3 d-flex justify-content-center gap-3'
                        onClick={e => submit('agente@email.com', 'password')}
                    >
                        Agente
                    </button>
                </div>
            }
        </div>
    );
}