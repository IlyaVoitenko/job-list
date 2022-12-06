import React from "react";

const TitleSalary = ({ salary, title }) => {
  const firstSalary = salary.split("k")[0] + " 000";
  const secondSalary = salary.split("k")[1] + " 000";

  return (
    <div className="flex flex-row space-x-4 mt-4">
      <div className="w-1/2 float-left  text-left">
        <span className="font-proximaNova not-italic text-2xl tracking-[ -0.75px] font-bold leading-[30px] text-regal-blue">
          {title}
        </span>{" "}
      </div>
      <div className=" w-2/5 text-right">
        <span className="font-proximaNova not-italic   text-regal-blue font-bold font-lg leading-[25px] tracking-titleLetterSpacing">
          &#8364; {firstSalary}
          {secondSalary}
        </span>{" "}
        <p className="font-robot font-semibold not-italic text-regal-blue">
          Brutto, per year
        </p>
      </div>
    </div>
  );
};

export default TitleSalary;
