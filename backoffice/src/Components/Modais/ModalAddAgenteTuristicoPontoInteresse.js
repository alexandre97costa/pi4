import React, { useState } from 'react';

import MiniCard from '../Cards/MiniCard';

//Imagem de exemplo
import jardimMaes from '../../Assets/Images/jardimMaes.jpg'
import Botao from '../Botao';

export default function ModalAddAgenteTuristicoPontoInteresse(props) {
    const [select, setSelect] = useState([])

    let array = select

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

    function axiosPost() {
        console.log(select)
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
                                        <MiniCard imagem={jardimMaes} id={item.id} title={item.nome} onChange={(value, flag) => {
                                            if(!flag)
                                                return array.splice(array.indexOf(value), 1)

                                            array.push(value)
                                            setSelect(array)
                                        }} />
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                    <div className="modal-footer">
                        <Botao className="btn-secondary" dismiss="modal" texto="Fechar"/>
                        <Botao texto="Validar" onClick={() => axiosPost()}/>
                    </div>
                </div>
            </div>
        </div>
    );
}