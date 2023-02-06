import React from 'react';

import CardForm from './CardForm';
import Botao from './Botao';
import Input from './Input';

export default function FormEditar(props) {
    return (
        <CardForm>
            {props.itens[0]?.map((item, index) => {
                return (
                    <div key={index}>
                        <Input
                            id={item.id}
                            type={item.type}
                            label={item.nome}
                            className="rounded-3 mb-4"
                            pattern={item.pattern}
                            required={item.required}
                            value={item.value}
                            onChange={(value) => { item.setState(value.target.value) }} />
                    </div>
                )
            })}

            <div className='col-12 mt-3'>
                <Botao
                    id="btn-submit"
                    className="btn-primary btn-lg shadow mb-4"
                    texto="Guardar"
                    onClick={() => props.onClick()} />
            </div>
        </CardForm>
    );
}