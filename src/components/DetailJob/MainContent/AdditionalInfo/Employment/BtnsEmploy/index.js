import React from "react";

const BtnsEmploy = ({ employmentList }) => {
  return (
    <div className="flex flex-row flex-wrap mt-2   	">
      {employmentList.map((item, index) => (
        <button
          key={index}
          className={
            index !== 1
              ? `text-center border-solid border-2  bg-bgBtnsEmploy text-textItemEmployment w-[31%] h-12  rounded-lg border-bgBtnsEmploy `
              : `ml-2 text-center border-solid border-2  bg-bgBtnsEmploy text-textItemEmployment w-[31%] h-12  rounded-lg border-bgBtnsEmploy `
          }
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default BtnsEmploy;
