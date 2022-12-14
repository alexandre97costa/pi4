import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Chart(props) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
      },
    },
  };

  const labels = [
    "Responsável de Região",
    "Administrador",
    "Visitantes",
    "Agente Turístico",
  ];
  
  const data1 = [
    "12",
    "32",
    "12",
    "43",
    "60",
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Utilizadores",
        data: data1,
        backgroundColor: "#BACC6A",
        borderRadius: 10,
      }
    ],
  };
  return (
    <>
      <div className="w-50 mt-4">
        <Bar options={options} data={data} />
      </div>
    </>
  );
}

export default Chart;
