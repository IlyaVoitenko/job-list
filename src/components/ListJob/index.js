import React, { useState } from "react";
import ItemList from "../ItemList";
import Pagination from "../Pagination";
import { useSelector } from "react-redux";

const ListJob = () => {
  const listJob = useSelector((state) => state.listJob);
  const [currentPage, setCurrentPage] = useState(1);
  const [amauntPostsPage] = useState(7);
  const lastIndexPage = currentPage * amauntPostsPage;
  const firstIndexPage = lastIndexPage - amauntPostsPage;
  const currentPageIndex = listJob.slice(firstIndexPage, lastIndexPage);
  const movePagination = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flex flex-col">
      {currentPageIndex.map((item) => (
        <ItemList data={item} key={item.id} />
      ))}
      <Pagination
        amauntPostsPage={amauntPostsPage}
        totalPosts={listJob.length}
        movePagination={movePagination}
        currentPage={currentPage}
      />
    </div>
  );
};

export default ListJob;
