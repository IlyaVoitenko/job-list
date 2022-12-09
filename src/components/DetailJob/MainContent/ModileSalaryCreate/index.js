import React from "react";
import DataPosted from "../../MainContent/TextContent/DataPosted";
const ModileSalaryCreate = ({ salary, dataCreated }) => {
  return (
    <div className="flex w-2/5 text-right sm:w-full sm:justify-center sm:items-center  sm:flex-row">
      <div className="sm:mt-5  sm:w-1/2 ">
        <DataPosted dataCreated={dataCreated} />
      </div>
      <div className=" sm:w-1/2">
        <span className="font-proximaNova not-italic   text-regal-blue font-bold font-lg leading-[25px] tracking-titleLetterSpacing">
          &#8364; {salary}
        </span>{" "}
        <p className="font-robot font-semibold not-italic text-regal-blue">
          Brutto, per year
        </p>
      </div>
    </div>
  );
};

export default ModileSalaryCreate;
