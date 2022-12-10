import React from 'react';

export function FormEditarPass() {
    return (
        <div className="card shadow border-0">
            <div className="card-body">
                <form className='mt-5 ms-4 me-4'>

                    <label className="fs-5 mb-2 ms-1" htmlFor='input-nome'>Palavra-passe atual</label>
                    <div className='form-floating mb-4'>
                        <input
                            id='input-nome'
                            type='password'
                            pattern='^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,63})$'
                            className='form-control rounded-3 h-25'
                            placeholder='secret!'
                            required
                        />
                    </div>

                    <label className="fs-5 mb-2 ms-1" htmlFor='input-nascimento'>Palavra-passe nova</label>
                    <div className='form-floating mb-4'>
                        <input
                            id='input-nascimento'
                            type='password'
                            pattern='^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,63})$'
                            className='form-control rounded-3 h-25'
                            placeholder='secret!'
                            required
                        />
                    </div>

                    <label className="fs-5 mb-2 ms-1" htmlFor='input-genero'>Confirmar Palavra-passe nova</label>
                    <div className='form-floating mb-4'>
                        <input
                            id='input-genero'
                            type='password'
                            pattern='^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,63})$'
                            className='form-control rounded-3 h-25'
                            placeholder='secret!'
                            required
                        />
                    </div>

                    <div className='d-flex justify-content-end mt-5'>
                        <button
                            id='btn-submit'
                            type='submit'
                            className='btn btn-lg btn-primary shadow mb-4'
                        >
                            Guardar
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}