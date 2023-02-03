import React, { useEffect, useRef } from "react";
import axios from "axios";
import auth from "../../Auth/auth.service";

import Dropdown from "../../../Components/Dropdown";
import TabelaListaRecompensas from "../../../Components/Tabelas/TabelaListaRecompensas";
import BotaoDashboard from "../../../Components/BotaoDashboard";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ip = process.env.REACT_APP_IP;

export default function ValidarRecompensas() {
  const tipos = ["Todas", "A", "B", "C"]

  useEffect(() => {
    getRecompensasPorValidar()
  }, [])

  const toastId = useRef(null)

  async function getRecompensasPorValidar() {
    const url = ip + "/recompensa"
    console.log(url)

    //Só vai buscar no caso de ser um agente turistico os seus pontos de interesse
    if (auth.getUser().tipo === 2) {
      let options = {
        ...auth.header(),
        params: {
          agente_turistico_id: auth.getUser().id
        }
      }

      return await axios
        .get(url, options)
        .then((output) => {
          setPontoInteresse(output.data?.data ?? []);
        })
        .catch((error) => console.error(error));
  }

  return (
    <>
      <div className="row">

        <div className="col-12">
          <p className="fs-5 text-body fw-light">Ações Rápidas</p>
        </div>

        <div className="col-12 col-md-3 col-sm-12">
          <BotaoDashboard
            to="/lista-recompensas"
            class="btn-light btn-lg bg-white p-4 w-100 h-100 text-start d-flex align-items-center mb-5"
            icon="bi-card-list fs-2"
            texto="Lista de Recompensas"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-4 col-md-9 d-flex justify-content-end">
          <Dropdown items={tipos} onChange={(value) => console.log(value)} />
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <TabelaListaRecompensas tipoTabela="validar" />
          <ToastContainer />
        </div>
      </div>
    </>
  );
}