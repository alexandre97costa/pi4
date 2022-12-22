import React from 'react';

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
import CardForm from './CardForm';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export default function GraficoHorizontal(props) {
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

    const dias = [
        "22/12",
        "23/12",
        "24/12",
        "25/12",
    ];

    const dataUtilizadores = [
        "10",
        "13",
        "50",
        "26"
    ]

    const dataAgenteTuristico = [
        "100",
        "112",
        "58",
        "91"
    ]

    const dataResponsavelRegiao = [
        "35",
        "36",
        "59",
        "126"
    ]

    const dataAdmin = [
        "145",
        "56",
        "89",
        "46"
    ]

    const borderRadius = 14

    const data = {
        labels: dias,
        datasets: [
            {
                label: "Utilizadores",
                data: dataUtilizadores,
                backgroundColor: "#BACC6A",
                borderRadius: borderRadius,
            }, {
                label: "Agente Turistico",
                data: dataAgenteTuristico,
                backgroundColor: "#BACC6A",
                borderRadius: borderRadius,
            }, {
                label: "Responsavel de Região",
                data: dataResponsavelRegiao,
                backgroundColor: "#BACC6A",
                borderRadius: borderRadius,
            }, {
                label: "Administrador",
                data: dataAdmin,
                backgroundColor: "#BACC6A",
                borderRadius: borderRadius,
            }
        ],
    };

    return (
        <CardForm>
            <Bar options={options} data={data} />
        </CardForm>
    );
} 