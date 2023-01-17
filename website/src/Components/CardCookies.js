import React, { useEffect } from "react";

import CardBackground from "./CardBackground";
import Botao from "./Botao";

export default function CardCookies(props) {
  return (
    <>
      <div className="text-center">
        <h1>Política de Cookies</h1>
        <div className="pt-3">
          <p>
            Atualizado em 10 de maio de 2020 Esta Política de Cookies explica
            como nossa empresa usa cookies e tecnologias semelhantes para
            reconhecê-lo quando você visita nossos sites. Explica o que são
            essas tecnologias e por que as usamos, bem como seus direitos para
            controlar o nosso uso delas.
          </p>
        </div>
      </div>
      <CardBackground className="border-0 text-center shadow-sm rounded-4 m-5 p-4">
        <div className="pt-3">
          <h5>O Que São Cookies</h5>
          <p>
            Os cookies são pequenos arquivos de dados que são colocados em seu
            computador ou dispositivo móvel quando você visita um site. Os
            cookies são amplamente usados ​​por proprietários de sites para
            fazer com que seus sites funcionem, ou para funcionar mais
            eficientemente, além de fornecer informações de relatório.
          </p>
        </div>
        <div className="pt-3">
          <h5>Como Usamos Cookies</h5>
          <p>
            Usamos cookies por várias razões detalhadas abaixo. Infelizmente, na
            maioria dos casos, não há opções padrão da indústria para desativar
            cookies sem desativar completamente a funcionalidade e os recursos
            que eles adicionam a este site. É recomendável que você deixe todos
            os cookies ativados se não tiver certeza se precisa deles ou não,
            caso eles sejam usados ​​para fornecer um serviço que você usa.
          </p>
        </div>
        <div className="pt-3">
          <h5>Desativando Cookies</h5>
        </div>
        <div className="text-center pt-5">
          <Botao texto="Ver mais" />
        </div>
      </CardBackground>
    </>
  );
}
