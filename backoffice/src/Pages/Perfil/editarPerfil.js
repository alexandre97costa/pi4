import React, { useEffect, useState } from 'react';
import axios from "axios";
import auth from "../../Auth/auth.service";

import FormEditar from '../../Components/FormEditar';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ip = process.env.REACT_APP_IP;

export default function EditarPerfil() {
  const [nome, setNome] = useState('')
  const [dataNascimento, setDataNascimento] = useState('')
  const [email, setEmail] = useState('')

  const [utilizadores, setUtilizadores] = useState([]);

  useEffect(() => {
    axiosGetUtilizador()
  }, [])

  async function axiosGetUtilizador() {
    const url = ip + "/utilizador/" + auth.getUser().id

    await axios
      .get(url, auth.header())
      .then((output) => {
        setUtilizadores(output.data?.data.map(p => {
          setNome(p.nome)
          setDataNascimento(p.data_nascimento)
          setEmail(p.email)
          return [
            {
              nome: 'Nome',
              id: 'inputNome',
              value: p.nome,
              setState: setNome
            }, {
              nome: 'Data Nascimento',
              id: 'inputNascimento',
              type: 'date',
              value: p.data_nascimento,
              setState: setDataNascimento
            }, {
              nome: 'Email',
              id: 'inputEmail',
              value: p.email,
              setState: setEmail
            }
          ]
        }))
      })
      .catch((error) => {
        console.error(error);
      });
  }

  async function axiosEditar() {
    const url = ip + "/utilizador/" + auth.getUser().id

    let data = {
      nome: nome,
      email: email,
      data_nascimento: dataNascimento
    }

    await axios
      .put(url, data, auth.header())
      .then((output) => {
        console.log(output.data.msg)
        toast.success(output.data.msg)
      })
      .catch((error) => {
        console.error(error)
        toast.error("Utilizador não foi atualizado")
      });
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">

          <div className="col-12 offset-md-2 col-md-8">
            <FormEditar itens={utilizadores} onClick={() => axiosEditar()} />
          </div>
          <ToastContainer />
        </div>
      </div>
    </>
  );
}
