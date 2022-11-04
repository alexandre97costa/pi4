import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom'

//Exportação de todas as páginas feitas
import Pages from "./Pages/index"
import Utilities from './Utilities/index';




let agente_turistico = [
	{ icon: "speedometer2", 	text: "Dashboard", 				path: "/"},
	{ icon: "geo-alt", 			text: "Pontos de Interesse", 	path: "/teste"},
	{ icon: "calendar4-event", 	text: "Eventos", 				path: "/"},
	{ icon: "gift", 			text: "Recompensas", 			path: "/"}
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
							selected={0}
							title={"Olá, Joaquim!"}
						>
							<div className='bg-danger vh-100'>
								teste à sidebar com conteúdo muito comprido
							</div>
						</Utilities.TemplatePagina>
					}
				/>
				<Route 
					path="/teste"
					element={ <div>teste</div> }
				/>
			</Routes>
		</Router>
	);
}

