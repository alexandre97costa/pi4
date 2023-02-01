import React, { useEffect, useState } from 'react';
import axios from 'axios'
import auth from '../../../Auth/auth.service';

import Dropdown from '../../../Components/Dropdown';
import Pagination from '../../../Components/Pagination';
import CardForm from '../../../Components/CardForm';
import ModalSelectCategoria from '../../../Components/Modais/ModalSelectCategoria';

const ip = process.env.REACT_APP_IP

export default function Utilizadores() {

	const [tipos, setTipos] = useState([])
	const [utilizadores, setUtilizadores] = useState([])
	const [utilizadoresCount, setUtilizadoresCount] = useState(0)

	const [limit, setLimit] = useState(5)
	const [offset, setOffset] = useState(0)
	const [tipo, setTipo] = useState(3)

	let params = [
		'?tipo_utilizador_id=' + tipo,
		'&offset=' + offset,
		'&limit=' + limit
	]

	useEffect(() => {
		// tipos
		axios
			.get(ip + '/tipos/utilizador', auth.header())
			.then(output => { setTipos(['Todos', ...output.data?.tipos.map(t => t.nome)] ?? []) })

		getUtilizadores()
	}, [])


	useEffect(() => {
		getUtilizadores()
		setOffset(0)
	}, [tipo, offset]) // ir adicionando aqui os hooks dos filtros


	async function getUtilizadores() {
		await axios
			.get(ip + '/utilizador' + params.join(''), auth.header())
			.then(output => {
				setUtilizadores(output.data?.data ?? [])
				setUtilizadoresCount(output.data?.count ?? 10)
			})
			.catch(error => console.error(error))

	}

	function tipo_bg(tipo) {

		switch (tipo) {
			case 'Visitante':
				return "bg-visitante"
			case 'Agente Turístico':
				return "bg-agente"
			case 'Responsável de Região':
				return "bg-responsavel"
			case 'Administrador':
				return "bg-admin"

			default:
				return "bg-visitante"

		}
	}

	function tipo_icon(tipo) {

		switch (tipo) {
			case 'Visitante':
				return "bi-phone"
			case 'Agente Turístico':
				return "bi-geo-alt"
			case 'Responsável de Região':
				return "bi-map"
			case 'Administrador':
				return "bi-globe2"

			default:
				return "bg-visitante"

		}
	}

	return (
		<>
			<div className='row gap-3 mb-4'>
				<div className='col-12'>Filtros:</div>
				<div className='col-3'>
					<Dropdown items={tipos} onChange={(item, index) => setTipo(index)} />
				</div>
			</div>
			<div className='row mb-4'>
				<div className='col-12'>
					{/* tabela */}
					<CardForm>
						<div className='table-responsive'>
							<table className='table text-start align-middle'>
								<thead>
									<tr>
										<th className='fw-semibold' scope='col'>Nome</th>
										<th className='fw-semibold' scope='col'>Tipo de Utilizador</th>
									</tr>
								</thead>

								<tbody className='table-group-divider'>
									{utilizadores.length !== 0 &&
										utilizadores.map((item, index) => {
											return (
												<tr key={index} className=''>
													<td className='text-start w-50'>
														{item.nome}
													</td>
													<td className='w-50 '>
														<div className='d-flex gap-3 w-100'>
															{/* tipo */}
															<div className={'px-4 py-2 text-white rounded-2 flex-grow-1 d-flex align-items-center ' + tipo_bg(item.tipo_utilizador.nome)}>
																<i className={'bi me-4 fs-5 text-white justify-self-start ' + tipo_icon(item.tipo_utilizador.nome)}></i>
																<span className=''>
																	{item.tipo_utilizador.nome}
																</span>
															</div>
															{/* Editar */}
															<button className='btn btn-outline-secondary' data-bs-toggle='modal' data-bs-target={'#' + item.nome.replace(/\s+/g, '') + index}>
																<i className='bi bi-pencil-fill me-2'></i>
																Mudar tipo
															</button>
															{/* Eliminar */}
															<button className='btn btn-outline-danger'>
																<i className='bi bi-trash-fill me-2'></i>
																Eliminar
															</button>
														</div>
														<ModalSelectCategoria idModal={item.nome.replace(/\s+/g, '') + index} nome={item.nome} regiao={item.regiao} id={item.id} />
													</td>
												</tr>
											)
										})}
								</tbody>
							</table>
						</div>
					</CardForm>
				</div>
			</div>
			<div className='row mb-5 justify-content-end'>
				<div className='col-3 d-flex justify-content-end'>
					<Pagination
						recordsPerPage={limit}
						recordCount={utilizadoresCount}
						startIndex={limit - (offset + 1)}
						onChange={i => setOffset(limit * (i - 1))}
					/>
				</div>
			</div>
		</>
	);
}
