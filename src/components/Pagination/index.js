import React from "react";

const Pagination = ({
  amauntPostsPage,
  totalPosts,
  movePagination,
  currentPage,
}) => {
  const numberPage = [];
  for (let i = 1; i <= Math.ceil(totalPosts / amauntPostsPage); i++) {
    numberPage.push(i);
  }
  return (
    <div className="py-5   flex items-center justify-center w-70 ">
      <nav className="  bg-orange-100 rounded-lg w-1/4 sm:w-[95%]">
        <ul className=" flex pl-0 rounded list-none flex-wrap  justify-center items-center bg-white">
          <li className="ml-2">
            <img src="/arrow left.png" alt=""></img>
          </li>
          <li className=" w-10 h-5 flex  justify-center content-center ">
            <img className="" alt="" src="/Separator 1.png" />
          </li>
          <li className="flex-1">
            {numberPage.map((number) => (
              <button
                key={number}
                onClick={() => {
                  movePagination(number);
                }}
                href="#"
                className={
                  currentPage === number
                    ? "border-b-4 border-indigo-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2  text-sm  text-indigo-500 font-proximaNova"
                    : "bg-white border-gray-300 text-gray-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-proximaNova"
                }
              >
                {number}
              </button>
            ))}
          </li>
          <li className=" w-10 h-5 flex  justify-center content-center ">
            <img className="" alt="" src="/Separator 1.png" />
          </li>
          <li className="mr-2">
            <img src="/arrow right.png" alt="" className="text-gray-500"></img>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
