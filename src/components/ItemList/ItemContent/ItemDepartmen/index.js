import React from "react";

const ItemDepartmen = ({ address }) => {
  return (
    <div
      className={`text-left mt-1 font-proximaNova leading-titleLineHeight text-adressTextColor font-normal text-adressFontSize tracking-adressLetterSpacing`}
    >
      Department name • {address}
    </div>
  );
};

export default ItemDepartmen;
