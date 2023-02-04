import React, { useEffect, useState } from "react";
import axios from "axios";
import auth from '../../../Auth/auth.service'

import Dropdown from "../../../Components/Dropdown";
import TabelaListaRecompensas from "../../../Components/Tabelas/TabelaListaRecompensas";
import BotaoDashboard from "../../../Components/BotaoDashboard";

const ip = process.env.REACT_APP_IP;

export default function ValidarRecompensas() {
  const [tipos, setTipos] = useState([])
  const [selectTipo, setSelectTipo] = useState('')

  useEffect(() => {
    axios
    .get(ip + '/tipos/pi', auth.header())
    .then(output => { setTipos(['Todos', ...output.data?.tipos_interesse.map(t => t.nome)] ?? []) }).catch((error)=> console.log(error))
  }, [])

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
          <Dropdown items={tipos} onChange={(value, index) => setSelectTipo(index)} />
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <TabelaListaRecompensas tipoTabela="validar" tipo_id={selectTipo} />
        </div>
      </div>
    </>
  );
}