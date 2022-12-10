import React from 'react';

import Botao from './Botao';
import Input from './Input';

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
                        <Input 
                            id="input-genero"
                            type="text"
                            pattern='^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,63})$'
                            required={true}
                            onChange={(value) => console.log(value.target)}  />
                    </div>

                    <div className='d-flex justify-content-end mt-5'>
                        <Botao 
                            id="btn-submit"
                            type="submit"
                            className="btn-lg shadow mb-4"
                            texto="Guardar" />
                    </div>

                </form>
            </div>
        </div>
    );
}