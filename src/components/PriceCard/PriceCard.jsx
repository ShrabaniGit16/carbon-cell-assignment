import React from "react";
import classes from "./PriceCard.module.scss";
import info from "../../assets/icons/info.png";
import CryptoPrice from "../CryptoPrice/CryptoPrice";

const PriceCard = ({ coinData }) => {
  console.log(coinData);
  return (
    <div className="col-12 col-sm-6 col-md-3">
      <div className={classes["price-card"]}>
        <div className={classes["card-header"]}>
          <div className={classes.icon}>
            <img src={`${coinData.icon}`} alt="" />
          </div>
          <p className={classes.title}>{coinData.title}</p>
        </div>
        <p className={classes["sub-title"]}>{coinData.tagline}</p>

        <div className={classes.price}>
          <p className={classes.rate}>
            {coinData.EUR.rate}
            <span> ₹</span>
          </p>
          {/* <div className={classes["trade-section"]}>
            <p className={classes.trade}>profit</p>
            <span className={classes.arrow}>arrow</span>
          </div> */}
        </div>
        
        <div className={classes.price}>
          <p className={classes.rate}>
            {coinData.GBP.rate}
            <span> £</span>
          </p>
          {/* <div className={classes["trade-section"]}>
            <p className={classes.trade}>profit</p>
            <span className={classes.arrow}>arrow</span>
          </div> */}
        </div>
        
        <div className={classes.price}>
          <p className={classes.rate}>
            {coinData.USD.rate}
            <span> $</span>
          </p>
          {/* <div className={classes["trade-section"]}>
            <p className={classes.trade}>profit</p>
            <span className={classes.arrow}>arrow</span>
          </div> */}
        </div>
       
        {/* <div className={classes.action}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill='white'>
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
          </svg>
          <button className={classes.btn}>Trade</button>
        </div> */}
      </div>
    </div>
  );
};

export default PriceCard;
