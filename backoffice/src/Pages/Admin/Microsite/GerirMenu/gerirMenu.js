import React from 'react';

import FormsMicrosite from '../../../../Components/FormsMicrosite';
import Breadcrumb from '../../../../Components/Breadcrumb';

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
        <div className="col-10">
          <Breadcrumb icon="bi bi-list-ul" nome="Gerir Menu" />
        </div>

        <div className='col-12 offset-md-1 col-md-10'>
          <FormsMicrosite itens={teste} />
        </div>
      </div>
    </div>
  );
}

