import React, { useEffect, useState } from 'react'
import { Navigate, BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import auth from './Auth/auth.service';
import axios from 'axios'
import jwt_decode from 'jwt-decode';
import dev from './Auth/dev';

//Exportação de todas as páginas feitas
import Pagina from './Helpers/Pagina';
import Pages from './Pages/index'

const ip = process.env.REACT_APP_IP

let agente_turistico = [
    { icon: "speedometer2", text: "Dashboard", path: "/" },
    { icon: "geo-alt", text: "Pontos de Interesse", path: "/teste" },
    { icon: "calendar4-event", text: "Eventos", path: "/" },
    { icon: "gift", text: "Recompensas", path: "/" }
]

// todo: colocar o payload do jwt no local storage (pra ficar acessivel a todas as paginas)

export default function App() {

	const [login, setLogin] = useState(auth.valid())
	// useEffect(() => { dev.log('login: ' + login) }, [login])

	useEffect(() => {
		dev.log('✅ App()')
		dev.log(
			'%cÉ normal que as mensagens apareçam 2x!',
			'background-color: brown; color: gold; padding: 0 0.5rem;',
			'\nhttps://reactjs.org/docs/strict-mode.html')
	}, [])

	function ProtectedRoute({ children, path }) {
		return login ? children : <Navigate to='/login' />
	}

	return (
		<Router>
			<Routes>

				<Route path='/login' element={<Pages.Login />} />

				<Route
					path='/'
					element={
						<ProtectedRoute>
							<Pagina
								userType={"Agente Turístico"}
								userName={"Joaquim"}
								menu={agente_turistico}
								selected={0}
								title={"Olá, Joaquim!"}
							>
								<Pages.Teste />
							</Pagina>
						</ProtectedRoute>
					}
				/>
				<Route
					path='/teste'
					element={
						<ProtectedRoute>
							<Pages.Teste />
						</ProtectedRoute>
					}
				/>
			</Routes>
		</Router>
	);
}

