import React from 'react';

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
                                <input type="text" className="form-control" placeholder="Nome do Evento"
                                    aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                            </div>

                            <div className="input-group mt-4">
                                <input type="text" className="form-control" placeholder="Data do Evento"
                                    aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                            </div>

                            <div className="input-group mt-4">
                                <input type="text" className="form-control" placeholder="Limite de pessoas"
                                    aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                            </div>

                            <div className="mt-4">
                                <textarea className="form-control" placeholder="Descrição" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                            <button type="button" className="btn btn-primary">Submeter</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}