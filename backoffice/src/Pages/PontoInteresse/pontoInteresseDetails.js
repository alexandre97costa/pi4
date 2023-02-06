import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import auth from "../../Auth/auth.service";
import VisibleTo from "../../Helpers/VisibleTo";
import axios from "axios";

import CardReservas from "../../Components/Cards/CardReservas";
import CardAdd from "../../Components/Cards/CardAdd";
import CardRecompensa from "../../Components/Cards/CardRecompensa";
import CardDetails from "../../Components/Cards/CardDetails";
import Carousel from "../../Components/Carousel";
import ModalEditarPontoInteresse from "../../Components/Modais/ModalEditarPontoInteresse";
import ModalEditarAgente from "../../Components/Modais/ModalEditarAgente";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ip = process.env.REACT_APP_IP;

export default function PontoInteresseDetails() {
  const [eventos, setEventos] = useState([]);
  const [recompensa, setRecompesa] = useState([]);
  const [pontoInteresseDetails, setPontoInteresseDetails] = useState([]);
  const [imagens, setImagens] = useState([]);

  const { id_ponto_interesse } = useParams();

  useEffect(() => {
    axiosGetPontoInteresse()
    axiosGetEventos()
    axiosGetRecompensas()
    console.log("RENDER 1")
  }, []);

  async function axiosGetPontoInteresse() {
    const url = ip + "/pi/" + id_ponto_interesse

    await axios
      .get(url, auth.header())
      .then((output) => {
        setPontoInteresseDetails(output.data?.data ?? []);
        setImagens(output.data.data[0].imagens)
      })
      .catch((error) => {
        toast.dismiss()
        toast.error(error.response.data.msg)
        console.error(error)
      });
  }

  async function axiosGetEventos() {
    const url = ip + "/evento"
    console.log(url)

    let options = {
      ...auth.header(),
      params: {
        ponto_interesse_id: id_ponto_interesse,
        limit: 3
      }
    }

    await axios
      .get(url, options)
      .then((output) => {
        console.log(output.data.data);
        setEventos(output.data?.data ?? []);
      })
      .catch((error) => {
        toast.dismiss()
        toast.warning(error.response.data.msg)
        console.error(error)
      });
  }

  async function axiosGetRecompensas() {
    const url = ip + "/recompensa"
    console.log(url)

    let options = {
      ...auth.header(),
      params: {
        ponto_interesse_id: id_ponto_interesse,
        limit: 3
      }
    }

    await axios
      .get(url, options)
      .then((output) => {
        setRecompesa(output.data?.data ?? []);
      })
      .catch((error) => {
        toast.dismiss()
        toast.warning(error.response.data.msg)
        console.error(error)
      });
  }

  return (
    <>
      <div className="row gy-3 mb-4">

        <VisibleTo tipo={3}>
          <div className="col-12 mt-5 mb-4">
            <p className="fs-5 text-body fw-light">Ações Rápidas</p>
            <button
              type="button"
              className="btn btn-light btn-lg bg-white shadow mt-3 p-4"
              data-bs-toggle="modal"
              data-bs-target="#editarAgente"
            >
              <i className="bi bi-person-plus me-3"></i>Gerir Agente
            </button>
            <ModalEditarAgente pontoInteresseId={id_ponto_interesse} idModal="editarAgente" title="Editar Agente" />
          </div>
        </VisibleTo>

        <VisibleTo tipo={4}>
          <div className="col-12 mt-5 mb-4">
            <p className="fs-5 text-body fw-light">Ações Rápidas</p>
            <button
              type="button"
              className="btn btn-light btn-lg bg-white shadow mt-3 p-4"
              data-bs-toggle="modal"
              data-bs-target="#editarAgente"
            >
              <i className="bi bi-file-earmark me-3"></i>Gerir Agente
            </button>
            <ModalEditarAgente pontoInteresseId={id_ponto_interesse} idModal="editarAgente" title="Editar Agente" />
          </div>
        </VisibleTo>

        <div className="col-6 mt-4 mb-3">
          <p className="fs-5 text-body fw-light">Vista Geral</p>
        </div>

        <VisibleTo tipo={2}>
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
              pontoInteresse={pontoInteresseDetails[0]}
              idModal="editarInteresse"
              title="Editar Agente"
              onChange={() => axiosGetPontoInteresse()}
            />
          </div>
        </VisibleTo>

        <div className="col-12">
          <div className="row">
            <div className="col-12 col-md-4">
              <CardDetails info={pontoInteresseDetails} />
            </div>
            <div className="col-12 col-md-8">
              <Carousel id="imagensPontoInteresse" imagens={imagens} />
            </div>
          </div>
        </div>


        <div className="col-12 mt-5 mb-3">
          <p className="fs-5 text-body fw-light">Eventos</p>
        </div>

        <VisibleTo tipo={2}>
          <div className="col-12 col-md-3">
            <CardAdd
              title="Adicionar Evento"
              idModal="AddEvento"
              nomeModal="addEvento"
            />
          </div>
        </VisibleTo>

        {eventos.map((item, index) => {
          return (
            <div key={index} className="col-12 col-sm-6 col-md-4">
              <CardReservas
                nomePontoInteresse={item.ponto_interesse.nome}
                nomeEvento={item.nome}
                sessao={item.sessoes}
                lotacao={item.lotacao}
                eventoId={item.id}
                onChange={() => axiosGetEventos()}
              />
            </div>
          );
        })}

        <div className="col-12 mt-5">
          <p className="fs-5 text-body fw-light">Recompensas</p>
        </div>

        <VisibleTo tipo={2}>
          <div className="col-12 col-md-3">
            <CardAdd
              title="Adicionar Recompensa"
              idModal="AddRecompensa"
              nomeModal="addRecompensa"
            />
          </div>
        </VisibleTo>

        {recompensa.map((item, index) => {
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
      </div>
      <ToastContainer />
    </>
  );
}
