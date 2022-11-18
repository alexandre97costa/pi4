import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import axios from 'axios'
import jwt_decode from "jwt-decode";
import dev from './Auth/dev';

//Exportação de todas as páginas feitas
import Pages from "./Pages/index"

const ip = process.env.REACT_APP_IP

// todo: colocar o payload do jwt no local storage (pra ficar acessivel a todas as paginas)

export default function App() {

	useEffect(() => {
		dev.log("✅ App()")
		dev.log(
			"%cÉ normal que as mensagens apareçam 2x!",
			"background-color: brown; color: gold; padding: 0 0.5rem;",
			"\nhttps://reactjs.org/docs/strict-mode.html")


		axios
			.post(ip + '/user/login',
				{
					email: "email",
					password: "password"
				})
			.then(res => {
				const token = res.data.token
				const payload = jwt_decode(res.data.token)

				localStorage.setItem('utilizador', JSON.stringify(payload))
				localStorage.setItem('token', token)

				dev.log('%cLogged in!', 'color: lime; background-color: darkgreen; padding: 0.5rem;')
			})
			.catch(e => { dev.log('%c' + e, 'color: tomato; background-color: darkred; padding: 0.5rem;') })
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

