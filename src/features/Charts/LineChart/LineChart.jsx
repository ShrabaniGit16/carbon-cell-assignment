import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import classes from "./LineChart.module.scss";

const LineChart = ({ chartData }) => {
  const labels = chartData.map((data) => data.Year);
  const population = chartData.map((data) => data.Population);
  console.log(labels);
  console.log(population);

  return (
    <div className={classes["customized-card"]}>
      <div className="card">
        <div className="card-body">
          <Line
            data={{
              labels: labels,
              datasets: [
                {
                  label: "United States Population",
                  data: population,
                  backgroundColor: "#d778e4",
                  borderColor: "#d778e4",
                },
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LineChart;
