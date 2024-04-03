import React from "react";
import { PopulationChart } from "../features/Charts";
import BitcoinPrices from "../features/BitcoinPrices/BitcoinPrices";

const Home = () => {
  return (
    <>
      <div className="row">
        <p className="heading">
          Hello,<span className="user"> User</span> 😊
        </p>
        <p className="description">
          Population chart and cryptocurrency prices
        </p>
      </div>

      <PopulationChart />

      <div className="assets">
        <p>Assets</p>
        <p>Today</p>
      </div>
      <BitcoinPrices />
    </>
  );
};

export default Home;
