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
						<Page>
							<Pages.GerirVantagensApp />
						</Page>
					}
				/>
				<Route
					path='/gerirMicrosite'
					element={
						<Page>
							<Pages.GerirMicrosite />
						</Page>
					}
				/>
				<Route
					path='/gerirDescarregarApp'
					element={
						<Page>
							<Pages.GerirDescarregarApp />
						</Page>
					}
				/>
				<Route
					path='/gerirEditarFooter'
					element={
						<Page>
							<Pages.GerirEditarFooter />
						</Page>
					}
				/>
				<Route
					path='/gerirMenu'
					element={
						<Page>
							<Pages.GerirMenu />
						</Page>
					}
				/>
				<Route
					path='/gerirHeroBanner'
					element={
						<Page>
							<Pages.GerirHeroBanner />
						</Page>
					}
				/>
				<Route
					path='/gerirPublicidadeAgenteTuristico'
					element={
						<Page>
							<Pages.GerirPublicidadeAgenteTuristico />
						</Page>
					}
				/>
				<Route
					path='/gerirAdicionarCards'
					element={
						<Page>
							<Pages.GerirAdicionarCards />
						</Page>
					}
				/>
				<Route
					path='/gerirEditarFooter'
					element={
						<Page>
							<Pages.GerirEditarFooter />
						</Page>
					}
				/>

				
				<Route
					path='/atRecompensas'
					element={
						<Page>
							<Pages.ATRecompensas />
						</Page>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

