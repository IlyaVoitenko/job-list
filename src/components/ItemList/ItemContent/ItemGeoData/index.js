import React from "react";
import style from "./style.module.css";

const ItemGeoData = ({ geolocation }) => {
  return (
    <div className="flex flex-row">
      <img alt=""></img>
      <span className={style.textCityCountry}>Vienna, Austria</span>
    </div>
  );
};

export default ItemGeoData;
