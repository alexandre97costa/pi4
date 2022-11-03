import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom'

//Exportação de todas as páginas feitas
import Pages from "./Pages/index"
import Utilities from './Utilities/index';


let agente_turistico = [
	{ icon: "asterisk", text: "1º item", },
	{ icon: "asterisk", text: "2º item", },
	{ icon: "asterisk", text: "3º item", },
	{ icon: "asterisk", text: "4º item", },
	{ icon: "asterisk", text: "5º item", },
]

export default function App() {
	return (
		<Router>
			<Routes>
				<Route
					exact path='/'
					element={
						<Utilities.TemplatePagina
							userType={"Agente Turístico"}
							userName={"Joaquim"}
							menu={agente_turistico}
						>
							<div className='row row-cols-2'>
								<div className='col'>
									<div className='border bg-white p-3 shadow rounded-4'>
										teste
									</div>
								</div>
							</div>
						</Utilities.TemplatePagina>
					}
				/>
			</Routes>
		</Router>
	);
}

