import React, { useState } from 'react';

import CardForm from './CardForm';
import Botao from './Botao';
import Input from './Input';

export default function FormEditarPerfil() {
    const [nome, setNome] = useState('')
    const [dataNascimento, setDataNascimento] = useState('')
    const [genero, setGenero] = useState('')
    const [localidade, setLocalidade] = useState('')

    function teste() {
        console.log(nome)
        console.log(dataNascimento)
        console.log(genero)
        console.log(localidade)
    }

    return (
        <CardForm>
            <label className="fs-5 mb-2 ms-1" htmlFor='inputNome'>Nome</label>
            <Input
                id="inputNome"
                className="rounded-3 mb-3"
                value={nome}
                placeholder="name@example.com"
                pattern='^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,63})$'
                required={true}
                onchange={(value) => { setNome(value.target.value) }} />

            <label className="fs-5 mb-2 ms-1" htmlFor='inputNascimento'>Data Nascimento</label>
            <Input
                id="inputNascimento"
                className="rounded-3 mb-3"
                value={dataNascimento}
                placeholder="name@example.com"
                pattern='^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,63})$'
                required={true}
                onchange={(value) => { setDataNascimento(value.target.value) }} />

            <label className="fs-5 mb-2 ms-1" htmlFor='inputGenero'>Género</label>
            <Input
                id="inputGenero"
                className="rounded-3 mb-3"
                value={genero}
                placeholder="name@example.com"
                pattern='^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,63})$'
                required={true}
                onchange={(value) => { setGenero(value.target.value) }} />

            <label className="fs-5 mb-2 ms-1" htmlFor='inputLocalidade'>Localidade</label>
            <Input
                id="inputLocalidade"
                className="rounded-3 mb-3"
                value={localidade}
                placeholder="name@example.com"
                pattern='^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,63})$'
                required={true}
                onchange={(value) => { setLocalidade(value.target.value) }} />

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