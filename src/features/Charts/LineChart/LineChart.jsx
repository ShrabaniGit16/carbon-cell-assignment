import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2";

// defaults.plugins.title.display = true;
// defaults.plugins.title.align = "start";
// defaults.plugins.title.color = "black";
// defaults.plugins.title.font.size = 20;

const LineChart = ({ labels, population }) => {
   return (
    <div className="col-12 col-md-6">
      <div className="data-card">
        <Line
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

export default LineChart;
