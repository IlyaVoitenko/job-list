import React from "react";
import ItemPhoto from "./ItemPhoto";
import ItemContent from "./ItemContent";

const ItemList = ({ data }) => {
  console.log("ItemList :", data);
  return (
    <div className="h-24 container mx-auto flex  flex-row mt-2  ">
      <ItemPhoto photo={data.pictures} />
      <ItemContent context={data} />
    </div>
  );
};

export default ItemList;
