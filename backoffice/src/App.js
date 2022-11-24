import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import dev from './Auth/dev';

//Exportação de todas as páginas feitas
import VisibleTo from './Helpers/VisibleTo';
import ProtectedRoute from './Helpers/ProtectedRoute';
import Page from './Helpers/Page';
import Pages from './Pages/index'

const LOGIN_OVERRIDE = process.env.REACT_APP_LOGIN_OVERRIDE


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
						<Page>
							<Pages.Teste />
						</Page>
					}
				/>
				<Route
					path='/lista_utilizadores'
					element={
						<Page>
							<Pages.lista_utilizadores />
						</Page>
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
			</Routes>
		</BrowserRouter>
	);
}

