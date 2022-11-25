import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import auth from './Auth/auth.service';
import dev from './Auth/dev';

//Exportação de todas as páginas feitas
import VisibleTo from './Helpers/VisibleTo';
import ProtectedRoute from './Helpers/ProtectedRoute';
import Page from './Helpers/Page';
import Pages from './Pages/index'

const LOGIN_OVERRIDE = process.env.REACT_APP_LOGIN_OVERRIDE


// todo: colocar o payload do jwt no local storage (pra ficar acessivel a todas as paginas)

export default function App() {

	const [nome, setNome] = useState('')

	useEffect(() => {
		dev.log('✅ App()')
		dev.log(
			'%cÉ normal que as mensagens apareçam 2x!',
			'background-color: brown; color: gold; padding: 0 0.5rem;',
			'\nhttps://reactjs.org/docs/strict-mode.html')

		auth.getCurrentUser().then(user => setNome(user.nome))
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
			</Routes>
		</BrowserRouter>
	);
}

