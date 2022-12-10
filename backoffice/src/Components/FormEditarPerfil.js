import React, { useState } from 'react';

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
        <div className="card shadow ms-4 border-0">
            <div className="card-body">
                <form className='mt-5 ms-4 me-4'>

                    <label className="fs-5 mb-2 ms-1" htmlFor='inputNome'>Nome</label>
                    <div className='form-floating mb-4'>
                        <Input
                            id="inputNome"
                            className="rounded-3 h-25"
                            value={nome}
                            placeholder="name@example.com"
                            pattern='^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,63})$'
                            required={true}
                            onchange={(value) => { setNome(value.target.value) }} />
                    </div>

                    <label className="fs-5 mb-2 ms-1" htmlFor='inputNascimento'>Data Nascimento</label>
                    <div className='form-floating mb-4'>
                        <Input
                            id="inputNascimento"
                            className="rounded-3 h-25"
                            value={dataNascimento}
                            placeholder="name@example.com"
                            pattern='^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,63})$'
                            required={true}
                            onchange={(value) => { setDataNascimento(value.target.value) }} />
                    </div>

                    <label className="fs-5 mb-2 ms-1" htmlFor='inputGenero'>Género</label>
                    <div className='form-floating mb-4'>
                        <Input
                            id="inputGenero"
                            className="rounded-3 h-25"
                            value={genero}
                            placeholder="name@example.com"
                            pattern='^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,63})$'
                            required={true}
                            onchange={(value) => { setGenero(value.target.value) }} />
                    </div>

                    <label className="fs-5 mb-2 ms-1" htmlFor='inputLocalidade'>Localidade</label>
                    <div className='form-floating mb-4'>
                        <Input
                            id="inputLocalidade"
                            className="rounded-3 h-25"
                            value={localidade}
                            placeholder="name@example.com"
                            pattern='^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,63})$'
                            required={true}
                            onchange={(value) => { setLocalidade(value.target.value) }} />
                    </div>

                    <div className='d-flex justify-content-end mt-5'>
                        <Botao
                            id="btn-submit"
                            type="submit"
                            className="btn-lg shadow mb-4"
                            texto="Guardar"
                            onClick={() => teste()} />

                    </div>

                </form>
            </div>
        </div>
    );
}