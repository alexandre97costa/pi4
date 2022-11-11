import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//Exportação de todas as páginas feitas
import Pages from "./Pages/index"

export default function App() {

	useEffect(() => {
        console.log("✅ App()")
        console.log("%cÉ normal que as mensagens apareçam 2x!", "background-color: brown; color: gold; padding: 0 0.5rem;")
    }, [])

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

