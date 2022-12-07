import React from "react";

const ItemGeoData = ({ geolocation }) => {
  return (
    <div className="flex flex-row">
      <img
        src="/Combined Shape.png"
        alt=""
        className="w-2.5 h-4 flex mt-1"
      ></img>
      <span
        className={` flex ml-2 font-proximaNova leading-titleLineHeight text-adressTextColor font-normal text-adressFontSize tracking-adressLetterSpacing sm:mb-3`}
      >
        Vienna, Austria
      </span>
    </div>
  );
};

export default ItemGeoData;
