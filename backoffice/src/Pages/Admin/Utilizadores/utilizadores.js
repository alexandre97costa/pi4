import React, { useEffect, useState } from 'react';
import axios from 'axios'

import Dropdown from "../../../Components/Dropdown";
import TabelaUtilizadores from "../../../Components/Tabelas/TabelaUtilizadores";
import auth from '../../../Auth/auth.service';

const ip = process.env.REACT_APP_IP

export default function Utilizadores() {
	const tipos = [
		"Todos", 
		"Visitante",
		"Agente Turístico",
		"Responsavel de Região", 
		"Administrador", 
	]

	const [limit, setLimit] = useState(10)
	const [offset, setOffset] = useState(0)
	const [tipo, setTipo] = useState(1)

	function refreshTable() {

		let params = [
			'?tipo_utilizador_id=' + tipo,
			'&offset=' + offset,
			'&limit=' + limit
		]

		return params.join('')
	}

	useEffect(() => {
		console.log(limit)
		refreshTable()
	}, [limit, offset, tipo])

	return (
		<>
			<div className="row">
				<div className="col-12">
					<div className="mb-3">Filtros: </div>
					<Dropdown tipos={tipos} onChange={e => setTipo(e.value)} />
				</div>
				<button
					className='btn btn-primary'
					onClick={e => setLimit(limit + 1)}
				>Mudar Limite</button>
			</div>
			<div className="row mb-5 mt-3">
				<div className="col-12">
					<TabelaUtilizadores params={refreshTable()} />
				</div>
			</div>
		</>
	);
}
