import React from "react";
import AdditionalTitle from "./AdditionalTitle";
import Employment from "./Employment";
import Benefits from "./Benefits";

const AdditionalInfo = ({ data }) => {
  return (
    <div className=" mt-10">
      <AdditionalTitle />
      <Employment employmentType={data.employment_type} />
      <Benefits benefits={data.benefits} />
    </div>
  );
};

export default AdditionalInfo;
