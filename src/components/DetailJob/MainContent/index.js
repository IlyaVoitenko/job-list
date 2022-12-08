import React, { useEffect, useState } from "react";
import Header from "../Header";
import BtnApply from "./BtnApply";
import AdditionalInfo from "./AdditionalInfo";
import AttachedImages from "./AttachedImages";
import TextContent from "./TextContent";
import { getWindowSize, getSizeWindow } from "./helper";

const MainContent = ({ data }) => {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  useEffect(() => getSizeWindow(setWindowSize), []);
  const { createdAt, salary, title, description, pictures } = data;
  const { innerWidth } = windowSize;

  return (
    <div className="flex flex-col  w-1/2 mt-2 ml-14 sm:w-[90%] sm:ml-2 sm:mb-3">
      <Header />
      {windowSize < 1024 ? <BtnApply /> : null}
      <TextContent
        dataCreated={createdAt}
        salary={salary}
        title={title}
        descriptionText={description}
        pictures={pictures}
      />
      <AdditionalInfo
        benefits={data.benefits}
        employmentType={data.employment_type}
      />
      {innerWidth > 768 ? <AttachedImages pictures={data.pictures} /> : null}
    </div>
  );
};

export default MainContent;
