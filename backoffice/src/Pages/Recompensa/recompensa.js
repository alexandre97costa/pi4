import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import auth from "../../Auth/auth.service";

import CardRecompensa from "../../Components/Cards/CardRecompensa";
import CardAdd from "../../Components/Cards/CardAdd";
import CardListaRecompensas from "../../Components/Cards/CardListaRecompensas";
import GraficoHorizontal from "../../Components/GraficoHorizontal";
import VisibleTo from "../../Helpers/VisibleTo";
import BotaoDashboard from "../../Components/BotaoDashboard";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ip = process.env.REACT_APP_IP;

//array das categorias das recompensas

export default function Recompensa() {
  const [recompensas, setRecompensas] = useState([]);
  const [pontoInteresse, setPontoInteresse] = useState([]);

  const toastId = useRef(null)

  useEffect(() => {
    axiosGetRecompensas();
    axiosGetPontoInteresse();
  }, []);

  // //ver o que é isto
  const borderRadius = 14;

  const voucher = ["Desconto de 50% na Pizza", "Café Gratis"];

  const dataVoucher = ["452", "531"];

  const datasets = [
    {
      label: "Recompensa's",
      data: dataVoucher,
      backgroundColor: "#729d4c",
      borderRadius: borderRadius,
    },
  ];
  // //até aqui

  // function tipoUtilizador() {
  //   if (props.tipoUtilizador === "Agente Turistico")
  //   return(
  //     <div className="col-6 col-md-3">
  //         <CardAdd
  //           title="Adicionar Recompensa"
  //           idModal="AddRecompensa"
  //           nomeModal="newRecompensa"
  //         />
  //       </div>
  //   );
  // }

  async function axiosGetRecompensas() {
    const url = ip + "/recompensa"
    console.log(url)
    //Aqui que fazemos o pedido axios das recompensas
    await axios
      .get(url, auth.header())
      .then((output) => {
        setRecompensas(output.data?.data ?? []);
      })
      .catch((error) => {
        if(error.response.status === 404)
          return toast.warning(error.response.data.msg)
        console.log(error)
      });
  }

  async function axiosGetPontoInteresse() {
    const url = ip + "/pi"
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

    await axios
      .get(url, auth.header())
      .then((output) => {
        setPontoInteresse(output.data?.data ?? []);
      })
      .catch((error) => console.error(error));
  }

  async function axiosPostRecompensas() {
    await axios
      .post(ip, {
        // no exemplo que vi ele ia buscar as infos tinha isto title:"ksdksdnfs" body:"skdjsjdf"
      })
      .then((response) => {
        setRecompensas(response.data);
      });
  }

  async function axiosDeleteRecompensas() {
    const url = ip + "/recompensa"
    console.log(url)
    await axios
      .delete(url, auth.header)
      .then(() => {
        toast.success("Recompensa Eliminada!")
        setRecompensas(null)
      });
  }


  // o put já não vai acontecer pois n? já não é suposto editar ? é para confirmar


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
          if (!!item.recompensas_associadas.length) {
            return (
              <div key={index} className="col-12 col-sm-6 col-md-4">
                <CardListaRecompensas
                  nomePontoInteresse={item.nome}
                  recompensas={item.recompensas_associadas}
                />
              </div>
            )
          }
        })}

        <div className="col-12 mt-5">
          <p className="fs-5 text-body fw-light">Recompensas</p>
          <ToastContainer />
        </div>

        {/* apenas visivel para o AT */}
        <VisibleTo tipo="2">
          <div className="col-12 col-md-3">
            <CardAdd
              title="Adicionar Recompensa"
              idModal="AddRecompensa"
              nomeModal="addRecompensa"
            />
          </div>
        </VisibleTo>

        {/*  vai retornar um compoenente sempre com os itens das recompensas */}
        {recompensas.map((item, index) => {
          // console.log(item)
          return (
            <div key={index} className="col-12 col-sm-6 col-md-3">
              <CardRecompensa
                title={item.titulo}
                pontos={item.pontos}
                categoria={item.tipo_interesse.nome}
              />
            </div>
          );
        })}

        {/*  Grafico */}
        <div className="col-12 mt-5">
          <p className="fs-5 text-body fw-light">Recompensas Resgatadas</p>
        </div>

        <div className="col-12 col-md-10">
          <GraficoHorizontal datasets={datasets} data={voucher} />
        </div>
      </div>
    </div>
  );
}
