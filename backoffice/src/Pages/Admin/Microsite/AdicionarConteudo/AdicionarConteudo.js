import React from 'react';

import FormsMicrosite from '../../../../Components/FormsMicrosite';
import Breadcrumb from '../../../../Components/Breadcrumb';

export default function GerirAdicionarCards() {
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
    },
    {
      id: "inputTextoBotao",
      texto: "Texto Botão",
      useState: "teste3"
    }
  ]

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-10">
          <Breadcrumb icon="bi bi-list-ul" nome="Adicionar Conteúdo" />
        </div>

        <div className='col-12 offset-md-1 col-md-10'>
          <FormsMicrosite itens={teste} />
        </div>
      </div>
    </div>
  );
}

