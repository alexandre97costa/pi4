import React from 'react';

import FormsMicrosite from '../../../../Components/FormsMicrosite';
import Breadcrumb from '../../../../Components/Breadcrumb';

export default function GerirEditarFooter() {
  const teste = [
    {
      id: "inputUrlIconFacebook",
      texto: "Url do Icon Facebook",
      useState: "teste1"
    },
    {
      id: "inputLinkFacebook",
      texto: "Link para o facebook",
      useState: "teste2"
    }
  ]

  const teste3 = [
    {
      id: "inputUrlIconInstagram",
      texto: "Url do Icon Instagram",
      useState: "teste1"
    },
    {
      id: "inputLinkInstagram",
      texto: "Link para o Instagram",
      useState: "teste2"
    }
  ]

  const teste4  = [
    {
      id: "inputUrlIconTwitter",
      texto: "Url do Icon Twitter",
      useState: "teste1"
    },
    {
      id: "inputLinkTwitter",
      texto: "Link para o Twitter",
      useState: "teste2"
    }
  ]

  const teste2 = [
    {
      id: "inputPoliticaPrivacidade",
      texto: "Link para a página de Política de Privacidade",
      useState: "teste1"
    },
    {
      id: "inputPoliticaCookies",
      texto: "Link para a página de Política de Cookies",
      useState: "teste2"
    }
  ]

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-10">
          <Breadcrumb icon="bi bi-list-ul" nome="Hero Banner" />
        </div>

        <div className='col-12 offset-md-1 col-md-10 mb-5'>
          <FormsMicrosite itens={teste} />
        </div>

        <div className='col-12 offset-md-1 col-md-10 mb-5'>
          <FormsMicrosite itens={teste3} />
        </div>

        <div className='col-12 offset-md-1 col-md-10 mb-5'>
          <FormsMicrosite itens={teste4} />
        </div>

        <div className='col-12 offset-md-1 col-md-10 mb-4'>
          <FormsMicrosite itens={teste2} />
        </div>
      </div>
    </div>
  );


}