import React from 'react';

import CardForm from './CardForm';
import Input from './Input';
import Botao from './Botao';

export default function FormsMicrosite(props) {
    return (
        <CardForm>
            <div className='container-fluid'>
                <div className='row'>
                    {props.itens.map((item, index) => {
                        return (
                            <>
                                <div className='col-12'>
                                    <label className="fs-5 mb-2 ms-1" htmlFor={item.id}>{item.texto}</label>
                                </div>

                                <div className='col-7 col-sm-8 col-md-9' key={index}>
                                    <Input
                                        id={item.id}
                                        type="text"
                                        className="rounded-3 mb-3"
                                        pattern='^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,63})$'
                                        required={true}
                                        onchange={(value) => { console.log(value.target.value) }} />

                                </div>

                                <div className='col-5 col-sm-4 col-md-3'>
                                    <Botao
                                        id={"btnPencil" + item.id}
                                        type="submit"
                                        className="btn-outline-warning bi bi-pencil-fill"
                                        onClick={() => console.log(item.useState)} />
                                    <Botao
                                        id={"btnDeleteTitulo" + item.id}
                                        type="submit"
                                        className="btn-outline-danger bi bi-trash-fill ms-3"
                                        onClick={() => console.log(item.useState)} />
                                </div>
                            </>
                        )
                    })}

                    <div className='col-3 mt-4'>
                        <Botao
                            id="btn-submit"
                            type="submit"
                            className="btn-primary btn-lg shadow mb-4"
                            texto="Guardar"
                            onClick={() => console.log("Guardar")} />
                    </div>
                </div>
            </div>
        </CardForm>
    );
}