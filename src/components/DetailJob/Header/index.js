import React, { useState, useEffect } from "react";
import { getSizeWindow, getWindowSize } from "../MainContent/helper";
import BtnSave from "./BtnSave";
import Title from "./Title";
import Share from "./Share";

const Header = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  useEffect(() => getSizeWindow(setWindowSize), []);
  const { innerWidth } = windowSize;

  return (
    <div className="flex flex-col">
      <div className="flex flex-row mt-2 border-b-2 w-[97%] items-center sm:w-full">
        <Title />
        {innerWidth > 768 ? <BtnSave /> : null}
        {innerWidth > 768 ? <Share /> : null}
      </div>
      {innerWidth < 1024 ? (
        <div className="flex flex-row sm:mt-5 ">
          <BtnSave /> <Share />
        </div>
      ) : null}
    </div>
  );
};

export default Header;
