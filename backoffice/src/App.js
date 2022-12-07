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

				<Route exact path='/recuperar' element={<Pages.Recuperar />} />

				<Route exact path='/editar_perfil' element={<Pages.EditarPerfil />} />

				<Route exact path='/editar_pass' element={<Pages.EditarPass />} />

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
					path='/listaUtilizador'
					element={
						<ProtectedRoute>
							<Page PageTitle={'Lista de utilizadores'} PageIcon={'apple'}>
								<Pages.ListaUtilizador />
							</Page>
						</ProtectedRoute>
					}
				/>

				<Route
					path='/listaVisitantes'
					element={
						<ProtectedRoute>
							<Page PageTitle={'Lista de Visitantes'} PageIcon={'apple'}>
								<Pages.ListaVisitantes />
							</Page>
						</ProtectedRoute>
					}
				/>
				<Route
					path='/listaAgente'
					element={
						<ProtectedRoute>
							<Page PageTitle={'Lista Agente Turistico'} PageIcon={'apple'}>
								<Pages.ListaAgenteTuristico />
							</Page>
						</ProtectedRoute>
					}
				/>
				<Route
					path='/listaResponsavel'
					element={
						<ProtectedRoute>
							<Page PageTitle={'Lista Responsavel Regiao'} PageIcon={'apple'}>
								<Pages.ListaResponsavelRegiao />
							</Page>
						</ProtectedRoute>
					}
				/>
				<Route
					path='/listaRegiao'
					element={
						<ProtectedRoute>
							<Page PageTitle={'Lista Regiao'} PageIcon={'apple'}>
								<Pages.ListaRegiao />
							</Page>
						</ProtectedRoute>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

