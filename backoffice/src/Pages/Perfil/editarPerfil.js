import React, { useEffect, useState } from 'react';

import FormEditar from '../../Components/FormEditar';

export default function EditarPerfil() {
  const [nome, setNome] = useState('')
  const [dataNascimento, setDataNascimento] = useState('')
  const [genero, setGenero] = useState('')
  const [localidade, setLocalidade] = useState('')

  useEffect(() => {
    setGenero("Masculino")
    console.log(nome)
  }, [nome])

  const teste = [{
    nome: "Nome",
    id: "inputNome",
    value: nome,
    setState: setNome
  }, {
    nome: "Data Nascimento",
    id: "inputNascimento",
    value: dataNascimento,
    setState: setDataNascimento
  }, {
    nome: "Género",
    id: "inputGenero",
    value: genero,
    setState: setGenero
  }, {
    nome: "Localidade",
    id: "inputLocalidade",
    value: localidade,
    setState: setLocalidade
  }]

  return (
    <>
      <div className="container-fluid">
        <div className="row">

          <div className="col-12 offset-md-2 col-md-8">
            <FormEditar itens={teste} onClick={() => console.log("click")}/>
          </div>

        </div>
      </div>
    </>
  );
}
