import React, { useEffect, useState } from 'react'
import { Navigate, BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import auth from './Auth/auth.service';
import axios from 'axios'
import jwt_decode from 'jwt-decode';
import dev from './Auth/dev';

//Exportação de todas as páginas feitas
import Pages from './Pages/index'

const ip = process.env.REACT_APP_IP

// todo: colocar o payload do jwt no local storage (pra ficar acessivel a todas as paginas)

export default function App() {

	const [login, setLogin] = useState(auth.valid())
	useEffect(() => { dev.log('login: ' + login) }, [login])

	useEffect(() => {
		dev.log('✅ App()')
		dev.log(
			'%cÉ normal que as mensagens apareçam 2x!',
			'background-color: brown; color: gold; padding: 0 0.5rem;',
			'\nhttps://reactjs.org/docs/strict-mode.html')

		auth.login('email', 'password')
		console.log('valid', auth.valid())

	}, [])

	function ProtectedRoute({ path, children }) {
		return login ? children : <Navigate to='/login' />
	}

	return (
		<Router>
			<Routes>

				<Route path='login' element={<Pages.Login />} />
				
				<Route
					path='/' element={
					<ProtectedRoute>
						<Pages.Teste />
					</ProtectedRoute>
					}
				/>
			</Routes>
		</Router>
	);
}

