import React from 'react';
import axios from 'axios'
import auth from '../../Auth/auth.service';

import Botao from '../Botao';
import VisibleTo from "../../Helpers/VisibleTo";

const ip = process.env.REACT_APP_IP

export default function ModalSelectCategoria(props) {

    async function axiosChangeTipoUtilizador(tipo) {
        const url = ip + '/utilizador/' + props.id + '/tipo'

        const data = {
            novo_tipo: tipo
        }

        await axios
            .patch(url, data, auth.header())
            .then((output) => {
                console.log(output.data)
                props.onChange()
            }).catch((error) => console.log(error))
    }

    return (
        <div className="modal fade" id={props.idModal} tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content border border-secondary">
                    <div className="modal-header bg-modais">
                        <h1 className="modal-title fs-5 text-white" id="modalLabel">Selecionar Categoria</h1>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body text-center">
                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='col-6 text-center align-self-center'>
                                    <h4 className='fw-bold'>{props.nome}</h4>
                                    <h5 className='fw-light'>{props.regiao}</h5>
                                </div>
                                <div className='col-6 border-start border-2'>
                                    <div className='row'>
                                        <div className='col-12'>
                                            <VisibleTo tipo={4}>
                                                <Botao className="btn-light w-100 my-4" texto="Responsável Região" dismiss="modal" label="Close" onClick={(value) => axiosChangeTipoUtilizador(3)} />
                                            </VisibleTo>
                                            <Botao className="btn-light w-100 mb-4" texto="Agente Turístico" dismiss="modal" label="Close" onClick={(value) => axiosChangeTipoUtilizador(2)} />
                                            <Botao className="btn-light w-100 mb-4" texto="Visitante" dismiss="modal" label="Close" onClick={(value) => axiosChangeTipoUtilizador(1)} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}