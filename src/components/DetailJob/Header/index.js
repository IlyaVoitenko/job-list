import React from "react";
import BtnSave from "./BtnSave";
import Title from "./Title";
import Share from "./Share";

const Header = () => {
  return (
    <div className="flex flex-row mt-2 border-b-2 w-[700px] items-center ">
      <Title />
      <BtnSave />
      <Share />
    </div>
  );
};

export default Header;
