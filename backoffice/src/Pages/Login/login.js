import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Auth/auth.service';
import dev from '../../Auth/dev';

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
            <div className='container-fluid bg-primary text-light '>
                <div className='row vh-100 d-flex align-items-center justify-content-center'>
                    <div className='col-4 bg-white text-dark shadow p-4 rounded-4'>
                        <form onSubmit={e => {
                            e.preventDefault()
                            submit()
                        }} >
                            <div className='h3 mb-4'>Back Office</div>
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
                                <label htmlFor='input-email'>Email</label>
                            </div>
                            <div className='form-floating mb-4'>
                                <input
                                    id='input-password'
                                    type='password'
                                    className='form-control rounded-3'
                                    placeholder='secret!'
                                    value={password}
                                    onChange={e => { setPassword(e.target.value) }}
                                />
                                <label htmlFor='input-password'>Password</label>
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
                                className='btn btn-lg btn-primary w-100 shadow'
                            >
                                Login
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}