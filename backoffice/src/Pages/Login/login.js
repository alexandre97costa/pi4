import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Auth/auth.service';
import dev from '../../Auth/dev';

export default function Login(props) {
    
    const navigate = useNavigate()
    const location = useLocation()
    let previousPage =  location.state.from ||  "/"  ;
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

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
                        <form className='' >
                            <div className='h3 mb-4'>Back Office</div>
                            <div className="form-floating mb-4">
                                <input
                                    id="input-email"
                                    type="text" // ! trocar para email mais tarde
                                    className="form-control rounded-3"
                                    placeholder="name@example.com"
                                    onChange={e => { setEmail(e.target.value) }}
                                />
                                <label htmlFor="input-email">Email</label>
                            </div>
                            <div className="form-floating mb-4">
                                <input
                                    id="input-password"
                                    type="password"
                                    className="form-control rounded-3"
                                    placeholder="secret!"
                                    onChange={e => { setPassword(e.target.value)}}
                                />
                                <label htmlFor="input-password">Password</label>
                            </div>
                            <button
                                id='btn-submit'
                                type='button'
                                className='btn btn-lg btn-primary w-100 shadow'
                                onClick={e => submit()}
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