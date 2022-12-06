import React from "react";
import Header from "../Header";
import BtnApply from "./BtnApply";
import TitleSalary from "./TitleSalary";
import DataPosted from "./DataPosted";
import Description from "./Description";

const MainContent = ({ data }) => {
  console.log("data :", data);
  return (
    <div className="flex flex-col  w-1/2 mt-2 ml-14 ">
      <Header />
      <BtnApply />
      <TitleSalary salary={data.salary} title={data.title} />
      <DataPosted dataCreated={data.createdAt} />
      <Description descriptionText={data.description} />
    </div>
  );
};

export default MainContent;
