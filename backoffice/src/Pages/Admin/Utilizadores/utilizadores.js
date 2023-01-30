import React, { useEffect, useState } from 'react';
import axios from 'axios'
import auth from '../../../Auth/auth.service';

import Dropdown from "../../../Components/Dropdown";
import CardForm from '../../../Components/CardForm';
import ModalSelectCategoria from '../../../Components/Modais/ModalSelectCategoria';

const ip = process.env.REACT_APP_IP

export default function Utilizadores() {
	const tipos = [
		"Todos",
		"Visitante",
		"Agente Turístico",
		"Responsavel de Região",
		"Administrador",
	]

	const [utilizadores, setUtilizadores] = useState([])

	const [limit, setLimit] = useState(5)
	const [offset, setOffset] = useState(0)
	const [tipo, setTipo] = useState(3)

	let params = [
		'?tipo_utilizador_id=' + tipo,
		'&offset=' + offset,
		'&limit=' + limit
	]

	useEffect(() => {
		axios
            .get(ip + '/utilizador' + params.join(''), auth.header())
            .then(output => {
                console.log(output)
                setUtilizadores(output.data?.data ?? [])
            })
            .catch(error => console.error(error))
	}, [limit, offset, tipo])

	return (
		<>
			<div className="row gap-3">
				<div className="col-12">Filtros:</div>
				<div className='col-3'>
					<Dropdown tipos={tipos} onChange={e => setTipo(e.value)} />
				</div>
				<button
					className='btn btn-primary'
					onClick={e => setLimit(limit + 1)}
				>Mudar Limite</button>
			</div>
			<div className="row mb-5 mt-3">
				<div className="col-12">
					{/* tabela */}
					<CardForm>
						<div className="table-responsive">
							<table className="table text-start align-middle">
								<thead>
									<tr>
										<th className='fw-semibold' scope="col">Nome</th>
										<th className='fw-semibold' scope="col">Tipo de Utilizador</th>
									</tr>
								</thead>

								<tbody className='table-group-divider'>
									{utilizadores.length !== 0 &&
										utilizadores.map((item, index) => {
											return (
												<tr key={index} className="">
													<td className='text-start w-50'>
														{item.nome}
													</td>
													<td className='w-50 '>
														<div className='d-flex gap-3 w-100'>
															{/* tipo */}
															<div className={'px-4 py-2 text-white rounded-2 flex-grow-1 d-flex align-items-center '  }>
																<i className={'bi me-4 fs-5 text-white justify-self-start '}></i>
																<span className=''>
																	{item.tipo_utilizador.nome}
																</span>
															</div>
															{/* Editar */}
															<button className='btn btn-outline-secondary' data-bs-toggle="modal" data-bs-target={"#" + item.nome.replace(/\s+/g, "") + index}>
																<i className='bi bi-pencil-fill me-2'></i>
																Mudar tipo
															</button>
															{/* Eliminar */}
															<button className='btn btn-outline-danger'>
																<i className='bi bi-trash-fill me-2'></i>
																Eliminar
															</button>
														</div>
														<ModalSelectCategoria idModal={item.nome.replace(/\s+/g, "") + index} nome={item.nome} regiao={item.regiao} id={item.id} />
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
		</>
	);
}
