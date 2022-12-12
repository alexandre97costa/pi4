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
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Dataset 1",
        data: data1,
        backgroundColor: "#BACC6A",
      }
    ],
  };
  return (
    <>
      <div className="w-50">
        <Bar options={options} data={data} />
      </div>
    </>
  );
}

export default Chart;
