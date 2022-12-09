import React from "react";
import { postCreated } from "../../../../ItemList/ItemSaveUpdateData/TextCreatePost/helper";

const DataPosted = ({ dataCreated }) => {
  const dataPosted = postCreated(dataCreated);
  return (
    <div className=" text-left mt-3 sm:mb-7">
      <span className="font-proximaNova leading-titleLineHeight text-adressTextColor font-normal text-adressFontSize tracking-adressLetterSpacing">
        {dataPosted}
      </span>
    </div>
  );
};

export default DataPosted;
