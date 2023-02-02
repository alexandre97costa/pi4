import React, { useEffect, useState } from "react";
import axios from "axios";

import CardRecompensa from "../../Components/Cards/CardRecompensa";
import CardAdd from "../../Components/Cards/CardAdd";
import CardListaRecompensas from "../../Components/Cards/CardListaRecompensas";
import GraficoHorizontal from "../../Components/GraficoHorizontal";
import VisibleTo from "../../Helpers/VisibleTo";
import BotaoDashboard from "../../Components/BotaoDashboard";
import auth from "../../Auth/auth.service";

//Imagem exemplo
//import coffe from "../../Assets/Images/logo.png";

const ip = process.env.REACT_APP_IP;

//array das categorias das recompensas

export default function Recompensa(props) {
  const [recompensas, setRecompensas] = useState([]);
  const [pontoInteresse, setPontoInteresse] = useState([]);


  useEffect(() => {
    axiosGetRecompensas();
    axiosPostRecompensas();
    axiosDeleteRecompensas();
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

  function axiosGetRecompensas() {
    const url = ip + "/recompensa"
    console.log(url)
    //Aqui que fazemos o pedido axios das recompensas
    axios
      .get(url, auth.header())
      .then((output) => {
        console.log(output.data);
        setRecompensas(output.data?.data ?? []);
      })
      .catch((error) => console.error(error));
  }

  function axiosPostRecompensas() {
    axios
      .post(ip, {
        // no exemplo que vi ele ia buscar as infos tinha isto title:"ksdksdnfs" body:"skdjsjdf"
      })
      .then((response) => {
        setRecompensas(response.data);
      });
  }
  if (!axiosPostRecompensas) return "Não Adiciona!"

  function axiosDeleteRecompensas() {
    const url = ip + "/recompensa"
    console.log(url)
    axios
    .delete(url, auth.header)
    .then(() => {
      alert("Recompensa Eliminada!");
      setRecompensas(null)
    });
  }
  if (!axiosDeleteRecompensas) return "Não eliminada!"

  function axiosGetPontoInteresse() {
    const url = ip + "/pi"
    console.log(url)
    //Aqui que fazemos o pedido axios dos pontos de interesse
    axios
      .get(url, auth.header())
      .then((output) => {
        console.log(output.data);
        setPontoInteresse(output.data?.data ?? []);
      })
      .catch((error) => console.error(error));
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
        {/* vai devolver uma lista de recompensas de X ponto de interesse */}
        {pontoInteresse.map((item, index) => {
          return (
            <div key={index} className="col-12 col-sm-8 col-md-4">
              <CardListaRecompensas
                nomePontoInteresse="Nome do Ponto de Interesse"
                recompensas={item.pontoInteresse}
              />
            </div>
          );
        })}

        <div className="col-12 mt-5">
          <p className="fs-5 text-body fw-light">Recompensas</p>
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
          return (
            <div key={index} className="col-12 col-sm-6 col-md-3">
              <CardRecompensa
                title={item.title}
                pontos={item.pontos}
                imagem={item.imagem}
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
