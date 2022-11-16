import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import axios from 'axios'
import jwt_decode from "jwt-decode";
import ip from './ip'

//Exportação de todas as páginas feitas
import Pages from "./Pages/index"

export default function App() {

	useEffect(() => {
		console.log("✅ App()")
		console.log("%cÉ normal que as mensagens apareçam 2x!", "background-color: brown; color: gold; padding: 0 0.5rem;")

		axios
			.post(ip + '/user/login',
				{
					email: "email",
					password: "password"
				})
			.then(r => console.log(jwt_decode(r.data.token)))
			.catch(e => { console.log('%c' + e.response.data.message, 'color: tomato; background-color: darkred; padding: 1rem;') })

	}, [])

	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={<Pages.Teste />}
				/>
			</Routes>
		</Router>
	);
}

