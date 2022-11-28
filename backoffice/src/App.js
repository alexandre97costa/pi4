import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import dev from './Auth/dev';

//Exportação de todas as páginas feitas
import VisibleTo from './Helpers/VisibleTo';
import ProtectedRoute from './Helpers/ProtectedRoute';
import Page from './Helpers/Page';
import Pages from './Pages/index'

// todo: colocar o payload do jwt no local storage (pra ficar acessivel a todas as paginas)

export default function App() {

	useEffect(() => {
		dev.log('✅ App()')
		dev.log(
			'%cÉ normal que as mensagens apareçam 2x!',
			'background-color: brown; color: gold; padding: 0 0.5rem;',
			'\nhttps://reactjs.org/docs/strict-mode.html')
	}, [])

	return (
		<BrowserRouter>
			<Routes>
				<Route exact path='/login' element={<Pages.Login />} />

				<Route
					path='/'
					element={
						<ProtectedRoute>
							<Page
								// title={'Olá ' + nome + '!'}
								title={'Pontos de Interesse'}
								icon='emoji-smile'
							>
								<Pages.Teste />
							</Page>
						</ProtectedRoute>
					}
				/>
				<Route
					path='/teste'
					element={
						<ProtectedRoute>
							<Page>
								<Pages.Teste />
							</Page>
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
							title={"Gerir Microsite"}
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
							title={"Gerir Microsite"}
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
							title={"Gerir Microsite"}
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
							title={"Gerir Microsite"}
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
							title={"Gerir Microsite"}
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

