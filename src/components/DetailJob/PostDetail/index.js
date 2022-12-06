import React from "react";
import MainContent from "../MainContent";
import GeolocMap from "../GeolocMap";
import { useSelector } from "react-redux";
import { selectorSelectedJob } from "./selectors";

const PostDetail = () => {
  const selectedJob = useSelector(selectorSelectedJob);
  return (
    <div className="flex flex-row justify-center ">
      <MainContent data={selectedJob} />
      <GeolocMap
        email={selectedJob.email}
        address={selectedJob.address}
        phone={selectedJob.phone}
      />
    </div>
  );
};

export default PostDetail;