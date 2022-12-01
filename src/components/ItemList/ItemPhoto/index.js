import React from "react";

const ItemPhoto = ({ photo }) => {
  return (
    <div className="w-12 mt-2">
      <img src={photo[0]} alt="" className="rounded-full"></img>
    </div>
  );
};

export default ItemPhoto;
