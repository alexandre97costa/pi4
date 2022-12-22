import React from 'react';

import MiniCard from '../Cards/MiniCard';

//Imagem de exemplo
import jardimMaes from '../../Assets/Images/jardimMaes.jpg'

export default function ModalAddAgenteTuristicoPontoInteresse(props) {
    const teste = [{
        id: 1,
        nome: 'Forninho da mimi'
    }, {
        id: 2,
        nome: 'Museu Viriato'
    }, {
        id: 3,
        nome: 'Mesa da Sé'
    }]

    function axiosGetPontosInteresse() {
        //Aqui vamos buscar os pontos de interesse sem agentes associados
    }

    return (
        <div className="modal fade" id={props.idModal} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Adicionar ponto Turistico</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">

                        <div className='row'>
                            {teste.map((item, index) => {
                                return(
                                    <div key={index} className='col-12 col-sm-6 col-md-2 mb-3'>
                                        <MiniCard imagem={jardimMaes} id={item.id} title={item.nome} />
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                        <button type="button" className="btn btn-primary">Validar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}