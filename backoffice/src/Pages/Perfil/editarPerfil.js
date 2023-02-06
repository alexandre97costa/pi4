import React, { useEffect, useState } from 'react';
import axios from "axios";
import auth from "../../Auth/auth.service";

import FormEditar from '../../Components/FormEditar';

const ip = process.env.REACT_APP_IP;

export default function EditarPerfil() {
  const [nome, setNome] = useState('')
  const [dataNascimento, setDataNascimento] = useState('')
  const [genero, setGenero] = useState('')
  const [localidade, setLocalidade] = useState('')

  const [utilizadores, setUtilizadores] = useState([]);

  useEffect(() => {
    axiosGetUtilizador()
  }, [])

  async function axiosGetUtilizador() {
    const url = ip + "/utilizador/" + auth.getUser().id;

    await axios
      .get(url, auth.header())
      .then((output) => {
        console.log(output.data.data);
        setUtilizadores(output.data?.data ?? []);
      })
      .catch((error) => {
        console.error(error);
      });
  }
/*
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
*/
  return (
    <>
      <div className="container-fluid">
        <div className="row">

          <div className="col-12 offset-md-2 col-md-8">
            <FormEditar itens={utilizadores} onClick={() => console.log("click")}/>
          </div>

        </div>
      </div>
    </>
  );
}
