import React from "react";

const BtnsBenefits = ({ benefitsList }) => {
  return (
    <div className="flex flex-row flex-wrap mt-2   	">
      {benefitsList.map((item, index) => (
        <button
          key={index}
          className={
            index !== 1
              ? `text-center border-solid border-2  bg-bgBtnsBenefits text-textItemBenefits w-[31%] h-12  rounded-lg border-borederColorBtnsBenefits  `
              : `ml-2 text-center border-solid border-2  bg-bgBtnsBenefits text-textItemBenefits w-[31%] h-12  rounded-lg border-borederColorBtnsBenefits `
          }
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default BtnsBenefits;
