import React from "react";
import ItemPhoto from "./ItemPhoto";

const ItemList = ({ data }) => {
  console.log("ItemList :", data);
  return (
    <div>
      ItemPhoto
      <ItemPhoto photo={data.pictures} />
    </div>
  );
};

export default ItemList;
