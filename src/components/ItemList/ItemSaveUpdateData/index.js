import React from "react";
import BtnSave from "./BtnSave";
import TextCreatePost from "./TextCreatePost";

const ItemSaveUpdateData = ({ dataCreated }) => {
  return (
    <div className="flex flex-col  ">
      <BtnSave />
      <TextCreatePost dataCreated={dataCreated} />
    </div>
  );
};

export default ItemSaveUpdateData;
