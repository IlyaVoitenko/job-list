import React from "react";

const ItemPhoto = ({ photo }) => {
  console.log(photo);
  return (
    <div>
      <img src={photo[0]} alt=""></img>
    </div>
  );
};

export default ItemPhoto;
