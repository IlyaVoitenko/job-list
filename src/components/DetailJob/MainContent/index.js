import React, { useEffect, useState } from "react";
import Header from "../Header";
import BtnApply from "./BtnApply";
import TitleSalary from "./TitleSalary";
import DataPosted from "./DataPosted";
import Description from "./Description";
import AdditionalInfo from "./AdditionalInfo";
import AttachedImages from "./AttachedImages";
import { getWindowSize, getSizeWindow } from "./helper";

const MainContent = ({ data }) => {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  useEffect(() => getSizeWindow(setWindowSize), []);
  const { innerWidth } = windowSize;

  return (
    <div className="flex flex-col  w-1/2 mt-2 ml-14 sm:w-[90%] sm:ml-2 sm:mb-3">
      <Header />
      {windowSize < 1024 ? <BtnApply /> : null}
      {windowSize > 1024 ? <DataPosted dataCreated={data.createdAt} /> : null}
      <TitleSalary
        salary={data.salary}
        title={data.title}
        dataCreated={data.createdAt}
      />
      <Description descriptionText={data.description} />
      {innerWidth < 1024 ? <AttachedImages pictures={data.pictures} /> : null}

      <AdditionalInfo
        benefits={data.benefits}
        employmentType={data.employment_type}
      />
      {innerWidth > 768 ? <AttachedImages pictures={data.pictures} /> : null}
    </div>
  );
};

export default MainContent;
