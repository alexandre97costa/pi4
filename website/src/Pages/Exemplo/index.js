import React from "react";
import Botao from "../../Components/Botao";
import Card from "../../Components/Card";
import CardVantagensConteudo from "../../Components/CardVantagensConteudo";
import Footer from "../../Components/Footer";

export function Exemplo() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="row">
            <div className="col-12">
              <img src="..." class="float-start" alt="..."></img>
            </div>
          </div>

          <Card
            cardTitulo="Dá asas ao teu negocio e inscreve-te na nossa app como Agente
          Turístico!"
          />

          <div className="container text-center">
            <div className="row pb-5">
              <div className="col-12">
                <div className="card bg-primary">
                  
                  <div className="row">
                    <div className="col-6 col-sm-4">
                      <CardVantagensConteudo 
                      cardTitulo="Faça as suas reservas"
                      cardTexto="Faça as reservas dos pontos turísticos que lhe interessem."
                      />
                    </div>
                    <div className="col-6 col-sm-4">
                      <CardVantagensConteudo 
                      cardTitulo="Junte e troque pontos"
                      cardTexto="Ganhe pontos e troque por reservas se forma a ser favorecido."
                      />
                    </div>
                    <div className="col-6 col-sm-4">
                      <CardVantagensConteudo 
                      cardTitulo="Torne-se membro"
                      cardTexto="Torne-se um agente turístico e promova o seu estabelecimento."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Card cardTitulo="Já pensas-te na tua próxima viagem?" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
