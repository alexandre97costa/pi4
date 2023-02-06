import React, { useEffect, useState } from 'react';
import axios from "axios";
import auth from "../../Auth/auth.service";

import FormEditar from '../../Components/FormEditar';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ip = process.env.REACT_APP_IP;

export default function EditarPasse() {
  const [palavraPasseNova, setPalavraPasseNova] = useState('')
  const [palavraPasseConfirmacao, setPalavraPasseConfirmacao] = useState('')

  async function axiosMudarPw() {
    if (!palavraPasseNova || !palavraPasseConfirmacao)
      return toast.warning("Introduza uma palavra passe")

    if (palavraPasseNova != palavraPasseConfirmacao)
      return toast.warning("Combinação diferente")

    const url = ip + '/utilizador/' + auth.getUser().id + '/password'

    let data = { password: palavraPasseNova }

    await axios
      .patch(url, data, auth.header())
      .then((output) => toast.success(output.data.msg))
      .catch((error) => toast.error(error.response.data.msg))
  }

  const teste = [[{
    nome: "Palavra-passe nova",
    id: "inputPasseNova",
    type: "password",
    setState: setPalavraPasseNova
  }, {
    nome: "Confirmar Palavra-passe nova",
    id: "inputPasseConfirmar",
    type: "password",
    setState: setPalavraPasseConfirmacao
  }]]

  return (
    <>
      <div className="container-fluid">
        <div className="row">

          <div className="col-12 offset-md-2 col-md-8">
            <FormEditar itens={teste} onClick={() => axiosMudarPw()} />
          </div>
          <ToastContainer />
        </div>
      </div>
    </>
  );
}
