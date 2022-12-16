import React from 'react';

import FormsMicrosite from '../../../../Components/FormsMicrosite';
import Breadcrumb from '../../../../Components/Breadcrumb';

export default function GerirVantagensApp() {
  const teste = [
    {
      id: "inputTitulo",
      texto: "Titulo",
      useState: "teste1"
    },
    {
      id: "inputSubtitulo",
      texto: "Subtítulo",
      useState: "teste2"
    }
  ]

  const teste2 = [
    {
      id: "inputTitulo",
      texto: "Titulo",
      useState: "teste1"
    },
    {
      id: "inputSubtitulo",
      texto: "Subtítulo",
      useState: "teste2"
    },
    {
      id: "inputTextoBotao",
      texto: "Texto Botão",
      useState: "teste3"
    },
    {
      id: "inputLinkIcon",
      texto: "Link para o icon",
      useState: "teste4"
    }
  ]

  const teste3 = [
    {
      id: "inputTitulo",
      texto: "Titulo",
      useState: "teste1"
    },
    {
      id: "inputSubtitulo",
      texto: "Subtítulo",
      useState: "teste2"
    },
    {
      id: "inputTextoBotao",
      texto: "Texto Botão",
      useState: "teste3"
    },
    {
      id: "inputLinkIcon",
      texto: "Link para o icon",
      useState: "teste4"
    }
  ]

  const teste4 = [
    {
      id: "inputTitulo",
      texto: "Titulo",
      useState: "teste1"
    },
    {
      id: "inputSubtitulo",
      texto: "Subtítulo",
      useState: "teste2"
    },
    {
      id: "inputTextoBotao",
      texto: "Texto Botão",
      useState: "teste3"
    },
    {
      id: "inputLinkIcon",
      texto: "Link para o icon",
      useState: "teste4"
    }
  ]

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-10">
          <Breadcrumb icon="bi bi-list-ul" nome="Vantagens Aplicação" />
        </div>

        <div className='col-12 offset-md-1 col-md-10'>
          <FormsMicrosite itens={teste} />
        </div>

        <div className="col-12">
          <h4 className='mt-5 mb-4'>Card 1</h4>
        </div>
        <div className='col-12 offset-md-1 col-md-10'>
          <FormsMicrosite itens={teste2} />
        </div>

        <div className="col-12">
          <h4 className='mt-5 mb-4'>Card 2</h4>
        </div>
        <div className='col-12 offset-md-1 col-md-10'>
          <FormsMicrosite itens={teste3} />
        </div>

        <div className="col-12">
          <h4 className='mt-5 mb-4'>Card 3</h4>
        </div>
        <div className='col-12 offset-md-1 col-md-10'>
          <FormsMicrosite itens={teste4} />
        </div>
      </div>
    </div>
  );
}
