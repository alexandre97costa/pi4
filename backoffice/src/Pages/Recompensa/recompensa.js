import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import auth from "../../Auth/auth.service";

import CardRecompensa from "../../Components/Cards/CardRecompensa";
import CardAdd from "../../Components/Cards/CardAdd";
import CardListaRecompensas from "../../Components/Cards/CardListaRecompensas";
import VisibleTo from "../../Helpers/VisibleTo";
import BotaoDashboard from "../../Components/BotaoDashboard";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ip = process.env.REACT_APP_IP;

//array das categorias das recompensas

export default function Recompensa() {
  const [recompensas, setRecompensas] = useState([]);
  const [pontoInteresse, setPontoInteresse] = useState([]);

  useEffect(() => {
    axiosGetRecompensas();
    axiosGetPontoInteresse();
  }, []);

  async function axiosGetRecompensas() {
    const url = ip + "/recompensa"
    
    await axios
      .get(url, auth.header())
      .then((output) => {
        setRecompensas(output.data?.data ?? []);
      })
      .catch((error) => {
        toast.dismiss()
        if (error.response.status === 404)
          return toast.warning(error.response.data.msg)
        console.log(error)
      });
  }

  async function axiosGetPontoInteresse() {
    const url = ip + "/pi"
    console.log(url)

    if (auth.getUser().tipo === 2) {
      let optionsAT = {
        ...auth.header(),
        params: {
          agente_turistico_id: auth.getUser().id,
          order: 'id'
        }
      }

      return await axios
        .get(url, optionsAT)
        .then((output) => {
          console.log(output.data)
          setPontoInteresse(output.data?.data ?? []);
        })
        .catch((error) => console.error(error));
    }

    let options = {
      ...auth.header(),
      params: {
        order: 'id'
      }
    }

    await axios
      .get(url, options)
      .then((output) => {
        setPontoInteresse(output.data?.data ?? []);
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className="row gy-3">

      <VisibleTo tipo="3">
        <div className="col-12">
          <p className="fs-5 text-body fw-light">Ações Rápidas</p>
        </div>

        <div className="row">
          <div className="col-12 col-md-4 col-sm-12">
            <BotaoDashboard
              to="/validar-recompensas"
              class="btn-light btn-lg bg-white p-4 w-100 h-100 text-start d-flex align-items-center"
              icon="bi-card-checklist fs-3"
              texto="Validação de Recompensas"
            />
          </div>
        </div>
      </VisibleTo>

      <VisibleTo tipo="4">
        <div className="col-12">
          <p className="fs-5 text-body fw-light">Ações Rápidas</p>
        </div>

        <div className="row">
          <div className="col-12 col-md-4 col-sm-12">
            <BotaoDashboard
              to="/validar-recompensas"
              class="btn-light btn-lg bg-white p-4 w-100 h-100 text-start d-flex align-items-center"
              icon="bi-card-checklist fs-3"
              texto="Validação de Recompensas"
            />
          </div>
        </div>
      </VisibleTo>

      <div className="row gy-3">
        <div className="col-12">
          <p className="fs-5 text-body fw-light">Vista Geral</p>
        </div>

        {pontoInteresse.map((item, index) => {
          return ((!!item.recompensas_associadas.length && !!item.recompensas_associadas[0].recompensa) &&
            <div key={index} className="col-12 col-sm-6 col-md-4">
              <CardListaRecompensas
                nomePontoInteresse={item.nome}
                recompensas={item.recompensas_associadas}
              />
            </div>
          )

        })}

        <div className="col-12 mt-5">
          <p className="fs-5 text-body fw-light">Recompensas Já Validadas</p>
          <ToastContainer />
        </div>

        <VisibleTo tipo="2">
          <div className="col-12 col-md-3">
            <CardAdd
              title="Adicionar Recompensa"
              idModal="AddRecompensa"
              nomeModal="addRecompensa"
            />
          </div>
        </VisibleTo>

        {recompensas.map((item, index) => {
          if (!!item) {
            return (
              <div key={index} className="col-12 col-sm-6 col-md-3">
                <CardRecompensa
                  title={item.titulo}
                  pontos={item.pontos}
                  categoria={item.tipo_interesse.nome}
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
