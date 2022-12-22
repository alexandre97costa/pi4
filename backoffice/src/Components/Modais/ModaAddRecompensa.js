import React from 'react';

export default function ModalAddRecompensa(props) {
    return (
        <div className='row align-self-center'>
            <div className="modal fade" id={props.idModal} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Adicionar Recompensa</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <div className="input-group align-self-center">
                                <input type="text" className="form-control" placeholder="Nome da Recompensa"
                                    aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                            </div>

                            <div className="input-group mt-4">
                                <input type="text" className="form-control" placeholder="Pontos"
                                    aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                            </div>

                            <div className="input-group mt-4">
                                <input type="text" className="form-control" placeholder="Imagem"
                                    aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
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