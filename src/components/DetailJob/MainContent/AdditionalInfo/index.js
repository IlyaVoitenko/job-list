import React from "react";
import AdditionalTitle from "./AdditionalTitle";
import Employment from "./Employment";
import Benefits from "./Benefits";

const AdditionalInfo = ({ employmentType, benefits }) => {
  return (
    <div className=" mt-10">
      <AdditionalTitle />
      <Employment employmentType={employmentType} />
      <Benefits benefits={benefits} />
    </div>
  );
};

export default AdditionalInfo;
