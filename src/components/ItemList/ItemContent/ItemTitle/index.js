import React from "react";
import style from "./style.module.css";

const ItemTitle = ({ title }) => {
  return <div className={`${style.fontTitle}  `}>{title}</div>;
};

export default ItemTitle;
