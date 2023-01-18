import React, { useEffect } from "react";

import CardBackground from "./CardBackground";

export default function CardPrivacidade(props) {
  return (
    <>
      <div className="text-center">
        <h1>Políticas de Privacidade</h1>
        <div className="pt-3">
          <p className="w-50 mx-auto">
            Quando aceita o nossos serviços, está a confiar as suas informações
            connosco. Entendemos que seja uma responsabilidade e fazemos o
            melhor para o proteger.
          </p>
        </div>
      </div>
      <CardBackground className="border-0 text-center shadow rounded-4 m-5 p-4">
        <div className="pt-3">
          <h5>O que queremos que entenda?</h5>
          <p className="w-75 mx-auto">
            Coletamos as suas informações para fornecer serviços melhores a
            todos os nossos utilizadores,
          </p>
          <div className="collapse" id="collapseExample1">
            <p className="w-75 mx-auto">
              o que inclui descobrir coisas básicas como a sua localidade.
            </p>
          </div>
          <a
            className="btn bi bi-chevron-down"
            data-bs-toggle="collapse"
            href="#collapseExample1"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          />
          <i className="d-flex mx-auto link-dark text-decoration-none pb-2 border-primary w-75"/>
        </div>
        <div className="pt-5">
          <h5>Itens que vôce cria ou nos fornece?</h5>
          <p className="w-75 mx-auto">
            Ao criar uma conta na nossa aplicação, você fornece informações
            pessoais que incluem seu nome e uma senha.
          </p>
          <div className="collapse" id="collapseExample2">
            <p className="w-75 mx-auto">
              Você também adiciona um e-mail e as sua localidade.
            </p>
          </div>
          <a
            className="btn bi bi-chevron-down"
            data-bs-toggle="collapse"
            href="#collapseExample2"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          />
          <i className="d-flex mx-auto link-dark text-decoration-none pb-2 border-primary w-75"/>
        </div>
        <div className="pt-5">
          <h5>As suas informações de localização</h5>
          <p className="w-75 mx-auto">
            Quando você usa os nossos serviços, coletamos informações sobre sua
            localização, o que nos ajuda a oferecer recursos,
          </p>
          <div className="collapse" id="collapseExample3">
            <p className="w-75 mx-auto">
              como rotas de carro, resultados da pesquisa para o que está perto
              de você e anúncios baseados na sua localização geral.
            </p>
          </div>
          <a
            className="btn bi bi-chevron-down"
            data-bs-toggle="collapse"
            href="#collapseExample3"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          />
          <i className="d-flex mx-auto link-dark text-decoration-none pb-2 border-primary w-75"/>
        </div>
        <div className="collapse" id="collapseExample6">
          <div className="pt-5">
            <h5>Usamos os dados para criar serviços melhores</h5>
            <p className="w-75 mx-auto">
              Como: <br />
              Fornecer os nossos serviços;
            </p>
            <div className="collapse" id="collapseExample4">
              <p className="w-75 mx-auto">
                Manter e melhorar os nossos serviços;
                <br />
                Avaliar o desempenho;
                <br />
                Entrar em contato consigo;
                <br />
                Proteger-nos, aos nossos utilizadores e ao nosso público;
                <br />
              </p>
            </div>
            <a
              className="btn bi bi-chevron-down"
              data-bs-toggle="collapse"
              href="#collapseExample4"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            />
          </div>
          <i className="d-flex mx-auto link-dark text-decoration-none pb-2 border-primary w-75"/>
        </div>

        <div className="text-center pt-5">
          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample6"
            aria-expanded="false"
            aria-controls="collapseExample6"
          >
            Ver mais
          </button>
        </div>
      </CardBackground>
    </>
  );
}
