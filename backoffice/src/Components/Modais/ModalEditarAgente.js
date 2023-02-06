import React from 'react';

import TabelaEditarAgente from '../Tabelas/TabelaEditarAgente';

export default function ModalEditarAgente(props) {
    return (
        <div className="modal fade" id={props.idModal} tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl modal-dialog-scrollable">
                <div className="modal-content border border-secondary">
                    <div className="modal-header bg-modais">
                        <h1 className="modal-title fs-5 text-white" id="modalLabel">Alterar Agente Turístico</h1>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body text-center">
                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='col-12'>
                                    <TabelaEditarAgente pontoInteresseId={props.pontoInteresseId} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
