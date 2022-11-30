import React from "react";
import ItemTitle from "./ItemTitle";
import ItemDepartmen from "./ItemDepartmen";
const ItemContent = ({ context }) => {
  return (
    <div className="justify-items-start ">
      <ItemTitle title={context.title} />
      <ItemDepartmen address={context.address} />
    </div>
  );
};

export default ItemContent;
