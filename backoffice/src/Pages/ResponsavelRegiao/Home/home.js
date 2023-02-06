import React, { useEffect, useState } from "react";
import axios from "axios";
import auth from "../../../Auth/auth.service";

import BotaoDashboard from "../../../Components/BotaoDashboard";
import TabelaListaRecompensas from "../../../Components/Tabelas/TabelaListaRecompensas";
import CardPontoInteresse from '../../../Components/Cards/CardPontoInteresse';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ip = process.env.REACT_APP_IP;

export default function Home() {
  const [pontosInteresseAvaliados, setPontosInteresseAvaliados] = useState([]);

  useEffect(() => {
    axiosGetPontosInteresseAvaliados()
  }, [])

  async function axiosGetPontosInteresseAvaliados() {
    const url = ip + "/pi"

    let options = {
      ...auth.header(),
      params: {
        limit: 4,
        order: 'avg_avaliacao',
        direction: 'desc'
      }
    }

    await axios
      .get(url, options)
      .then((output) => {
        setPontosInteresseAvaliados(output.data?.data ?? []);
      })
      .catch((error) => {
        toast.warning(error.response.data.msg)
        console.error(error)
      });
  }

  return (
    <>
      <div className="row row-cols-1 row-cols-md-4 gx-4 mb-5">
        <div className="col-12 col-md-12">
          <p className="fs-5 text-body fw-light">Ações Rápidas</p>
        </div>

        <BotaoDashboard
          to="/utilizadores/2"
          class="btn-light btn-lg bg-white p-4 w-100 h-100 text-start d-flex align-items-center"
          icon="bi-person-check fs-3"
          texto="Atribuição de Perfil"
        />
        <BotaoDashboard
          to="/pontos-interesse"
          class="btn-light btn-lg bg-white p-4 w-100 h-100 text-start d-flex align-items-center"
          icon="bi-geo-alt fs-3"
          texto="Pontos de Interesse"
        />
        <BotaoDashboard
          to="/eventos"
          class="btn-light btn-lg bg-white p-4 w-100 h-100 text-start d-flex align-items-center"
          icon="bi-calendar4-event fs-3"
          texto="Eventos"
        />
        <BotaoDashboard
          to="/recompensas"
          class="btn-light btn-lg bg-white p-4 w-100 h-100 text-start d-flex align-items-center"
          icon="bi-cart-check fs-3"
          texto="Recompensas"
        />
      </div>

      <div className="row row-cols-1 row-cols-md-4 gx-4 mb-5">

        <div className='col-12 col-md-12'>
          <p className="fs-5 text-body fw-light">Recompensas ativas</p>
        </div>

        <TabelaListaRecompensas limit={5} />

      </div>

      <div className="row row-cols-1 row-cols-md-4 gx-4 mb-5">

        <div className='col-12 col-md-12'>
          <p className="fs-5 text-body fw-light">Pontos de Interesse mais bem avaliados</p>
        </div>

        {pontosInteresseAvaliados.map((item, index) => {
          return (
            <div key={index} className="col-12 col-xs-12 col-sm-6 col-md-4 col-lg-3 d-flex">
              <CardPontoInteresse
                id_ponto_interesse={item.id}
                imagem={item.imagens[0].url}
                nome={item.nome}
                categoria={item.tipo_interesse.nome}
                morada={item.morada}
                numeroScans={item.count_scans}
                numeroFavoritos={item.avg_avaliacao}
              />
            </div>
          );
        })}

        <ToastContainer />

      </div>

    </>
  );
}
