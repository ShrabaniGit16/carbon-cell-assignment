import axios from "axios";
import React, { useEffect, useState } from "react";
import nbst from "../../assets/icons/mountain.png";
import eft from "../../assets/icons/light-bulb.png";
import wpct from "../../assets/icons/mountain.png";
import wet from "../../assets/icons/mountain.png";
import PriceCard from "../../components/PriceCard/PriceCard";

const BitcoinPrices = () => {
  const [prices, setPrices] = useState();
  const [loading, setLoading] = useState(false);

  const coinPrices = [
    {
      title: "NBST",
      tagline: "Nature Based Solution Token",
      icon: "../../assets/icons/mountain.png",
      ...prices,
    },
    {
      title: "EFT",
      tagline: "Energy Efficiency Token",
      icon: "../../assets/icons/light-bulb.png",
      ...prices,
    },
    {
      title: "WPCT",
      tagline: "Waste Management and Plastic Credits Tokens",
      icon: "../../assets/icons/recycle.png",
      ...prices,
    },
    {
      title: "WET",
      tagline: "Water Token",
      icon: "../../assets/icons/droplet.png",
      ...prices,
    },
  ];

  useEffect(() => {
    const fetchPrices = async () => {
      setLoading(true);
      try {
        const data = await axios.get(
          "https://api.coindesk.com/v1/bpi/currentprice.json"
        );
        setLoading(false);
        setPrices(data.data.bpi);
      } catch (error) {
        throw Error(error);
      }
    };
    fetchPrices();
  }, []);

  return (
    <div className="row g-3">
      {loading && <p className="text-center">Loading...</p>}

      {!loading &&
        prices &&
        coinPrices.map((ele, index) => (
          <PriceCard coinData={ele} key={index} />
        ))}
    </div>
  );
};

export default BitcoinPrices;
