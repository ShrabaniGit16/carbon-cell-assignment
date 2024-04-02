import React, { useEffect, useState } from "react";
import {LineChart,BarChart} from './index'
import { Chart as ChartJS, defaults } from "chart.js/auto";
import axios from "axios";

defaults.maintainAspectRatio = false;
defaults.responsive = true;


const PopulationChart = () => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await axios.get(
            "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
          );
  
          setChartData(data.data.data);
          return data;
        } catch (error) {
          throw Error(error);
        }
      };
      fetchData();
    }, []);
      
    const labels = chartData?.map((data) => data.Year).reverse();
    const population = chartData?.map((data) => data.Population).reverse();

  return (
    <div className="row mt-2 g-3">
    <LineChart labels={labels} population={population}/>
    <BarChart labels={labels} population={population} />
  </div>
  )
}

export default PopulationChart
