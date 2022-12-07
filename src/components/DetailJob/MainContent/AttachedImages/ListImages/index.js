import React from "react";

const ListImages = ({ pictures }) => {
  return (
    <div className="flex flex-row mt-4 ">
      {pictures?.map((item, index) => (
        <img
          key={index}
          src={item}
          alt=""
          className={
            index !== 0 ? `h-24 w-24 ml-2 rounded` : "h-24 w-24 rounded"
          }
        />
      ))}
    </div>
  );
};

export default ListImages;
