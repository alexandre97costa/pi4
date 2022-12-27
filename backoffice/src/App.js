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

				<Route exact path='/recuperar-passe' element={<Pages.RecuperarPass />} />

				<Route path='/editar-perfil' element={
					<Pagina title="Editar Perfil">
						<Pages.EditarPerfil />
					</Pagina>
				} />

				<Route path='/editar-passe' element={
					<Pagina title="Editar Palavra-passe">
						<Pages.EditarPasse />
					</Pagina>
				} />

				<Route path='/admin/utilizadores' element={
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

				<Route path='/microsite/hero-banner' element={
					<Pagina title="Hero Banner">
						<Pages.HeroBanner />
					</Pagina>
				} />

				<Route path='/microsite/descarregar-app' element={
					<Pagina title="Descarregar App">
						<Pages.DescarregarApp />
					</Pagina>
				} />

				<Route path='/microsite/gerir-footer' element={
					<Pagina title="Gerir Footer">
						<Pages.GerirFooter />
					</Pagina>
				} />

				<Route path='/microsite/adicionar-conteudo' element={
					<Pagina title="Adicionar Conteúdo">
						<Pages.AdicionarConteudo />
					</Pagina>
				} />

				<Route path='/microsite/publicidade-agente-turistico' element={
					<Pagina title="Publicidade Agente Turístico">
						<Pages.PublicidadeAgenteTuristico />
					</Pagina>
				} />

				<Route path='microsite/gerir-menu' element={
					<Pagina title="Gerir Menu">
						<Pages.GerirMenu />
					</Pagina>
				} />

				<Route path='/microsite/vantagens-app' element={
					<Pagina title="Vantagens Aplicação">
						<Pages.VantagensAplicacao />
					</Pagina>
				} />






				<Route path='/lista-agentes' element={
					<Pagina title="Lista de Agentes Turísticos">
						<Pages.ListaAgente />
					</Pagina>
				} />

				<Route path='/eventos/reserva' element={
					<Pagina title="Reservas no Evento">
						<Pages.ReservasEvento />
					</Pagina>
				} />
				<Route path='/eventos' element={
					<Pagina title="Lista de Eventos">
						<Pages.Evento />
					</Pagina>
				} />
				
				<Route path='/validar-pontos-interesse' element={
					<Pagina title="Validar Pontos de Interesse">
						<Pages.ValidarPontoInteresse/>
					</Pagina>
				} />
			
				




				

				<Route path='/admin/lista-regiao' element={
					<ProtectedRoute>
						<Pagina title='Lista Região'>
							<Pages.ListaRegiao />
						</Pagina>
					</ProtectedRoute>
				} />

				<Route path='/ponto-interesse' element={
					<ProtectedRoute>
						<Pagina title='Lista Pontos Interesse'>
							<Pages.PontoInteresse />
						</Pagina>
					</ProtectedRoute>
				} />

				<Route path='/detalhes-utilizador' element={
					<ProtectedRoute>
						<Pagina title='Detalhes do Utilizador'>
							<Pages.DetalhesUtilizador />
						</Pagina>
					</ProtectedRoute>
				} />

				<Route path='/agente-turistico/dashboard' element={
					<ProtectedRoute>
						<Pagina title='Dashboard'>
							<Pages.HomeAgenteTuristico />
						</Pagina>
					</ProtectedRoute>
				} />

				<Route path='/agente-turistico/ponto-interesse-details' element={
					<ProtectedRoute>
						<Pagina title='Ponto Interesse'>
							<Pages.PontoInteresseDetails />
						</Pagina>
					</ProtectedRoute>
				} />

				<Route path='/agente-turistico/eventos' element={
					<ProtectedRoute>
						<Pagina title='Eventos'>
							<Pages.Eventos />
						</Pagina>
					</ProtectedRoute>
				} />

				<Route path='/recompensas' element={
					<ProtectedRoute>
						<Pagina title='Recompensas'>
							<Pages.Recompensa />
						</Pagina>
					</ProtectedRoute>
				} />

				<Route path='/admin/dashboard' element={
					<ProtectedRoute>
						<Pagina title='Dashboard'>
							<Pages.HomeAdmin />
						</Pagina>
					</ProtectedRoute>
				} />


				<Route path='/utilizadores' element={
					<ProtectedRoute>
						<Pagina title='utilizador'>
							<Pages.Utilizadores/>
						</Pagina>
					</ProtectedRoute>
				} />

			</Routes>
		</BrowserRouter>
	);
}

