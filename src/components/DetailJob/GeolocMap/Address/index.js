import React from "react";

const Address = ({ address }) => {
  console.log("adress :", address);
  return (
    <div className="flex flex-row w-3/4 text-left">
      <img src="/Combined Shape.png" alt="" className="w-3 h-3.5 mt-1.5 "></img>
      <span className="text-white font-robot not-italic font-normal ml-1 text-[18px]">
        {address}
      </span>
    </div>
  );
};

export default Address;
