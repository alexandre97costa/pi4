import React from 'react';

import FormsMicrosite from '../../../../Components/Microsite/FormsMicrosite';

export default function GerirPublicidadeAgenteTuristico() {
  const teste = [
    {
      id: "inputTitulo",
      texto: "Titulo",
      label: "",
      useState: "teste1"
    },
    {
      id: "inputSubtitulo",
      texto: "Subtítulo",
      label: "",
      useState: "teste2"
    },
    {
      id: "inputTextoBotao",
      texto: "Texto Botão",
      label: "",
      useState: "teste3"
    }
  ]

  return (
    <div className="container-fluid">
      <div className="row">
        <div className='col-12 offset-md-1 col-md-10'>
          <FormsMicrosite itens={teste} />
        </div>
      </div>
    </div>
  );
}

