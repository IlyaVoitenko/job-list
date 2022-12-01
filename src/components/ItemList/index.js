import React from "react";
import ItemPhoto from "./ItemPhoto";
import ItemContent from "./ItemContent";
import ItemRating from "./ItemRating";
import ItemSaveUpdateData from "./ItemSaveUpdateData";

const ItemList = ({ data }) => {
  return (
    <div className="h-34 rounded-lg container mx-auto flex justify-center flex-row mt-2  bg-white w-3/4">
      <ItemPhoto photo={data.pictures} />
      <ItemContent context={data} />
      <div className="flex flex-row justify-evenly w-1/4 ">
        <ItemRating />
        <ItemSaveUpdateData dataCreated={data.createdAt} />
      </div>
    </div>
  );
};

export default ItemList;
