import React from "react";
import style from "./style.module.css";
import { postCreated } from "./helper";

const TextCreatePost = ({ dataCreated }) => {
  const datePosted = postCreated(dataCreated);
  return (
    <div className={`${style.textCreatedPosted} h-full  ml-3 flex items-end `}>
      posted {datePosted}
    </div>
  );
};

export default TextCreatePost;
