import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import axios from 'axios'
import jwt_decode from "jwt-decode";

//Exportação de todas as páginas feitas
import Pages from "./Pages/index"

const ip = process.env.REACT_APP_IP

// todo: colocar o payload do jwt no local storage (pra ficar acessivel a todas as paginas)

export default function App() {

	const [decodedToken, setDecodedToken] = useState()
	const [token, setToken] = useState()

	useEffect(() => {
		console.log("✅ App()")
		console.log("%cÉ normal que as mensagens apareçam 2x!", "background-color: brown; color: gold; padding: 0 0.5rem;")

		axios
			.post(ip + '/user/login',
				{
					email: "email",
					password: "password"
				})
			.then(r => { 
				setToken(r.data.token)
				setDecodedToken(jwt_decode(r.data.token)); 
				// console.log(r.data.token) 
				console.log('%cLogged in!', 'color: lime; background-color: darkgreen; padding: 0.5rem;')
			})
			.catch(e => { console.log('%c' + e.response.data, 'color: tomato; background-color: darkred; padding: 0.5rem;') })

	}, [])

	// useEffect(() => { console.log(token) }, [token])
	// useEffect(() => { console.log(decodedToken) }, [decodedToken])

	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={<Pages.Teste token={token} decodedToken={decodedToken} />}
				/>
			</Routes>
		</Router>
	);
}

