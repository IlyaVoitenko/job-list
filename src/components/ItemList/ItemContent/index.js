import React from "react";
import ItemTitle from "./ItemTitle";
import ItemDepartmen from "./ItemDepartmen";
import ItemGeoData from "./ItemGeoData/index.js";

const ItemContent = ({ context }) => {
  return (
    <div className="justify-items-start w-1/2">
      <ItemTitle title={context.title} />
      <ItemDepartmen address={context.address} />
      <ItemGeoData geolocation={context} />
    </div>
  );
};

export default ItemContent;
