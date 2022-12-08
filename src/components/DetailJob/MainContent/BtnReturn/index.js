import React from "react";
import { Link } from "react-router-dom";

const BtnReturn = () => {
  return (
    <div className=" flex mt-10 sm:hidden ">
      <Link to="/" className="w-[60%] ml-[7%]">
        <button className="flex flex-row justify-center items-center text-center border-solid  bg-gray-300  w-[31%] h-12  rounded-lg ">
          <img src="/arrow left.png" alt="" />{" "}
          <span className="text-[#3A4562] ml-2">RETURN TO JOB BOARD</span>
        </button>
      </Link>
    </div>
  );
};

export default BtnReturn;
