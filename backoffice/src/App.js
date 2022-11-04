import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//Exportação de todas as páginas feitas
import Pages from "./Pages/index"

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
					path="/teste"
					element={<Pages.Teste />}
				/>
			</Routes>
		</Router>
	);
}

