import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom'

//Exportação de todas as páginas feitas
import Pages from "./Pages/index"
import Utilities from './Utilities/index';


let agente_turistico = [
	{ icon: "speedometer2", text: "Dashboard", },
	{ icon: "geo-alt", text: "Pontos de Interesse", },
	{ icon: "calendar4-event", text: "Eventos", },
	{ icon: "gift", text: "Recompensas", }
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
							selected={1}
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

