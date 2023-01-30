import React from "react";

import GraficoHorizontal from "../../../Components/GraficoHorizontal";
import BotaoDashboard from "../../../Components/BotaoDashboard";
import TabelaListaAgentesTuristicos from "../../../Components/Tabelas/TabelaListaAgentesTuristicos";

export default function Home() {
  const borderRadius = 14;

  const dias = ["22/12", "23/12", "24/12", "25/12"];

  const dataRestauracao = ["10", "13", "50", "26"];

  const dataMuseus = ["100", "112", "58", "91"];

  const dataEspacosVerdes = ["35", "36", "59", "126"];

  const dataFeiras = ["145", "56", "89", "46"];

  const datasets = [
    {
      label: "Restauração",
      data: dataRestauracao,
      backgroundColor: "#bacc6a",
      borderRadius: borderRadius,
    },
    {
      label: "Museus",
      data: dataMuseus,
      backgroundColor: "#80b155",
      borderRadius: borderRadius,
    },
    {
      label: "Espaços Verdes",
      data: dataEspacosVerdes,
      backgroundColor: "#539477",
      borderRadius: borderRadius,
    },
    {
      label: "Feiras",
      data: dataFeiras,
      backgroundColor: "#6c757d",
      borderRadius: borderRadius,
    },
  ];

  return (
    <>
      <div className="row row-cols-1 row-cols-md-4 gx-4 mb-5">
        <div className="col-12 col-md-12">
          <p className="fs-5 text-body fw-light">Ações Rápidas</p>
        </div>

        <BotaoDashboard
          to="/admin/lista-utilizadores"
          class="btn-light btn-lg bg-white p-4 w-100 h-100 text-start d-flex align-items-center"
          icon="bi-person-check fs-3"
          texto="Atribuição de Perfil"
        />
        <BotaoDashboard
          to="/consultar-pontos-interesse"
          class="btn-light btn-lg bg-white p-4 w-100 h-100 text-start d-flex align-items-center"
          icon="bi-geo-alt fs-3"
          texto="Pontos de Interesse"
        />
        <BotaoDashboard
          to="/responsavel-regiao/lista-eventos"
          class="btn-light btn-lg bg-white p-4 w-100 h-100 text-start d-flex align-items-center"
          icon="bi-calendar4-event fs-3"
          texto="Eventos"
        />
        <BotaoDashboard
          to="/responsavel-regiao/lista-vouchers"
          class="btn-light btn-lg bg-white p-4 w-100 h-100 text-start d-flex align-items-center"
          icon="bi-cart-check fs-3"
          texto="Vouchers"
        />
      </div>

      <div className="row row-cols-1 row-cols-md-4 gx-4 mb-5">
        <div className="col-12 col-md-12">
          <p className="fs-5 text-body fw-light">Validação de Agentes Turísticos</p>
        </div>
        <TabelaListaAgentesTuristicos />
      </div>

      <div className="row row-cols-1 row-cols-md-4 gx-4 mb-5">
        <div className="col-12 col-md-12">
          <p className="fs-5 text-body fw-light">Categorias mais visitadas</p>
        </div>

        <div className="col-12 col-md-12">
        <GraficoHorizontal datasets={datasets} data={dias} />
        </div>
      </div>
    </>
  );
}
