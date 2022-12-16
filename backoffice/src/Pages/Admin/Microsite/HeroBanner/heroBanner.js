import React from 'react';

import FormsMicrosite from '../../../../Components/Microsite/FormsMicrosite';
import Breadcrumb from '../../../../Components/Breadcrumb';

export default function GerirHeroBanner() {
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
    },
    {
      id: "inputUrlImagem",
      texto: "Url da imagem",
      useState: "teste4"
    }
  ]

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-10">
          <Breadcrumb icon="bi bi-list-ul" nome="Hero Banner" />
        </div>

        <div className='col-12 offset-md-1 col-md-10'>
          <FormsMicrosite itens={teste} />
        </div>
      </div>
    </div>
  );


}