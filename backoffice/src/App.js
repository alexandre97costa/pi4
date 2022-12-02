import React, { useEffect } from 'react'
import { Navigate, BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import auth from './Auth/auth.service';
import dev from './Auth/dev';

//Exportação de todas as páginas feitas
import Pagina from './Helpers/Pagina';
import Pages from './Pages/index'

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
		return auth.valid() ?
			children :
			<Navigate to={'/login'} state={{ from: location.pathname }} />
	}

	return (
		<BrowserRouter>
			<Routes>

				<Route path='/login' element={<Pages.Login />} />

				<Route
					path='/'
					element={
						<Pagina
							userType={"Agente Turístico"}
							userName={"Joaquim"}
							menu={agente_turistico}
							selected={0}
							title={"Olá, Joaquim!"}
						>
							<Pages.Teste />
						</Pagina>
					}
				/>
				<Route
					path='/teste'
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
					path='/gerirVantagensApp'
					element={
						<Pagina
							userType={"Agente Turístico"}
							userName={"Joaquim"}
							menu={agente_turistico}
							selected={0}
							title={""}
						>
							<Pages.GerirVantagensApp />
						</Pagina>
					}
				/>
				<Route
					path='/gerirMicrosite'
					element={
						<Pagina
							userType={"Agente Turístico"}
							userName={"Joaquim"}
							menu={agente_turistico}
							selected={0}
							title={""}
						>
							<Pages.GerirMicrosite />
						</Pagina>
					}
				/>
				<Route
					path='/gerirDescarregarApp'
					element={
						<Pagina
							userType={"Agente Turístico"}
							userName={"Joaquim"}
							menu={agente_turistico}
							selected={0}
							title={""}
						>
							<Pages.GerirDescarregarApp />
						</Pagina>
					}
				/>
				<Route
					path='/gerirEditarFooter'
					element={
						<Pagina
							userType={"Agente Turístico"}
							userName={"Joaquim"}
							menu={agente_turistico}
							selected={0}
							title={""}
						>
							<Pages.GerirEditarFooter />
						</Pagina>
					}
				/>
				<Route
					path='/gerirMenu'
					element={
						<Pagina
							userType={"Agente Turístico"}
							userName={"Joaquim"}
							menu={agente_turistico}
							selected={0}
							title={""}
						>
							<Pages.GerirMenu />
						</Pagina>
					}
				/>
				<Route
					path='/gerirHeroBanner'
					element={
						<Pagina
							userType={"Agente Turístico"}
							userName={"Joaquim"}
							menu={agente_turistico}
							selected={0}
							title={""}
						>
							<Pages.GerirHeroBanner />
						</Pagina>
					}
				/>
				<Route
					path='/gerirPublicidadeAgenteTuristico'
					element={
						<Pagina
							userType={"Agente Turístico"}
							userName={"Joaquim"}
							menu={agente_turistico}
							selected={0}
							title={""}
						>
							<Pages.GerirPublicidadeAgenteTuristico />
						</Pagina>
					}
				/>
				<Route
					path='/gerirAdicionarCards'
					element={
						<Pagina
							userType={"Agente Turístico"}
							userName={"Joaquim"}
							menu={agente_turistico}
							selected={0}
							title={""}
						>
							<Pages.GerirAdicionarCards />
						</Pagina>
					}
				/>
				<Route
					path='/gerirEditarFooter'
					element={
						<Pagina
							userType={"Agente Turístico"}
							userName={"Joaquim"}
							menu={agente_turistico}
							selected={0}
						>
							<Pages.GerirEditarFooter />
						</Pagina>
					}
				/>

				
				<Route
					path='/atRecompensas'
					element={
						<Pagina
							userType={"Agente Turístico"}
							userName={"Joaquim"}
							menu={agente_turistico}
							selected={0}
						>
							<Pages.ATRecompensas />
						</Pagina>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

