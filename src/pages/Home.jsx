import React from "react";
import { PopulationChart } from "../features/Charts";
import BitcoinPrices from "../features/BitcoinPrices/BitcoinPrices";



const Home = () => {
 
  return (
    <div className="parent-conatiner">
      <div >
        <div className="row">
          <p className="heading">
            Hello,<span className="user"> User</span> 😊
          </p>
          <p className="description">Population chart and cryptocurrency prices</p>
        </div>

        <PopulationChart/>
        
        <div className="row  justify-content-between">
          <p className="col-4">Assets</p>
          <p className="col-4">Today</p>
        </div>
        <BitcoinPrices/>

      </div>
    </div>
  );
};

export default Home;
