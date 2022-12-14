import React from "react";
import { postCreated } from "./helper";

const TextCreatePost = ({ dataCreated }) => {
  const datePosted = postCreated(dataCreated);
  return (
    <div
      className={` h-full  ml-3 flex items-end font-proximaNova leading-titleLineHeight text-adressTextColor font-normal text-adressFontSize tracking-adressLetterSpacing sm:mt-2 sm:mr-1`}
    >
      posted {datePosted}
    </div>
  );
};

export default TextCreatePost;
