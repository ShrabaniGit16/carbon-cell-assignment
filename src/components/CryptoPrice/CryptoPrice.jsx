import React from "react";
import classes from "./CryptoPrice.module.scss";

const CryptoPrice = ({price}) => {
    console.log(price)
  return (
    <>
      <p className={classes.rate}>{price.rate}</p>
      <div className={classes["trade-section"]}>
        <p className={classes.trade}>profit</p>
        <span className={classes.arrow}>arrow</span>
      </div>
    </>
  );
};

export default CryptoPrice;
