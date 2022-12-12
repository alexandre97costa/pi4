import React, { useState } from 'react';

import CardForm from './CardForm';
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
        <CardForm>
            <label className="fs-5 mb-2 ms-1" htmlFor='inputPasseAtual'>Palavra-passe atual</label>
            <Input
                id="inputPasseAtual"
                type="password"
                className="rounded-3 mb-4"
                pattern='^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,63})$'
                required={true}
                onchange={(value) => { setPalavraPasseAntiga(value.target.value) }} />

            <label className="fs-5 mb-2 ms-1" htmlFor='inputPasseNova'>Palavra-passe nova</label>
            <Input
                id="inputPasseNova"
                type="password"
                className="rounded-3 mb-4"
                pattern='^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,63})$'
                required={true}
                onchange={(value) => { setPalavraPasseNova(value.target.value) }} />

            <label className="fs-5 mb-2 ms-1" htmlFor='inputPasseConfirmar'>Confirmar Palavra-passe nova</label>
            <Input
                id="inputPasseConfirmar"
                type="password"
                className="rounded-3 mb-4"
                pattern='^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,63})$'
                required={true}
                onchange={(value) => { setPalavraPasseConfirmacao(value.target.value) }} />

            <div className='d-flex justify-content-end mt-5'>
                <Botao
                    id="btn-submit"
                    type="submit"
                    className="btn-primary btn-lg shadow mb-4"
                    texto="Guardar"
                    onClick={() => teste()} />
            </div>
        </CardForm>
    );
}