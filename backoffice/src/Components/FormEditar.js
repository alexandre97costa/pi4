import React from 'react';

import CardForm from './CardForm';
import Botao from './Botao';
import Input from './Input';

export default function FormEditar(props) {
    return (
        <CardForm>
            {props.itens.map((item, index) => {
                return (
                    <div key={index}>
                        <label className="fs-5 mb-2 ms-1" htmlFor='inputPasseAtual'>{item.nome}</label>
                        <Input
                            id={item.id}
                            type={item.type}
                            className="rounded-3 mb-4"
                            pattern={item.pattern}
                            required={item.required}
                            value={item.value}
                            onchange={(value) => { item.setState(value.target.value) }} />
                    </div>
                )
            })}

            <div className='col-12 mt-5'>
                <Botao
                    id="btn-submit"
                    className="btn-primary btn-lg shadow mb-4"
                    texto="Guardar"
                    onClick={() => props.onClick()} />
            </div>
        </CardForm>
    );
}