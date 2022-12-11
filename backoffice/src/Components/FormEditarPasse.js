import React, { useState } from 'react';

import Botao from './Botao';
import Input from './Input';

export default function FormEditarPasse() {
    const [palavraPasseAntiga, setPalavraPasseAntiga] = useState('')
    const [palavraPasseNova, setPalavraPasseNova] = useState('')
    const [palavraPasseConfirmacao, setPalavraPasseConfirmacao] = useState('')

    function teste() {
        console.log(palavraPasseAntiga)
        console.log(palavraPasseNova)
        console.log(palavraPasseConfirmacao)
    }

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
                            onchange={(value) => { setPalavraPasseAntiga(value.target.value) }} />
                    </div>

                    <label className="fs-5 mb-2 ms-1" htmlFor='inputPasseNova'>Palavra-passe nova</label>
                    <div className='form-floating mb-4'>
                        <Input
                            id="inputPasseNova"
                            type="password"
                            className="rounded-3 h-25"
                            pattern='^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,63})$'
                            required={true}
                            onchange={(value) => { setPalavraPasseNova(value.target.value) }} />
                    </div>

                    <label className="fs-5 mb-2 ms-1" htmlFor='inputPasseConfirmar'>Confirmar Palavra-passe nova</label>
                    <div className='form-floating mb-4'>
                        <Input
                            id="inputPasseConfirmar"
                            type="password"
                            className="rounded-3 h-25"
                            pattern='^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,63})$'
                            required={true}
                            onchange={(value) => { setPalavraPasseConfirmacao(value.target.value) }} />
                    </div>

                    <div className='d-flex justify-content-end mt-5'>
                        <Botao
                            id="btn-submit"
                            type="submit"
                            className="btn-primary btn-lg shadow mb-4"
                            texto="Guardar"
                            onClick={() => teste()} />
                    </div>

                </form>
            </div>
        </div>
    );
}