import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import dev from './Auth/dev';
import ProtectedRoute from './Helpers/ProtectedRoute';

//Exportação de todas as páginas feitas
import Pagina from './Helpers/Pagina';
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

				{/* <Route path='/testeJorge' element={<Pages.InicioAT />} /> */}

				<Route path='/login' element={<Pages.Login />} />

				<Route exact path='/recuperar' element={<Pages.Recuperar />} />

				<Route exact path='/editar_perfil' element={<Pages.EditarPerfil />} />

				<Route exact path='/editar_pass' element={<Pages.EditarPass />} />

				<Route path='/' element={
					<Pagina>
						<Pages.Teste />
					</Pagina>
				} />
				<Route path='/teste' element={
					<ProtectedRoute>
						<Pagina>
							<Pages.Teste />
						</Pagina>
					</ProtectedRoute>
				} />
				<Route path='/listaUtilizador' element={
					<ProtectedRoute>
						<Pagina PageTitle={'Lista de utilizadores'} PageIcon={'apple'}>
							<Pages.ListaUtilizador />
						</Pagina>
					</ProtectedRoute>
				} />

				<Route path='/listaVisitantes' element={
					<ProtectedRoute>
						<Pagina PageTitle={'Lista de Visitantes'} PageIcon={'apple'}>
							<Pages.ListaVisitantes />
						</Pagina>
					</ProtectedRoute>
				} />
				<Route path='/listaAgente' element={
						<Pagina PageTitle={'Lista Agente Turistico'} PageIcon={'apple'}>
							<Pages.ListaAgenteTuristico />
						</Pagina>
				} />
				<Route path='/listaResponsavel' element={
					<ProtectedRoute>
						<Pagina PageTitle={'Lista Responsavel Regiao'} PageIcon={'apple'}>
							<Pages.ListaResponsavelRegiao />
						</Pagina>
					</ProtectedRoute>
				} />
				<Route path='/listaRegiao' element={
					<ProtectedRoute>
						<Pagina PageTitle={'Lista Regiao'} PageIcon={'apple'}>
							<Pages.ListaRegiao />
						</Pagina>
					</ProtectedRoute>
				} />
				<Route path='/gerirVantagensApp' element={
					<Pagina>
						<Pages.GerirVantagensApp />
					</Pagina>
				} />
				<Route path='/gerirMicrosite' element={
					<Pagina>
						<Pages.GerirMicrosite />
					</Pagina>
				} />
				<Route path='/gerirDescarregarApp' element={
					<Pagina>
						<Pages.GerirDescarregarApp />
					</Pagina>
				} />
				<Route path='/gerirEditarFooter' element={
					<Pagina>
						<Pages.GerirEditarFooter />
					</Pagina>
				} />
				<Route path='/gerirMenu' element={
					<Pagina>
						<Pages.GerirMenu />
					</Pagina>
				} />
				<Route path='/gerirHeroBanner' element={
					<Pagina>
						<Pages.GerirHeroBanner />
					</Pagina>
				} />
				<Route path='/gerirPublicidadeAgenteTuristico' element={
					<Pagina>
						<Pages.GerirPublicidadeAgenteTuristico />
					</Pagina>
				} />
				<Route path='/gerirAdicionarCards' element={
					<Pagina>
						<Pages.GerirAdicionarCards />
					</Pagina>
				} />
				<Route path='/gerirEditarFooter' element={
					<Pagina>
						<Pages.GerirEditarFooter />
					</Pagina>
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

