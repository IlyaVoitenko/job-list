import React from "react";
import { Link } from "react-router-dom";

const BtnReturn = () => {
  return (
    <div className=" flex mt-12 ">
      <Link to="/" className="w-[50%] ml-[7%]">
        <button className="flex flex-row justify-center items-center text-center border-solid  bg-gray-300  w-[31%] h-12  rounded-lg ">
          <img src="/arrow left.png" alt="" />{" "}
          <span className="text-[#3A4562] ml-2">RETURN TO JOB BOARD</span>
        </button>
      </Link>
    </div>
  );
};

export default BtnReturn;
