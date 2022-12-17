import React, { useEffect, useState } from 'react';

import FormsMicrosite from '../../../../Components/Microsite/FormsMicrosite';

export default function GerirVantagensApp() {
  const [card0, setCard0] = useState([])
  const [card1, setCard1] = useState([])
  const [card2, setCard2] = useState([])
  const [card3, setCard3] = useState([])

  const teste = [
    {
      id: "inputTitulo",
      texto: "Titulo",
      useState: "teste1",
      value: "Pinoquio"
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

  useEffect(() => {
    setCard0(teste)
    setCard1(teste2)
    setCard2(teste3)
    setCard3(teste4)
  }, [])

  return (
    <div className="container-fluid">
      <div className="row">
        <div className='col-12 offset-md-1 col-md-10'>
          <FormsMicrosite itens={card0} onSave={(valeu) => setCard0(card1)} card="card" />
        </div>

        <div className="col-12">
          <h4 className='mt-5 mb-4'>Card 1</h4>
        </div>
        <div className='col-12 offset-md-1 col-md-10'>
          <FormsMicrosite itens={card1} onSave={(valeu) => console.log(valeu)} card="card1" />
        </div>

        <div className="col-12">
          <h4 className='mt-5 mb-4'>Card 2</h4>
        </div>
        <div className='col-12 offset-md-1 col-md-10'>
          <FormsMicrosite itens={card2} card="card2" onSave={(valeu) => console.log(valeu)} />
        </div>

        <div className="col-12">
          <h4 className='mt-5 mb-4'>Card 3</h4>
        </div>
        <div className='col-12 offset-md-1 col-md-10'>
          <FormsMicrosite itens={card3} onSave={(valeu) => setCard3(card0)} card="card3" />
        </div>
      </div>
    </div>
  );
}
