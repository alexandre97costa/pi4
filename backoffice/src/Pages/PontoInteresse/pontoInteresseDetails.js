import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import ConfirmarReservas from "../../Components/Cards/CardReservas";
import CardAdd from "../../Components/Cards/CardAdd";
import CardRecompensa from "../../Components/Cards/CardRecompensa";
import CardDetails from "../../Components/Cards/CardDetails";
import Carousel from "../../Components/Carousel";
import GraficoHorizontal from "../../Components/GraficoHorizontal";
import ModalEditarPontoInteresse from "../../Components/Modais/ModalEditarPontoInteresse";
import ModalEditarAgente from "../../Components/Modais/ModalEditarAgente";
import auth from "../../Auth/auth.service";

//Imagem exemplo
import Pancakes from "../../Assets/Images/fotoagente.jpg";
import coffe from "../../Assets/Images/logo.png";

const ip = process.env.REACT_APP_IP;

export default function PontoInteresseDetails(props) {

  const [evento, setEvento] = useState([]);
  const [recompensa, setRecompesa] = useState([]);

  useEffect(() => {
    axiosGetReservas()
    axiosGetRecompensas()
  }, []);

  const imagens = [
    {
      imagem: Pancakes,
    },
    {
      imagem: Pancakes,
    },
  ];

  const testeReserva1 = [
    {
      dataReserva: "20 Jan 2023",
      numeroPessoas: "2",
    },
    {
      dataReserva: "20 Jan 2023",
      numeroPessoas: "5",
    },
    {
      dataReserva: "20 Jan 2023",
      numeroPessoas: "13",
    },
  ];

  const testeReserva2 = [
    {
      dataReserva: "20 Jan 2023",
      numeroPessoas: "3",
    },
    {
      dataReserva: "20 Jan 2023",
      numeroPessoas: "5",
    },
  ];

  const itens = [
    {
      nomePontoInteresse: "Ponto de Interesse",
      nomeEvento: "Evento X",
      dataEvento: "20 Jan 2023",
      statusReserva: "20/30",
      valueNow: "85",
      reservas: testeReserva1,
    },
    {
      nomePontoInteresse: "Ponto de Interesse",
      nomeEvento: "Evento X",
      dataEvento: "21 Jan 2023",
      statusReserva: "8/9",
      valueNow: "99",
      reservas: testeReserva2,
    },
  ];
  
/*
  const recompensa = [
    {
      title: "Açucar grátis na compra do café",
      pontos: "100 Pontos",
      imagem: coffe,
    },
    {
      title: "Açucar grátis na compra do café",
      pontos: "1000 Pontos",
      imagem: coffe,
    },
    {
      title: "Açucar grátis na compra do café",
      pontos: "10 Pontos",
      imagem: coffe,
    },
    {
      title: "Açucar grátis na compra do café",
      pontos: "10 Pontos",
      imagem: coffe,
    },
  ];
*/
  const pontoInteresseDetails = [
    {
      categoria: "Nome",
      informacao: "Forninho da Mimi",
    },
    {
      categoria: "Descrição",
      informacao:
        "m restaurante com 5 estrelas, melhor comida caseira do mundo",
    },
    {
      categoria: "Tipo de Interesse",
      informacao: "Restaurante",
    },
    {
      categoria: "Avaliação",
      informacao: "4.3 (52 avaliações)",
    },
  ];

  const borderRadius = 14;

  const dias = ["22/12", "23/12", "24/12", "25/12"];

  const dataVisitas = ["100", "134", "108", "85"];

  const datasets = [
    {
      label: "Visitas",
      data: dataVisitas,
      backgroundColor: "#729d4c",
      borderRadius: borderRadius,
    },
  ];

  function axiosGetReservas() {
    const url = ip + "/r"
    console.log(url)
    //Aqui que fazemos o pedido axios das reservas
    axios
    .get(url, auth.header())
    .then((output) => {
      console.log(output);
      setEvento(output.data?.data ?? []);
    })
    .catch((error) => console.error(error));
  }

  function axiosGetRecompensas() {
    const url = ip + "/r"
    console.log(url)
    //Aqui que fazemos o pedido axios das recompesas
    axios
    .get(url, auth.header())
    .then((output) => {
      console.log(output);
      setRecompesa(output.data?.data ?? []);
    })
    .catch((error) => console.error(error));
  }

  function tipoUtilizador(card) {
    if (props.tipoUtilizador === "Agente Turistico") {
      if (card === "evento")
        return (
          <div className="col-12 col-md-3">
            <CardAdd
              title="Adicionar Evento"
              idModal="AddEvento"
              nomeModal="addEvento"
            />
          </div>
        );
      if (card === "recompensa")
        return (
          <div className="col-12 col-md-3">
            <CardAdd
              title="Adicionar Recompensa"
              idModal="AddRecompensa"
              nomeModal="addRecompensa"
            />
          </div>
        );
    }
  }

  return (
    <>
      <div className="row gy-3">
        <div className="col-12 mt-5 mb-4">
          <p className="fs-5 text-body fw-light">Ações Rápidas</p>
          <button
            type="button"
            className="btn btn-light btn-lg shadow mt-3"
            data-bs-toggle="modal"
            data-bs-target="#editarAgente"
          >
            <i className="bi bi-file-earmark me-3"></i>Gerir Agente
          </button>
          <ModalEditarAgente idModal="editarAgente" title="Editar Agente" />
        </div>
        <div className="col-6 mt-4 mb-3">
          <p className="fs-5 text-body fw-light">Vista Geral</p>
        </div>
        <div className="col-6 mt-4 mb-3 text-end">
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#editarInteresse"
          >
            Editar Informações
          </button>
          <ModalEditarPontoInteresse
            idModal="editarInteresse"
            title="Editar Agente"
          />
        </div>
        <div className="col-12 col-md-4">
          <CardDetails info={pontoInteresseDetails} />
        </div>
        <div className="col-12 col-md-8">
          <Carousel id="imagensPontoInteresse" imagens={imagens} />
        </div>

        <div className="col-12 mt-5 mb-3">
          <p className="fs-5 text-body fw-light">Eventos</p>
        </div>

        {tipoUtilizador("evento")}

        {evento.map((item, index) => {
          return (
            <div key={index} className="col-12 col-sm-6 col-md-4">
              <ConfirmarReservas
                nomePontoInteresse={item.nomePontoInteresse}
                nomeEvento={item.nomeEvento}
                dataEvento={item.dataEvento}
                statusReserva={item.statusReserva}
                valueNow={item.valueNow}
                reservas={item.reservas}
              />
            </div>
          );
        })}

        <div className="col-12 mt-5">
          <p className="fs-5 text-body fw-light">Recompensas</p>
        </div>

        {tipoUtilizador("recompensa")}

        {recompensa.map((item, index) => {
          return (
            <div key={index} className="col-12 col-sm-6 col-md-3 mb-5">
              <CardRecompensa
                title={item.title}
                pontos={item.pontos}
                imagem={item.imagem}
              />
            </div>
          );
        })}

        <div className="col-12 mt-5">
          <p className="fs-5 text-body fw-light">Número de Visitas</p>
        </div>

        <div className="col-12 col-md-10">
          <GraficoHorizontal datasets={datasets} data={dias} />
        </div>
      </div>
    </>
  );
}
