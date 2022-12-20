import React from 'react'


export default function ModalNewPontoInteresse(props) {
    const TiposPontoInteresse = [{
        id: 1,
        nome: 'Restaurante'
    }, {
        id: 2,
        nome: 'Museu'
    }]

    function axiosPostPontoInteresse() {
        //Aqui fazemos o post na api
    }

    function axiosGetTiposPontoInteresse() {
        //Aqui fazemos o pedido api para sabermos quais pontos de interesse existem
    }

    return (
        <>
            <div className="modal fade" id={props.idModal} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Adicionar ponto de interesse</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="card border border-0 mb-3 p-0">
                                <div className="input-group align-self-center">
                                    <input type="text" className="form-control" placeholder={props.title}
                                        aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                                </div>

                                <div className="input-group mt-4">
                                    <input type="text" className="form-control" placeholder={props.morada}
                                        aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                                </div>

                                <div className="mt-4">
                                    <textarea className="form-control" placeholder={props.descricao} id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>

                                <select defaultValue="1" className="form-select mt-4" onChange={(value) => console.log(value.target.value)}>
                                    <option defaultValue="0">{props.cabecalho}</option>
                                    {TiposPontoInteresse.map((item,index) => {
                                        return(
                                            <option key={index} defaultValue={item.id}>{item.nome}</option>
                                        )
                                    })}
                                </select>

                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                            <button type="button" className="btn btn-primary">Submeter</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

