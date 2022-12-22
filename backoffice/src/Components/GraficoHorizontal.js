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

    const data = {
        labels: props.data,
        datasets:props.datasets
    };

    return (
        <CardForm>
            <Bar options={options} data={data} />
        </CardForm>
    );
} 