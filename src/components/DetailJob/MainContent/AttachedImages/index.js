import React from "react";
import AttachedTitle from "./AttachedTitle";
import ListImages from "./ListImages";

const AttachedImages = ({ pictures }) => {
  return (
    <div className="mt-5 flex flex-col">
      <AttachedTitle />
      <ListImages pictures={pictures} />
    </div>
  );
};

export default AttachedImages;
