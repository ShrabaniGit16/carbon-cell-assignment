import axios from "axios";
import React, { useEffect, useState } from "react";
import nbst from "../../assets/icons/mountain.png";
import eft from "../../assets/icons/light-bulb.png";
import wpct from "../../assets/icons/recycle.png";
import wet from "../../assets/icons/droplet.png";
import PriceCard from "../../components/PriceCard/PriceCard";

const BitcoinPrices = () => {
  const [prices, setPrices] = useState();
  const [loading, setLoading] = useState(false);

  const coinPrices = [
    {
      title: "NBST",
      tagline: "Nature Based Solution Token",
      icon: nbst,
      ...prices,
    },
    {
      title: "EFT",
      tagline: "Energy Efficiency Token",
      icon: eft,
      ...prices,
    },
    {
      title: "WPCT",
      tagline: "Waste Management and Plastic Credits Tokens",
      icon: wpct,
      ...prices,
    },
    {
      title: "WET",
      tagline: "Water Token",
      icon:wet,
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
