import React from "react";
import style from "./style.module.css";

const ItemTitle = ({ title }) => {
  return <div className={`${style.fontTitle} bg-teal-900 `}>{title}</div>;
};

export default ItemTitle;
