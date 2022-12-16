import React from 'react';

import FormsMicrosite from '../../../../Components/Microsite/FormsMicrosite';

export default function GerirMenu() {
  const teste = [
    {
      id: "inputUrlImagem",
      texto: "Url da imagem",
      useState: "teste1"
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

