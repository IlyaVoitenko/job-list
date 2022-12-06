import React from "react";
import EmploymentTitle from "./EmploymentTitle";
import BtnsEmploy from "./BtnsEmploy";

const Employment = ({ employmentType }) => {
  return (
    <div>
      <EmploymentTitle />
      <BtnsEmploy employmentList={employmentType} />
    </div>
  );
};

export default Employment;
