import React, { useEffect, useState } from "react";
import { LineChart } from "../features/Charts";
import axios from "axios";

const Home = () => {
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
           throw Error(error) 
        }
     
    };
    fetchData()
  }, []);

  console.log(chartData)

  return (
    <div>
      <h1>Hello, ABC</h1>
      <p>Population chart and cryptocurrency prices</p>
      <div>
        <LineChart chartData={chartData}/>
      </div>
    </div>
  );
};

export default Home;
