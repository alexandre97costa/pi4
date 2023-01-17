import React, { useEffect } from "react";

import CardBackground from "./CardBackground";

export default function CardTermos(props) {
  return (
    <>
      <div className="text-center">
        <h1>Termos de Utilização</h1>
        <div className="pt-3">
          <p className="w-50 mx-auto">
          Sabemos que é tentador ignorar estes Termos de Utilização, 
          mas é importante estabelecer o que pode esperar de nós à 
          medida que utiliza os nossos serviços, bem como o que podemos esperar de si.
          </p>
        </div>
      </div>
      <CardBackground className="border-0 text-center shadow rounded-4 m-5 p-4">
        <div className="pt-3">
          <h5>O que pode esperar de nós?</h5>
          <p className="w-75 mx-auto">
          Fornecemos os seguites serviços sujeitos aos presentes termos que incluem:
          </p>
          <div className="collapse" id="collapseExample1">
            <p className="w-75 mx-auto">
              Apps e Site.
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
        </div>
        <div className="pt-3">
          <h5>O que esperamos de si?</h5>
          <p className="w-75 mx-auto">
          A autorização que lhe concedemos para utilizar os nossos serviços continua a ser válida, desde que aja em conformidade com:
          </p>
          <div className="collapse" id="collapseExample2">
            <p className="w-75 mx-auto">
              Os presentes termos.
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
        </div>
        <div className="pt-3">
          <h5>Idade minima obrigatória</h5>
          <p className="w-75 mx-auto">
          Se a sua idade for inferior a 16 anos de idade , 
          tem de ter autorização de um dos pais ou do tutor legal para utilizar uma Conta Google. 
          Peça a um dos pais ou ao tutor legal para ler os presentes termos consigo.
          </p>
          <div className="collapse" id="collapseExample3">
            <p className="w-75 mx-auto">
            Se for pai/mãe ou tutor legal de uma criança e autorizar que a mesma utilize os serviços, 
            os presentes termos aplicam-se a si, sendo responsável pela atividade da criança nos serviços.
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
        </div>
      </CardBackground>
    </>
  );
}
