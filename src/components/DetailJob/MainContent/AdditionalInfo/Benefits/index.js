import React from "react";
import BtnsBenefits from "./BtnsBenefits";
import BenefitsTitle from "./BenefitsTitle";

const Benefits = ({ benefits }) => {
  return (
    <div>
      <BenefitsTitle />
      <BtnsBenefits benefitsList={benefits} />
    </div>
  );
};

export default Benefits;
