import React from 'react'

import ModalNewPontoInteresse from '../Modais/ModalNewPontoInteresse';
import ModalAddAgenteTuristicoPontoInteresse from '../Modais/ModalAddAgenteTuristicoPontoInteresse'
import ModalAddEvento from '../Modais/ModalAddEvento';
import ModalAddRecompensa from '../Modais/ModaAddRecompensa';

export default function AddCard(props) {
	function callModal(nome) {
		if (nome === 'newPontoInteresse')
			return (
				<ModalNewPontoInteresse
					idModal={props.idModal}
					title="Nome do Ponto de Interesse"
					morada="Localização"
					descricao="Descrição"
					cabecalho="Tipo de Ponto de Interesse"
					onSubmit={() => props.onSubmit()}
				/>
			)
		if (nome === 'addAgenteTuristicoPontoInteresse')
			return (
				<ModalAddAgenteTuristicoPontoInteresse idModal={props.idModal} />
			)
		if (nome === 'addEvento')
			return (
				<ModalAddEvento onChange={() => props.onChange()} idModal={props.idModal} />
			)
		if (nome === 'addRecompensa')
			return (
				<ModalAddRecompensa idModal={props.idModal} />
			)
	}

	return (
		<>
			<div className="card border-0 shadow rounded-4 h-100 cursor-pointer p-4"
				data-bs-toggle="modal" data-bs-target={'#' + props.idModal}>
				<div className="text-success text-center my-auto">
					<i className="bi-plus-lg fs-1 "></i>
					<div className="h4">{props.title}</div>
				</div>
			</div>

			{callModal(props.nomeModal)}
		</>
	)
}