import React, { useEffect, useState } from 'react';

import FormEditar from '../../Components/FormEditar';

export default function EditarPasse() {
  const [palavraPasseAntiga, setPalavraPasseAntiga] = useState('')
  const [palavraPasseNova, setPalavraPasseNova] = useState('')
  const [palavraPasseConfirmacao, setPalavraPasseConfirmacao] = useState('')

  const teste = [{
    nome: "Palavra-passe atual",
    id: "inputPasseAtual",
    type: "password",
    setState: setPalavraPasseAntiga
  }, {
    nome: "Palavra-passe nova",
    id: "inputPasseNova",
    type: "password",
    setState: setPalavraPasseNova
  }, {
    nome: "Confirmar Palavra-passe nova",
    id: "inputPasseConfirmar",
    type: "password",
    setState: setPalavraPasseConfirmacao
  }]

  return (
    <>
      <div className="container-fluid">
        <div className="row">

          <div className="col-12 offset-md-2 col-md-8">
            <FormEditar itens={teste} onClick={() => console.log("Botao Click")} />
          </div>

        </div>
      </div>
    </>
  );
}
