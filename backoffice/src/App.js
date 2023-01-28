import React, { useEffect } from "react";
import { Navigate, BrowserRouter, Route, Routes } from "react-router-dom";
import dev from "./Auth/dev";
import ProtectedRoute from "./Helpers/ProtectedRoute";
import VisibleTo from "./Helpers/VisibleTo";

import "./main.css";

//Exportação de todas as páginas feitas
import Pagina from "./Helpers/Pagina";
import Pages from "./Pages/index";

export default function App() {
  useEffect(() => {
    dev.log("✅ App()");
    dev.log(
      "%cÉ normal que as mensagens apareçam 2x!",
      "background-color: brown; color: gold; padding: 0 0.5rem;",
      "\nhttps://reactjs.org/docs/strict-mode.html"
    );
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Pages.Login />} />

        <Route
          exact
          path="/recuperar-passe"
          element={<Pages.RecuperarPass />}
        />

        <Route
          path="/editar-passe"
          element={
            <ProtectedRoute>
              <Pagina title="Editar Palavra-passe">
                <VisibleTo tipo='2'>
                <Pages.EditarPasse />
                </VisibleTo>
                <VisibleTo tipo='3'>
                <Pages.EditarPasse />
                </VisibleTo>
                <VisibleTo tipo='4'>
                <Pages.EditarPasse />
                </VisibleTo>
              </Pagina>
            </ProtectedRoute>
          }
        />

        <Route
          path="/editar-perfil"
          element={
            <ProtectedRoute>
              <Pagina title="Editar Perfil">
              <VisibleTo tipo='2'>
              <Pages.EditarPerfil />
                </VisibleTo>
                <VisibleTo tipo='3'>
                <Pages.EditarPerfil />
                </VisibleTo>
                <VisibleTo tipo='4'>
                <Pages.EditarPerfil />
                </VisibleTo>
              </Pagina>
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Pagina title="Dashboard">
                <VisibleTo tipo="2">
                  <Pages.HomeAgenteTuristico />
                </VisibleTo>
                <VisibleTo tipo="3">
                  <Pages.HomeResponsavelRegiao />
                </VisibleTo>
                <VisibleTo tipo="4">
                  <Pages.HomeAdmin />
                </VisibleTo>
              </Pagina>
            </ProtectedRoute>
          }
        />

		{/* AQUI TEMOS DE FILTRAR OS CONTEUDO QUE APARECEM */}
        <Route
          path="/lista-utilizadores"
          element={
            <ProtectedRoute>
              <Pagina title="Lista de Utilizadores">
                <VisibleTo tipo="2">
                  <Pages.Utilizadores />
                </VisibleTo>
                <VisibleTo tipo="3">
                  <Pages.Utilizadores />
                </VisibleTo>
                <VisibleTo tipo="4">
                  <Pages.Utilizadores />
                </VisibleTo>
              </Pagina>
            </ProtectedRoute>
          }
        />

        <Route
          path="/microsite"
          element={
            <ProtectedRoute>
              <Pagina title="Gerir Microsite">
                <VisibleTo tipo="4">
                  <Pages.Microsite />
                </VisibleTo>
              </Pagina>
            </ProtectedRoute>
          }
        />

        <Route
          path="/microsite/hero-banner"
          element={
            <ProtectedRoute>
              <Pagina title="Hero Banner">
                <VisibleTo tipo="4">
                  <Pages.HeroBanner />
                </VisibleTo>
              </Pagina>
            </ProtectedRoute>
          }
        />

        <Route
          path="/microsite/descarregar-app"
          element={
            <ProtectedRoute>
              <Pagina title="Descarregar App">
                <VisibleTo tipo="4">
                  <Pages.HeroBanner />
                </VisibleTo>
              </Pagina>
            </ProtectedRoute>
          }
        />

        <Route
          path="/microsite/gerir-footer"
          element={
            <ProtectedRoute>
              <Pagina title="Gerir Footer">
                <VisibleTo tipo="4">
                  <Pages.GerirFooter />
                </VisibleTo>
              </Pagina>
            </ProtectedRoute>
          }
        />

        <Route
          path="/microsite/adicionar-conteudo"
          element={
            <ProtectedRoute>
              <Pagina title="Adicionar Conteúdo">
                <VisibleTo tipo="4">
                  <Pages.AdicionarConteudo />
                </VisibleTo>
              </Pagina>
            </ProtectedRoute>
          }
        />

        <Route
          path="/microsite/publicidade-agente-turistico"
          element={
            <ProtectedRoute>
              <Pagina title="Publicidade Agente Turístico">
                <VisibleTo tipo="4">
                  <Pages.PublicidadeAgenteTuristico />
                </VisibleTo>
              </Pagina>
            </ProtectedRoute>
          }
        />

        <Route
          path="/microsite/gerir-menu"
          element={
            <ProtectedRoute>
              <Pagina title="Gerir Menu">
                <VisibleTo tipo="4">
                  <Pages.GerirMenu />
                </VisibleTo>
              </Pagina>
            </ProtectedRoute>
          }
        />

        <Route
          path="/microsite/vantagens-app"
          element={
            <ProtectedRoute>
              <Pagina title="Vantagens Aplicação">
                <VisibleTo tipo="4">
                  <Pages.VantagensAplicacao />
                </VisibleTo>
              </Pagina>
            </ProtectedRoute>
          }
        />

        <Route
          path="/regioes"
          element={
            <ProtectedRoute>
              <Pagina title="Lista Região">
                <VisibleTo tipo="4">
                  <Pages.ListaRegiao />
                </VisibleTo>
              </Pagina>
            </ProtectedRoute>
          }
        />
		{/* AQUI NO AT PODE APARECER O BOTÃO ADICIONAR P.I */}
        <Route
          path="/pontos-interesse"
          element={
            <ProtectedRoute>
              <Pagina title="Pontos de Interesse">
                <VisibleTo tipo="2">
                  <Pages.PontoInteresse />
                </VisibleTo>
                <VisibleTo tipo="3">
                  <Pages.PontoInteresse />
                </VisibleTo>
                <VisibleTo tipo="4">
                  <Pages.PontoInteresse />
                </VisibleTo>
              </Pagina>
            </ProtectedRoute>
          }
        />

		  {/* aqui no AT E RR pode aparecer as recompensas e os eventos 
		  + no AT botão para adicionar novas recompensas e evento */}
        <Route
          path="/ponto-interesse-details"
          element={
            <ProtectedRoute>
              <Pagina title="Ponto Interesse">
                <VisibleTo tipo="2">
                  <Pages.PontoInteresseDetails />
                </VisibleTo>
                <VisibleTo tipo="3">
                  <Pages.PontoInteresseDetails />
                </VisibleTo>
                <VisibleTo tipo="4">
                  <Pages.PontoInteresseDetails />
                </VisibleTo>
              </Pagina>
            </ProtectedRoute>
          }
        />

        <Route
          path="/validar-pontos-interesse"
          element={
            <ProtectedRoute>
              <Pagina title="Validar Pontos de Interesse">
                <VisibleTo tipo="3">
                  <Pages.ValidarPontoInteresse />
                </VisibleTo>
              </Pagina>
            </ProtectedRoute>
          }
        />

        <Route
          path="/lista-eventos"
          element={
            <ProtectedRoute>
              <Pagina title="Lista Eventos">
                <Pages.EventosResponsavelRegiao />
              </Pagina>
            </ProtectedRoute>
          }
        />

        <Route
          path="/lista-reservas-eventos"
          element={
            <ProtectedRoute>
              <Pagina title="Reservas ao evento">
                <VisibleTo tipo="3">
                  <Pages.ReservasEvento />
                </VisibleTo>
              </Pagina>
            </ProtectedRoute>
          }
        />

        <Route
          path="/lista-vouchers"
          element={
            <ProtectedRoute>
              <Pagina title="Lista Vouchers">
                <VisibleTo tipo="3">
                  <Pages.Vouchers />
                </VisibleTo>
              </Pagina>
            </ProtectedRoute>
          }
        />

        <Route
          path="/responsavel-regiao/lista-recompensas"
          element={
            <ProtectedRoute>
              <Pagina title="Lista Recompensas">
                <Pages.ListaRecompensas />
              </Pagina>
            </ProtectedRoute>
          }
        />

        <Route
          path="/responsavel-regiao/validar-recompensas"
          element={
            <ProtectedRoute>
              <Pagina title="Validar Recompensas">
                <Pages.ValidarRecompensas />
              </Pagina>
            </ProtectedRoute>
          }
        />

        <Route
          path="/agentes-turistico"
          element={
            <ProtectedRoute>
              <Pagina title="Lista de Agentes Turísticos">
                <Pages.Agentes />
              </Pagina>
            </ProtectedRoute>
          }
        />

        <Route
          path="/validar-agentes-turisticos"
          element={
            <ProtectedRoute>
              <Pagina title="Validar Agentes Turísticos">
                <VisibleTo tipo="3">
                  <Pages.ValidarAgentesTuristicos />
                </VisibleTo>
              </Pagina>
            </ProtectedRoute>
          }
        />

        {/* Não sei ate que ponto esta página faz sentido, isto pq n temos muitas infos
         por exemplo do responsavel de regiao e do admin*/}
        <Route
          path="/agente-turistico/detalhes-utilizador"
          element={
            <ProtectedRoute>
              <Pagina title="Utilizador">
                <Pages.DetalhesUtilizador />
              </Pagina>
            </ProtectedRoute>
          }
        />

        <Route
          path="/eventos"
          element={
            <ProtectedRoute>
              <Pagina title="Eventos">
                <VisibleTo tipo="2">
                  <Pages.Eventos />
                </VisibleTo>
                <VisibleTo tipo="3">
                  <Pages.Eventos />
                </VisibleTo>
              </Pagina>
            </ProtectedRoute>
          }
        />

        <Route
          path="/recompensas"
          element={
            <ProtectedRoute>
              <Pagina title="Recompensas">
                <VisibleTo tipo="2">
                  <Pages.Recompensa />
                </VisibleTo>
                <VisibleTo tipo="3">
                  <Pages.Recompensa />
                </VisibleTo>
              </Pagina>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
