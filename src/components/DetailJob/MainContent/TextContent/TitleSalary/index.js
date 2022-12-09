import React, { useState, useEffect } from "react";
import ModileSalaryCreate from "../../ModileSalaryCreate";
import { getSizeWindow, getWindowSize } from "../../helper";
const TitleSalary = ({ salary, title, dataCreated }) => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => getSizeWindow(setWindowSize), []);

  const firstSalary = salary.split("k")[0] + " 000";
  const secondSalary = salary.split("k")[1] + " 000";
  const fullSalary = firstSalary + secondSalary;
  const { innerWidth } = windowSize;
  return (
    <div className="flex flex-row  mt-4 sm:flex-col">
      <div className="w-1/2 float-left  text-left sm:w-full">
        <span className="font-proximaNova not-italic text-2xl tracking-[ -0.75px] font-bold leading-[30px] text-regal-blue">
          {title}
        </span>{" "}
      </div>
      {innerWidth < 1024 ? (
        <ModileSalaryCreate
          salary={fullSalary}
          title={title}
          dataCreated={dataCreated}
        />
      ) : null}
    </div>
  );
};

export default TitleSalary;
