import React from 'react';

import Botao from './Botao';
import Input from './Input';

export default function FormEditarPasse() {

    return (
        <div className="card shadow border-0">
            <div className="card-body">
                <form className='mt-5 ms-4 me-4'>

                    <label className="fs-5 mb-2 ms-1" htmlFor='inputPasseAtual'>Palavra-passe atual</label>
                    <div className='form-floating mb-4'>
                        <Input
                            id="inputPasseAtual"
                            type="password"
                            className="rounded-3 h-25"
                            pattern='^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,63})$'
                            required={true}
                            onchange={(value) => { console.log(value.target.value) }} />
                    </div>

                    <label className="fs-5 mb-2 ms-1" htmlFor='inputPasseNova'>Palavra-passe nova</label>
                    <div className='form-floating mb-4'>
                        <Input
                            id="inputPasseNova"
                            type="password"
                            className="rounded-3 h-25"
                            pattern='^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,63})$'
                            required={true}
                            onchange={(value) => { console.log(value.target.value) }} />
                    </div>

                    <label className="fs-5 mb-2 ms-1" htmlFor='inputPasseConfirmar'>Confirmar Palavra-passe nova</label>
                    <div className='form-floating mb-4'>
                        <Input
                            id="inputPasseConfirmar"
                            type="password"
                            className="rounded-3 h-25"
                            pattern='^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,63})$'
                            required={true}
                            onchange={(value) => { console.log(value.target.value) }} />
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