import React, { useState, useEffect } from "react";
import { getSizeWindow, getWindowSize } from "../../MainContent/helper";

const BtnSave = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  useEffect(() => getSizeWindow(setWindowSize), []);
  const { innerWidth } = windowSize;
  return (
    <div className="flex flex-row w-[70%] justify-end  sm:w-[34%]  ">
      <img
        alt=""
        src={innerWidth > 768 ? "/Rectangle.png" : "/Fill 1 Copy 7.png"}
        className="h-5 w-4 mt-0.5 sm:h-4 sm:mt-1"
      ></img>
      <span className="tracking-detailLetterSpacing ml-2 text-robot text-regal-blue">
        Save to my list
      </span>
    </div>
  );
};

export default BtnSave;
