import React from "react";
import ItemList from "../ItemList";
import data from "../../api/mock/index.json";
import { getDataListJob } from "../../store/createActions";
import { useSelector, useDispatch } from "react-redux";

const ListJob = () => {
  const dispatch = useDispatch();
  const listJob = useSelector((state) => state.listJob);
  if (!listJob) {
    dispatch(getDataListJob({ ...data }));
  }
  return listJob.data.map((item) => <ItemList data={item} key={item.id} />);
};

export default ListJob;
