import React from 'react'

import ModalNewPontoInteresse from '../Modais/ModalNewPontoInteresse';
import ModalAddAgenteTuristicoPontoInteresse from '../Modais/ModalAddAgenteTuristicoPontoInteresse'

export default function CardAdd(props) {
  function callModal(nome) {
    if (nome === 'newPontoInteresse')
      return (
        <ModalNewPontoInteresse idModal={props.idModal} title="Nome do Ponto de Interesse" morada="Localização" descricao="Descrição" cabecalho="Tipo de Ponto de Interesse" />
      )
    if (nome == 'addAgenteTuristicoPontoInteresse')
      return (
        <ModalAddAgenteTuristicoPontoInteresse idModal={props.idModal} />
      )
  }

  return (
    <>
      <div className="card border-0 shadow h-100 cursor-pointer"
        data-bs-toggle="modal" data-bs-target={'#' + props.idModal}>
        <div className="text-success text-center my-auto">
          <i className="bi-plus-lg fs-1 "></i>
          <h5 className="card-title">{props.title}</h5>
        </div>
      </div>

      {callModal(props.nomeModal)}
    </>
  );
}