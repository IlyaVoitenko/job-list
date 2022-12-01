import React from "react";
import style from "./style.module.css";

const ItemGeoData = ({ geolocation }) => {
  return (
    <div className="flex flex-row">
      <img
        src="/Combined Shape.png"
        alt=""
        className="w-2.5 h-4 flex mt-1"
      ></img>
      <span className={`${style.textCityCountry} flex ml-2`}>
        Vienna, Austria
      </span>
    </div>
  );
};

export default ItemGeoData;
