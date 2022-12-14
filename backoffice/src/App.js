import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import dev from './Auth/dev';
import ProtectedRoute from './Helpers/ProtectedRoute';

//Exportação de todas as páginas feitas
import Pagina from './Helpers/Pagina';
import Pages from './Pages/index'

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

				<Route path='/teste' element={
					<ProtectedRoute>
						<Pagina>
							<Pages.Teste />
						</Pagina>
					</ProtectedRoute>
				} />

				<Route path='/login' element={<Pages.Login />} />

				<Route exact path='/recuperarPasse' element={<Pages.RecuperarPass />} />

				<Route path='/editarPerfil' element={
					<Pagina>
						<Pages.EditarPerfil />
					</Pagina>
				} />

				<Route path='/editarPasse' element={
					<Pagina>
						<Pages.EditarPasse />
					</Pagina>
				} />

				<Route path='/utilizadores' element={
					<ProtectedRoute>
						<Pagina PageTitle={'Lista de utilizadores'} PageIcon={'apple'}>
							<Pages.Utilizadores />
						</Pagina>
					</ProtectedRoute>
				} />

				<Route path='/microsite' element={
					<Pagina>
						<Pages.Microsite />
					</Pagina>
				} />

				<Route path='/microsite/heroBanner' element={
					<Pagina>
						<Pages.HeroBanner />
					</Pagina>
				} />

				<Route path='/microsite/descarregarApp' element={
					<Pagina>
						<Pages.DescarregarApp />
					</Pagina>
				} />

				<Route path='/microsite/gerirFooter' element={
					<Pagina>
						<Pages.GerirFooter />
					</Pagina>
				} />

				<Route path='/microsite/adicionarConteudo' element={
					<Pagina>
						<Pages.AdicionarConteudo />
					</Pagina>
				} />

				<Route path='/microsite/publicidadeAgenteTuristico' element={
					<Pagina>
						<Pages.PublicidadeAgenteTuristico />
					</Pagina>
				} />

				<Route path='microsite/gerirMenu' element={
					<Pagina>
						<Pages.GerirMenu />
					</Pagina>
				} />

				<Route path='/microsite/vantagensAplicacao' element={
					<Pagina>
						<Pages.VantagensAplicacao />
					</Pagina>
				} />





				<Route path='/listaRegiao' element={
					<ProtectedRoute>
						<Pagina PageTitle={'Lista Regiao'} PageIcon={'apple'}>
							<Pages.ListaRegiao />
						</Pagina>
					</ProtectedRoute>
				} />

				<Route path='/atRecompensas' element={
					<Pagina>
						<Pages.ATRecompensas />
					</Pagina>
				} />
				
			</Routes>
		</BrowserRouter>
	);
}

