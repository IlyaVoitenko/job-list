import React, { useEffect, useState } from "react";
import TitleSalary from "../TitleSalary";
import DataPosted from "../DataPosted";
import Description from "../Description";
import AttachedImages from "../AttachedImages";
import { getWindowSize, getSizeWindow } from "../helper";

const TextContent = ({
  dataCreated,
  salary,
  title,
  descriptionText,
  pictures,
}) => {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  useEffect(() => getSizeWindow(setWindowSize), []);
  const { innerWidth } = windowSize;
  return (
    <>
      {windowSize > 1024 ? <DataPosted dataCreated={dataCreated} /> : null}
      <TitleSalary salary={salary} title={title} dataCreated={dataCreated} />
      <Description descriptionText={descriptionText} />
      {innerWidth < 1024 ? <AttachedImages pictures={pictures} /> : null}
    </>
  );
};

export default TextContent;
