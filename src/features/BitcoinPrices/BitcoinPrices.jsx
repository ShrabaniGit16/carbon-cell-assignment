import axios from "axios";
import React, { useEffect, useState } from "react";
import nbst from '../../assets/icons/mountain.png';
import eft from '../../assets/icons/light-bulb.png';
import wpct from '../../assets/icons/mountain.png';
import wet from '../../assets/icons/mountain.png';

const BitcoinPrices = () => {
  const [prices, setPrices] = useState({});


  const coinPrices = [
    {
      title: "NBST",
      tagline: "Nature Based Solution Token",
      icon:'../../assets/icons/mountain.png',
      ...prices,
    },
    {
      title: "EFT",
      tagline: "Energy Efficiency Token",
      icon:'../../assets/icons/light-bulb.png',
      ...prices,
    },
    {
      title: "WPCT",
      tagline: "Waste Management and Plastic Credits Tokens",
      icon:'../../assets/icons/recycle.png',
      ...prices,
    },
    {
      title: "WET",
      tagline: "Water Token",
      icon:'../../assets/icons/droplet.png',
      ...prices,
    },
  ];

  console.log(coinPrices)

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const data = await axios.get(
          "https://api.coindesk.com/v1/bpi/currentprice.json"
        );
        setPrices(data.data.bpi);
        console.log(data.data);
      } catch (error) {
        throw Error(error);
      }
    };
    fetchPrices();
  },[]);

 

  return <div className="row mt-2 g-3"></div>;
};

export default BitcoinPrices;
