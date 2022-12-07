import React from "react";
import ItemPhoto from "./ItemPhoto";
import ItemContent from "./ItemContent";
import ItemRating from "./ItemRating";
import ItemSaveUpdateData from "./ItemSaveUpdateData";
import { useDispatch } from "react-redux";
import { getSelectedJob } from "../../store/createActions";
import { Link } from "react-router-dom";

const ItemList = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <Link to="/detail-job">
      <div
        onClick={() => dispatch(getSelectedJob(data))}
        className="h-34 rounded-lg container mx-auto flex justify-center flex-row mt-2  bg-white w-3/4 sm:flex-row sm:w-[95%]"
      >
        <ItemPhoto photo={data.pictures} />
        <div className="flex flex-1 sm:flex-col-reverse">
          <ItemContent context={data} />
          <div className="flex flex-row justify-evenly w-1/4 sm:flex-row  sm:items-start sm:w-full sm:justify-between ">
            <ItemRating />
            <ItemSaveUpdateData dataCreated={data.createdAt} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ItemList;
