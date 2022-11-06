import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//Exportação de todas as páginas feitas
import Pages from "./Pages/index"

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

