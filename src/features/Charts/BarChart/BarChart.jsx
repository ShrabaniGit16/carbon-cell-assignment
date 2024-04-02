import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const BarChart = ({labels, population }) => {
  
  return (
    <div className="col-12 col-md-6">
      <div className="data-card">
        <Bar
          data={{
            labels: labels,
            datasets: [
              {
                label: "Population",
                data: population,
                backgroundColor: "#5ef9e3",
                borderColor: "#5ef9e3",
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Yearly Population in United States",
                color:'#ffffff'
              },
              legend: {
                title: {
                  color:'#ffffff',
                  display: true,
                  text: "legend",
                },
              },
            },
            scales: {
              y: {
                title: {
                  display: true,
                  text: "Popolation over years",
                  padding: 4,
                },
              },
              x: {
                title: {
                  display: true,
                  text: "Year",
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default BarChart;
