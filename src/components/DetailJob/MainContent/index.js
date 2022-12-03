import React from "react";
import Header from "../Header";
import BtnApply from "./BtnApply";

const MainContent = () => {
  return (
    <div className="flex flex-col  w-1/2 mt-2 ml-14 ">
      <Header />
      <BtnApply />
    </div>
  );
};

export default MainContent;
