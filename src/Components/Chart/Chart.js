import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  LinearScale,
  Filler,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import "./Chart.css";

// Register Chart.js components
ChartJS.register(
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  LinearScale,
  Filler,
  ChartDataLabels
);

const LineChart = () => {
  const data = {
    labels: ["00:00","01:00", "02:00", "03:00","04:00"], // Example time points
    datasets: [
      {
        label: "",
        data: [
          { x: "00:00", y: 0,  name: ""},
          { x: "01:00", y: 40, name: "Alice" },
          { x: "02:00", y: 70, name: "Bob" },
          { x: "03:00", y: 80, name: "Charlie" },
        ],
        borderColor: "#BDE0FE",
        backgroundColor: "lightblue",
        pointStyle: "circle", // Can be 'circle', 'rect', 'triangle', etc., or an image
        pointRadius: 2,
        pointHoverRadius: 8,
        pointBackgroundColor: "#BDE0FE",
        pointHoverBackgroundColor: "#FFAFCC",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // This removes the legend completely
      },
      tooltip: {
        callbacks: {
          // Add custom tooltip content
          label: (context) => {
            const point = context.raw;
            return `Name: ${point.name}, Score: ${point.y}, Time: ${point.x}`;
          },
        },
      },
      datalabels: {
        // Persistent labels for each point
        display: true,
        align: "end", // Moves labels inside the chart instead of "top"
        offset: 8, 
        formatter: (value) => value.name, // Display student name
        font: {
          size: 20,
        },
        color: "#C8ACD6",
      },
    },
    scales: {
      x: {
        type: "category",
        title: {
          display: true,
          text: "Time",
        },
        ticks: {
          autoSkip: false,
          // maxRotation: 45, // Adjust rotation angle
          // minRotation: 45, // Ensures better visibility
        },
      },
      y: {
        title: {
          display: true,
          text: "Score",
        },
        min: 0, // Ensures Y-axis starts from 0
        max: 100, // Ensures Y-axis extends up to 100
        ticks: {
          //padding: 10, // Increases spacing for visibility
          autoSkip: false, // Ensures all labels are displayed
        },
      },
    },
  };

  return <Line data={data} options={options} className="lineChart-container"/>;
};

export default LineChart;
