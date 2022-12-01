import React from "react";

const ItemPhoto = ({ photo }) => {
  return (
    <div className="flex justify-center align-center ml-3  mt-3 ">
      <img src={photo[0]} alt="" className="rounded-full w-12 h-12"></img>
    </div>
  );
};

export default ItemPhoto;
