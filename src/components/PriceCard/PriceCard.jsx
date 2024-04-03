import React from "react";
import classes from "./PriceCard.module.scss";

const PriceCard = ({ coinData }) => {
    
  return (
    <div className="col-12 col-sm-6 col-md-3">
      <div className={classes["price-card"]}>
        <div className={classes["card-header"]}>
          <div className={classes.icon}>
            <img src={coinData.icon} alt="" />
          </div>
          <p className={classes.title}>{coinData.title}</p>
        </div>
        <p className={classes["sub-title"]}>{coinData.tagline}</p>

        <div className={classes.price}>
          <p className={classes.rate}>
            {coinData.EUR.rate}
            <span> ₹</span>
          </p>
        </div>

        <div className={classes.price}>
          <p className={classes.rate}>
            {coinData.GBP.rate}
            <span> £</span>
          </p>
        </div>

        <div className={classes.price}>
          <p className={classes.rate}>
            {coinData.USD.rate}
            <span> $</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
