import React, { useEffect } from 'react'
import { Navigate, BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import auth from './Auth/auth.service';
import dev from './Auth/dev';

//Exportação de todas as páginas feitas
import Page from './Helpers/Page';
import Pages from './Pages/index'

const LOGIN_OVERRIDE = process.env.REACT_APP_LOGIN_OVERRIDE
let agente_turistico = [
	{ icon: "speedometer2", text: "Dashboard", path: "/" },
	{ icon: "geo-alt", text: "Pontos de Interesse", path: "/teste" },
	{ icon: "calendar4-event", text: "Eventos", path: "/" },
	{ icon: "gift", text: "Recompensas", path: "/" }
]

// todo: colocar o payload do jwt no local storage (pra ficar acessivel a todas as paginas)

export default function App() {

	useEffect(() => {
		dev.log('✅ App()')
		dev.log(
			'%cÉ normal que as mensagens apareçam 2x!',
			'background-color: brown; color: gold; padding: 0 0.5rem;',
			'\nhttps://reactjs.org/docs/strict-mode.html')
	}, [])

	function ProtectedRoute({ children }) {
		const location = useLocation()
		return auth.valid() || !!LOGIN_OVERRIDE ?
			children :
			<Navigate to={'/login'} state={{ from: location.pathname }} />
	}

	return (
		<BrowserRouter>
			<Routes>
				<Route exact path='/login' element={<Pages.Login />} />

				<Route
					path='/'
					element={
						<Page
							userType={"Agente Turístico"}
							userName={"Joaquim"}
							menu={agente_turistico}
							selected={0}
							title={"Olá, Joaquim!"}
						>
							<Pages.Teste />
						</Page>
					}
				/>
				<Route
					path='/teste'
					element={
						<ProtectedRoute>
							<Page
								userType={"Agente Turístico"}
								userName={"Joaquim"}
								menu={agente_turistico}
								selected={0}
								title={"Olá, Joaquim!"}
							>
								<Pages.Teste />
							</Page>
						</ProtectedRoute>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

