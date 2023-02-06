import React, { useEffect, useState } from 'react';
import axios from 'axios'
import auth from '../../../Auth/auth.service';

import Dropdown from '../../../Components/Dropdown';
import Pagination from '../../../Components/Pagination';
import Input from '../../../Components/Input';
import CardForm from '../../../Components/CardForm';
import ModalSelectCategoria from '../../../Components/Modais/ModalSelectCategoria';
import dev from '../../../Auth/dev';
import { useParams } from 'react-router-dom';
import DropdownSelect from '../../../Components/DropdownSelect';

const ip = process.env.REACT_APP_IP
const maxRecords = process.env.REACT_APP_MAX_RECORDS

export default function Utilizadores() {

	const [tipos, setTipos] = useState([])
	const [utilizadores, setUtilizadores] = useState([])
	const [utilizadoresCount, setUtilizadoresCount] = useState(0)

	const { tipoId } = useParams()
	// filtros
	const [tipo, setTipo] = useState(tipoId)
	const [nome, setNome] = useState('')

	// pagination
	const [limit, setLimit] = useState(maxRecords)
	const [offset, setOffset] = useState(0)


	useEffect(() => {
		// tipos
		axios
			.get(ip + '/tipos/utilizador', auth.header())
			.then(output => {
				setTipos([{
					label: 'Todos',
					value: 0
				},
				...output.data?.tipos.map(t => {
					return {
						label: t.nome,
						value: t.id
					}
				})]
				)
				// ['Todos', ...output.data?.tipos.map(t => t.nome)] ?? []) })

				getUtilizadores()
			})
	}, [])

	useEffect(() => {
		setOffset(0) // volta à primeira pagina
		getUtilizadores() // re
	}, [nome, tipo, offset]) // ir adicionando aqui os hooks dos filtros


	async function getUtilizadores() {
		console.log("tipo: " + tipo)
		console.log("offset: " + offset)

		let options = {
			...auth.header(),
			params: {
				tipo_utilizador_id: tipo,
				nome,
				offset,
				limit
			},
		}

		await axios
			.get(ip + '/utilizador', options)
			.then(output => {
				setUtilizadores(output.data?.data ?? [])
				setUtilizadoresCount(output.data?.count ?? 10)
			})
			.catch(error => {
				if (error.response.status === 404) {
					setUtilizadores([])
					setUtilizadoresCount(0)
				}
			})

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
			<div className='row row-cols-4 gap-0 mb-3'>
				<Input label='Nome' onChange={e => setNome(e.target.value)} />
				<DropdownSelect selectedValue={tipoId} items={tipos} onChange={(item) => setTipo(item)} />
				{/* <Dropdown default={3} items={tipos} onChange={(item, index) => setTipo(index)} /> */}
			</div>
			<div className='row mb-4'>
				<div className='col-12'>
					{/* tabela */}
					<CardForm className='py-2'>
						<div className='table-responsive'>
							<table className='table text-start align-middle'>
								<thead>
									<tr>
										<th className='fw-semibold' scope='col'>Nome</th>
										<th className='fw-semibold' scope='col'>Tipo de Utilizador</th>
									</tr>
								</thead>

								<tbody className='table-group-divider'>
									{utilizadores.length !== 0 ?
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
										})
										:
										<tr>
											<div className='pt-3 text-muted fw-light fst-italic'>
												Não existem utilizadores que correspondam aos filtros inseridos.
											</div>
										</tr>
									}
								</tbody>
							</table>
						</div>
					</CardForm>
				</div>
			</div>
			<div className='row mb-5 justify-content-end'>
				<div className='col-3 d-flex justify-content-end'>
					<Pagination
						recordCount={utilizadoresCount}
						startIndex={limit - (offset + 1)}
						onChange={i => { console.log('i', i); setOffset(limit * (i - 1)) }}
					/>
				</div>
			</div>
		</>
	);
}