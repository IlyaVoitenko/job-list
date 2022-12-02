import React from "react";

const ItemTitle = ({ title }) => {
  return (
    <div
      className={`text-regal-blue font-proximaNova  text-titleFontSize text-left font-bold tracking-titleLetterSpacing leading-titleLineHeight`}
    >
      {title}
    </div>
  );
};

export default ItemTitle;
