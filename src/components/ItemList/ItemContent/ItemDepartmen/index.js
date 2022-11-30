import React from "react";
import style from "./style.module.css";

const ItemDepartmen = ({ address }) => {
  return (
    <div className={`text-left mt-1	${style.textDepartment}`}>
      Department name • {address}
    </div>
  );
};

export default ItemDepartmen;
