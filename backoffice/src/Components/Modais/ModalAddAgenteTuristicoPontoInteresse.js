import React, { useRef, useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

    const toastId = useRef(null)

    function dismissToast() {
        toast.dismiss(toastId.current)
    }

    function axiosGetPontosInteresse() {
        //Aqui vamos buscar os pontos de interesse sem agentes associados
    }

    function axiosPost() {
        if(!select.length)
            return toast.warning("Não foram introduzidos quaisquer ponto's de Interesse")

        toast.success("Responsável adicionado com sucesso")
        
        console.log(select)
    }

    return (
        <div className="modal fade" id={props.idModal} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Adicionar ponto Turistico</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => dismissToast()}/>
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
                        <Botao className="btn-secondary" dismiss="modal" texto="Fechar" onClick={() => dismissToast()}/>
                        <Botao texto="Validar" onClick={() => axiosPost()}/>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    );
}