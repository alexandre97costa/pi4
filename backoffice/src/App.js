import React, { useEffect } from 'react';
import { Navigate, BrowserRouter, Route, Routes } from 'react-router-dom';
import dev from './Auth/dev';
import ProtectedRoute from './Helpers/ProtectedRoute';
import VisibleTo from './Helpers/VisibleTo'

import './main.css';

//Exportação de todas as páginas feitas
import Pagina from './Helpers/Pagina';
import Pages from './Pages/index';

export default function App() {
	useEffect(() => {
		dev.log('✅ App()');
		dev.log(
			'%cÉ normal que as mensagens apareçam 2x!',
			'background-color: brown; color: gold; padding: 0 0.5rem;',
			'\nhttps://reactjs.org/docs/strict-mode.html'
		);
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route
					exact path='/'
					element={<Navigate to='/login' />}

				/>
				<Route
					path='/login'
					element={<Pages.Login />}
				/>

				<Route
					exact
					path='/recuperar-passe'
					element={<Pages.RecuperarPass />}
				/>

				<Route
					path='/editar-passe'
					element={
						<ProtectedRoute>
							<Pagina title='Editar Palavra-passe'>
								<Pages.EditarPasse />
							</Pagina>
						</ProtectedRoute>
					}
				/>

				<Route
					path='/editar-perfil'
					element={
						<ProtectedRoute>
							<Pagina title='Editar Perfil'>
								<Pages.EditarPerfil />
							</Pagina>
						</ProtectedRoute>
					}
				/>

				<Route
					path='/dashboard'
					element={
						<ProtectedRoute>
							<Pagina title='Dashboard'>
								<VisibleTo tipo='2'>
									<Pages.HomeAgenteTuristico />
								</VisibleTo>
								<VisibleTo tipo='3'>
									<Pages.HomeResponsavelRegiao />
								</VisibleTo>
								<VisibleTo tipo='4'>
									<Pages.HomeAdmin />
								</VisibleTo>
							</Pagina>
						</ProtectedRoute>
					}
				/>

				<Route
					path='/admin/lista-utilizadores'
					element={
						<ProtectedRoute>
							<Pagina title='Lista de Utilizadores'>
								<Pages.Utilizadores />
							</Pagina>
						</ProtectedRoute>
					}
				/>

				<Route
					path='/admin/microsite'
					element={
						<ProtectedRoute>
							<Pagina title='Gerir Microsite'>
								<Pages.Microsite />
							</Pagina>
						</ProtectedRoute>
					}
				/>

				<Route
					path='/admin/microsite/hero-banner'
					element={
						<ProtectedRoute>
							<Pagina title='Hero Banner'>
								<Pages.HeroBanner />
							</Pagina>
						</ProtectedRoute>
					}
				/>

				<Route
					path='/admin/microsite/descarregar-app'
					element={
						<ProtectedRoute>
							<Pagina title='Descarregar App'>
								<Pages.DescarregarApp />
							</Pagina>
						</ProtectedRoute>
					}
				/>

				<Route
					path='/admin/microsite/gerir-footer'
					element={
						<ProtectedRoute>
							<Pagina title='Gerir Footer'>
								<Pages.GerirFooter />
							</Pagina>
						</ProtectedRoute>
					}
				/>

				<Route
					path='/admin/microsite/adicionar-conteudo'
					element={
						<ProtectedRoute>
							<Pagina title='Adicionar Conteúdo'>
								<Pages.AdicionarConteudo />
							</Pagina>
						</ProtectedRoute>
					}
				/>

				<Route
					path='/admin/microsite/publicidade-agente-turistico'
					element={
						<ProtectedRoute>
							<Pagina title='Publicidade Agente Turístico'>
								<Pages.PublicidadeAgenteTuristico />
							</Pagina>
						</ProtectedRoute>
					}
				/>

				<Route
					path='/admin/microsite/gerir-menu'
					element={
						<ProtectedRoute>
							<Pagina title='Gerir Menu'>
								<Pages.GerirMenu />
							</Pagina>
						</ProtectedRoute>
					}
				/>

				<Route
					path='/admin/microsite/vantagens-app'
					element={
						<ProtectedRoute>
							<Pagina title='Vantagens Aplicação'>
								<Pages.VantagensAplicacao />
							</Pagina>
						</ProtectedRoute>
					}
				/>

				<Route
					path='/admin/lista-regiao'
					element={
						<ProtectedRoute>
							<Pagina title='Lista Região'>
								<Pages.ListaRegiao />
							</Pagina>
						</ProtectedRoute>
					}
				/>

				<Route
					path='/responsavel-regiao/dashboard'
					element={
						<ProtectedRoute>
							<Pagina title='Olá, António'>
								<Pages.HomeResponsavelRegiao />
							</Pagina>
						</ProtectedRoute>
					}
				/>

				<Route
					path='/consultar-pontos-interesse'
					element={
						<ProtectedRoute>
							<Pagina title='Pontos de Interesse'>
								<Pages.PontoInteresse tipoUtilizador='Responsavel Regiao' />
							</Pagina>
						</ProtectedRoute>
					}
				/>

				<Route
					path='/responsavel-regiao/ponto-interesse-details'
					element={
						<ProtectedRoute>
							<Pagina title='Ponto Interesse'>
								<Pages.PontoInteresseDetails />
							</Pagina>
						</ProtectedRoute>
					}
				/>

				<Route
					path='/responsavel-regiao/validar-pontos-interesse'
					element={
						<ProtectedRoute>
							<Pagina title='Validar Pontos de Interesse'>
								<Pages.ValidarPontoInteresse tipoUtilizador='Responsavel Regiao' />
							</Pagina>
						</ProtectedRoute>
					}
				/>

				<Route
					path='/responsavel-regiao/lista-regiao'
					element={
						<ProtectedRoute>
							<Pagina title='Lista Região'>
								<Pages.ListaRegiao />
							</Pagina>
						</ProtectedRoute>
					}
				/>

				<Route
					path='/responsavel-regiao/lista-eventos'
					element={
						<ProtectedRoute>
							<Pagina title='Lista Eventos'>
								<Pages.EventosResponsavelRegiao />
							</Pagina>
						</ProtectedRoute>
					}
				/>

				<Route
					path='/responsavel-regiao/lista-reservas-eventos'
					element={
						<ProtectedRoute>
							<Pagina title='Reservas ao evento'>
								<Pages.ReservasEvento />
							</Pagina>
						</ProtectedRoute>
					}
				/>

				<Route
					path='/responsavel-regiao/lista-vouchers'
					element={
						<ProtectedRoute>
							<Pagina title='Lista Vouchers'>
								<Pages.Vouchers />
							</Pagina>
						</ProtectedRoute>
					}
				/>

				<Route
					path='/responsavel-regiao/lista-recompensas'
					element={
						<ProtectedRoute>
							<Pagina title='Lista Recompensas'>
								<Pages.ListaRecompensas />
							</Pagina>
						</ProtectedRoute>
					}
				/>

				<Route
					path='/responsavel-regiao/validar-recompensas'
					element={
						<ProtectedRoute>
							<Pagina title='Validar Recompensas'>
								<Pages.ValidarRecompensas />
							</Pagina>
						</ProtectedRoute>
					}
				/>

				<Route
					path='/responsavel-regiao/detalhes-utilizador'
					element={
						<ProtectedRoute>
							<Pagina title='Detalhes utilizador'>
								<Pages.DetalhesUtilizador />
							</Pagina>
						</ProtectedRoute>
					}
				/>

				<Route
					path='/responsavel-regiao/agentes'
					element={
						<ProtectedRoute>
							<Pagina title='Lista de Agentes Turísticos'>
								<Pages.Agentes />
							</Pagina>
						</ProtectedRoute>
					}
				/>

				<Route
					path='/responsavel-regiao/validar-agentes-turisticos'
					element={
						<ProtectedRoute>
							<Pagina title='Validar Agentes Turísticos'>
								<Pages.ValidarAgentesTuristicos />
							</Pagina>
						</ProtectedRoute>
					}
				/>

				<Route
					path='/agente-turistico/dashboard'
					element={
						<ProtectedRoute>
							<Pagina title='Dashboard'>
								<Pages.HomeAgenteTuristico />
							</Pagina>
						</ProtectedRoute>
					}
				/>
				<Route
					path='/agente-turistico/ponto-interesse'
					element={
						<ProtectedRoute>
							<Pagina title='Lista Pontos Interesse'>
								<Pages.PontoInteresse tipoUtilizador='Agente Turisitico' />
							</Pagina>
						</ProtectedRoute>
					}
				/>

				<Route
					path='/agente-turistico/detalhes-utilizador'
					element={
						<ProtectedRoute>
							<Pagina title='Utilizador'>
								<Pages.DetalhesUtilizador />
							</Pagina>
						</ProtectedRoute>
					}
				/>

				<Route
					path='/agente-turistico/ponto-interesse-details'
					element={
						<ProtectedRoute>
							<Pagina title='Ponto Interesse'>
								<Pages.PontoInteresseDetails tipoUtilizador='Agente Turistico' />
							</Pagina>
						</ProtectedRoute>
					}
				/>

				<Route
					path='/agente-turistico/eventos'
					element={
						<ProtectedRoute>
							<Pagina title='Eventos'>
								<Pages.Eventos />
							</Pagina>
						</ProtectedRoute>
					}
				/>

				<Route
					path='/agente-turistico/recompensas'
					element={
						<ProtectedRoute>
							<Pagina title='Recompensas'>
								<Pages.Recompensa />
							</Pagina>
						</ProtectedRoute>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}
