import React from 'react';

export default function Login() {
    return (
        <>
            <div className='container-fluid bg-primary text-light '>
                <div className='row vh-100 d-flex align-items-center justify-content-center'>
                    <div className='col-4 bg-dark border border-secondary p-4 rounded-4'>
                        <form className=''>
                            <div className='h3 mb-3'>Login</div>
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control rounded-3 bg-dark border border-secondary" id="floatingInput" placeholder="name@example.com" />
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control rounded-3 bg-dark border border-secondary" id="floatingInput" placeholder="name@example.com" />
                                <label htmlFor="floatingInput">Password</label>
                            </div>
                            <button
                                className='btn btn-lg btn-primary w-100 text-dark'
                            >
                            Entrar
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}