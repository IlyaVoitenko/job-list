import React from "react";
import Compensation from "../../Compensation";
import BtnApply from "../../BtnApply";

const Description = ({ descriptionText }) => {
  const firstParagraph = descriptionText.split("Responsopilities")[0];
  const secontParagraph = descriptionText.split("\n")[4];
  const thirdParagraph = descriptionText
    .split("Compensation & Benefits:")[1]
    .split(".");
  return (
    <div className="text-left mt-2 w-[92%] sm:w-full ">
      <span className=" font-robot not-italic text-regal-blue font-normal">
        {firstParagraph}
      </span>
      <p className="font-proximaNova  not-italic mt-2 mb-2 font-bold text-regal-blue">
        Responsopilities
      </p>
      <p className="font-robot not-italic text-regal-blue font-normal">
        {secontParagraph}
      </p>
      <p className="font-proximaNova  not-italic mt-2 mb-2 font-bold text-regal-blue">
        Compensation & Benefits:
      </p>
      <Compensation listCompensation={thirdParagraph} />
      <BtnApply />
    </div>
  );
};

export default Description;
