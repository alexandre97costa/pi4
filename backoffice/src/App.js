import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import dev from './Auth/dev';
import ProtectedRoute from './Helpers/ProtectedRoute';

import './main.css'

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
					<Pagina title="Editar Perfil">
						<Pages.EditarPerfil />
					</Pagina>
				} />

				<Route path='/editarPasse' element={
					<Pagina title="Editar Palavra-passe">
						<Pages.EditarPasse />
					</Pagina>
				} />

				<Route path='/utilizadores' element={
					<ProtectedRoute>
						<Pagina title="Lista de Utilizadores">
							<Pages.Utilizadores />
						</Pagina>
					</ProtectedRoute>
				} />

				<Route path='/microsite' element={
					<Pagina title="Gerir Microsite">
						<Pages.Microsite />
					</Pagina>
				} />

				<Route path='/microsite/heroBanner' element={
					<Pagina title="Hero Banner">
						<Pages.HeroBanner />
					</Pagina>
				} />

				<Route path='/microsite/descarregarApp' element={
					<Pagina title="Descarregar App">
						<Pages.DescarregarApp />
					</Pagina>
				} />

				<Route path='/microsite/gerirFooter' element={
					<Pagina title="Gerir Footer">
						<Pages.GerirFooter />
					</Pagina>
				} />

				<Route path='/microsite/adicionarConteudo' element={
					<Pagina title="Adicionar Conteúdo">
						<Pages.AdicionarConteudo />
					</Pagina>
				} />

				<Route path='/microsite/publicidadeAgenteTuristico' element={
					<Pagina title="Publicidade Agente Turístico">
						<Pages.PublicidadeAgenteTuristico />
					</Pagina>
				} />

				<Route path='microsite/gerirMenu' element={
					<Pagina title="Gerir Menu">
						<Pages.GerirMenu />
					</Pagina>
				} />

				<Route path='/microsite/vantagensAplicacao' element={
					<Pagina title="Vantagens Aplicação">
						<Pages.VantagensAplicacao />
					</Pagina>
				} />

				<Route path='/listaRegiao' element={
					<ProtectedRoute>
						<Pagina title='Lista Região'>
							<Pages.ListaRegiao />
						</Pagina>
					</ProtectedRoute>
				} />

			</Routes>
		</BrowserRouter>
	);
}

