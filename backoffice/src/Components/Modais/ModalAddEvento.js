import React from 'react';

import Input from '../Input';

export default function ModalAddEvento(props) {
    return (
        <div className='row align-self-center'>
            <div className="modal fade" id={props.idModal} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Adicionar Evento</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <div className="input-group align-self-center">
                                <Input id="nomeEvento" placeholder="Nome do Evento" onchange={(value) => console.log(value.target.value)} />
                            </div>

                            <div className="input-group mt-4">
                                <Input id="dataEvento" placeholder="Data do Evento" pattern="(?:(?:31(-)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(-)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(-)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(-)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{4})" onchange={(value) => console.log(value.target.value)} />
                            </div>

                            <div className="input-group mt-4">
                                <Input type="number" id="limitePessoas" placeholder="Limite de pessoas" min="1" onchange={(value) => console.log(value.target.value)} />
                            </div>

                            <div className="mt-4">
                                <textarea className="form-control" placeholder="Descrição" id="descricao" rows="3" onChange={(value) => console.log(value.target.value)} />
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                            <button type="button" className="btn btn-primary" onClick={() => console.log('Submeter')}>Submeter</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}